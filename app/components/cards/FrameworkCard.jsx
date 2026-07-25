import Button from "../ui/Button";

export default function FrameworkCard({ title, description, href, imageSrc, imageAlt }) {
  return (
    <article className="grid gap-8 border border-white/12 bg-white/[0.025] p-6 sm:p-8 lg:grid-cols-[1fr_190px] lg:items-center">
      <div>
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-aoi-red">
          Framework
        </p>
        <h3 className="text-3xl font-semibold tracking-tight text-white">{title}</h3>
        <p className="mt-4 max-w-2xl text-base leading-7 text-white/62">{description}</p>
        <Button href={href} variant="secondary" className="mt-8">
          View Framework
        </Button>
      </div>
      {imageSrc ? (
        <div className="flex justify-start lg:justify-end">
          <div className="flex h-40 w-40 items-center justify-center border border-white/10 bg-black/40">
            <img src={imageSrc} alt={imageAlt} className="h-28 w-28 object-contain" />
          </div>
        </div>
      ) : null}
    </article>
  );
}
