export const insightCategoryDefinitions = [
  {
    id: "market-signals",
    title: "Market Signals",
    summary:
      "Published observations about enterprise AI adoption, vendor movement, operational risk, and shifting control expectations.",
    intent: "Signal tracking",
  },
  {
    id: "accumulated-evidence",
    title: "Accumulated Evidence",
    summary:
      "A growing evidence series collecting proof points, recurring patterns, and operational examples that clarify Runtime Governance demand.",
    intent: "Evidence base",
  },
  {
    id: "framework-commentary",
    title: "Framework Commentary",
    summary:
      "Interpretation and extensions of AO Integrity frameworks, concepts, definitions, and governance questions.",
    intent: "Concept development",
  },
  {
    id: "executive-briefs",
    title: "Executive Briefs",
    summary:
      "Short-form research and executive summaries for leaders evaluating operational exposure and investment priorities.",
    intent: "Decision support",
  },
  {
    id: "articles",
    title: "Articles",
    summary:
      "Long-form AO Integrity thought leadership, technical essays, and published analysis about Runtime Governance.",
    intent: "Long-form analysis",
  },
];

export const insights = [
  {
    slug: "enterprise-ai-is-moving-authority-into-runtime",
    title: "Enterprise AI Is Moving Authority Into Runtime",
    category: "market-signals",
    summary:
      "Enterprise AI systems increasingly act through delegated authority after approval, creating a governance problem at the moment execution occurs.",
    publicationDate: "2026-07-25",
    tags: ["AI operations", "Delegated authority", "Runtime risk"],
    featuredImage: null,
    relatedFrameworks: [
      "fw-001-runtime-domain",
      "fw-003-ai-security-playbook",
    ],
    relatedConcepts: [
      "Execution Governance",
      "Execution Legitimacy",
      "Current-State Verification",
    ],
    readingTime: "4 min read",
    status: "Knowledge-base metadata record",
    contentType: "Market Signal",
    contentFile: null,
    executiveSummary: [
      "AI workflows are increasing the distance between the original approval event and the action that eventually occurs.",
      "That distance creates a runtime question: was the action still backed by legitimate authority when it executed?",
      "AO Integrity treats this as a governance layer that complements identity, authorization, security controls, and observability.",
    ],
  },
  {
    slug: "accumulated-evidence-001",
    title: "Accumulated Evidence #001: Authority Drift",
    category: "accumulated-evidence",
    summary:
      "Authority drift is the recurring condition where operational execution continues after the underlying authority state has changed.",
    publicationDate: "2026-07-25",
    tags: ["Authority Drift", "State Divergence", "Evidence"],
    featuredImage: null,
    relatedFrameworks: ["fw-002-authority-lifecycle"],
    relatedConcepts: [
      "Authority Drift",
      "Revocation Drift",
      "State Divergence",
      "Staleness Window",
    ],
    readingTime: "5 min read",
    status: "Knowledge-base metadata record",
    contentType: "Accumulated Evidence",
    contentFile: "accumulated-evidence-001.md",
    executiveSummary: [
      "Authority is often correct when granted and becomes incorrect as business, risk, ownership, role, or system context changes.",
      "The evidence problem is not only whether drift occurred, but how long invalid execution remained active before correction.",
      "Accumulated Evidence entries provide a place to collect repeatable observations without turning Insights into a news feed.",
    ],
  },
  {
    slug: "governance-question-was-this-action-authorized",
    title: "Governance Question: Was This Action Authorized When It Occurred?",
    category: "framework-commentary",
    summary:
      "The core Runtime Governance question separates legitimate execution from merely permitted access.",
    publicationDate: "2026-07-25",
    tags: ["Governance Questions", "Execution Legitimacy", "Runtime Domain"],
    featuredImage: null,
    relatedFrameworks: ["fw-001-runtime-domain", "fw-002-authority-lifecycle"],
    relatedConcepts: [
      "Execution Governance",
      "Execution Legitimacy",
      "Authority Integrity",
    ],
    readingTime: "4 min read",
    status: "Knowledge-base metadata record",
    contentType: "Framework Commentary",
    contentFile: null,
    executiveSummary: [
      "Runtime Governance is anchored by a simple question: was this action authorized at the moment it occurred?",
      "That question is different from whether the actor once had access or whether the system executed correctly.",
      "The distinction creates a practical bridge between governance, security, identity, and operational accountability.",
    ],
  },
  {
    slug: "machine-speed-changes-where-governance-has-to-occur",
    title: "Machine Speed Changes Where Governance Has to Occur",
    category: "framework-commentary",
    summary:
      "Autonomous systems force governance to move from human checkpoints and retrospective review toward execution-time validation and independently reviewable evidence.",
    publicationDate: "2026-07-25",
    tags: [
      "Runtime Governance",
      "Execution Governance",
      "AI Governance",
      "Execution Legitimacy",
      "Evidence",
      "Enterprise Architecture",
    ],
    featuredImage: null,
    relatedFrameworks: [
      "fw-001-runtime-domain",
      "fw-002-authority-lifecycle",
      "fw-003-ai-security-playbook",
    ],
    relatedConcepts: [
      "Runtime Governance",
      "Execution Governance",
      "Execution Legitimacy",
      "Current-State Verification",
      "Governance Evidence",
    ],
    readingTime: "6 min read",
    status: "Knowledge-base metadata record",
    contentType: "Framework Commentary",
    contentFile: "machine-speed-changes-where-governance-has-to-occur.md",
    executiveSummary: [
      "Autonomous systems change the practical location of governance because execution can occur faster than human review can intervene.",
      "Human governance remains necessary, but it has to be translated into runtime controls that evaluate current authority before protected actions occur.",
      "Trust depends on evidence that shows what was checked, what decision was made, and whether execution was legitimate at the moment work occurred.",
    ],
  },
  {
    slug: "executive-brief-runtime-governance-ai-risk",
    title: "Executive Brief: Runtime Governance Belongs on the AI Risk Agenda",
    category: "executive-briefs",
    summary:
      "A leadership brief explaining why execution-time authority validation is becoming an enterprise governance capability.",
    publicationDate: "2026-07-25",
    tags: ["AI risk", "Executive brief", "Board readiness"],
    featuredImage: null,
    relatedFrameworks: [
      "fw-001-runtime-domain",
      "fw-003-ai-security-playbook",
    ],
    relatedConcepts: [
      "Runtime Validation",
      "AI Governance",
      "Authority Integrity",
    ],
    readingTime: "3 min read",
    status: "Knowledge-base metadata record",
    contentType: "Executive Brief",
    contentFile: null,
    executiveSummary: [
      "Enterprise AI increases the number of actions performed through delegated, automated, or semi-autonomous authority.",
      "Traditional governance artifacts often explain who had access, but not whether authority remained legitimate when execution happened.",
      "Runtime Governance gives executives a defensible way to discuss AI execution risk, evidence, and accountability.",
    ],
  },
  {
    slug: "from-permission-management-to-execution-legitimacy",
    title: "From Permission Management to Execution Legitimacy",
    category: "articles",
    summary:
      "A long-form Runtime Governance article about the operating gap between granted permission and legitimate execution.",
    publicationDate: "2026-07-25",
    tags: ["Execution Legitimacy", "Permission management", "Enterprise architecture"],
    featuredImage: null,
    relatedFrameworks: [
      "fw-001-runtime-domain",
      "fw-002-authority-lifecycle",
    ],
    relatedConcepts: [
      "Current-State Verification",
      "Authority Integrity",
      "Runtime Governance",
    ],
    readingTime: "6 min read",
    status: "Knowledge-base metadata record",
    contentType: "Article",
    contentFile: null,
    executiveSummary: [
      "Permission management answers who or what was allowed to act under a known authority state.",
      "Execution legitimacy asks whether that authority remained valid when the action occurred.",
      "Runtime Governance closes the gap by validating current authority and producing governance evidence.",
    ],
  },
];

