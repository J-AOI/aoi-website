import PageShell from "../components/layout/PageShell";
import Section from "../components/layout/Section";
import SectionHeading from "../components/typography/SectionHeading";
import FrameworkCard from "../components/cards/FrameworkCard";
import { frameworks } from "../data/frameworks";
import { assets } from "../data/assets";

export default function FrameworksPage() {
  return (
    <PageShell>
      <main>
        <Section>
          <SectionHeading
            eyebrow="Frameworks"
            title="AOI's framework system."
          >
            A growing structure for understanding governance at runtime.
          </SectionHeading>
          <div className="mt-12">
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
          </div>
        </Section>
      </main>
    </PageShell>
  );
}
