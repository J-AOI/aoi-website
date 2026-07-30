import { notFound } from "next/navigation";
import InsightLayout from "../../components/insights/InsightLayout";
import {
  getAdjacentInsights,
  getInsightBySlug,
  getRelatedInsights,
  insights,
} from "../../data/insights";
import { getInsightMarkdown } from "../../lib/insightContent";

export function generateStaticParams() {
  return insights.map((insight) => ({
    slug: insight.slug,
  }));
}

export function generateMetadata({ params }) {
  const insight = getInsightBySlug(params.slug);

  if (!insight) {
    return {
      title: "Research Not Found | AO Integrity",
    };
  }

  return {
    title: `${insight.title} | AO Integrity Research`,
    description: insight.summary,
  };
}

export default function InsightPage({ params }) {
  const insight = getInsightBySlug(params.slug);

  if (!insight) {
    notFound();
  }

  const { previous, next } = getAdjacentInsights(params.slug);

  return (
    <InsightLayout
      insight={insight}
      markdownContent={getInsightMarkdown(insight)}
      relatedInsights={getRelatedInsights(params.slug)}
      previousInsight={previous}
      nextInsight={next}
    />
  );
}
