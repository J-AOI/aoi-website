# AOI Next Runtime Diagnostic Report

Scope: diagnose why the live AOI Next.js repository did not complete `npm run build` and did not become responsive under `next dev`. This report is diagnostic only. No application code fixes were applied.

## Commands Run

### Version and configuration checks

```powershell
node --version
npm.cmd --version
npx.cmd next --version
Get-Content package.json
Get-Content next.config.js
git status --short
git log -1 --oneline
npm.cmd ls --depth=0
```

Observed:

- Node.js: `v24.14.0`
- npm: `11.9.0`
- Next.js: `14.2.5`
- React: `18.3.1`
- React DOM: `18.3.1`
- `package-lock.json` lockfile version: `3`
- Installed dependency tree matched `package.json`
- Last commit tested: `a928711 Expand Runtime Governance Evidence Map to 44 sources`

### Process and port checks

```powershell
Get-Process node,npm -ErrorAction SilentlyContinue
Get-CimInstance Win32_Process -Filter "name = 'node.exe'"
Get-NetTCPConnection -LocalPort 3000,3099 -ErrorAction SilentlyContinue
```

Observed stale Next dev processes from the previous route-probe attempt:

```text
PID=10204 ... npx-cli.js next dev -p 3099
PID=33684 ... next dev -p 3099
PID=12616 ... next/dist/server/lib/start-server.js
```

These were stopped. Codex host Node processes were left alone.

### Live repository build behavior

```powershell
$env:NEXT_TELEMETRY_DISABLED='1'
npm.cmd run build
```

Observed repeatedly:

```text
> aoi-site@0.1.0 build
> next build

  ▲ Next.js 14.2.5
```

The command did not progress to `Creating an optimized production build ...` before timing out.

### New manifest loader isolation

```powershell
node -e "<read content/manifests/rrb/RRB_RESEARCH_MANIFEST.json and count records>"
```

Observed:

```text
read_ms 2
records 54
missing 2
companions 3
public 0
```

The new manifest file is fast to read and parse. The manifest loader's filesystem access does not appear to be the runtime hang source.

### Committed HEAD snapshot build

Method used:

```powershell
$tmp = Join-Path $env:TEMP 'aoi-head-diagnostic'
$archive = Join-Path $env:TEMP 'aoi-head-diagnostic.tar'
git archive --format=tar --output=$archive HEAD
tar -xf $archive -C $tmp
New-Item -ItemType Junction -Path (Join-Path $tmp 'node_modules') -Target (Join-Path $repo 'node_modules')
Push-Location $tmp
try {
    Write-Output "BUILD_WORKING_DIRECTORY=$PWD"
    $env:NEXT_TELEMETRY_DISABLED = '1'
    npm.cmd run build
}
finally {
    Pop-Location
}
```

Confirmed:

```text
BUILD_WORKING_DIRECTORY=C:\Users\jthor\AppData\Local\Temp\aoi-head-diagnostic
✓ Compiled successfully
✓ Generating static pages (32/32)
```

Interpretation: committed `HEAD` builds successfully from a clean temp snapshot.

### Current Phase 1 overlay snapshot build

Method used:

1. Exported committed `HEAD` to a fresh temp directory using `git archive --format=tar --output=<archive> HEAD`.
2. Extracted archive to `C:\Users\jthor\AppData\Local\Temp\aoi-current-overlay-diagnostic`.
3. Overlaid only current Phase 1 Research files.
4. Created a `node_modules` junction back to the website repository.
5. Ran `npm.cmd run build` from the temp snapshot.

Confirmed:

```text
BUILD_WORKING_DIRECTORY=C:\Users\jthor\AppData\Local\Temp\aoi-current-overlay-diagnostic
```

Overlaid files:

```text
app/research/page.jsx
app/research/archive/page.jsx
app/lib/content/rrbManifest.js
app/lib/content/rrbValidation.js
app/lib/content/rrbFilters.js
content/manifests/rrb/RRB_RESEARCH_MANIFEST.json
AOI_RESEARCH_PHASE1_IMPLEMENTATION_REPORT.md
app/components/research/ArchiveTable.jsx
app/components/research/ArtifactBadge.jsx
app/components/research/DispositionGate.jsx
app/components/research/EditorialPreviewBanner.jsx
app/components/research/FeaturedResearchGrid.jsx
app/components/research/ResearchHero.jsx
app/components/research/ResearchPhaseTimeline.jsx
app/components/research/SourceStatusBadge.jsx
app/components/research/ThemePathList.jsx
```

Build output:

```text
> aoi-site@0.1.0 build
> next build

  ▲ Next.js 14.2.5

   Creating an optimized production build ...
 ✓ Compiled successfully
   Linting and checking validity of types ...
   Collecting page data ...
   Generating static pages (0/33) ...
   Generating static pages (8/33)
   Generating static pages (16/33)
   Generating static pages (24/33)
 ✓ Generating static pages (33/33)
   Finalizing page optimization ...
   Collecting build traces ...
```

