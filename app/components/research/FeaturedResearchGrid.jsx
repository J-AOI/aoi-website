import Link from "next/link";
import ArtifactBadge from "./ArtifactBadge";

export default function FeaturedResearchGrid({ records, editorialPreview }) {
  if (!records.length) {
    return (
      <div className="border border-white/12 bg-white/[0.025] p-6">
        <p className="text-lg font-semibold text-white">Featured research pending editorial review.</p>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-white/58">
          No RRB records are public as FEATURED yet. Editorial preview shows candidate
          records without changing their publication disposition.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {records.map((record) => (
        <article
          key={record.rrb_number}
          className="flex min-h-[300px] flex-col justify-between border border-white/12 bg-white/[0.025] p-5 sm:p-6"
        >
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-aoi-red">
                RRB-{record.rrb_number}
              </p>
              {editorialPreview ? (
                <span className="border border-aoi-red/40 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-aoi-red">
                  Preview candidate
                </span>
              ) : null}
            </div>
            <h3 className="mt-6 text-2xl font-semibold leading-tight tracking-tight text-white">
              {record.canonical_title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-white/60">
              {record.candidate_card_summary}
            </p>
          </div>

          <div className="mt-8 border-t border-white/10 pt-5">
            <ArtifactBadge status={record.artifact_status} assetType={record.asset_type} />
            <p className="mt-4 text-sm leading-7 text-white/48">{record.central_question}</p>
            <Link
              href="/research/archive"
              className="mt-5 inline-flex text-sm font-semibold text-white hover:text-aoi-red"
            >
              View in archive
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}

