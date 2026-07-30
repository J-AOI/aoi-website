import Link from "next/link";
import { publishedFrameworks } from "../../data/frameworks";

function NavItem({ label, framework }) {
  if (!framework) {
    return (
      <div className="border border-white/8 bg-white/[0.015] p-5 text-sm text-white/36">
        {label}
      </div>
    );
  }

  return (
    <Link
      href={framework.href}
      className="block border border-white/12 bg-white/[0.025] p-5 transition hover:border-aoi-red/60 hover:bg-aoi-red/[0.06]"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/44">
        {label}
      </p>
      <p className="mt-3 text-sm font-semibold leading-6 text-white">
        {framework.number} {framework.title}
      </p>
    </Link>
  );
}

export default function FrameworkNavigation({ currentSlug }) {
  const currentIndex = publishedFrameworks.findIndex(
    (framework) => framework.slug === currentSlug
  );
  const previous = currentIndex > 0 ? publishedFrameworks[currentIndex - 1] : null;
  const next =
    currentIndex >= 0 && currentIndex < publishedFrameworks.length - 1
      ? publishedFrameworks[currentIndex + 1]
      : null;

  return (
    <div className="grid gap-3 md:grid-cols-3">
      <NavItem label="Previous Framework" framework={previous} />
      <Link
        href="/frameworks#framework-library"
        className="flex min-h-[120px] items-center justify-center border border-aoi-red/45 bg-aoi-red/[0.1] p-5 text-center text-sm font-semibold tracking-wide text-white transition hover:bg-aoi-red/[0.16]"
      >
        Back to Framework Library
      </Link>
      <NavItem label="Next Framework" framework={next} />
    </div>
  );
}
