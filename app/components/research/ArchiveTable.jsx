import ArtifactBadge from "./ArtifactBadge";
import SourceStatusBadge from "./SourceStatusBadge";

function FilterSelect({ name, label, value, options }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/38">
        {label}
      </span>
      <select
        name={name}
        defaultValue={value || ""}
        className="mt-3 w-full border border-white/16 bg-aoi-black px-3 py-3 text-sm text-white outline-none transition focus:border-aoi-red focus:ring-2 focus:ring-aoi-red/35"
      >
        <option value="">All</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

export default function ArchiveTable({
  records,
  filters,
  themes,
  phases,
  assetTypes,
  editorialPreview,
}) {
  return (
    <div>
      <form className="grid gap-4 border border-white/12 bg-white/[0.025] p-5 md:grid-cols-2 xl:grid-cols-[1.2fr_1fr_1fr_0.7fr_auto] xl:items-end">
        {editorialPreview ? <input type="hidden" name="preview" value="editorial" /> : null}
        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/38">
            RRB number or title
          </span>
          <input
            name="q"
            defaultValue={filters.query || ""}
            placeholder="Search archive"
            className="mt-3 w-full border border-white/16 bg-aoi-black px-3 py-3 text-sm text-white outline-none transition placeholder:text-white/28 focus:border-aoi-red focus:ring-2 focus:ring-aoi-red/35"
          />
        </label>
        <FilterSelect
          name="theme"
          label="Theme"
          value={filters.primary_theme}
          options={themes}
        />
        <FilterSelect
          name="phase"
          label="Phase"
          value={filters.research_phase}
          options={phases}
        />
        <FilterSelect
          name="asset"
          label="Asset"
          value={filters.asset_type}
          options={assetTypes}
        />
        <button className="min-h-12 border border-aoi-red bg-aoi-red px-5 text-sm font-semibold text-white transition hover:bg-[#b80f12]">
          Apply
        </button>
      </form>

      <div className="mt-6 border border-white/12">
        <div className="border-b border-white/10 bg-white/[0.04] p-4 text-sm text-white/54">
          Showing {records.length} record{records.length === 1 ? "" : "s"}.
        </div>

        {records.length ? (
          <div className="divide-y divide-white/10">
            {records.map((record) => (
              <article key={record.rrb_number} className="bg-aoi-black p-5 sm:p-6">
                <div className="grid gap-5 lg:grid-cols-[110px_1fr_280px] lg:items-start">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aoi-red">
                      RRB-{record.rrb_number}
                    </p>
                    {editorialPreview ? (
                      <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/38">
                        {record.website_disposition}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold leading-tight tracking-tight text-white">
                      {record.canonical_title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-white/58">
                      {record.short_abstract}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-white/46">
                      <span className="font-semibold text-white/62">Question:</span>{" "}
                      {record.central_question}
                    </p>
                    {editorialPreview && record.current_filename ? (
                      <p className="mt-4 break-words text-xs leading-6 text-white/38">
                        Expected artifact filename: {record.current_filename}
                      </p>
                    ) : null}
                  </div>

                  <div className="flex flex-col gap-3">
                    <ArtifactBadge
                      status={record.artifact_status}
                      assetType={record.asset_type}
                    />
                    {editorialPreview ? (
                      <SourceStatusBadge status={record.source_status} />
                    ) : null}
                    <span className="border border-white/12 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/46">
                      {record.primary_theme}
                    </span>
                    {record.artifactHref ? (
                      <a
                        href={record.artifactHref}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-11 items-center justify-center border border-white/18 px-4 text-sm font-semibold text-white transition hover:bg-white/8"
                      >
                        Open artifact
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="bg-aoi-black p-6">
            <p className="text-lg font-semibold text-white">No public archive records yet.</p>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/58">
              Records remain hidden until editorial disposition changes to FEATURED,
              PUBLISH, or ARCHIVE.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
