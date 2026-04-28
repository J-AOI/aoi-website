import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0F14] text-white px-6 py-12">

      {/* HERO */}
      <section className="max-w-5xl mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
          Authority is assumed.<br />
          <span className="text-[#00C2FF]">
            AO Integrity verifies it at execution.
          </span>
        </h1>

        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Systems say access is removed. Execution proves otherwise.
        </p>

        <p className="text-md text-gray-400 max-w-2xl mx-auto">
          AO Integrity produces evidence of authority drift at the moment execution occurs.
        </p>

        {/* CTA */}
        <div className="flex justify-center gap-4 pt-4" aria-label="Primary actions">
          <Link
            href="/contact"
            className="bg-[#00C2FF] text-black px-6 py-3 rounded-xl font-medium hover:opacity-90"
          >
            Validate Authority in Your Environment
          </Link>

          <Link
            href="/how-it-works"
            className="border border-gray-600 px-6 py-3 rounded-xl hover:border-white"
          >
            See a Drift Scenario
          </Link>
        </div>
      </section>

      {/* GAP SECTION */}
      <section className="max-w-4xl mx-auto mt-24 space-y-10">

        <div className="text-center space-y-4">
          <h2 className="text-3xl font-semibold">The Gap</h2>

          <p className="text-gray-400">
            Systems define access. Systems monitor behavior.
            <br />
            Neither system is responsible for proving authority at execution.
          </p>
        </div>

        {/* ORIGINAL DRIFT BLOCK */}
        <div className="bg-[#111A23] rounded-2xl p-6 font-mono text-sm whitespace-pre-line text-gray-300">
{`User disabled in one system
Still active in another
Token remains valid

Execution proceeds because effect is still possible without proof of authority.`}
        </div>

        {/* NEW: EXPECTED vs ACTUAL BLOCK */}
        <div className="bg-[#0F1720] border border-gray-700 rounded-2xl p-6 font-mono text-sm text-gray-300 space-y-4">
          <div>
            <span className="text-gray-500">Expected:</span>{" "}
            <span className="text-green-400">Access revoked</span>
          </div>

          <div>
            <span className="text-gray-500">Actual:</span>{" "}
            <span className="text-red-400">Execution still succeeds</span>
          </div>

          <div className="pt-2 text-[#00C2FF]">
            → Authority state conflict resolved by execution, not validation
          </div>
        </div>

      </section>

      {/* POSITIONING CLOSE */}
      <section className="max-w-4xl mx-auto mt-24 text-center space-y-6">
        <h3 className="text-2xl font-semibold">
          Execution doesn’t validate authority.
        </h3>

        <p className="text-gray-400 max-w-2xl mx-auto">
          It resolves whatever state exists across systems.
          <br />
          AO Integrity verifies whether that execution should be possible at all.
        </p>
      </section>

    </main>
  );
}