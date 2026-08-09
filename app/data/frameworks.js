export const frameworks = [
  {
    title: "Runtime Governance Frameworks",
    href: "/frameworks",
    description:
      "AO Integrity's canonical framework series for autonomous execution, authority, legitimacy, governance evidence, and consequential action.",
  },
];

export const publishedFrameworks = [
  {
    number: "FW-001",
    slug: "fw-001-runtime-governance-domain",
    title: "Runtime Governance Domain",
    canonicalName: "Runtime Governance Domain",
    status: "Published canonical framework artifact",
    summary:
      "Defines autonomous execution as the governance object evaluated by Runtime Governance.",
    purpose:
      "What changes when governance must evaluate the execution event itself rather than only the principal or requested operation?",
    whyItMatters:
      "Autonomous systems can select actions, invoke tools, delegate work, and adapt after authority has been conferred. Runtime Governance addresses whether the resulting execution remains a legitimate exercise of enterprise authority.",
    keyTakeaway:
      "Runtime Governance evaluates the execution event, not merely the principal requesting access.",
    keyConcepts: [
      "Runtime Governance",
      "Execution Event",
      "Execution Legitimacy",
      "Governance Evidence",
    ],
    href: "/frameworks/fw-001-runtime-governance-domain",
    imageSrc: "/frameworks/PNG/FW-001-Runtime-Governance-Domain.png",
    pdfSrc: "/frameworks/FW-001-Runtime-Governance-Domain.pdf",
    imageWidth: 1126,
    imageHeight: 1689,
    imageAlt:
      "FW-001 Runtime Governance Domain framework artifact preview.",
  },
  {
    number: "FW-002",
    slug: "fw-002-authority-lifecycle",
    title: "Authority Lifecycle",
    canonicalName: "Authority Lifecycle",
    status: "Published canonical framework artifact",
    summary:
      "Shows how conferred authority can diverge from what current organizational circumstances justify over time.",
    purpose:
      "How can authority that was appropriate when conferred cease to reflect current organizational reality?",
    whyItMatters:
      "Matters close, projects conclude, contracts expire, employment changes, and other business conditions can change independently of identity or entitlement state. The authority a system holds can therefore diverge from what current circumstances justify.",
    keyTakeaway:
      "Authority may remain valid while the conditions that justified its exercise no longer hold.",
    keyConcepts: [
      "Authority Lifecycle",
      "Authority Drift",
      "Contextual Validity",
      "Current Governing State",
    ],
    href: "/frameworks/fw-002-authority-lifecycle",
    imageSrc: "/frameworks/PNG/FW-002-Authority-Lifecycle.png",
    pdfSrc: "/frameworks/FW-002-Authority-Lifecycle.pdf",
    imageWidth: 1126,
    imageHeight: 1689,
    imageAlt: "FW-002 Authority Lifecycle framework artifact preview.",
  },
  {
    number: "FW-003",
    slug: "fw-003-authority-propagation",
    title: "Authority Propagation",
    canonicalName: "Authority Propagation",
    status: "Published canonical framework artifact",
    summary:
      "Shows how conferred authority moves through delegation chains across autonomous actors, services, tools, and systems.",
    purpose:
      "What must remain true as authority is conveyed through an autonomous execution chain?",
    whyItMatters:
      "Agents can invoke other agents, tools, services, and systems. Each delegation creates a requirement to preserve authority provenance and prevent downstream authority from exceeding what the preceding hop possessed.",
    keyTakeaway:
      "Authority may narrow across a delegation chain; it may not widen.",
    keyConcepts: [
      "Delegation Chain",
      "Authority Provenance",
      "Authority Propagation",
      "Execution Event",
    ],
    href: "/frameworks/fw-003-authority-propagation",
    imageSrc: "/frameworks/PNG/FW-003-Authority-Propagation.png",
    pdfSrc: "/frameworks/FW-003-Authority-Propagation.pdf",
    imageWidth: 1221,
    imageHeight: 1188,
    imageAlt: "FW-003 Authority Propagation framework artifact preview.",
  },
  {
    number: "FW-004",
    slug: "fw-004-execution-legitimacy",
    title: "Execution Legitimacy",
    canonicalName: "Execution Legitimacy",
    status: "Published canonical framework artifact",
    summary:
      "Defines the five conditions used to evaluate whether a specific execution remains a legitimate exercise of conferred authority.",
    purpose:
      "Is this specific execution still a legitimate exercise of the authority that was granted?",
    whyItMatters:
      "An execution can be authenticated, authorized, policy compliant, and technically correct while still failing the conditions required for governance legitimacy.",
    keyTakeaway:
      "Execution Legitimacy requires Authority Validity, Authority Provenance, Contextual Validity, Intent Conformance, and Causal Integrity.",
    keyConcepts: [
      "Authority Validity",
      "Authority Provenance",
      "Contextual Validity",
      "Intent Conformance",
      "Causal Integrity",
    ],
    href: "/frameworks/fw-004-execution-legitimacy",
    imageSrc: "/frameworks/PNG/FW-004-Execution-Legitimacy.png",
    pdfSrc: "/frameworks/FW-004-Execution-Legitimacy.pdf",
    imageWidth: 1126,
    imageHeight: 1689,
    imageAlt: "FW-004 Execution Legitimacy framework artifact preview.",
  },
  {
    number: "FW-005",
    slug: "fw-005-governance-evidence",
    title: "Governance Evidence",
    canonicalName: "Governance Evidence Framework",
    status: "Published canonical framework artifact",
    summary:
      "Shows how legitimacy determinations become independently verifiable through governance evidence and decision receipts.",
    purpose:
      "How can another party later determine why an execution was considered legitimate?",
    whyItMatters:
      "Logs establish that events occurred. Governance Evidence preserves the reasoning and inputs behind a legitimacy determination so that the decision can be independently examined and verified.",
    keyTakeaway:
      "Without evidence, legitimacy remains an assertion.",
    keyConcepts: [
      "Governance Evidence",
      "Decision Receipt",
      "Independent Verification",
      "Evidence Assurance Levels",
      "Traceability",
    ],
    href: "/frameworks/fw-005-governance-evidence",
    imageSrc:
      "/frameworks/PNG/FW-005-Governance-Evidence-Framework.png",
    pdfSrc: "/frameworks/FW-005-Governance-Evidence-Framework.pdf",
    imageWidth: 1536,
    imageHeight: 1024,
    imageAlt: "FW-005 Governance Evidence framework artifact preview.",
  },
  {
    number: "FW-006",
    slug: "fw-006-information-to-execution",
    title: "Information to Execution",
    canonicalName: "Information to Execution",
    status: "Published canonical framework artifact",
    summary:
      "Separates authorized access, observed information, action selection, execution legitimacy, and consequential execution.",
    purpose:
      "Why do authorized information and a warranted action not, by themselves, establish legitimate authority to execute?",
    whyItMatters:
      "Autonomous systems can acquire authorized information, carry that context forward, select actions, and create consequential effects. Permission to acquire information does not by itself establish authority for downstream execution.",
    keyTakeaway:
      "Permission to know does not, by itself, establish authority to act. A decision to act does not, by itself, establish authority to execute.",
    keyConcepts: [
      "Authorized Access",
      "Observed Information",
      "Action Selection",
      "Inherited Constraints",
      "Execution Legitimacy",
    ],
    href: "/frameworks/fw-006-information-to-execution",
    imageSrc:
      "/frameworks/PNG/FW-006-Information-to-Execution-Framework.png",
    pdfSrc: "/frameworks/FW-006-Information-to-Execution-Framework.pdf",
    imageWidth: 1536,
    imageHeight: 1024,
    imageAlt: "FW-006 Information to Execution framework artifact preview.",
  },
];

export function getFrameworkBySlug(slug) {
  return publishedFrameworks.find((framework) => framework.slug === slug);
}

export function getRelatedFrameworks(slug) {
  return publishedFrameworks.filter((framework) => framework.slug !== slug);
}