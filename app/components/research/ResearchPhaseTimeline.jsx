export default function ResearchPhaseTimeline({ phases, countsByPhase }) {
  return (
    <div className="grid gap-px overflow-hidden border border-white/12 bg-white/12 lg:grid-cols-5">
      {phases.map((phase, index) => (
        <article key={phase} className="bg-aoi-black p-5 sm:p-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-aoi-red">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-6 text-xl font-semibold leading-tight text-white">{phase}</h3>
          <p className="mt-5 text-sm leading-7 text-white/52">
            {countsByPhase[phase] || 0} record{countsByPhase[phase] === 1 ? "" : "s"}
          </p>
        </article>
      ))}
    </div>
  );
}

