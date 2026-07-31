import PageShell from "../../components/layout/PageShell";
import Section from "../../components/layout/Section";
import SectionHeading from "../../components/typography/SectionHeading";
import Eyebrow from "../../components/typography/Eyebrow";
import Button from "../../components/ui/Button";

const canonicalThesisUrl =
  "/research/runtime-governance/runtime-governance-thesis-v1.0.pdf";
const workingPaperUrl =
  "/research/runtime-governance/runtime-governance-working-paper-v0.9.pdf";
const amendmentPolicyUrl =
  "/research/runtime-governance/publication-amendment-policy-v1.0.pdf";

const publicationMetadata = [
  ["Published", "July 2026"],
  ["Version", "1.0"],
  ["Publication Status", "Active"],
  ["Publisher", "AO Integrity Research"],
  ["Category", "Research Publication"],
];

const researchProgram = [
  [
    "Runtime Governance Thesis",
    "The canonical statement of the discipline.",
    "/research/runtime-governance-thesis",
  ],
  [
    "Evidence Map",
    "The independently maintained evidence corpus that tests and narrows the thesis.",
    "/research/evidence-map",
  ],
  [
    "Framework Series",
    "Operating models that translate the thesis into practice.",
    "/frameworks",
  ],
  [
    "Research Briefs",
    "Analysis of market signals, standards activity, and framework development.",
    "/research",
  ],
  [
    "Accumulated Evidence",
    "Recurring evidence and operational patterns.",
    "/research/accumulated-evidence-001",
  ],
  [
    "Governance Questions",
    "Focused questions developed individually.",
    "/research/governance-question-was-this-action-authorized",
  ],
];

export const metadata = {
  title: "The Runtime Governance Thesis | AO Integrity Research",
  description:
    "The Runtime Governance Thesis is a versioned AO Integrity Research publication defining governance for autonomous execution.",
};

