const sizes = {
  default: {
    wrapper: "max-w-4xl",
    title: "text-4xl sm:text-5xl lg:text-6xl",
    body: "text-lg leading-8",
  },
  compact: {
    wrapper: "max-w-3xl",
    title: "text-3xl sm:text-4xl lg:text-5xl",
    body: "text-base leading-7",
  },
};

export default function SectionHeading({
  eyebrow,
  title,
  children,
  className = "",
  size = "default",
}) {
  const selected = sizes[size];

  return (
    <div className={`${selected.wrapper} ${className}`}>
      {eyebrow ? (
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.26em] text-aoi-red">
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`${selected.title} font-semibold leading-[1.05] tracking-tight text-white`}>
        {title}
      </h2>
      {children ? (
        <p className={`mt-6 max-w-2xl ${selected.body} text-white/62`}>{children}</p>
      ) : null}
    </div>
  );
}
