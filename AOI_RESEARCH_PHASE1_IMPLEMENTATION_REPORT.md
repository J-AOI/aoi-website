# AOI Research Phase 1 Implementation Report

Scope: Phase 1 manifest-driven AOI Research implementation only. No RRB artifacts were copied, moved, renamed, converted, deleted, or modified.

## Files Added

- `content/manifests/rrb/RRB_RESEARCH_MANIFEST.json`
- `app/lib/content/rrbManifest.js`
- `app/lib/content/rrbValidation.js`
- `app/lib/content/rrbFilters.js`
- `app/components/research/ResearchHero.jsx`
- `app/components/research/FeaturedResearchGrid.jsx`
- `app/components/research/ResearchPhaseTimeline.jsx`
- `app/components/research/ThemePathList.jsx`
- `app/components/research/ArchiveTable.jsx`
- `app/components/research/ArtifactBadge.jsx`
- `app/components/research/SourceStatusBadge.jsx`
- `app/components/research/DispositionGate.jsx`
- `app/components/research/EditorialPreviewBanner.jsx`
- `app/research/archive/page.jsx`
- `AOI_RESEARCH_PHASE1_IMPLEMENTATION_REPORT.md`

## Files Modified

- `app/research/page.jsx`

The previous insight-powered Research landing page was replaced with a manifest-driven Research landing page. Legacy insight files and routes remain in place.

## Manifest Validation Results

- Copied manifest JSON syntax: PASS
- Copied manifest SHA-256 matches approved source: PASS
- Independent structural validation: PASS
- Canonical/publication records: 54
- Public records under current dispositions: 0
- Editorial-preview records: 54
- Missing records: 2
- Noncanonical companions: 3
- Current disposition set: `EDITORIAL REVIEW REQUIRED`

Implemented build/load validation covers:

- Required top-level manifest fields
- Required RRB record fields
- Unique `rrb_number`
- Unique `website_slug`
- Known `primary_theme`
- Known `research_phase`
- Known `artifact_status`
- Known `source_status`
- Known `website_disposition` or working state `EDITORIAL REVIEW REQUIRED`
- Required `current_filename` and `source_sha256` for artifact-backed records
- Metadata-only records exempt from artifact filename/hash requirements
- Missing records kept separate from public content
- Noncanonical companions kept separate from canonical records

## Public Visibility Behavior

Public mode shows only records with one of:

- `FEATURED`
- `PUBLISH`
- `ARCHIVE`

Because every current RRB record remains `EDITORIAL REVIEW REQUIRED`, public `/research` renders a pending Featured Research state and public `/research/archive` renders no public archive entries.

Public mode hides:

- `EDITORIAL REVIEW REQUIRED`
- `INTERNAL`
- RRB-021 and RRB-040 missing records
- Noncanonical companions
- Source SHA-256 values
- Internal notes
- Local artifact filenames unless in editorial preview

## Editorial Preview Behavior

Local editorial preview uses:

`?preview=editorial`

Preview is enabled only when:

- `NODE_ENV` is not `production`, or
- `AOI_ENABLE_EDITORIAL_PREVIEW=true`

In production without `AOI_ENABLE_EDITORIAL_PREVIEW=true`, the query parameter does not reveal unpublished records.

Editorial preview shows:

- All 54 canonical/publication records
- Editorial preview banner
- Website disposition
- Artifact status
- Source status
- Expected artifact filename metadata
- RRB-021 and RRB-040 in an editorial-only missing-record section
- Noncanonical companions in a separate editorial-only section

Editorial preview does not treat missing records or companions as normal archive entries.

## Route Validation

Implemented routes:

- `/research`
- `/research/archive`
- `/research?preview=editorial`
- `/research/archive?preview=editorial`

Preserved routes:

- `/research/[slug]`
- `/research/evidence-map`
- `/research/runtime-governance-thesis`
- `/frameworks`
- `/platform`
- `/company`
- `/contact`
- legacy `/insights` redirects

Live build route output confirms:

- `/research` appears in the build output.
- `/research/archive` appears in the build output.
- Existing research routes remain in the build output, including `/research/[slug]`, `/research/evidence-map`, and `/research/runtime-governance-thesis`.
- Existing platform, frameworks, company, contact, and redirect-backed routes remain represented in the build output, including `/platform`, `/frameworks`, `/company`, `/contact`, `/insights`, and `/insights/[slug]`.

## Build Result

- `npm.cmd run build`: PASS after removing the stale `.next` directory from the live OneDrive-backed repository.
- Compiled successfully: PASS
- Linting and type checks passed: PASS
- Page data collection passed: PASS
- Static page generation passed: PASS, `33/33`
- Build traces and page optimization completed: PASS

The browser-mapping and Browserslist messages are non-blocking maintenance warnings, not build failures.

## Artifact Handling

No RRB artifacts were copied or modified.

Artifact CTA behavior:

- No local OneDrive paths are linked.
- Artifact links are generated only if the matching file exists under `public/research/rrb/artifacts/`.
- Because artifact mirroring was intentionally out of scope, current RRB archive records display metadata without broken artifact links.
- `METADATA_ONLY_PUBLICATION_RECORD` records never receive artifact CTAs.

## Intentionally Deferred Work

Not implemented:

- RRB detail pages
- Public artifact mirroring
- Framework collection
- Field Evidence collection
- Product / Validation Evidence collection
- Inherited Governance collection
- Executive Minutes
- Governance Questions
- Verification Reports
- Relationship metadata
- Knowledge graph
- Knowledge Explorer
- AI search
- CMS
- Public editorial tools
- Graph database
- Artifact conversion
- Thumbnail generation
- Publication disposition changes
- Navigation redesign

## Known Limitations

- Public Research has no visible RRB records until Justin assigns `FEATURED`, `PUBLISH`, or `ARCHIVE`.
- Artifact CTAs remain absent until approved artifacts are copied into the website `public` tree in a separate task.
- `/research/[slug]` still uses the legacy insight model by design.
- Browser route validation remains a separate manual QA step.
- The earlier build/runtime hang was remediated by removing stale `.next` state; no Research application-code fix was required.

## Final Status

RESEARCH PHASE 1 IMPLEMENTED AND VALIDATED
