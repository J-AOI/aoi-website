export default function SectionHeading({ eyebrow, title, children, className = "" }) {
  return (
    <div className={`max-w-4xl ${className}`}>
      {eyebrow ? (
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.26em] text-aoi-red">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {children ? (
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/62">{children}</p>
      ) : null}
    </div>
  );
}
