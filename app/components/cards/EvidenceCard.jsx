const densityStyles = {
  default: "min-h-[178px] p-6 sm:p-7",
  compact: "min-h-[152px] p-5 sm:p-6",
  dense: "min-h-[132px] p-4 sm:p-5",
};

export default function EvidenceCard({ index, title, children, density = "default" }) {
  return (
    <article className={`flex flex-col justify-between border border-white/12 bg-white/[0.025] transition-colors hover:border-white/20 ${densityStyles[density]}`}>
      <div className="text-xs font-semibold tracking-[0.2em] text-aoi-red">
        {String(index).padStart(2, "0")}
      </div>
      <div>
        <h3 className="text-xl font-semibold leading-tight text-white">{title}</h3>
        {children ? <p className="mt-4 text-sm leading-7 text-white/58">{children}</p> : null}
      </div>
    </article>
  );
}
