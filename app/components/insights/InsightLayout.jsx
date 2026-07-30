import Link from "next/link";
import PageShell from "../layout/PageShell";
import Section from "../layout/Section";
import SectionHeading from "../typography/SectionHeading";
import InsightHero from "./InsightHero";
import MarkdownContent from "./MarkdownContent";
import RelatedFrameworks from "./RelatedFrameworks";
import RelatedInsights from "./RelatedInsights";

function InsightNavItem({ label, insight, basePath }) {
  if (!insight) {
    return (
      <div className="border border-white/8 bg-white/[0.015] p-5 text-sm text-white/36">
        {label}
      </div>
    );
  }

  return (
    <Link
      href={`${basePath}/${insight.slug}`}
      className="block border border-white/12 bg-white/[0.025] p-5 transition hover:border-aoi-red/60 hover:bg-aoi-red/[0.06]"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/44">
        {label}
      </p>
      <p className="mt-3 text-sm font-semibold leading-6 text-white">{insight.title}</p>
    </Link>
  );
}

export default function InsightLayout({
  insight,
  markdownContent,
  relatedInsights,
  previousInsight,
  nextInsight,
  basePath = "/research",
  libraryLabel = "Back to Research Library",
}) {
  return (
    <PageShell>
      <main>
        <Section className="border-b border-white/10 pt-16 sm:pt-20 lg:pt-24">
          <InsightHero insight={insight} />
        </Section>

        <Section className="border-b border-white/10 bg-[#050505]">
          <div className="grid gap-10 lg:grid-cols-[0.42fr_1fr] lg:items-start">
            <SectionHeading size="compact" title="Executive Summary" />
            <div className="grid gap-px overflow-hidden border border-white/12 bg-white/12">
              {insight.executiveSummary.map((item, index) => (
                <div key={item} className="bg-aoi-black p-5 sm:p-6">
                  <p className="text-xs font-semibold tracking-[0.2em] text-aoi-red">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-4 text-lg leading-8 text-white/72">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section className="border-b border-white/10">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
            <MarkdownContent markdown={markdownContent} />

            <aside className="lg:sticky lg:top-28">
              <div className="border border-white/12 bg-white/[0.025] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aoi-red">
                  Related Concepts
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {insight.relatedConcepts.map((concept) => (
                    <span
                      key={concept}
                      className="border border-white/12 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/56"
                    >
                      {concept}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </Section>

        <Section className="border-b border-white/10 bg-[#050505]">
          <SectionHeading size="compact" title="Related Frameworks" />
          <div className="mt-10">
            <RelatedFrameworks frameworkSlugs={insight.relatedFrameworks} />
          </div>
        </Section>

        <Section className="border-b border-white/10">
          <SectionHeading size="compact" title="Related Research" />
          <div className="mt-10">
            <RelatedInsights insights={relatedInsights} />
          </div>
        </Section>

        <Section spacing="compact">
          <div className="grid gap-3 md:grid-cols-3">
            <InsightNavItem
              label="Previous Research"
              insight={previousInsight}
              basePath={basePath}
            />
            <Link
              href={basePath}
              className="flex min-h-[120px] items-center justify-center border border-aoi-red/45 bg-aoi-red/[0.1] p-5 text-center text-sm font-semibold tracking-wide text-white transition hover:bg-aoi-red/[0.16]"
            >
              {libraryLabel}
            </Link>
            <InsightNavItem
              label="Next Research"
              insight={nextInsight}
              basePath={basePath}
            />
          </div>
        </Section>
      </main>
    </PageShell>
  );
}
