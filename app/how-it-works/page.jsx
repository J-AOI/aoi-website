export default function HowItWorksPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20 text-white">

      <h1 className="text-4xl font-semibold mb-6">
        How AO Integrity Works
      </h1>

      <p className="text-[#B6C2CF] leading-relaxed mb-12">
        AO Integrity doesn’t monitor activity after the fact.
        It verifies that authority is still valid at the moment execution occurs.
      </p>

      <div className="grid gap-8">

        {/* STEP 1 */}
        <div className="bg-[#111A23] border border-[#2A3A4A] rounded-xl p-6">
          <p className="text-xs text-[#00C2FF] uppercase tracking-widest mb-2">
            Step 1 — Observe
          </p>

          <h2 className="text-xl font-semibold mb-2">
            Capture Authority Across Systems
          </h2>

          <p className="text-[#B6C2CF] leading-relaxed">
            AO Integrity pulls identity and access states from systems like
            Entra, JumpCloud, and downstream applications at runtime.
          </p>
        </div>

        {/* STEP 2 */}
        <div className="bg-[#111A23] border border-[#2A3A4A] rounded-xl p-6 border-l-4 border-l-[#00C2FF]">
          <p className="text-xs text-[#00C2FF] uppercase tracking-widest mb-2">
            Step 2 — Detect
          </p>

          <h2 className="text-xl font-semibold mb-2">
            Identify Authority Mismatch
          </h2>

          <p className="text-[#B6C2CF] leading-relaxed">
            When systems disagree, AO Integrity flags mismatched authority states
            before execution occurs.
          </p>
        </div>

        {/* STEP 3 */}
        <div className="bg-[#111A23] border border-[#2A3A4A] rounded-xl p-6">
          <p className="text-xs text-[#00C2FF] uppercase tracking-widest mb-2">
            Step 3 — Enforce
          </p>

          <h2 className="text-xl font-semibold mb-2">
            Require Proof at Execution
          </h2>

          <p className="text-[#B6C2CF] leading-relaxed">
            Execution is only allowed when authority can be proven across systems.
            If it cannot be verified, the action does not proceed.
          </p>
        </div>

      </div>

      {/* LIVE EXECUTION FLOW */}
      <div className="mt-16">

        <div className="bg-[#111A23] border border-[#2A3A4A] rounded-xl p-8 text-center">

          <p className="text-xs text-[#00C2FF] uppercase tracking-widest mb-6">
            Live Execution Flow
          </p>

          {/* SYSTEMS */}
          <div className="flex justify-center items-center gap-6 mb-6 text-sm text-[#B6C2CF]">
            <div className="px-4 py-2 border border-white/10 rounded-lg">Entra</div>
            <div className="px-4 py-2 border border-white/10 rounded-lg">JumpCloud</div>
            <div className="px-4 py-2 border border-white/10 rounded-lg">SaaS Apps</div>
          </div>

          {/* SIGNAL */}
          <p className="text-[#00C2FF] text-xs font-mono mb-4 animate-pulse">
            SIGNAL DETECTED: AUTHORITY_DRIFT
          </p>

          {/* ARROW */}
          <div className="text-[#00C2FF] text-xl mb-4">↓</div>

          {/* AOI CORE */}
          <div className="inline-block px-6 py-4 bg-[#0F1720] border border-[#00C2FF]/30 rounded-xl mb-6 shadow-[0_0_30px_rgba(0,194,255,0.15)]">
            <p className="text-white font-semibold">
              AO Integrity
            </p>
            <p className="text-xs text-[#B6C2CF] mt-1">
              Validating Authority...
            </p>
          </div>

          {/* OUTCOME */}
          <div className="flex justify-center gap-8 text-sm">

            {/* PASS */}
            <div className="px-4 py-2 border border-green-500/30 text-green-400 rounded-lg opacity-60">
              PASS → Execute
            </div>

            {/* FAIL */}
            <div className="px-4 py-2 border border-red-500/40 text-red-400 rounded-lg animate-pulse">
              FAIL → Block
            </div>

          </div>

        </div>

      </div>

      <p className="text-white/50 mt-12 text-sm">
        AO Integrity shifts governance from audit and monitoring
        to real-time validation at execution.
      </p>

    </section>
  );
}
