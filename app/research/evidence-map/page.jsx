import PageShell from "../../components/layout/PageShell";
import Section from "../../components/layout/Section";
import SectionHeading from "../../components/typography/SectionHeading";
import Eyebrow from "../../components/typography/Eyebrow";
import Button from "../../components/ui/Button";
import ClaimMap from "./ClaimMap";
import corpus from "../../../content/data/runtime-governance-evidence.json";

const EXPECTED_SCHEMA_VERSION = 6;

if (corpus.schema_version !== EXPECTED_SCHEMA_VERSION) {
  throw new Error(
    `Unsupported Runtime Governance evidence schema: expected ${EXPECTED_SCHEMA_VERSION}, received ${corpus.schema_version}`,
  );
}

export const metadata = {
  title: "AOI Runtime Governance Evidence Map | AO Integrity Research",
  description:
    "A public research index of primary research, technical architectures, standards, market developments, and adjacent work contributing to Runtime Governance.",
};

const entries = corpus.entries;
const claims = Object.entries(corpus.claims);

const formatList = (value) => (Array.isArray(value) ? value.join(", ") : value);

const uniqueValues = (field) =>
  Array.from(
    new Set(
      entries.flatMap((entry) => {
        const value = entry[field];
        if (Array.isArray(value)) {
          return value;
        }
        return value === undefined || value === "" ? [] : [value];
      }),
    ),
  ).sort((a, b) => String(a).localeCompare(String(b)));

const filterOptions = [
  ["claim", "Claim", Object.keys(corpus.claims)],
  ["domain", "Domain", uniqueValues("domain")],
  ["type", "Source Type", uniqueValues("type")],
  ["stance", "Stance", uniqueValues("stance")],
  ["relation", "Relation", uniqueValues("relation")],
  ["threat_flag", "Overlap Flag", uniqueValues("threat_flag")],
];

const getParam = (searchParams, key) => {
  const value = searchParams?.[key];
  return Array.isArray(value) ? value[0] : value;
};

const matchesFilter = (entry, field, value) => {
  if (!value) {
    return true;
  }
  if (field === "claim") {
    return entry.claims?.includes(value);
  }
  const fieldValue = entry[field];
  if (Array.isArray(fieldValue)) {
    return fieldValue.includes(value);
  }
  return String(fieldValue) === value;
};

const metricGroups = [
  {
    label: "Corpus facts",
    description: "Derived from stored corpus records.",
    metrics: [
      ["Total sources", entries.length],
      ["Primary sources", entries.filter((entry) => entry.tier === 1).length],
      [
        "External contributions",
        entries.filter((entry) => entry.suggested_by && entry.suggested_by !== "AOI").length,
        "understated",
      ],
    ],
  },
  {
    label: "Classification metrics",
    description: "Counts depend on AOI's current taxonomy.",
    metrics: [
      [
        "Overlap flagged",
        entries.filter((entry) => entry.threat_flag && entry.threat_flag !== "none").length,
      ],
      [
        "Challenge or complicate",
        entries.filter((entry) => ["contests", "complicates"].includes(entry.stance)).length,
      ],
    ],
  },
];

function FilterLink({ field, value, active }) {
  const href = value ? `/research/evidence-map?${field}=${encodeURIComponent(value)}#sources` : "#sources";

  return (
    <a
      href={href}
      className={`inline-flex border px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition ${
        active
          ? "border-aoi-red bg-aoi-red text-white"
          : "border-white/12 text-white/52 hover:border-white/28 hover:text-white"
      }`}
    >
      {value || "All"}
    </a>
  );
}

function SourceMeta({ label, value }) {
  if (value === undefined || value === "" || value === null) {
    return null;
  }

  return (
    <div>
      <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/34">
        {label}
      </dt>
      <dd className="mt-1 text-sm leading-6 text-white/70">{formatList(value)}</dd>
    </div>
  );
}

