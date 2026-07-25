import PageShell from "../components/layout/PageShell";
import Section from "../components/layout/Section";
import SectionHeading from "../components/typography/SectionHeading";

export default function CompanyPage() {
  return (
    <PageShell>
      <main>
        <Section>
          <SectionHeading
            eyebrow="Company"
            title="AOI"
          >
            Architecture of Integrity.
          </SectionHeading>
        </Section>
      </main>
    </PageShell>
  );
}
