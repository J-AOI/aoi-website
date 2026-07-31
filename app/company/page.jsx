import PageShell from "../components/layout/PageShell";
import Section from "../components/layout/Section";
import SectionHeading from "../components/typography/SectionHeading";
import Eyebrow from "../components/typography/Eyebrow";
import Button from "../components/ui/Button";

const progression = [
  [
    "Research",
    "Identify emerging governance failures and define the language needed to understand them.",
  ],
  [
    "Frameworks",
    "Translate evidence into operating models for authority, legitimacy, runtime risk, and continuous validation.",
  ],
  [
    "Platform",
    "Operationalize the research through execution-time authority validation and evidence generation.",
  ],
];

const founderCapabilities = [
  [
    "Enterprise Discovery",
    "Conduct executive and practitioner discovery to uncover buyer language, operational pain, and adoption barriers.",
  ],
  [
    "Ecosystem Development",
    "Build strategic relationships across technology companies, enterprise buyers, service providers, advisors, and channel partners.",
  ],
  [
    "Go-to-Market Strategy",
    "Translate market evidence into positioning, messaging, partnership motions, and practical GTM playbooks.",
  ],
  [
    "Complex Enterprise Access",
    "Open doors and navigate stakeholder networks inside large, highly distributed organizations.",
  ],
  [
    "Product Validation",
    "Help builders test whether a product, category, and message reflect the way enterprise buyers actually understand the problem.",
  ],
];

export const metadata = {
  title: "Company | AO Integrity",
  description:
    "AO Integrity is an independent research and product company focused on Runtime Governance, execution-time authority validation, and evidence for governed autonomous execution.",
};

function StructuredPanel({ index, title, children }) {
  return (
    <article className="min-h-[220px] border border-white/12 bg-aoi-black p-6 sm:p-7">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-aoi-red">
        {String(index).padStart(2, "0")}
      </p>
      <h3 className="mt-10 text-2xl font-semibold leading-tight tracking-tight text-white">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-white/58">{children}</p>
    </article>
  );
}

function CapabilityPanel({ title, children }) {
  return (
    <article className="border border-white/12 bg-white/[0.025] p-6 transition hover:border-aoi-red/50 hover:bg-aoi-red/[0.05]">
      <h3 className="text-xl font-semibold leading-tight text-white">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-white/58">{children}</p>
    </article>
  );
}

export default function CompanyPage() {
  return (
    <PageShell>
      <main>
        <Section className="border-b border-white/10 pt-16 sm:pt-20 lg:pt-24">
          <div className="max-w-5xl">
            <Eyebrow>COMPANY</Eyebrow>
            <h1 className="mt-7 text-5xl font-semibold leading-[1] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Building the research, frameworks, and infrastructure for Runtime
              Governance.
            </h1>
            <div className="mt-8 max-w-3xl space-y-5 text-xl leading-8 text-white/64">
              <p>
                AO Integrity is an independent research and product company focused on
                a fundamental question: how can an organization prove that authority
                remained valid when execution occurred?
              </p>
              <p>
                The company develops original research, operating frameworks, and
                execution-time validation capabilities for organizations adopting AI
                agents, autonomous systems, and increasingly distributed forms of
                authority.
              </p>
            </div>
          </div>
        </Section>

        <Section spacing="compact" className="border-b border-white/10 bg-[#050505]">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <SectionHeading title="Research translated into execution." size="compact">
                AO Integrity studies the gap between granted authority and legitimate
                execution.
              </SectionHeading>
              <div className="mt-8 max-w-3xl space-y-5 text-base leading-8 text-white/62">
                <p>
                  Our research examines how authority changes over time, why
                  credentials and sessions can remain usable after their legitimacy has
                  changed, and how organizations can produce evidence that execution
                  remained authorized, attributable, and admissible.
                </p>
                <p>
                  That research informs the Runtime Governance framework and the
                  development of ValidateAuthority.ai, an execution-time authority
                  validation platform.
                </p>
              </div>
            </div>

            <div className="grid gap-px overflow-hidden border border-white/12 bg-white/12 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {progression.map(([title, body], index) => (
                <StructuredPanel key={title} index={index + 1} title={title}>
                  {body}
                </StructuredPanel>
              ))}
            </div>
          </div>
        </Section>

        <Section spacing="compact" className="border-b border-white/10">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div>
              <Eyebrow>Founder</Eyebrow>
              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                Justin Thornbladh
              </h2>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-white/46">
                Ecosystem Builder | Enterprise GTM Strategist | Strategic Partnerships
                Executive
              </p>
            </div>

            <div className="space-y-5 text-lg leading-8 text-white/64">
              <p>
                Justin Thornbladh has spent more than two decades building
                partnerships, opening complex enterprise organizations, and translating
                market discovery into go-to-market execution.
              </p>
              <p>
                His work has included programs and commercial relationships involving
                Apple, BlackBerry, Nokia, Samsung, AT&amp;T, T-Mobile, Assurant, and
                other global technology and telecommunications organizations.
              </p>
              <p>
                His core strength is navigating large, complex enterprises to reach the
                right stakeholders, capture buyer language, identify where products and
                messaging fail to align with operational reality, and turn that
                discovery into stronger positioning, partnerships, and go-to-market
                strategy.
              </p>
              <p>
                AO Integrity applies that same discipline to Runtime Governance:
                identify the problem through market evidence, define the operating
                language, validate the thesis with practitioners, and build the
                infrastructure required to address it.
              </p>
            </div>
          </div>
        </Section>

        <Section spacing="compact" className="border-b border-white/10 bg-[#050505]">
          <SectionHeading title="Founder capabilities." size="compact" />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {founderCapabilities.map(([title, body]) => (
              <CapabilityPanel key={title} title={title}>
                {body}
              </CapabilityPanel>
            ))}
          </div>
        </Section>

        <Section spacing="tight">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <SectionHeading
              title="Authority should not be assumed at the moment it becomes action."
              size="compact"
            >
              AO Integrity is building the research foundation, operating language,
              and execution-time infrastructure required to prove it.
            </SectionHeading>
            <div className="flex flex-col gap-3 sm:flex-row lg:mb-1">
              <Button href="/runtime-governance">Explore Runtime Governance</Button>
              <Button href="/contact" variant="secondary">
                Request a Briefing
              </Button>
            </div>
          </div>
        </Section>
      </main>
    </PageShell>
  );
}