export const insightLibraryStats = [
  ["5", "Primary categories"],
  [String(insights.length), "Configured records"],
  ["100+", "Designed capacity"],
];

export function getInsightCategory(categoryId) {
  return insightCategoryDefinitions.find((category) => category.id === categoryId);
}

export function getInsightsByCategory(categoryId) {
  return insights.filter((insight) => insight.category === categoryId);
}

export function getInsightBySlug(slug) {
  return insights.find((insight) => insight.slug === slug);
}

export function getRelatedInsights(slug) {
  const current = getInsightBySlug(slug);

  if (!current) {
    return [];
  }

  const related = insights.filter((insight) => {
    if (insight.slug === slug) {
      return false;
    }

    return (
      insight.category === current.category ||
      insight.relatedConcepts.some((concept) =>
        current.relatedConcepts.includes(concept)
      ) ||
      insight.relatedFrameworks.some((framework) =>
        current.relatedFrameworks.includes(framework)
      )
    );
  });

  return related.slice(0, 3);
}

export function getAdjacentInsights(slug) {
  const currentIndex = insights.findIndex((insight) => insight.slug === slug);

  return {
    previous: currentIndex > 0 ? insights[currentIndex - 1] : null,
    next:
      currentIndex >= 0 && currentIndex < insights.length - 1
        ? insights[currentIndex + 1]
        : null,
  };
}
