const themeDescriptions = {
  "Foundational Cyber & Residual Risk":
    "Early observations about residual cyber risk, AI, telemetry, IoT, OT, recovery, and connected infrastructure.",
  "Identity & State":
    "Identity lifecycle, machine identity, inherited access, delegation, persistence, and system state.",
  "Authority & Execution":
    "Authority failure, execution consequence, validity, legitimacy, proof, and admissibility.",
  "Runtime Governance":
    "Continuous authority validation, drift reduction, staleness, governance evidence, and runtime risk.",
};

export default function ThemePathList({ themes, countsByTheme }) {
  return (
    <div className="grid gap-px overflow-hidden border border-white/12 bg-white/12 md:grid-cols-2 xl:grid-cols-4">
      {themes.map((theme, index) => (
        <article key={theme} className="bg-aoi-black p-5 sm:p-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-aoi-red">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-6 text-2xl font-semibold leading-tight text-white">{theme}</h3>
          <p className="mt-4 text-sm leading-7 text-white/58">
            {themeDescriptions[theme]}
          </p>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-white/38">
            {countsByTheme[theme] || 0} records
          </p>
        </article>
      ))}
    </div>
  );
}

