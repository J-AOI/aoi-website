export const frameworks = [
  {
    title: "Runtime Governance Blueprint",
    href: "/frameworks/runtime-governance-blueprint",
    description:
      "AOI's expandable framework for understanding governance at runtime.",
  },
];

export const publishedFrameworks = [
  {
    number: "FW-001",
    slug: "fw-001-runtime-domain",
    title: "The Missing Runtime Domain in the AI Risk Ecosystem",
    status: "Published framework artifact",
    summary:
      "Defines Execution Governance as the missing runtime domain and frames the central question: was this action authorized at the moment it occurred?",
    whyItMatters:
      "Existing AI risk models address data, models, agents, security operations, and governance, but they often do not determine whether authority remained legitimate when an action executed.",
    keyTakeaway:
      "Correct execution is a security property. Legitimate execution is a governance property.",
    keyConcepts: [
      "Execution Governance",
      "Execution Legitimacy",
      "Authority Integrity",
      "Current-State Verification",
    ],
    href: "/frameworks/fw-001-runtime-domain",
    imageSrc: "/frameworks/fw-001-runtime-domain.png",
    pdfSrc: "/frameworks/fw-001-runtime-domain.pdf",
    imageAlt:
      "FW-001 framework diagram showing Execution Governance as the missing runtime domain in the AI risk ecosystem.",
  },
  {
    number: "FW-002",
    slug: "fw-002-authority-lifecycle",
    title: "The Runtime Authority Lifecycle",
    status: "Published framework artifact",
    summary:
      "Shows how authority moves from a valid grant through organizational change, drift, validation, execution, and evidence.",
    whyItMatters:
      "Authority is rarely wrong when first granted. It becomes wrong when roles, policies, risk, ownership, device state, or business context changes while access and execution remain active.",
    keyTakeaway:
      "Authority is not static. It is a continuously changing operational state.",
    keyConcepts: [
      "Authority Drift",
      "Revocation Drift",
      "State Divergence",
      "Staleness Window",
    ],
    href: "/frameworks/fw-002-authority-lifecycle",
    imageSrc: "/frameworks/fw-002-authority-lifecycle.png",
    pdfSrc: "/frameworks/fw-002-authority-lifecycle.pdf",
    imageAlt:
      "FW-002 framework diagram showing the Runtime Authority Lifecycle from grant through evidence.",
  },
  {
    number: "FW-003",
    slug: "fw-003-ai-security-playbook",
    title: "The AI Security Playbook",
    status: "Published framework artifact",
    summary:
      "Places Runtime Validation within a layered AI trust stack spanning governance, identity, runtime validation, and security controls.",
    whyItMatters:
      "AI security is not solved by technical controls alone. Governance, identity, runtime validation, security controls, and human accountability must operate as a layered trust model.",
    keyTakeaway:
      "Authority is assumed. AO Integrity proves it at execution.",
    keyConcepts: [
      "Runtime Validation",
      "Execution Legitimacy",
      "AI Governance",
      "Authority Integrity",
    ],
    href: "/frameworks/fw-003-ai-security-playbook",
    imageSrc: "/frameworks/fw-003-ai-security-playbook.png",
    pdfSrc: "/frameworks/fw-003-ai-security-playbook.pdf",
    imageAlt:
      "FW-003 framework diagram showing Runtime Validation inside a layered AI security and trust stack.",
  },
];

export function getFrameworkBySlug(slug) {
  return publishedFrameworks.find((framework) => framework.slug === slug);
}

export function getRelatedFrameworks(slug) {
  return publishedFrameworks.filter((framework) => framework.slug !== slug);
}
