import PageShell from "../components/layout/PageShell";
import Section from "../components/layout/Section";
import SectionHeading from "../components/typography/SectionHeading";
import ProductLockup from "../components/brand/ProductLockup";

export default function PlatformPage() {
  return (
    <PageShell>
      <main>
        <Section>
          <ProductLockup className="h-auto w-full max-w-[430px]" />
          <SectionHeading
            className="mt-12"
            eyebrow="Platform"
            title="ValidateAuthority.ai"
          >
            AOI's flagship platform for validating authority at execution.
          </SectionHeading>
        </Section>
      </main>
    </PageShell>
  );
}
