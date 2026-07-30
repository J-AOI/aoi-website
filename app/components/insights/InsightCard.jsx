import Link from "next/link";
import { getInsightCategory } from "../../data/insights";

export default function InsightCard({ insight }) {
  const category = getInsightCategory(insight.category);

  return (
    <article className="flex min-h-[286px] flex-col justify-between border border-white/12 bg-white/[0.025] p-5 transition-colors hover:border-aoi-red/60 hover:bg-aoi-red/[0.04] sm:p-6">
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-aoi-red">
            {insight.contentType}
          </p>
          <span className="border border-white/12 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/48">
            {insight.readingTime}
          </span>
        </div>
        <Link href={`/research/${insight.slug}`} className="group/link">
          <h3 className="mt-6 text-2xl font-semibold leading-tight tracking-tight text-white group-hover/link:text-white">
            {insight.title}
          </h3>
        </Link>
        <p className="mt-4 text-sm leading-7 text-white/60">{insight.summary}</p>
      </div>

      <div className="mt-8">
        <div className="flex flex-wrap gap-2">
          {insight.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="border border-white/10 bg-black/30 px-2.5 py-1 text-xs leading-5 text-white/56">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/38">
            {category?.title}
          </p>
          <Link
            href={`/research/${insight.slug}`}
            className="text-sm font-semibold text-white transition hover:text-aoi-red"
          >
            Open Resource
          </Link>
        </div>
      </div>
    </article>
  );
}
