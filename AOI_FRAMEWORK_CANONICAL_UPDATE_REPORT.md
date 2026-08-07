# AOI Framework Canonical Update Report

Scope: update the public AOI Framework collection to the revised canonical framework set and preserve backwards-compatible redirects for replaced public routes.

## Files Added

- `public/frameworks/FW-001-Runtime-Governance-Domain.pdf`
- `public/frameworks/FW-001-Runtime-Governance-Domain.png`
- `public/frameworks/FW-003-Authority-Propagation.pdf`
- `public/frameworks/FW-003-Authority-Propagation.png`
- `public/frameworks/FW-004-Execution-Legitimacy.pdf`
- `public/frameworks/FW-004-Execution-Legitimacy.png`
- `AOI_FRAMEWORK_CANONICAL_UPDATE_REPORT.md`

## Files Modified

- `app/data/frameworks.js`
- `app/components/frameworks/FrameworkDetail.jsx`
- `app/frameworks/page.jsx`
- `app/data/insights.js`
- `next.config.js`
- `public/frameworks/fw-002-authority-lifecycle.pdf`
- `public/frameworks/fw-002-authority-lifecycle.png`

Note: on the Windows working tree, the canonical FW-002 filenames differ from the tracked lowercase filenames by case. The site now references the exact canonical paths shown in `public/frameworks`.

## Old Framework References Removed

Removed from active framework metadata and insight cross-references:

- `/frameworks/fw-001-runtime-domain`
- `/frameworks/fw-003-ai-security-playbook`
- `/frameworks/fw-001-runtime-domain.pdf`
- `/frameworks/fw-002-authority-lifecycle.pdf`
- `/frameworks/fw-003-ai-security-playbook.pdf`
- `/frameworks/fw-001-runtime-domain.png`
- `/frameworks/fw-002-authority-lifecycle.png`
- `/frameworks/fw-003-ai-security-playbook.png`
- `The AI Security Playbook`

The only remaining references to replaced public slugs are intentional redirect sources in `next.config.js`.

## Canonical Framework Mapping

| Framework | Public title | Slug | PDF | PNG preview |
|---|---|---|---|---|
| FW-001 | The Missing Runtime Domain in the AI Risk Ecosystem | `/frameworks/fw-001-runtime-governance-domain` | `/frameworks/FW-001-Runtime-Governance-Domain.pdf` | `/frameworks/FW-001-Runtime-Governance-Domain.png` |
| FW-002 | The Runtime Authority Lifecycle | `/frameworks/fw-002-authority-lifecycle` | `/frameworks/FW-002-Authority-Lifecycle.pdf` | `/frameworks/FW-002-Authority-Lifecycle.png` |
| FW-003 | Authority Propagation | `/frameworks/fw-003-authority-propagation` | `/frameworks/FW-003-Authority-Propagation.pdf` | `/frameworks/FW-003-Authority-Propagation.png` |
| FW-004 | Execution Legitimacy | `/frameworks/fw-004-execution-legitimacy` | `/frameworks/FW-004-Execution-Legitimacy.pdf` | `/frameworks/FW-004-Execution-Legitimacy.png` |

## Route Changes

Canonical framework routes confirmed in build output:

- `/frameworks`
- `/frameworks/fw-001-runtime-governance-domain`
- `/frameworks/fw-002-authority-lifecycle`
- `/frameworks/fw-003-authority-propagation`
- `/frameworks/fw-004-execution-legitimacy`

Permanent redirects confirmed in `.next/routes-manifest.json`:

| Legacy route | Destination | Status code |
|---|---|---:|
| `/frameworks/fw-001-runtime-domain` | `/frameworks/fw-001-runtime-governance-domain` | 308 |
| `/frameworks/fw-003-ai-security-playbook` | `/frameworks/fw-003-authority-propagation` | 308 |

## PDF Link Validation

Configured PDF and PNG paths were checked against `public/frameworks` with exact case-sensitive filenames. Missing configured assets: none.

Canonical files present:

- `FW-001-Runtime-Governance-Domain.pdf`
- `FW-001-Runtime-Governance-Domain.png`
- `FW-002-Authority-Lifecycle.pdf`
- `FW-002-Authority-Lifecycle.png`
- `FW-003-Authority-Propagation.pdf`
- `FW-003-Authority-Propagation.png`
- `FW-004-Execution-Legitimacy.pdf`
- `FW-004-Execution-Legitimacy.png`

## Build Result

`npm.cmd run build`: PASS after removing stale `.next` cache.

Build output confirmed:

- Compiled successfully
- Linting and type checks passed
- Page data collection passed
- Static page generation passed: `34/34`
- Build traces and page optimization completed
- `/frameworks` and all four canonical framework detail routes appear in the route output
- Research routes remain in the route output, including `/research`, `/research/archive`, `/research/[slug]`, `/research/evidence-map`, and `/research/runtime-governance-thesis`

`git diff --check`: PASS. Only line-ending normalization warnings were printed.

The browser-mapping and Browserslist messages are non-blocking maintenance warnings.

## Known Limitations

- Old retired framework asset files remain visible in git status as deleted or modified because the working tree now contains the revised canonical public artifacts. No cleanup beyond the approved canonical update was performed.
- `GOVERNANCE_PACK_V2_CURRENT_STATE_REVIEW.md` is an unrelated untracked file and was not touched.
- FW-002 canonical artifact paths use the approved capitalized filenames in site code. On this Windows working tree, git reports the existing lowercase tracked FW-002 files as modified due filesystem case behavior.

## Final Status

FRAMEWORK CANONICAL UPDATE IMPLEMENTED AND VALIDATED
