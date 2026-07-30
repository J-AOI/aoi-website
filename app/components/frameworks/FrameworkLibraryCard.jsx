import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";

export default function FrameworkLibraryCard({ framework }) {
  return (
    <article className="grid gap-6 border border-white/12 bg-white/[0.025] p-5 sm:p-6 lg:grid-cols-[190px_1fr_auto] lg:items-center">
      <Link
        href={framework.href}
        className="block border border-white/12 bg-black p-2 transition hover:border-aoi-red/60"
        aria-label={`View ${framework.number}: ${framework.title}`}
      >
        <div className="relative aspect-[2/3] w-full overflow-hidden bg-[#050505]">
          <Image
            src={framework.imageSrc}
            alt={framework.imageAlt}
            fill
            sizes="(min-width: 1024px) 190px, (min-width: 640px) 220px, 45vw"
            className="object-contain"
          />
        </div>
      </Link>

      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-aoi-red">
          {framework.number}
        </p>
        <h3 className="mt-3 max-w-3xl text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl">
          {framework.title}
        </h3>
        <p className="mt-4 max-w-3xl text-base leading-7 text-white/62">
          {framework.summary}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {framework.keyConcepts.map((concept) => (
            <span
              key={concept}
              className="border border-white/12 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/56"
            >
              {concept}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3 lg:min-w-[160px]">
        <Button href={framework.href} variant="secondary">
          View Framework
        </Button>
        <a
          href={framework.pdfSrc}
          className="inline-flex min-h-12 items-center justify-center border border-white/18 bg-white/0 px-5 text-sm font-semibold tracking-wide text-white transition hover:bg-white/8"
          target="_blank"
          rel="noreferrer"
        >
          Download PDF
        </a>
      </div>
    </article>
  );
}
