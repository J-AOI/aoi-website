import Image from "next/image";
import Link from "next/link";
import PageShell from "../layout/PageShell";
import Section from "../layout/Section";
import SectionHeading from "../typography/SectionHeading";
import Button from "../ui/Button";
import FrameworkNavigation from "./FrameworkNavigation";

export default function FrameworkDetail({ framework, relatedFrameworks }) {
  return (
    <PageShell>
      <main>
        <Section className="border-b border-white/10 pt-16 sm:pt-20 lg:pt-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-aoi-red">
                {framework.number}
              </p>
              <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
                {framework.title}
              </h1>
              <p className="mt-7 max-w-3xl text-xl leading-8 text-white/64">
                {framework.summary}
              </p>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-white/44">
                {framework.status}
              </p>
            </div>
            <a
              href={framework.pdfSrc}
              className="inline-flex min-h-12 items-center justify-center border border-aoi-red bg-aoi-red px-5 text-sm font-semibold tracking-wide text-white transition hover:bg-[#b80f12] lg:mb-1"
              target="_blank"
              rel="noreferrer"
            >
              Download PDF
            </a>
          </div>
        </Section>

        <Section className="border-b border-white/10 bg-[#050505]">
          <SectionHeading size="compact" title="Why it matters">
            {framework.whyItMatters}
          </SectionHeading>
        </Section>

        <Section className="border-b border-white/10">
          <SectionHeading size="compact" title="Key concepts" />
          <div className="mt-10 grid gap-px overflow-hidden border border-white/12 bg-white/12 sm:grid-cols-2 lg:grid-cols-4">
            {framework.keyConcepts.map((concept, index) => (
              <div key={concept} className="bg-aoi-black p-5 sm:p-6">
                <p className="text-xs font-semibold tracking-[0.2em] text-aoi-red">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-5 text-lg font-semibold leading-tight text-white">
                  {concept}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section className="border-b border-white/10 bg-[#050505]">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <SectionHeading
              eyebrow="Framework Artifact"
              size="compact"
              title={`${framework.number} reference document`}
            >
              Published PNG preview with the corresponding PDF reference document.
            </SectionHeading>
            <div className="flex flex-col gap-3 sm:flex-row lg:mb-1">
              <Button href={framework.imageSrc} variant="secondary">
                Open Full Size
              </Button>
              <a
                href={framework.pdfSrc}
                className="inline-flex min-h-12 items-center justify-center border border-white/18 bg-white/0 px-5 text-sm font-semibold tracking-wide text-white transition hover:bg-white/8"
                target="_blank"
                rel="noreferrer"
              >
                Download PDF
              </a>
            </div>
          </div>
          <div className="mt-12 flex justify-center">
            <div className="w-full max-w-5xl">
              <Image
                src={framework.imageSrc}
                alt={framework.imageAlt}
                width={1024}
                height={1536}
                sizes="(min-width: 1280px) 1024px, calc(100vw - 40px)"
                className="h-auto w-full border border-white/12 bg-black"
                priority
              />
            </div>
          </div>
        </Section>

        <Section className="border-b border-white/10">
          <SectionHeading size="compact" title="Key takeaway">
            {framework.keyTakeaway}
          </SectionHeading>
        </Section>

        <Section className="border-b border-white/10 bg-[#050505]">
          <SectionHeading size="compact" title="Related frameworks" />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {relatedFrameworks.map((related) => (
              <Link
                key={related.slug}
                href={related.href}
                className="border border-white/12 bg-white/[0.025] p-5 transition hover:border-aoi-red/60 hover:bg-aoi-red/[0.06]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-aoi-red">
                  {related.number}
                </p>
                <p className="mt-3 text-xl font-semibold leading-tight text-white">
                  {related.title}
                </p>
              </Link>
            ))}
          </div>
        </Section>

        <Section spacing="compact">
          <FrameworkNavigation currentSlug={framework.slug} />
        </Section>
      </main>
    </PageShell>
  );
}
