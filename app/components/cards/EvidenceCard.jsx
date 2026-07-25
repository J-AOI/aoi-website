export default function EvidenceCard({ index, title, children }) {
  return (
    <article className="flex min-h-[178px] flex-col justify-between border border-white/12 bg-white/[0.025] p-6 transition-colors hover:border-white/20 sm:p-7">
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