export default function EvidenceMapPage({ searchParams }) {
  const activeFilters = Object.fromEntries(
    filterOptions.map(([field]) => [field, getParam(searchParams, field)]),
  );
  const filteredEntries = entries.filter((entry) =>
    filterOptions.every(([field]) => matchesFilter(entry, field, activeFilters[field])),
  );

  return (
    <PageShell>
      <main>
        <Section className="border-b border-white/10 pt-16 sm:pt-20 lg:pt-24">
          <div className="max-w-5xl">
            <Eyebrow>Research Index</Eyebrow>
            <h1 className="mt-7 text-5xl font-semibold leading-[1] tracking-tight text-white sm:text-6xl lg:text-7xl">
              AOI Runtime Governance Evidence Map
            </h1>
            <div className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-white/64">
              <p>
                A continuously maintained index of primary research, technical
                architectures, standards, market developments, and adjacent work
                contributing to the emerging discipline of Runtime Governance.
              </p>
              <p>
                The map catalogs supporting, overlapping, adjacent, and challenging
                work. Inclusion does not imply endorsement.
              </p>
              <p className="text-white/76">
                The Evidence Map describes the state of the literature, not the state
                of AO Integrity.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-3 text-sm text-white/56">
              <span className="border border-white/12 px-3 py-2">
                Schema v{corpus.schema_version}
              </span>
              <span className="border border-white/12 px-3 py-2">
                {entries.length} sources
              </span>
              <span className="border border-white/12 px-3 py-2">
                {claims.length} claims
              </span>
            </div>
          </div>
        </Section>

        <Section spacing="compact" className="border-b border-white/10 bg-[#050505]">
          <div className="grid gap-8 lg:grid-cols-2">
            {metricGroups.map((group) => (
              <div key={group.label}>
                <h2 className="text-2xl font-semibold tracking-tight text-white">
                  {group.label}
                </h2>
                <p className="mt-3 text-sm leading-6 text-white/48">{group.description}</p>
                <div className="mt-6 grid gap-px overflow-hidden border border-white/12 bg-white/12 sm:grid-cols-3 lg:grid-cols-none xl:grid-cols-3">
                  {group.metrics.map(([label, value, tone]) => (
                    <div key={label} className="bg-aoi-black p-5">
                      <p
                        className={`text-3xl font-semibold tracking-tight ${
                          tone === "understated" ? "text-white/46" : "text-white"
                        }`}
                      >
                        {value}
                      </p>
                      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/42">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section spacing="compact" className="border-b border-white/10">
          <SectionHeading eyebrow="Claim Map" title="Stored claims and source relationships." size="compact">
            Coverage statements are rendered exactly as stored in the Schema v6 corpus.
          </SectionHeading>

          <ClaimMap claims={claims} entries={entries} />

        </Section>

        <Section id="sources" spacing="compact" className="scroll-mt-28 border-b border-white/10 bg-[#050505]">
          <div className="grid gap-10 lg:grid-cols-[300px_1fr] lg:items-start">
            <aside>
              <Eyebrow>Filters</Eyebrow>
              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white">
                Source index
              </h2>
              <p className="mt-5 text-sm leading-7 text-white/52">
                Filters use only values present in the corpus. Source records display
                stored fields without normalizing dates, sources, summaries, or taxonomy.
              </p>
              <div className="mt-7 space-y-6">
                {filterOptions.map(([field, label, options]) => (
                  <div key={field}>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/38">
                      {label}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <FilterLink field={field} value="" active={!activeFilters[field]} />
                      {options.map((value) => (
                        <FilterLink
                          key={value}
                          field={field}
                          value={value}
                          active={activeFilters[field] === String(value)}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </aside>

            <div>
              <div className="mb-5 flex flex-col gap-3 border-b border-white/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
                <p className="text-sm text-white/54">
                  Showing {filteredEntries.length} of {entries.length} sources.
                </p>
                <a
                  href="/research/evidence-map#sources"
                  className="text-sm font-semibold text-white/54 hover:text-white"
                >
                  Clear filters
                </a>
              </div>

              <div className="space-y-5">
                {filteredEntries.map((entry) => (
                  <article
                    key={entry.id}
                    id={entry.id}
                    className="scroll-mt-28 border border-white/12 bg-aoi-black p-5 sm:p-6"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aoi-red">
                          {entry.id}
                        </p>
                        <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-white">
                          {entry.title}
                        </h3>
                      </div>
                      <a
                        href={`#${entry.id}`}
                        className="shrink-0 border border-white/12 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/46 hover:border-aoi-red hover:text-white"
                      >
                        Permalink
                      </a>
                    </div>

                    <dl className="mt-6 grid gap-x-5 gap-y-4 border-y border-white/10 py-5 sm:grid-cols-2 lg:grid-cols-3">
                      <SourceMeta label="Source" value={entry.source} />
                      <SourceMeta label="Source type" value={entry.type} />
                      <SourceMeta
                        label="Primary or secondary status"
                        value={entry.tier === 1 ? "Primary" : "Secondary"}
                      />
                      <SourceMeta label="Domain" value={entry.domain} />
                      <SourceMeta label="Published" value={entry.published} />
                      <SourceMeta label="Suggested provenance" value={entry.suggested_by} />
                      <SourceMeta label="Claims" value={entry.claims} />
                      <SourceMeta label="Conditions" value={entry.conditions} />
                      <SourceMeta label="Stance" value={entry.stance} />
                      <SourceMeta label="Relation" value={entry.relation} />
                      <SourceMeta label="Strength" value={entry.strength} />
                      <SourceMeta label="Overlap flag" value={entry.threat_flag} />
                      <SourceMeta label="Withdrawn" value={String(entry.withdrawn)} />
                      <SourceMeta label="Withdrawn reason" value={entry.withdrawn_reason} />
                    </dl>

                    <p className="mt-5 text-base leading-8 text-white/68">{entry.note}</p>

                    {entry.url ? (
                      <a
                        href={entry.url}
                        className="mt-5 inline-flex text-sm font-semibold text-white/60 underline decoration-white/20 underline-offset-4 hover:text-white"
                      >
                        Original link
                      </a>
                    ) : null}
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section spacing="compact" className="border-b border-white/10">
          <SectionHeading eyebrow="Methodology" title="How to read this map." size="compact">
            AO Integrity maintains the corpus and performs the classifications.
            Classification is interpretive. Total, primary, and externally contributed
            counts are corpus facts. Other metrics depend on the current taxonomy.
            Records can be corrected or withdrawn. Stable evidence IDs are never
            renumbered or reused. Withdrawn records remain addressable.
          </SectionHeading>
        </Section>

        <Section spacing="tight" className="bg-[#050505]">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <Eyebrow>Contribution</Eyebrow>
              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                What are we missing?
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/62">
                The corpus is intended to include work that supports, overlaps with,
                complicates, or challenges the Runtime Governance thesis. Sources that
                make the thesis less comfortable are especially useful.
              </p>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-white/48">
                Please include the source title, original URL, author, organization,
                or venue as published, publication date, and why it may be relevant.
                Submission does not imply guaranteed inclusion.
              </p>
            </div>
            <Button href="/contact" variant="secondary" className="lg:mb-1">
              Submit a source
            </Button>
          </div>
        </Section>
      </main>
    </PageShell>
  );
}
