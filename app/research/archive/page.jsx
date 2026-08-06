import PageShell from "../../components/layout/PageShell";
import Section from "../../components/layout/Section";
import SectionHeading from "../../components/typography/SectionHeading";
import Button from "../../components/ui/Button";
import ArchiveTable from "../../components/research/ArchiveTable";
import EditorialPreviewBanner from "../../components/research/EditorialPreviewBanner";
import {
  getArtifactHref,
  getMissingRrbRecords,
  getNoncanonicalCompanions,
  getRrbManifest,
  getRrbRecords,
  isEditorialPreviewEnabled,
} from "../../lib/content/rrbManifest";
import {
  filterRrbRecords,
  getUniqueAssetTypes,
  getVisibleRrbRecords,
} from "../../lib/content/rrbFilters";

export const metadata = {
  title: "Residual Risk Brief Archive | AO Integrity Research",
  description:
    "Manifest-driven archive of AO Integrity Residual Risk Brief publication records.",
};

function normalizeSearchParams(searchParams = {}) {
  return {
    query: Array.isArray(searchParams.q) ? searchParams.q[0] : searchParams.q,
    primary_theme: Array.isArray(searchParams.theme)
      ? searchParams.theme[0]
      : searchParams.theme,
    research_phase: Array.isArray(searchParams.phase)
      ? searchParams.phase[0]
      : searchParams.phase,
    asset_type: Array.isArray(searchParams.asset) ? searchParams.asset[0] : searchParams.asset,
  };
}

function withArtifactHrefs(records) {
  return records.map((record) => ({
    ...record,
    artifactHref: getArtifactHref(record),
  }));
}

function EditorialMissingRecords({ records }) {
  if (!records.length) {
    return null;
  }

  return (
    <div className="mt-10 border border-white/12 bg-white/[0.025] p-5 sm:p-6">
      <h2 className="text-2xl font-semibold tracking-tight text-white">
        Editorial-only missing records
      </h2>
      <div className="mt-5 grid gap-px overflow-hidden border border-white/12 bg-white/12 sm:grid-cols-2">
        {records.map((record) => (
          <div key={record.rrb_number} className="bg-aoi-black p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aoi-red">
              RRB-{record.rrb_number}
            </p>
            <p className="mt-3 text-sm leading-7 text-white/58">{record.notes}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function EditorialCompanions({ records }) {
  if (!records.length) {
    return null;
  }

  return (
    <div className="mt-10 border border-white/12 bg-white/[0.025] p-5 sm:p-6">
      <h2 className="text-2xl font-semibold tracking-tight text-white">
        Editorial-only noncanonical companions
      </h2>
      <div className="mt-5 divide-y divide-white/10 border border-white/12">
        {records.map((record) => (
          <article key={record.current_filename} className="bg-aoi-black p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aoi-red">
              Associated RRB-{record.associated_rrb_number}
            </p>
            <h3 className="mt-3 text-lg font-semibold leading-tight text-white">
              {record.internal_title}
            </h3>
            <p className="mt-3 break-words text-xs leading-6 text-white/42">
              {record.current_filename}
            </p>
            <p className="mt-3 text-sm leading-7 text-white/54">{record.notes}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default function ResearchArchivePage({ searchParams }) {
  const manifest = getRrbManifest();
  const editorialPreview = isEditorialPreviewEnabled(searchParams);
  const filters = normalizeSearchParams(searchParams);
  const visibleRecords = getVisibleRrbRecords(getRrbRecords(), editorialPreview);
  const filteredRecords = withArtifactHrefs(filterRrbRecords(visibleRecords, filters));

  return (
    <PageShell>
      <EditorialPreviewBanner enabled={editorialPreview} />
      <main>
        <Section className="border-b border-white/10 pt-16 sm:pt-20 lg:pt-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <SectionHeading
              eyebrow="Residual Risk Brief Archive"
              title="Manifest-driven RRB archive."
            >
              Archive visibility follows editorial disposition. Public mode hides
              unpublished records, missing records, and noncanonical companions.
            </SectionHeading>
            <Button href={editorialPreview ? "/research?preview=editorial" : "/research"} variant="secondary">
              Back to Research
            </Button>
          </div>
        </Section>

        <Section spacing="compact" className="border-b border-white/10 bg-[#050505]">
          <ArchiveTable
            records={filteredRecords}
            filters={filters}
            themes={manifest.primary_theme_vocabulary}
            phases={manifest.phase_hypothesis}
            assetTypes={getUniqueAssetTypes(getRrbRecords())}
            editorialPreview={editorialPreview}
          />

          {editorialPreview ? (
            <>
              <EditorialMissingRecords records={getMissingRrbRecords()} />
              <EditorialCompanions records={getNoncanonicalCompanions()} />
            </>
          ) : null}
        </Section>

        <Section spacing="tight">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <SectionHeading
              title="Research remains a product-supporting surface."
              size="compact"
            >
              The archive is designed for review and credibility. Platform, Evidence,
              Pilot, and Contact paths remain the primary commercial routes.
            </SectionHeading>
            <Button href="/contact" variant="secondary">
              Request Briefing
            </Button>
          </div>
        </Section>
      </main>
    </PageShell>
  );
}
