import PageShell from "../components/layout/PageShell";
import Section from "../components/layout/Section";
import SectionHeading from "../components/typography/SectionHeading";
import { insightCategories } from "../data/insights";

export default function InsightsPage() {
  return (
    <PageShell>
      <main>
        <Section>
          <SectionHeading eyebrow="Insights" title="AOI insights." >
            Research, Real Risk Briefs, Executive Minutes, Accumulated Evidence,
            and Articles.
          </SectionHeading>
          <div className="mt-12 grid gap-px overflow-hidden border border-white/12 bg-white/12 sm:grid-cols-2 lg:grid-cols-5">
            {insightCategories.map((category) => (
              <div key={category} className="bg-aoi-black p-6">
                <p className="text-lg font-semibold text-white">{category}</p>
              </div>
            ))}
          </div>
        </Section>
      </main>
    </PageShell>
  );
}
