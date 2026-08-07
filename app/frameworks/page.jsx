import PageShell from "../components/layout/PageShell";
import Section from "../components/layout/Section";
import SectionHeading from "../components/typography/SectionHeading";
import Eyebrow from "../components/typography/Eyebrow";
import Button from "../components/ui/Button";
import FrameworkLibraryCard from "../components/frameworks/FrameworkLibraryCard";
import { publishedFrameworks } from "../data/frameworks";

const runtimeSequence = [
  "Domain defined",
  "Lifecycle mapped",
  "Propagation traced",
  "Legitimacy evaluated",
  "Evidence produced",
];

const architectureSequence = [
  "Identity",
  "Authentication",
  "Authorization",
  "Runtime Governance",
  "Execution",
  "Evidence",
];

const operatingModel = [
  ["Authority State", "What authority should exist now?"],
  ["Execution State", "What remains operational?"],
  [
    "Authority Drift",
    "Where active execution no longer reflects legitimate authority.",
  ],
  ["Staleness Window", "How long the invalid condition remains operational."],
  [
    "Governance Evidence",
    "What can be independently reviewed, escalated, and defended.",
  ],
];

const vocabulary = [
  ["Authority", "The legitimate basis for a person, system, agent, or workflow to act."],
  [
    "Authority Drift",
    "A mismatch between changed authority and execution that remains active.",
  ],
  [
    "State Divergence",
    "The point where authority records and operational execution no longer agree.",
  ],
  ["Staleness Window", "The duration that invalid authority remains operational."],
  [
    "Execution Legitimacy",
    "Whether an action was backed by legitimate authority when it occurred.",
  ],
  [
    "Current-State Verification",
    "Validation against present authority, context, and operational state.",
  ],
  [
    "Continuous Authority Validation",
    "Ongoing checks that authority remains legitimate during execution.",
  ],
  ["Runtime Risk", "Risk created when active execution outlives legitimate authority."],
];

const platformMapping = [
  ["Authority State", "Observe changed authority"],
  ["Execution State", "Validate active execution"],
  ["Authority Drift", "Surface mismatches"],
  ["Staleness Window", "Measure duration"],
  ["Governance Evidence", "Produce reviewable evidence"],
];

function Sequence({ items, emphasizedItem }) {
  const columns =
    items.length === 6 ? "md:grid-cols-3 lg:grid-cols-6" : "md:grid-cols-5";

  return (
    <div
      className={`grid gap-px overflow-hidden border border-white/12 bg-white/12 ${columns}`}
    >
      {items.map((item, index) => {
        const emphasized = item === emphasizedItem;

        return (
          <div
            key={item}
            className={`relative min-h-[150px] p-5 sm:p-6 ${
              emphasized
                ? "border border-aoi-red bg-aoi-red/[0.12]"
                : "bg-aoi-black"
            }`}
          >
            <p
              className={`text-xs font-semibold tracking-[0.2em] ${
                emphasized ? "text-aoi-red" : "text-white/40"
              }`}
            >
              {String(index + 1).padStart(2, "0")}
            </p>
            <p className="mt-8 text-xl font-semibold leading-tight text-white">{item}</p>
          </div>
        );
      })}
    </div>
  );
}

function ReferenceGrid({ items }) {
  return (
    <div className="grid gap-px overflow-hidden border border-white/12 bg-white/12 lg:grid-cols-5">
      {items.map(([title, body], index) => (
        <article key={title} className="bg-aoi-black p-5 sm:p-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-aoi-red">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-6 text-xl font-semibold leading-tight text-white">{title}</h3>
          <p className="mt-4 text-sm leading-7 text-white/58">{body}</p>
        </article>
      ))}
    </div>
  );
}

