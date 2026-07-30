import PageShell from "../../components/layout/PageShell";
import Section from "../../components/layout/Section";
import SectionHeading from "../../components/typography/SectionHeading";
import Button from "../../components/ui/Button";

export const metadata = {
  title: "The Runtime Governance Thesis | AO Integrity Research",
  description:
    "Placeholder for the AO Integrity Runtime Governance Thesis publication.",
};

export default function RuntimeGovernanceThesisPlaceholderPage() {
  return (
    <PageShell>
      <main>
        <Section>
          <SectionHeading
            eyebrow="Research"
            title="The Runtime Governance Thesis"
          >
            This stable publication route is reserved for the Runtime Governance
            Thesis. The public thesis asset has not yet been migrated into the website
            repository.
          </SectionHeading>
          <Button href="/runtime-governance" variant="secondary" className="mt-10">
            Back to Runtime Governance
          </Button>
        </Section>
      </main>
    </PageShell>
  );
}
