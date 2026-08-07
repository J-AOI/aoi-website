export const frameworks = [
  {
    title: "Runtime Governance Frameworks",
    href: "/frameworks",
    description:
      "AOI's canonical framework collection for execution-time authority, lifecycle drift, propagation, and legitimacy.",
  },
];

export const publishedFrameworks = [
  {
    number: "FW-001",
    slug: "fw-001-runtime-governance-domain",
    title: "The Missing Runtime Domain in the AI Risk Ecosystem",
    canonicalName: "Runtime Governance Domain",
    status: "Published canonical framework artifact",
    summary:
      "Defines the execution-time governance domain and the role of runtime validation when authority becomes action.",
    purpose:
      "What governance layer is needed when authorization, identity, observability, and policy do not determine whether execution is still legitimate?",
    whyItMatters:
      "Authority can be granted correctly and still become stale before or during execution. Runtime Governance identifies the domain where current authority, execution state, and evidence have to be evaluated together.",
    keyTakeaway:
      "Runtime Governance is the layer that validates authority at the point execution creates consequence.",
    keyConcepts: [
      "Runtime Governance",
      "Runtime Validation",
      "Execution-Time Authority",
      "Governance Evidence",
    ],
    href: "/frameworks/fw-001-runtime-governance-domain",
    imageSrc: "/frameworks/FW-001-Runtime-Governance-Domain.png",
    pdfSrc: "/frameworks/FW-001-Runtime-Governance-Domain.pdf",
    imageWidth: 1126,
    imageHeight: 1689,
    imageAlt:
      "FW-001 Runtime Governance Domain framework artifact preview.",
  },
  {
    number: "FW-002",
    slug: "fw-002-authority-lifecycle",
    title: "The Runtime Authority Lifecycle",
    canonicalName: "Authority Lifecycle",
    status: "Published canonical framework artifact",
    summary:
      "Maps how authority moves from a valid grant through change, drift, validation, execution, and evidence.",
    purpose:
      "How does authority change between the moment it is granted and the moment execution occurs?",
    whyItMatters:
      "Authority is not static. Roles, ownership, risk, system state, and business context can change while active access or execution paths remain in place.",
    keyTakeaway:
      "Authority has a lifecycle, and governance has to account for what changes after the initial grant.",
    keyConcepts: [
      "Authority Grant",
      "Authority Drift",
      "Staleness Window",
      "Evidence",
    ],
    href: "/frameworks/fw-002-authority-lifecycle",
    imageSrc: "/frameworks/FW-002-Authority-Lifecycle.png",
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
      "Shows how authority propagates across systems, identities, delegations, runtime state, and execution paths.",
    purpose:
      "Where does authority travel after it leaves the original approving system, and how can that propagation create risk?",
    whyItMatters:
      "Execution often depends on inherited, delegated, synchronized, or translated authority. Propagation creates governance gaps when downstream systems continue acting on authority whose source state has changed.",
    keyTakeaway:
      "Authority risk grows as authority propagates across systems that do not share the same current state.",
    keyConcepts: [
      "Authority Propagation",
      "Delegation",
      "Runtime State",
      "Execution Paths",
    ],
    href: "/frameworks/fw-003-authority-propagation",
    imageSrc: "/frameworks/FW-003-Authority-Propagation.png",
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
      "Evaluates whether execution remained legitimate at the moment it occurred under current authority, context, evidence, and consequence.",
    purpose:
      "Was this execution still legitimate when it happened?",
    whyItMatters:
      "A system can execute correctly while the underlying authority is no longer valid, admissible, or defensible. Execution Legitimacy focuses governance on the moment action creates consequence.",
    keyTakeaway:
      "Legitimate execution requires current-state validation, not only historical permission.",
    keyConcepts: [
      "Execution Legitimacy",
      "Authority Validity",
      "Runtime Admissibility",
      "Current-State Verification",
      "Consequence",
    ],
    href: "/frameworks/fw-004-execution-legitimacy",
    imageSrc: "/frameworks/FW-004-Execution-Legitimacy.png",
    pdfSrc: "/frameworks/FW-004-Execution-Legitimacy.pdf",
    imageWidth: 1126,
    imageHeight: 1689,
    imageAlt: "FW-004 Execution Legitimacy framework artifact preview.",
  },
];

export function getFrameworkBySlug(slug) {
  return publishedFrameworks.find((framework) => framework.slug === slug);
}

export function getRelatedFrameworks(slug) {
  return publishedFrameworks.filter((framework) => framework.slug !== slug);
}
