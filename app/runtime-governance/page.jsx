import Image from "next/image";
import PageShell from "../components/layout/PageShell";
import Section from "../components/layout/Section";
import SectionHeading from "../components/typography/SectionHeading";
import Eyebrow from "../components/typography/Eyebrow";
import Button from "../components/ui/Button";

const conceptLinks = [
  ["Frameworks", "/frameworks", "Runtime Governance definitions and operating models."],
  ["Research", "/research", "Briefs, commentary, and evidence around execution-time authority."],
  ["Platform", "/platform", "ValidateAuthority.ai implementation surface for authority drift."],
];

const instrumentLabels = ["Authority", "Execution", "Evidence", "Evaluation", "Drift"];

export const metadata = {
  title: "Runtime Governance | AO Integrity",
  description:
    "Runtime Governance defines how enterprises evaluate whether autonomous execution remains a legitimate exercise of conferred authority.",
};

export default function RuntimeGovernancePage() {
  return (
    <PageShell>
      <main>
        <Section className="relative overflow-hidden border-b border-white/10 pt-16 sm:pt-20 lg:pt-24">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(320px,460px)] lg:items-center">
            <div>
              <Eyebrow>ENTERPRISE GOVERNANCE · EMERGING DISCIPLINE</Eyebrow>
              <h1 className="mt-7 max-w-5xl text-6xl font-semibold leading-[0.96] tracking-tight text-white sm:text-7xl lg:text-8xl">
                Runtime Governance
              </h1>
              <p className="mt-8 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                Autonomous execution changes the object of enterprise governance.
              </p>
              <p className="mt-7 max-w-2xl text-xl leading-8 text-white/64">
                Runtime Governance defines how organizations evaluate whether a
                specific execution remains a legitimate exercise of conferred authority
                at the moment work occurs.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button href="/research/runtime-governance-thesis">Read the Thesis</Button>
                <Button href="/frameworks" variant="secondary">
                  Explore the Frameworks
                </Button>
              </div>
            </div>

            <div className="mx-auto w-full max-w-[520px]">
              <Image
                src="/assets/instruments/aoi-instrument-v2-main-tight.png"
                alt="AOI Runtime Governance Instrument illustrating authority, execution, evidence, and governance evaluation."
                width={580}
                height={545}
                priority
                sizes="(min-width: 1024px) 520px, 100vw"
                className="h-auto w-full"
              />
            </div>
          </div>
        </Section>

        <Section spacing="compact" className="border-b border-white/10 bg-[#050505]">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-center">
            <div>
              <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                The Runtime Governance Instrument
              </h2>
              <div className="mt-7 max-w-3xl space-y-5 text-lg leading-8 text-white/62">
                <p>The AOI Instrument is the visual language of Runtime Governance.</p>
                <p>
                  It represents the continuous evaluation of whether execution remains
                  a legitimate exercise of conferred authority.
                </p>
                <p>
                  Throughout AO Integrity research, frameworks, and implementation
                  guidance, the instrument provides a common reference for
                  understanding the relationships between authority, execution,
                  evidence, evaluation, and operational drift.
                </p>
                <p>
                  Rather than serving as a diagram for a single product or framework,
                  the instrument establishes a consistent visual vocabulary used across
                  the Runtime Governance discipline.
                </p>
              </div>
              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-5">
                {instrumentLabels.map((label) => (
                  <span
                    key={label}
                    className="text-xs font-semibold uppercase tracking-[0.22em] text-white/46"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <Image
                src="/assets/instruments/aoi-instrument-v2-main.png"
                alt="AOI Runtime Governance Instrument illustrating authority, execution, evidence, and governance evaluation."
                width={580}
                height={545}
                sizes="(min-width: 1024px) 280px, 70vw"
                className="h-auto w-full max-w-[280px]"
              />
            </div>
          </div>
        </Section>

        <Section spacing="compact" className="border-b border-white/10">
          <SectionHeading
            size="compact"
            title="AO Integrity organizes Runtime Governance as research, frameworks, and implementation."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {conceptLinks.map(([title, href, body]) => (
              <a
                key={href}
                href={href}
                className="block border border-white/12 bg-white/[0.025] p-6 transition hover:border-aoi-red/60 hover:bg-aoi-red/[0.06]"
              >
                <h2 className="text-xl font-semibold leading-tight text-white">{title}</h2>
                <p className="mt-4 text-sm leading-7 text-white/58">{body}</p>
              </a>
            ))}
          </div>
        </Section>

        <Section spacing="tight" className="bg-[#050505]">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <SectionHeading
              size="compact"
              title="Move from static approval to execution-time evidence."
            >
              Validate authority when execution occurs and preserve the evidence needed
              for governance review.
            </SectionHeading>
            <Button href="/platform" className="lg:mb-1">
              Explore Platform
            </Button>
          </div>
        </Section>
      </main>
    </PageShell>
  );
}
