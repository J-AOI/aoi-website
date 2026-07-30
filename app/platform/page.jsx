import PageShell from "../components/layout/PageShell";
import Section from "../components/layout/Section";
import SectionHeading from "../components/typography/SectionHeading";
import ProductLockup from "../components/brand/ProductLockup";
import Button from "../components/ui/Button";
import EvidenceCard from "../components/cards/EvidenceCard";
import DashboardPreview from "../components/product/DashboardPreview";
import { assets } from "../data/assets";

const examples = [
  "A human continues acting after authority changed.",
  "A service account keeps executing after ownership changes.",
  "An application runs under outdated authority.",
  "A workload continues under stale approval.",
  "An AI agent executes after authority has changed.",
];

const toolQuestions = [
  ["IAM", "Who has access?"],
  ["IGA", "Who approved access?"],
  ["PAM", "Who used privileged access?"],
  ["Authorization", "What is allowed?"],
  ["Observability", "What happened?"],
  ["GRC", "What was reviewed?"],
  ["ValidateAuthority.ai", "Should this execution still be allowed?"],
];

const gavelFlow = [
  "Authority changes",
  "Execution is evaluated",
  "AO Integrity validates legitimacy",
  "Governance evidence is produced",
];

const capabilities = [
  "Observe changed authority",
  "Validate execution state",
  "Measure the staleness window",
  "Produce governance evidence",
  "Support governance workflows",
];

const records = [
  "Authority Changed",
  "Execution Continued",
  "Staleness Window",
  "Authority Drift Finding",
  "Governance Evidence Package",
];

const walkthrough = [
  "Authority sources",
  "Execution activity",
  "Drift findings",
  "Staleness window",
  "Governance evidence",
];

const integrations = [
  "Identity systems",
  "Authorization systems",
  "Privileged access systems",
  "Observability systems",
  "GRC systems",
  "AI governance systems",
];

const useGroups = [
  ["Identity and access", "Review stale access and changed authority."],
  ["Security architecture", "See where execution remains active."],
  ["AI governance", "Review AI-enabled execution under changed authority."],
  ["Risk and compliance", "Retain evidence for review and audit."],
  ["Enterprise operations", "Coordinate ownership and response."],
];

const currentScope = [
  "Observe changed authority",
  "Validate execution state",
  "Measure staleness windows",
  "Surface authority drift findings",
  "Produce governance evidence",
  "Support governance workflows",
];

const futureDirection = [
  "Broader integrations",
  "Expanded evidence workflows",
  "Deeper review and reporting surfaces",
  "Additional support across humans, service accounts, applications, workloads, and AI agents",
];

function NumberedPanel({ index, title, children, emphasized = false }) {
  return (
    <article
      className={`flex min-h-[210px] flex-col justify-between border p-6 sm:p-7 ${
        emphasized
          ? "border-aoi-red bg-aoi-red/[0.12]"
          : "border-white/12 bg-white/[0.025]"
      }`}
    >
      <p
        className={`text-xs font-semibold uppercase tracking-[0.22em] ${
          emphasized ? "text-aoi-red" : "text-white/44"
        }`}
      >
        {String(index).padStart(2, "0")}
      </p>
      <div>
        <h3 className="text-xl font-semibold leading-tight text-white">{title}</h3>
        {children ? <p className="mt-4 text-sm leading-7 text-white/58">{children}</p> : null}
      </div>
    </article>
  );
}

function SimpleGrid({ items, columns = "lg:grid-cols-3", compact = false, dense = false }) {
  return (
    <div className={`grid gap-px overflow-hidden border border-white/12 bg-white/12 sm:grid-cols-2 ${columns}`}>
      {items.map((item) => (
        <div
          key={item}
          className={`bg-aoi-black ${
            dense ? "p-4 sm:p-5" : compact ? "p-5" : "p-6"
          }`}
        >
          <p className="text-lg font-semibold leading-tight text-white">{item}</p>
        </div>
      ))}
    </div>
  );
}

