import Image from "next/image";
import { getInsightCategory } from "../../data/insights";

export default function InsightHero({ insight }) {
  const category = getInsightCategory(insight.category);

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-end">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-aoi-red">
          {category?.title}
        </p>
        <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
          {insight.title}
        </h1>
        <p className="mt-7 max-w-3xl text-xl leading-8 text-white/64">
          {insight.summary}
        </p>
      </div>

      <div className="border border-white/12 bg-white/[0.025]">
        {insight.featuredImage ? (
          <div className="relative aspect-[4/3] border-b border-white/10 bg-[#050505]">
            <Image
              src={insight.featuredImage.src}
              alt={insight.featuredImage.alt}
              fill
              sizes="(min-width: 1024px) 360px, calc(100vw - 40px)"
              className="object-cover"
              priority
            />
          </div>
        ) : null}
        <div className="grid gap-px bg-white/10">
          {[
            ["Type", insight.contentType],
            ["Status", insight.status],
            ["Published", insight.publicationDate ?? "Publication date pending"],
            ["Reading Time", insight.readingTime],
          ].map(([label, value]) => (
            <div key={label} className="bg-aoi-black p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/38">
                {label}
              </p>
              <p className="mt-2 text-base font-semibold leading-6 text-white">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
