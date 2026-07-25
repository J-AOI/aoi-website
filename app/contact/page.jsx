import PageShell from "../components/layout/PageShell";
import Section from "../components/layout/Section";
import SectionHeading from "../components/typography/SectionHeading";
import Button from "../components/ui/Button";

export default function ContactPage() {
  return (
    <PageShell>
      <main>
        <Section>
          <SectionHeading
            eyebrow="Contact"
            title="Request an AOI briefing."
          >
            For strategic conversations about governance continuity and
            ValidateAuthority.ai.
          </SectionHeading>
          <div className="mt-10 border border-white/12 bg-white/[0.025] p-6 sm:p-8">
            <p className="text-sm uppercase tracking-[0.22em] text-white/46">Email</p>
            <a
              href="mailto:justin@aointegrity.ai"
              className="mt-3 inline-block text-xl font-semibold text-white hover:text-aoi-red"
            >
              justin@aointegrity.ai
            </a>
            <div className="mt-8">
              <Button href="mailto:justin@aointegrity.ai">Request Briefing</Button>
            </div>
          </div>
        </Section>
      </main>
    </PageShell>
  );
}
