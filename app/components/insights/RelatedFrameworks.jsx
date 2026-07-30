import Link from "next/link";
import { publishedFrameworks } from "../../data/frameworks";

export default function RelatedFrameworks({ frameworkSlugs }) {
  const frameworks = publishedFrameworks.filter((framework) =>
    frameworkSlugs.includes(framework.slug)
  );

  if (!frameworks.length) {
    return null;
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {frameworks.map((framework) => (
        <Link
          key={framework.slug}
          href={framework.href}
          className="border border-white/12 bg-white/[0.025] p-5 transition hover:border-aoi-red/60 hover:bg-aoi-red/[0.06]"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-aoi-red">
            {framework.number}
          </p>
          <p className="mt-3 text-xl font-semibold leading-tight text-white">
            {framework.title}
          </p>
          <p className="mt-4 text-sm leading-7 text-white/56">{framework.summary}</p>
        </Link>
      ))}
    </div>
  );
}
