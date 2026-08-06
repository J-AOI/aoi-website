import PageShell from "../components/layout/PageShell";
import Section from "../components/layout/Section";
import SectionHeading from "../components/typography/SectionHeading";
import Button from "../components/ui/Button";
import EditorialPreviewBanner from "../components/research/EditorialPreviewBanner";
import FeaturedResearchGrid from "../components/research/FeaturedResearchGrid";
import ResearchHero from "../components/research/ResearchHero";
import ResearchPhaseTimeline from "../components/research/ResearchPhaseTimeline";
import ThemePathList from "../components/research/ThemePathList";
import {
  getArtifactHref,
  getRrbManifest,
  getRrbRecords,
  isEditorialPreviewEnabled,
} from "../lib/content/rrbManifest";
import {
  getFeaturedRrbRecords,
  getVisibleRrbRecords,
  groupRecordsByField,
} from "../lib/content/rrbFilters";

export const metadata = {
  title: "Research | AO Integrity",
  description:
    "AO Integrity research into what happens when authority and execution diverge.",
};

function withArtifactHrefs(records) {
  return records.map((record) => ({
    ...record,
    artifactHref: getArtifactHref(record),
  }));
}

export default function ResearchPage({ searchParams }) {
  const manifest = getRrbManifest();
  const editorialPreview = isEditorialPreviewEnabled(searchParams);
  const allRecords = getRrbRecords();
  const visibleRecords = getVisibleRrbRecords(allRecords, editorialPreview);
  const featuredRecords = withArtifactHrefs(
    getFeaturedRrbRecords(allRecords, editorialPreview),
  );
  const countsByPhase = groupRecordsByField(allRecords, "research_phase");
  const countsByTheme = groupRecordsByField(allRecords, "primary_theme");

  const phaseCounts = Object.fromEntries(
    Object.entries(countsByPhase).map(([phase, records]) => [phase, records.length]),
  );
  const themeCounts = Object.fromEntries(
    Object.entries(countsByTheme).map(([theme, records]) => [theme, records.length]),
  );

  return (
    <PageShell>
      <EditorialPreviewBanner enabled={editorialPreview} />
      <main>
        <Section className="border-b border-white/10 pt-16 sm:pt-20 lg:pt-24">
          <ResearchHero
            recordCount={editorialPreview ? allRecords.length : visibleRecords.length}
            previewEnabled={editorialPreview}
          />
        </Section>

        <Section spacing="compact" className="border-b border-white/10 bg-[#050505]">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow={editorialPreview ? "Editorial Preview" : "Featured Research"}
              title="Selected Residual Risk Briefs."
              size="compact"
            >
              {editorialPreview
                ? "Preview candidates are shown from the approved scaffold without changing their editorial disposition."
                : "Featured records appear here only after editorial disposition changes to FEATURED."}
            </SectionHeading>
            <Button href={editorialPreview ? "/research/archive?preview=editorial" : "/research/archive"} variant="secondary">
              Browse Archive
            </Button>
          </div>
          <FeaturedResearchGrid
            records={featuredRecords}
            editorialPreview={editorialPreview}
          />
        </Section>

        <Section className="border-b border-white/10">
          <SectionHeading
            eyebrow="Research Development"
            title="How the research question changed."
          >
            The corpus develops from broad residual-risk observations toward identity,
            state, authority, execution consequence, and continuous authority validation.
          </SectionHeading>
          <div className="mt-12">
            <ResearchPhaseTimeline
              phases={manifest.phase_hypothesis}
              countsByPhase={phaseCounts}
            />
          </div>
        </Section>

        <Section className="border-b border-white/10 bg-[#050505]">
          <SectionHeading eyebrow="Theme Paths" title="Four public-facing research themes.">
            Themes use the manifest vocabulary and avoid forcing early briefs into the
            mature Runtime Governance thesis.
          </SectionHeading>
          <div className="mt-12">
            <ThemePathList
              themes={manifest.primary_theme_vocabulary}
              countsByTheme={themeCounts}
            />
          </div>
        </Section>

        <Section className="border-b border-white/10">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <SectionHeading
              eyebrow="Archive"
              title="Browse the Residual Risk Brief archive."
            >
              The archive is manifest-driven and artifact-first. Public visibility is
              controlled by editorial disposition; unpublished records remain hidden
              outside local editorial preview.
            </SectionHeading>
            <Button href={editorialPreview ? "/research/archive?preview=editorial" : "/research/archive"}>
              Open Archive
            </Button>
          </div>
        </Section>

        <Section spacing="tight" className="bg-[#050505]">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <SectionHeading
              eyebrow="Product Bridge"
              title="Research supports execution-time authority validation."
              size="compact"
            >
              AO Integrity turns the authority/execution problem into product workflows
              for validation, evidence, and review.
            </SectionHeading>
            <div className="flex flex-col gap-3 sm:flex-row lg:mb-1">
              <Button href="/platform">Explore Platform</Button>
              <Button href="/contact" variant="secondary">
                Request Briefing
              </Button>
            </div>
          </div>
        </Section>
      </main>
    </PageShell>
  );
}
