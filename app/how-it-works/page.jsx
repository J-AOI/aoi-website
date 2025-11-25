export default function HowItWorksPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-semibold mb-4">How AoI Works</h1>
      <p className="text-white/80 leading-relaxed mb-4">
        AoI sits above your existing systems as a meta-governance layer.
        It normalizes telemetry and policies from identity, compliance,
        and cloud environments into one coherent model.
      </p>
      <ul className="list-disc pl-5 text-white/80 space-y-2 mb-6">
        <li>Ingests and normalizes governance data across tools.</li>
        <li>Detects drift and control decay in near real time.</li>
        <li>Orchestrates intelligent remediation and policy enforcement.</li>
        <li>Provides oversight for autonomous agents operating in critical systems.</li>
      </ul>
      <p className="text-white/80 leading-relaxed">
        The MVP focuses on proving drift detection + unified governance telemetry first.
      </p>
    </section>
  );
}
