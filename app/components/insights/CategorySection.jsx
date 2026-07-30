import InsightCard from "./InsightCard";

export default function CategorySection({ category, insights, index }) {
  return (
    <section id={category.id} className="scroll-mt-28 border-t border-white/10 py-12 sm:py-14">
      <div className="grid gap-8 lg:grid-cols-[0.42fr_1fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="text-xs font-semibold tracking-[0.22em] text-aoi-red">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            {category.title}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/60">
            {category.summary}
          </p>
          <p className="mt-7 inline-flex border border-white/12 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/48">
            {category.intent}
          </p>
          <p className="mt-4 text-sm leading-7 text-white/42">
            {insights.length} published resource{insights.length === 1 ? "" : "s"}
          </p>
        </div>

        {insights.length ? (
          <div className="grid gap-4 md:grid-cols-2">
            {insights.map((insight) => (
              <InsightCard key={insight.slug} insight={insight} />
            ))}
          </div>
        ) : (
          <div className="border border-white/12 bg-white/[0.025] p-6">
            <p className="text-lg font-semibold text-white">Ready for published content.</p>
            <p className="mt-3 text-sm leading-7 text-white/58">
              Add the next published resource to this category in the research data
              model; the landing page and resource routing will update from the same
              record.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
