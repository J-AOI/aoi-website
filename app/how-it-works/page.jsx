import Link from "next/link";

export default function HowItWorks() {
  return (
    <main className="bg-[#080C10] text-white">

      {/* HERO */}
      <section className="text-center px-6 pt-20 pb-16">
        <p className="aoi-mono text-[10px] text-[#00C2FF] uppercase tracking-[0.18em] mb-4">
          Execution Validation Engine
        </p>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          How It Works
        </h1>

        <p className="aoi-mono text-[12px] text-[#7A8FA0] leading-relaxed max-w-md mx-auto">
          Authority is not lost in a single system.
          <br />
          It drifts across systems — and execution continues anyway.
        </p>
      </section>

      {/* DIVIDER */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#1E2D3A] to-transparent mx-6" />

      {/* STEPS */}
      <section className="max-w-[1100px] mx-auto px-6">

        {/* STEP 1 */}
        <div className="grid grid-cols-[48px_1fr] gap-x-6 py-10 border-b border-[#0D1620]">
          <div className="flex flex-col items-center">
            <div className="w-9 h-9 rounded-full bg-[#0A1520] border border-[#1A2830] flex items-center justify-center text-[#00C2FF] text-xs aoi-mono">
              01
            </div>
            <div className="w-px bg-[#0D1620] flex-1 mt-2" />
          </div>

          <div>
            <h2 className="text-lg font-bold mb-2">Access is removed</h2>
            <p className="aoi-mono text-[12px] text-[#7A8FA0] mb-3">
              A user is disabled. The system of record reflects the change.
            </p>

            <div className="bg-[#040810] border border-[#1A2830] p-3 aoi-mono text-[11px] text-[#B6C2CF]">
              JumpCloud: Disabled
            </div>
          </div>
        </div>

        {/* STEP 2 */}
        <div className="grid grid-cols-[48px_1fr] gap-x-6 py-10 border-b border-[#0D1620]">
          <div className="flex flex-col items-center">
            <div className="w-9 h-9 rounded-full bg-[#0A1520] border border-[#1A2830] flex items-center justify-center text-[#00C2FF] text-xs aoi-mono">
              02
            </div>
            <div className="w-px bg-[#0D1620] flex-1 mt-2" />
          </div>

          <div>
            <h2 className="text-lg font-bold mb-2">Systems diverge</h2>
            <p className="aoi-mono text-[12px] text-[#7A8FA0] mb-4">
              Other systems do not reflect the same state. No reconciliation occurs.
            </p>

            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="bg-[#040810] border border-[#1A2830] p-3">
                <p className="aoi-mono text-[10px] text-[#3A5060] mb-1">JumpCloud</p>
                <p className="aoi-mono text-[12px] text-red-400">Disabled</p>
              </div>

              <div className="bg-[#040810] border border-[#1A2830] p-3">
                <p className="aoi-mono text-[10px] text-[#3A5060] mb-1">Entra ID</p>
                <p className="aoi-mono text-[12px] text-green-400">Enabled</p>
              </div>
            </div>

            <div className="inline-block bg-[#002A33] border border-[#004E5E] px-3 py-1 text-[11px] aoi-mono text-[#00C2FF]">
              STATE_MISMATCH → AUTHORITY_DRIFT
            </div>
          </div>
        </div>

        {/* STEP 3 */}
        <div className="grid grid-cols-[48px_1fr] gap-x-6 py-10 border-b border-[#0D1620]">
          <div className="flex flex-col items-center">
            <div className="w-9 h-9 rounded-full bg-[#0A1520] border border-[#1A2830] flex items-center justify-center text-[#00C2FF] text-xs aoi-mono">
              03
            </div>
            <div className="w-px bg-[#0D1620] flex-1 mt-2" />
          </div>

          <div>
            <h2 className="text-lg font-bold mb-2">Execution still succeeds</h2>

            <p className="aoi-mono text-[12px] text-[#7A8FA0] mb-4">
              Authentication tokens remain valid. Access continues. Execution is not blocked.
            </p>

            <div className="bg-[#040810] border border-[#1A2830] border-t-2 border-red-400 p-4 mb-4">
              <div className="flex justify-between text-[11px] aoi-mono border-b border-[#0D1620] pb-2 mb-2">
                <span className="text-[#3A5060]">Expected</span>
                <span className="text-green-400">Access revoked</span>
              </div>
              <div className="flex justify-between text-[11px] aoi-mono">
                <span className="text-[#3A5060]">Actual</span>
                <span className="text-red-400">Execution succeeds</span>
              </div>
            </div>

            <p className="text-white font-bold border-l-2 border-[#00C2FF] pl-3 mb-4">
              Execution succeeded under invalid authority.
            </p>

            {/* EVIDENCE */}
            <div className="bg-[#040810] border border-[#1A2830] border-l-4 border-[#00C2FF] p-4">
              <div className="flex justify-between mb-3">
                <span className="aoi-mono text-[10px] text-[#00C2FF] uppercase">
                  Execution Evidence
                </span>
                <span className="aoi-mono text-[11px] text-red-400">
                  Score 30 — HIGH RISK
                </span>
              </div>

              <div className="border-t border-[#0D1620] pt-3 space-y-2 text-[11px] aoi-mono">
                <div className="flex justify-between">
                  <span className="text-[#3A5060]">Identity</span>
                  <span>alice.chen@example.com</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-[#3A5060]">JumpCloud</span>
                  <span className="text-red-400">Disabled</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-[#3A5060]">Entra ID</span>
                  <span className="text-green-400">Enabled</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-[#3A5060]">Drift Duration</span>
                  <span>30 days</span>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-[#0D1620] text-[#00C2FF] text-[11px] aoi-mono">
                → Execution succeeded under invalid authority
              </div>
            </div>
          </div>
        </div>

        {/* STEP 4 */}
        <div className="grid grid-cols-[48px_1fr] gap-x-6 py-10 border-b border-[#0D1620]">
          <div className="flex flex-col items-center">
            <div className="w-9 h-9 rounded-full bg-[#0A1520] border border-[#1A2830] flex items-center justify-center text-[#00C2FF] text-xs aoi-mono">
              04
            </div>
            <div className="w-px bg-[#0D1620] flex-1 mt-2" />
          </div>

          <div>
            <h2 className="text-lg font-bold mb-2">Drift persists over time</h2>

            <div className="grid grid-cols-3 gap-2 text-[11px] aoi-mono">
              <div className="bg-[#040810] p-3 border border-[#0D1620]">
                <p className="text-[#3A5060] mb-1">Day 0</p>
                <p>User disabled</p>
              </div>

              <div className="bg-[#040810] p-3 border border-[#0D1620]">
                <p className="text-[#3A5060] mb-1">Day 3</p>
                <p className="text-red-400">Access still valid</p>
              </div>

              <div className="bg-[#040810] p-3 border border-[#0D1620]">
                <p className="text-[#3A5060] mb-1">Day 14</p>
                <p className="text-red-400">Execution succeeds</p>
              </div>
            </div>
          </div>
        </div>

        {/* STEP 5 */}
        <div className="grid grid-cols-[48px_1fr] gap-x-6 py-10 border-b border-[#0D1620]">
          <div className="flex flex-col items-center">
            <div className="w-9 h-9 rounded-full bg-[#0A1520] border border-[#1A2830] flex items-center justify-center text-[#00C2FF] text-xs aoi-mono">
              05
            </div>
            <div className="w-px bg-[#0D1620] flex-1 mt-2" />
          </div>

          <div>
            <h2 className="text-lg font-bold mb-2">Why this happens</h2>
            <p className="aoi-mono text-[12px] text-[#7A8FA0] mb-2">
              Identity systems define access. Security systems monitor behavior.
              Neither validates authority at execution.
            </p>

            <p className="text-white font-bold border-l-2 border-[#00C2FF] pl-3">
              Execution resolves conflict. It does not validate authority.
            </p>
          </div>
        </div>

        {/* STEP 6 */}
        <div className="grid grid-cols-[48px_1fr] gap-x-6 py-10 border-b border-[#0D1620]">
          <div className="flex flex-col items-center">
            <div className="w-9 h-9 rounded-full bg-[#0A1520] border border-[#1A2830] flex items-center justify-center text-[#00C2FF] text-xs aoi-mono">
              06
            </div>
            <div className="w-px bg-[#0D1620] flex-1 mt-2" />
          </div>

          <div>
            <h2 className="text-lg font-bold mb-2">AO Integrity</h2>
            <p className="aoi-mono text-[12px] text-[#7A8FA0] mb-3">
              AO Integrity challenges authority at execution.
            </p>

            <div className="bg-[#040810] border border-[#1A2830] border-t-2 border-[#00C2FF] p-4">
              <p className="font-bold text-white mb-1">
                Validates authority across systems at the moment execution occurs.
              </p>
              <p className="aoi-mono text-[11px] text-[#3A5060]">
                Not before. Not after. At execution.
              </p>
            </div>
          </div>
        </div>

        {/* STEP 7 */}
        <div className="grid grid-cols-[48px_1fr] gap-x-6 py-10">
          <div className="flex flex-col items-center">
            <div className="w-9 h-9 rounded-full bg-[#0A1520] border border-[#1A2830] flex items-center justify-center text-[#00C2FF] text-xs aoi-mono">
              07
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-2">What it produces</h2>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[11px] aoi-mono text-[#7A8FA0]">
                <div className="w-1.5 h-1.5 bg-[#00C2FF] rounded-full" />
                Cross-system mismatch detection
              </div>
              <div className="flex items-center gap-2 text-[11px] aoi-mono text-[#7A8FA0]">
                <div className="w-1.5 h-1.5 bg-[#00C2FF] rounded-full" />
                Authority drift identification
              </div>
              <div className="flex items-center gap-2 text-[11px] aoi-mono text-[#7A8FA0]">
                <div className="w-1.5 h-1.5 bg-[#00C2FF] rounded-full" />
                Execution validation evidence
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* CLOSE */}
      <section className="text-center px-6 py-20">
        <p className="aoi-mono text-[10px] text-[#00C2FF] uppercase mb-4">
          The only question that matters
        </p>

        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Should this action still be allowed{" "}
          <span className="text-[#00C2FF]">right now?</span>
        </h2>

        <p className="aoi-mono text-[12px] text-[#3A5060] mb-6">
          If authority cannot be proven, execution must not occur.
        </p>

        <Link
          href="/contact"
          className="bg-white text-black px-6 py-3 rounded font-bold text-sm"
        >
          Request Early Access
        </Link>
      </section>

    </main>
  );
}