export default function FrameworksPage() {
  return (
    <PageShell>
      <main>
        <Section className="relative overflow-hidden border-b border-white/10 pt-16 sm:pt-20 lg:pt-24">
          <div>
            <Eyebrow>AO Integrity Framework Series</Eyebrow>
            <h1 className="mt-7 max-w-5xl text-6xl font-semibold leading-[0.96] tracking-tight text-white sm:text-7xl lg:text-8xl">
              What is Runtime Governance?
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-8 text-white/64">
              Runtime Governance verifies that authority remains legitimate at the
              moment execution occurs.
            </p>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/58">
              AO Integrity's canonical frameworks define the domain, map the authority
              lifecycle, trace propagation, and evaluate whether execution remained
              legitimate when it occurred.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href="#framework-library">Explore the Framework Library</Button>
              <Button href="/platform" variant="secondary">
                View ValidateAuthority.ai
              </Button>
            </div>
          </div>
        </Section>

        <Section className="border-b border-white/10 bg-[#050505]">
          <SectionHeading title="Four frameworks describe one execution-time governance architecture.">
            FW-001 defines the domain. FW-002 maps the lifecycle. FW-003 explains
            propagation. FW-004 evaluates execution legitimacy. Together they clarify
            how authority changes before execution creates consequence.
          </SectionHeading>
          <div className="mt-12">
            <Sequence items={runtimeSequence} />
          </div>
        </Section>

        <Section className="border-b border-white/10">
          <SectionHeading title="Runtime Governance operates where authorization becomes action.">
            This layer complements existing identity, authorization, security,
            governance, observability, and compliance systems. It does not replace them.
          </SectionHeading>
          <div className="mt-12">
            <Sequence
              items={architectureSequence}
              emphasizedItem="Runtime Governance"
            />
          </div>
        </Section>

        <Section className="border-b border-white/10 bg-[#050505]">
          <SectionHeading title="Authority, execution, drift, and evidence form one operating model." />
          <div className="mt-12">
            <ReferenceGrid items={operatingModel} />
          </div>
        </Section>

        <Section id="framework-library" className="border-b border-white/10">
          <SectionHeading
            eyebrow="Framework Library"
            title="Published canonical AOI frameworks."
          >
            Each framework addresses a distinct part of the execution-time authority
            model without treating the sequence as a rigid hierarchy.
          </SectionHeading>
          <div className="mt-12 grid gap-5">
            {publishedFrameworks.map((framework) => (
              <FrameworkLibraryCard key={framework.slug} framework={framework} />
            ))}
          </div>
        </Section>

        <Section className="border-b border-white/10 bg-[#050505]">
          <SectionHeading title="A shared vocabulary for execution-time governance." />
          <div className="mt-12 grid gap-px overflow-hidden border border-white/12 bg-white/12 md:grid-cols-2 lg:grid-cols-4">
            {vocabulary.map(([term, definition]) => (
              <article key={term} className="bg-aoi-black p-5 sm:p-6">
                <h3 className="text-lg font-semibold leading-tight text-white">{term}</h3>
                <p className="mt-4 text-sm leading-7 text-white/58">{definition}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section className="border-b border-white/10">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeading title="Frameworks describe the operating model. ValidateAuthority.ai operationalizes it." />
            <div className="overflow-hidden border border-white/12 bg-white/12">
              {platformMapping.map(([frameworkConcept, platformCapability]) => (
                <div
                  key={frameworkConcept}
                  className="grid gap-4 bg-aoi-black p-5 sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:p-6"
                >
                  <p className="text-base font-semibold text-white">{frameworkConcept}</p>
                  <p className="text-sm font-semibold text-aoi-red" aria-hidden="true">
                    -&gt;
                  </p>
                  <p className="text-base leading-7 text-white/64">
                    {platformCapability}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <Button href="/platform" variant="secondary" className="mt-10">
            Explore the Platform
          </Button>
        </Section>

        <Section spacing="tight" className="bg-[#050505]">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <SectionHeading
              size="compact"
              title="Move from Runtime Governance theory to execution-time evidence."
            />
            <div className="flex flex-col gap-3 sm:flex-row lg:mb-1">
              <Button href="/platform">Explore ValidateAuthority.ai</Button>
              <Button href="/research" variant="secondary">
                Read Research
              </Button>
            </div>
          </div>
        </Section>
      </main>
    </PageShell>
  );
}