export default function PlatformPage() {
  return (
    <PageShell>
      <main>
        <Section className="relative overflow-hidden border-b border-white/10 pt-16 sm:pt-20 lg:pt-24">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)] lg:items-center">
            <div>
              <ProductLockup className="h-auto w-full max-w-[430px]" />
              <h1 className="mt-10 max-w-5xl text-6xl font-semibold leading-[0.96] tracking-tight text-white sm:text-7xl lg:text-8xl">
                ValidateAuthority.ai validates authority at execution.
              </h1>
              <p className="mt-8 max-w-2xl text-xl leading-8 text-white/64">
                Authority changes. Execution continues. ValidateAuthority.ai tells teams
                whether execution should still be allowed and produces the evidence to prove it.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact">Request Briefing</Button>
                <Button href="#dashboard" variant="secondary">
                  View Dashboard
                </Button>
              </div>
            </div>

            <div className="flex min-h-[360px] items-center justify-center border border-white/12 bg-white/[0.025] p-8">
              <img
                src={assets.product.monogram}
                alt="ValidateAuthority.ai product mark"
                className="h-52 w-52 object-contain sm:h-60 sm:w-60"
              />
            </div>
          </div>
        </Section>

        <Section className="border-b border-white/10 bg-[#050505]">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <SectionHeading title="Execution outlived authority.">
                A human, service account, application, workload, or AI agent can continue
                acting after authority has changed.
              </SectionHeading>
              <div className="mt-10 flex min-h-[164px] items-end border border-aoi-red/35 bg-aoi-red/[0.08] p-7">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/46">
                    Authority Drift
                  </p>
                  <p className="mt-5 max-w-md text-xl font-semibold leading-snug text-white">
                    Authority Drift is the condition where changed authority and active
                    execution no longer agree.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gap-3">
              {examples.map((item) => (
                <div key={item} className="border border-white/12 bg-white/[0.025] p-5">
                  <p className="text-base leading-7 text-white/72">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section className="border-b border-white/10">
          <SectionHeading title="Existing tools answer different questions.">
            ValidateAuthority.ai does not replace IAM, IGA, PAM, authorization,
            observability, or GRC platforms. It complements them by validating
            execution-time authority and producing governance evidence.
          </SectionHeading>
          <div className="mt-12 grid gap-px overflow-hidden border border-white/12 bg-white/12 sm:grid-cols-2 lg:grid-cols-4">
            {toolQuestions.map(([label, question]) => {
              const isProduct = label === "ValidateAuthority.ai";

              return (
                <article
                  key={label}
                  className={`min-h-[220px] p-6 sm:p-7 ${
                    isProduct
                      ? "border border-aoi-red bg-aoi-red/[0.12]"
                      : "bg-aoi-black"
                  }`}
                >
                  <p
                    className={`text-xs font-semibold uppercase tracking-[0.22em] ${
                      isProduct ? "text-aoi-red" : "text-white/44"
                    }`}
                  >
                    {label}
                  </p>
                  <p className="mt-10 text-2xl font-semibold leading-tight tracking-tight text-white">
                    {question}
                  </p>
                </article>
              );
            })}
          </div>
        </Section>

        <Section className="border-b border-white/10 bg-[#050505]">
          <SectionHeading title="The Gavel Moment.">
            ValidateAuthority.ai evaluates authority and execution together at the
            operational decision point.
          </SectionHeading>
          <div className="mt-14 grid gap-px overflow-hidden border border-white/12 bg-white/12 lg:grid-cols-4">
            {gavelFlow.map((step, index) => (
              <NumberedPanel
                key={step}
                index={index + 1}
                title={step}
                emphasized={index === 2}
              />
            ))}
          </div>
        </Section>

        <Section className="border-b border-white/10">
          <SectionHeading
            eyebrow="Core Capabilities"
            title="Built to validate, measure, and evidence authority drift."
          >
            ValidateAuthority.ai focuses on detection, validation, measurement, evidence,
            and workflow support.
          </SectionHeading>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {capabilities.map((item, index) => (
              <EvidenceCard key={item} index={index + 1} title={item} />
            ))}
          </div>
        </Section>

        <Section className="border-b border-white/10 bg-[#050505]">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <SectionHeading title="Authority must be checked when execution occurs.">
              Identity systems validate authority when it is granted. ValidateAuthority.ai
              validates authority when execution occurs.
            </SectionHeading>
            <p className="border-l border-aoi-red pl-6 text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl">
              Machine-speed execution requires machine-speed validation.
            </p>
          </div>
        </Section>

        <Section className="border-b border-white/10">
          <SectionHeading title="Operational records for governance review.">
            ValidateAuthority.ai produces records that show what changed, what continued,
            how long it persisted, and what needs review.
          </SectionHeading>
          <div className="mt-12 overflow-hidden border border-white/12 bg-white/12">
            {records.map((record, index) => (
              <div
                key={record}
                className="grid gap-6 bg-aoi-black p-5 sm:grid-cols-[120px_1fr_auto]"
              >
                <p className="text-xs font-semibold tracking-[0.2em] text-aoi-red">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="text-xl font-semibold tracking-tight text-white">{record}</p>
                <p className="text-sm text-white/48">Operational record</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="dashboard"
          spacing="compact"
          className="border-b border-white/10 bg-[#050505]"
        >
          <SectionHeading
            eyebrow="Product Walkthrough"
            title="Authority and execution in one operational view."
          >
            Review changed authority, active execution, staleness, drift findings, and
            governance evidence from one product surface.
          </SectionHeading>
          <div className="mt-12 lg:mt-14">
            <DashboardPreview />
          </div>
          <div className="mt-8 grid gap-px overflow-hidden border border-white/12 bg-white/12 sm:grid-cols-2 lg:grid-cols-5">
            {walkthrough.map((item) => (
              <div key={item} className="bg-aoi-black p-5">
                <p className="text-base font-semibold leading-tight text-white">{item}</p>
              </div>
            ))}
          </div>
          <Button href="/contact" variant="secondary" className="mt-10">
            Request Product Briefing
          </Button>
        </Section>

        <Section spacing="tight" className="border-b border-white/10">
          <SectionHeading
            size="compact"
            title="Designed to sit beside the systems enterprises already run."
          >
            ValidateAuthority.ai complements existing systems by validating whether execution
            is still backed by current authority.
          </SectionHeading>
          <div className="mt-7 sm:mt-8">
            <SimpleGrid items={integrations} columns="lg:grid-cols-3" dense />
          </div>
        </Section>

        <Section spacing="tight" className="border-b border-white/10 bg-[#050505]">
          <SectionHeading size="compact" title="Built for teams that own execution risk.">
            Security, identity, risk, compliance, governance, and operations teams use
            ValidateAuthority.ai evidence to review authority drift across humans, service
            accounts, applications, workloads, and AI agents.
          </SectionHeading>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {useGroups.map(([title, body], index) => (
              <EvidenceCard key={title} index={index + 1} title={title} density="dense">
                {body}
              </EvidenceCard>
            ))}
          </div>
        </Section>

        <Section spacing="compact" className="border-b border-white/10">
          <SectionHeading size="compact" title="Current focus: validate, detect, measure, evidence.">
            ValidateAuthority.ai is currently focused on identifying authority drift,
            validating execution state, measuring staleness, producing governance evidence,
            and supporting governance workflows.
          </SectionHeading>
          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.85fr] lg:items-stretch">
            <article className="border border-aoi-red/40 bg-aoi-red/[0.08] p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-aoi-red">
                Current Capability
              </p>
              <div className="mt-7 grid gap-3">
                {currentScope.map((item) => (
                  <p key={item} className="text-lg font-semibold leading-tight text-white">
                    {item}
                  </p>
                ))}
              </div>
            </article>
            <article className="border border-white/12 bg-white/[0.025] p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/44">
                Future Platform Direction
              </p>
              <div className="mt-7 grid gap-3">
                {futureDirection.map((item) => (
                  <p key={item} className="text-base leading-7 text-white/62">
                    {item}
                  </p>
                ))}
              </div>
            </article>
          </div>
          <p className="mt-8 max-w-4xl text-base leading-7 text-white/58">
            ValidateAuthority.ai is an execution governance layer. It does not replace IAM,
            IGA, PAM, authorization, observability, or GRC platforms.
          </p>
        </Section>

        <Section spacing="tight" className="bg-[#050505]">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <SectionHeading size="compact" title="Authority changes. Execution continues.">
              ValidateAuthority.ai tells you whether execution should still be allowed&mdash;and
              produces the evidence to prove it.
            </SectionHeading>
            <div className="flex flex-col gap-3 sm:flex-row lg:mb-1">
              <Button href="/contact">Request Briefing</Button>
              <Button href="/" variant="secondary">
                Return to AO Integrity
              </Button>
            </div>
          </div>
        </Section>
      </main>
    </PageShell>
  );
}
