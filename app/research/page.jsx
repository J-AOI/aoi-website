import PageShell from "../components/layout/PageShell";
import Section from "../components/layout/Section";
import Eyebrow from "../components/typography/Eyebrow";
import Button from "../components/ui/Button";
import CategorySection from "../components/insights/CategorySection";
import {
  getInsightsByCategory,
  insightCategoryDefinitions,
  insightLibraryStats,
} from "../data/insights";

export default function ResearchPage() {
  return (
    <PageShell>
      <main>
        <Section className="border-b border-white/10 pt-16 sm:pt-20 lg:pt-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_360px] lg:items-end">
            <div>
              <Eyebrow>Research</Eyebrow>
              <h1 className="mt-7 max-w-5xl text-6xl font-semibold leading-[0.96] tracking-tight text-white sm:text-7xl lg:text-8xl">
                Runtime Governance research library.
              </h1>
              <p className="mt-8 max-w-3xl text-xl leading-8 text-white/64">
                Independent observations, market signals, framework commentary,
                executive briefs, and long-form analysis organized for discovery.
              </p>
              <div className="mt-8">
                <Button href="/research/evidence-map" variant="secondary">
                  Open Evidence Map
                </Button>
              </div>
            </div>

            <div className="border border-white/12 bg-white/[0.025]">
              {insightLibraryStats.map(([value, label]) => (
                <div key={label} className="border-b border-white/10 p-5 last:border-b-0">
                  <p className="text-2xl font-semibold tracking-tight text-white">{value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/42">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section spacing="compact" className="border-b border-white/10 bg-[#050505]">
          <div className="grid gap-10 lg:grid-cols-[0.45fr_1fr] lg:items-start">
            <div>
              <Eyebrow>Library Structure</Eyebrow>
              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                Find material by governance question, not publication date.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/60">
                The library is organized around reusable research categories that can
                hold observations, briefs, evidence notes, and articles as the field
                develops.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden border border-white/12 bg-white/12 sm:grid-cols-2">
              {insightCategoryDefinitions.map((category, index) => (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="group min-h-[184px] bg-aoi-black p-5 transition-colors hover:bg-white/[0.035] sm:p-6"
                >
                  <p className="text-xs font-semibold tracking-[0.22em] text-aoi-red">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-7 text-2xl font-semibold leading-tight tracking-tight text-white">
                    {category.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/56">{category.summary}</p>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-white/36 transition-colors group-hover:text-white/56">
                    Browse category
                  </p>
                </a>
              ))}
            </div>
          </div>
        </Section>

        <Section spacing="tight">
          <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Eyebrow>Research Catalog</Eyebrow>
              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                Category-led insight records.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-white/52">
              Representative records establish the content model without treating
              the page as a dated blog feed.
            </p>
          </div>

          {insightCategoryDefinitions.map((category, index) => (
            <CategorySection
              key={category.id}
              category={category}
              insights={getInsightsByCategory(category.id)}
              index={index}
            />
          ))}
        </Section>
      </main>
    </PageShell>
  );
}