Route output included:

```text
├ ƒ /research
├ ƒ /research/archive
├ ƒ /research/evidence-map
├ ○ /research/runtime-governance-thesis
```

Build exit code printed by the diagnostic script:

```text
BUILD_EXIT_CODE=0
```

Warnings:

```text
[baseline-browser-mapping] The data in this module is over two months old.
Browserslist: browsers data (caniuse-lite) is 9 months old.
Browserslist: caniuse-lite is outdated.
```

The PowerShell wrapper process returned nonzero because stderr warnings were surfaced as `NativeCommandError`, and a temporary junction removal attempted through `Remove-Item` hit a PowerShell junction-removal exception. The build itself reported `BUILD_EXIT_CODE=0`.

## Observed Behavior

- The committed `HEAD` snapshot builds successfully from temp.
- The current working tree Phase 1 overlay snapshot also builds successfully from temp.
- The live OneDrive-backed repository initially hung before the build reached the normal compile stage.
- After removing the stale `.next` directory, the live OneDrive-backed repository successfully completed `npm.cmd run build`.
- The new RRB manifest reads in approximately 2 ms and does not explain the hang.
- Stale Next dev processes were present and were removed.
- `.next` in the live repository predated the Research Phase 1 files; the cache showed August 3 timestamps.
- `npm run lint` is not usable as a validation signal because the repository has no ESLint configuration and `next lint` opens an interactive setup prompt.

Confirmed live build after `.next` removal:

```text
npm.cmd run build
Compiled successfully
Linting and checking validity of types ...
Collecting page data ...
Generating static pages (33/33)
Finalizing page optimization ...
Collecting build traces ...
```

The live build output includes `/research` and `/research/archive`. Existing research, platform, frameworks, company, contact, and redirect routes remain in the build output.

The browser-mapping and Browserslist messages are non-blocking maintenance warnings.

## Root-Cause Assessment

The root cause is confirmed as stale `.next` state in the live repository.

Removal of `.next` restored a successful live build. No Research application-code fix was required.

The blocker was not caused by the Phase 1 Research implementation.

Evidence:

- The same Phase 1 files build successfully when overlaid into a clean temp snapshot.
- The manifest loader and copied manifest parse quickly in isolation.
- No unresolved import or compile error appears in the clean overlay build.
- The clean overlay build adds `/research/archive` and changes `/research` to dynamic rendering as expected.
- The live OneDrive-backed repository completed `npm.cmd run build` after removing `.next`.

Confirmed cause:

- Stale `.next` state in the active live repository.

Supporting evidence:

- The live repository is under `C:\Users\jthor\OneDrive\Desktop\aoi-website`.
- Copying `node_modules` through OneDrive produced repeated `The cloud file provider exited unexpectedly` errors.
- The live `.next` directory predates the current Phase 1 code.
- Clean temp builds using a fresh exported tree and a `node_modules` junction complete successfully.
- Removing the stale `.next` directory restored successful live build behavior.

Secondary possible contributors:

- Node.js `v24.14.0` is newer than the common production baseline for Next 14 projects, but both clean snapshot builds succeeded under this same Node version, so it is not the primary observed blocker.
- Lingering Next dev processes polluted earlier diagnostics, but after cleanup, live repository `next build` still hung.
- OneDrive filesystem behavior may still be a general reliability concern, but it is not required to explain the confirmed stale-cache failure.

## Confidence Level

High confidence:

- Phase 1 Research source changes are build-safe in a clean snapshot.
- The manifest loader is not the hang source.
- The committed baseline builds successfully.
- The live repository hang was caused by stale `.next` cache.
- Removing `.next` remediated the live build.

Low confidence:

- Node 24 is the direct cause. It may still be advisable to use an LTS Node version later, but current evidence does not identify it as the blocker.

## Exact Recommended Fix

Confirmed remediation:

1. Stop any Next dev/build Node processes for this repository.
2. Remove the live repository `.next` cache.
3. Re-run `npm.cmd run build` from `C:\Users\jthor\OneDrive\Desktop\aoi-website`.
4. Confirm successful compile, lint/type check, page data collection, static page generation, page optimization, and build trace collection.

This remediation has been completed successfully. Do not modify Phase 1 application code for this symptom.

## Files That Would Need Modification

No application source file modification is indicated.

Potential environment remediation, pending Justin approval:

- Move/clone the repository outside OneDrive.
- Reinstall dependencies with `npm.cmd ci`.
- Optionally standardize on an LTS Node runtime if future diagnostics show Node 24 instability.

## Research Phase 1 Safety Assessment

Research Phase 1 changes appear safe.

The current Phase 1 overlay build completed successfully from a clean temp snapshot with:

```text
BUILD_EXIT_CODE=0
```

The failure mode observed in the live working repository is not reproduced when the same Phase 1 files are built outside the stale live `.next` state.

The live repository now also builds successfully after stale `.next` removal.

## Final Status

ROOT CAUSE CONFIRMED — STALE .NEXT CACHE REMEDIATED