function PdfAction({ href, children, primary = false, className = "" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex min-h-12 items-center justify-center border px-5 text-sm font-semibold tracking-wide transition focus:outline-none focus:ring-2 focus:ring-aoi-red/40 ${
        primary
          ? "border-aoi-red bg-aoi-red text-white hover:bg-[#b80f12]"
          : "border-white/18 bg-white/0 text-white hover:bg-white/8"
      } ${className}`}
    >
      {children}
    </a>
  );
}

function PublicationCard({
  eyebrow,
  title,
  status,
  children,
  href,
  cta,
  emphasized = false,
}) {
  return (
    <article
      className={`border p-6 sm:p-8 ${
        emphasized
          ? "border-aoi-red/70 bg-aoi-red/[0.08]"
          : "border-white/12 bg-white/[0.025]"
      }`}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-aoi-red">
        {eyebrow}
      </p>
      <h3 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white">
        {title}
      </h3>
      {status ? (
        <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/44">
          {status}
        </p>
      ) : null}
      <p className="mt-5 max-w-3xl text-base leading-8 text-white/62">{children}</p>
      <PdfAction href={href} primary={emphasized} className="mt-8">
        {cta}
      </PdfAction>
    </article>
  );
}

function ProgramItem({ title, children, href }) {
  const content = (
    <>
      <h3 className="text-xl font-semibold leading-tight text-white">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-white/58">{children}</p>
    </>
  );

  if (!href) {
    return <article className="bg-aoi-black p-6">{content}</article>;
  }

  return (
    <a
      href={href}
      className="group block bg-aoi-black p-6 transition hover:bg-white/[0.035] focus:outline-none focus:ring-2 focus:ring-aoi-red/40"
    >
      {content}
      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-white/36 transition group-hover:text-aoi-red">
        View
      </p>
    </a>
  );
}

export default function RuntimeGovernanceThesisPage() {
  return (
    <PageShell>
      <main>
        <Section className="border-b border-white/10 pt-16 sm:pt-20 lg:pt-24">
          <div className="max-w-5xl">
            <Eyebrow>AO INTEGRITY RESEARCH</Eyebrow>
            <h1 className="mt-7 text-5xl font-semibold leading-[1] tracking-tight text-white sm:text-6xl lg:text-7xl">
              The Runtime Governance Thesis
            </h1>
            <p className="mt-8 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              Defining Governance for Autonomous Execution
            </p>
            <div className="mt-7 max-w-3xl space-y-5 text-xl leading-8 text-white/64">
              <p>
                Enterprise governance evolves whenever technology changes the object
                requiring trust. Autonomous execution changes that object by turning
                delegated authority into machine-speed action.
              </p>
              <p>
                The Runtime Governance Thesis proposes a discipline for evaluating
                whether execution remained a legitimate exercise of conferred
                authority when it occurred, and for preserving evidence that can be
                independently reviewed.
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <PdfAction href={canonicalThesisUrl} primary>
                Read Canonical Thesis
              </PdfAction>
              <PdfAction href={workingPaperUrl}>View Technical Working Paper</PdfAction>
            </div>
          </div>
        </Section>

        <Section spacing="compact" className="border-b border-white/10 bg-[#050505]">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <PublicationCard
              eyebrow="Canonical Publication"
              title="Canonical Thesis v1.0"
              href={canonicalThesisUrl}
              cta="Download Canonical Thesis"
              emphasized
            >
              The authoritative, citable statement of the proposed Runtime Governance
              discipline, including its evaluation object, five legitimacy conditions,
              bounded claim, research program, and implementation principles.
            </PublicationCard>

            <div className="border border-white/12 bg-aoi-black p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-aoi-red">
                Publication Metadata
              </p>
              <div className="mt-6 grid gap-px overflow-hidden border border-white/12 bg-white/12">
                {publicationMetadata.map(([label, value]) => (
                  <div key={label} className="bg-aoi-black p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/36">
                      {label}
                    </p>
                    <p className="mt-2 text-base font-semibold text-white">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section spacing="compact" className="border-b border-white/10">
          <div className="grid gap-6 lg:grid-cols-2">
            <PublicationCard
              eyebrow="Supporting Publication"
              title="Technical Working Paper"
              status="Review Draft v0.9"
              href={workingPaperUrl}
              cta="Download Working Paper"
            >
              The complete supporting research paper for the thesis, intentionally
              labeled Review Draft v0.9, including prior-art analysis, assumptions,
              implementation patterns, illustrative scenarios, falsification case,
              glossary, and references.
            </PublicationCard>

            <PublicationCard
              eyebrow="Publication Governance"
              title="Publication & Amendment Policy v1.0"
              href={amendmentPolicyUrl}
              cta="View Publication Policy"
            >
              The policy governing how the thesis evolves through amendments,
              supporting research, frameworks, permanent availability of superseded
              versions, and future canonical revisions.
            </PublicationCard>
          </div>
        </Section>

        <Section spacing="compact" className="border-b border-white/10 bg-[#050505]">
          <SectionHeading
            eyebrow="Research Program"
            title="Publication structure."
            size="compact"
          >
            The Runtime Governance research program is organized as a set of linked
            publication types. Each one contributes to developing, testing, narrowing,
            or operationalizing the proposed discipline.
          </SectionHeading>
          <div className="mt-10 grid gap-px overflow-hidden border border-white/12 bg-white/12 md:grid-cols-2 lg:grid-cols-3">
            {researchProgram.map(([title, body, href]) => (
              <ProgramItem key={title} title={title} href={href}>
                {body}
              </ProgramItem>
            ))}
          </div>
        </Section>

        <Section spacing="compact" className="border-b border-white/10">
          <div className="max-w-3xl">
            <Eyebrow>Citation</Eyebrow>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              How to cite this publication.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/68">
              Thornbladh, J. (2026).{" "}
              <em>The Runtime Governance Thesis: Defining Governance for Autonomous Execution</em>.
              Version 1.0. AO Integrity Research.
            </p>
          </div>
        </Section>

        <Section spacing="tight" className="bg-[#050505]">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <SectionHeading title="Evaluate the thesis." size="compact">
              Strong ideas improve through rigorous criticism. The most valuable
              contribution is evidence that challenges, narrows, or improves the
              proposed discipline.
            </SectionHeading>
            <Button href="/contact" className="lg:mb-1">
              Contact AO Integrity Research
            </Button>
          </div>
        </Section>
      </main>
    </PageShell>
  );
}
