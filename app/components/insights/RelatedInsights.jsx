import InsightCard from "./InsightCard";

export default function RelatedInsights({ insights }) {
  if (!insights.length) {
    return (
      <div className="border border-white/12 bg-white/[0.025] p-6">
        <p className="text-lg font-semibold text-white">No related research yet.</p>
        <p className="mt-3 text-sm leading-7 text-white/58">
          Related resources will appear here as the Runtime Governance knowledge base
          grows.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {insights.map((insight) => (
        <InsightCard key={insight.slug} insight={insight} />
      ))}
    </div>
  );
}
