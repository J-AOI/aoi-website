import { assets } from "./data/assets";
import { frameworks } from "./data/frameworks";
import PageShell from "./components/layout/PageShell";
import Section from "./components/layout/Section";
import Button from "./components/ui/Button";
import ProductLockup from "./components/brand/ProductLockup";
import Eyebrow from "./components/typography/Eyebrow";
import SectionHeading from "./components/typography/SectionHeading";
import EvidenceCard from "./components/cards/EvidenceCard";
import FrameworkCard from "./components/cards/FrameworkCard";
import DashboardPreview from "./components/product/DashboardPreview";

const evidenceItems = [
  "Detect changed authority",
  "Validate current execution state",
  "Measure the staleness window",
  "Produce defensible governance evidence",
];

const controlQuestions = [
  ["Identity", "Who is acting?"],
  ["Authentication", "Did they authenticate?"],
  ["Authorization", "What permissions exist?"],
  [
    "AO Integrity",
    "Is the authority behind this execution still legitimate right now?",
  ],
];

const responsibilities = [
  "Identity and access",
  "AI governance",
  "Security architecture",
  "Risk and compliance",
  "Enterprise operations",
];

export default function HomePage() {
  return (
    <PageShell>
      <main>
        <Section className="relative overflow-hidden border-b border-white/10 pt-16 sm:pt-20 lg:pt-24">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(320px,460px)] lg:items-center">
            <div>
              <Eyebrow>Architecture of Integrity</Eyebrow>
              <h1 className="mt-7 max-w-5xl text-6xl font-semibold leading-[0.96] tracking-tight text-white sm:text-7xl lg:text-8xl">
                Authority changes. Execution continues.
              </h1>
              <p className="mt-8 max-w-2xl text-xl leading-8 text-white/64">
                AO Integrity validates authority at execution and shows where operational
                activity no longer matches approved authority.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact">Request Briefing</Button>
                <Button href="/platform" variant="secondary">
                  Explore ValidateAuthority.ai
                </Button>
              </div>
            </div>

            <div className="relative mx-auto flex aspect-square w-full max-w-[460px] items-center justify-center">
              <div className="absolute inset-5 border border-aoi-red/25 bg-white/[0.015]" />
              <div className="absolute inset-0 border border-white/10" />
              <img
                src={assets.framework.compass}
                alt="AOI compass illustration"
                className="relative z-10 w-[92%] object-contain"
              />
            </div>
          </div>
        </Section>

        <Section className="border-b border-white/10 bg-[#050505]">
          <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-end">
            <SectionHeading title="Systems of record are not systems of execution.">
              Access can change in one system while execution remains active in another.
            </SectionHeading>
            <div className="flex min-h-[180px] items-end border border-aoi-red/35 bg-aoi-red/[0.08] p-7">
              <p className="text-3xl font-semibold tracking-tight text-aoi-red">
                Authority Drift
              </p>
            </div>
          </div>
        </Section>

        <Section className="border-b border-white/10">
          <SectionHeading title="Every enterprise already answers these questions." />
          <div className="mt-12 grid gap-px overflow-hidden border border-white/12 bg-white/12 lg:grid-cols-4">
            {controlQuestions.map(([label, question], index) => {
              const isAoi = label === "AO Integrity";

              return (
                <article
                  key={label}
                  className={`min-h-[250px] p-6 sm:p-7 ${
                    isAoi
                      ? "border border-aoi-red bg-aoi-red/[0.12] text-white"
                      : "bg-aoi-black text-white"
                  }`}
                >
                  <p
                    className={`text-xs font-semibold uppercase tracking-[0.22em] ${
                      isAoi ? "text-aoi-red" : "text-white/44"
                    }`}
                  >
                    {label}
                  </p>
                  <p className="mt-10 text-2xl font-semibold leading-tight tracking-tight">
                    {question}
                  </p>
                  <p className="mt-8 text-xs font-semibold tracking-[0.2em] text-white/40">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                </article>
              );
            })}
          </div>
          <p className="mt-8 max-w-3xl text-base leading-7 text-white/58">
            AO Integrity complements existing identity, authentication, and authorization
            investments by validating authority at execution.
          </p>
        </Section>

        <Section className="border-b border-white/10 bg-[#050505]">
          <SectionHeading title="AO Integrity validates execution-time authority.">
            AOI detects changed authority, checks current execution state, measures staleness,
            and produces governance evidence.
          </SectionHeading>
        </Section>

        <Section className="border-b border-white/10">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <Eyebrow>Operational Platform</Eyebrow>
              <div className="mt-6">
                <ProductLockup className="h-auto w-full max-w-[430px]" />
              </div>
              <h2 className="mt-10 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                Operational validation for authority drift.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/62">
                ValidateAuthority.ai turns changed authority and active execution into
                reviewable evidence.
              </p>
              <Button href="/platform" variant="secondary" className="mt-9">
                View Platform
              </Button>
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
          <SectionHeading
            eyebrow="Evidence"
            title="Evidence for the questions governance teams must answer."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {evidenceItems.map((item, index) => (
              <EvidenceCard key={item} index={index + 1} title={item} />
            ))}
          </div>
        </Section>

        <Section className="border-b border-white/10">
          <SectionHeading
            eyebrow="Product Preview"
            title="Authority and execution in one review surface."
          >
            Review changed authority, active execution, staleness, and governance evidence
            from one operational view.
          </SectionHeading>
          <div className="mt-12 lg:mt-14">
            <DashboardPreview />
          </div>
        </Section>

        <Section className="border-b border-white/10 bg-[#050505]">
          <SectionHeading
            eyebrow="Why Now"
            title="Execution is expanding faster than governance."
          >
            Organizations are increasing execution faster than they are increasing governance.
            Identity systems, cloud services, AI-enabled operations, and enterprise workflows
            now move faster than traditional review cycles.
          </SectionHeading>
          <p className="mt-10 max-w-4xl border-l border-aoi-red pl-6 text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl">
            When execution outlives authority, risk becomes operational before it becomes visible.
          </p>
        </Section>

        <Section className="border-b border-white/10">
          <SectionHeading
            eyebrow="Operational Ownership"
            title="Built for teams accountable for execution risk."
          />
          <div className="mt-12 grid gap-px overflow-hidden border border-white/12 bg-white/12 sm:grid-cols-2 lg:grid-cols-5">
            {responsibilities.map((item) => (
              <div key={item} className="bg-aoi-black p-6">
                <p className="text-lg font-semibold leading-tight text-white">{item}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section className="border-b border-white/10 bg-[#050505]">
          <SectionHeading
            eyebrow="Frameworks"
            title="Runtime Governance begins with authority drift."
          >
            AOI's Runtime Governance Blueprint organizes authority drift, staleness,
            execution state, and governance evidence.
          </SectionHeading>
          <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.7fr]">
            {frameworks.map((framework) => (
              <FrameworkCard
                key={framework.href}
                title={framework.title}
                description={framework.description}
                href={framework.href}
                imageSrc={assets.framework.runtimeCore}
                imageAlt="AOI Runtime Core symbol"
              />
            ))}
            <div className="grid gap-px overflow-hidden border border-white/12 bg-white/12">
              {[
                ["Runtime Governance Blueprint", "framework"],
                ["Authority Drift", "risk condition"],
                ["Runtime Core", "framework symbol"],
                ["Compass", "narrative illustration"],
              ].map(([label, value]) => (
                <div key={label} className="grid grid-cols-[1fr_auto] gap-6 bg-aoi-black p-5">
                  <p className="text-sm font-semibold text-white">{label}</p>
                  <p className="text-right text-sm text-white/52">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section className="bg-[#050505]">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <SectionHeading
              eyebrow="Briefing"
              title="Find where authority and execution no longer agree."
            >
              Request an AOI briefing on execution-time authority validation.
            </SectionHeading>
            <Button href="/contact" className="lg:mb-1">
              Request Briefing
            </Button>
          </div>
        </Section>
      </main>
    </PageShell>
  );
}
