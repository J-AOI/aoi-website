import Button from "../ui/Button";
import Eyebrow from "../typography/Eyebrow";

export default function ResearchHero({ recordCount, previewEnabled }) {
  return (
    <div className="grid gap-12 lg:grid-cols-[1fr_360px] lg:items-end">
      <div>
        <Eyebrow>Research</Eyebrow>
        <h1 className="mt-7 max-w-5xl text-5xl font-semibold leading-[1] tracking-tight text-white sm:text-6xl lg:text-7xl">
          When authority and execution diverge, systems keep acting on decisions no one can defend.
        </h1>
        <p className="mt-8 max-w-3xl text-xl leading-8 text-white/64">
          Systems often treat access, policy, logs, and approvals as if they remain
          valid after conditions change. AO Integrity studies what happens when
          execution continues after authority has drifted, diverged, expired, or
          become unprovable.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href="/platform">Explore Platform</Button>
          <Button href="/research/evidence-map" variant="secondary">
            Review Evidence Map
          </Button>
        </div>
      </div>

      <div className="border border-white/12 bg-white/[0.025]">
        {[
          [String(recordCount), "Publication records"],
          ["4", "Research themes"],
          ["5", "Development phases"],
          [previewEnabled ? "Preview" : "Public", "Visibility mode"],
        ].map(([value, label]) => (
          <div key={label} className="border-b border-white/10 p-5 last:border-b-0">
            <p className="text-2xl font-semibold tracking-tight text-white">{value}</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/42">
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

