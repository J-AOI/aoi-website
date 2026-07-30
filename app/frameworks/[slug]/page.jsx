import { notFound } from "next/navigation";
import FrameworkDetail from "../../components/frameworks/FrameworkDetail";
import {
  getFrameworkBySlug,
  getRelatedFrameworks,
  publishedFrameworks,
} from "../../data/frameworks";

export function generateStaticParams() {
  return publishedFrameworks.map((framework) => ({
    slug: framework.slug,
  }));
}

export function generateMetadata({ params }) {
  const framework = getFrameworkBySlug(params.slug);

  if (!framework) {
    return {
      title: "Framework Not Found | AO Integrity",
    };
  }

  return {
    title: `${framework.number}: ${framework.title} | AO Integrity`,
    description: framework.summary,
  };
}

export default function PublishedFrameworkPage({ params }) {
  const framework = getFrameworkBySlug(params.slug);

  if (!framework) {
    notFound();
  }

  return (
    <FrameworkDetail
      framework={framework}
      relatedFrameworks={getRelatedFrameworks(params.slug)}
    />
  );
}
