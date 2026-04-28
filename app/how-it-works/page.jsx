import Link from "next/link";

export default function HowItWorks() {
  return (
    <main className="bg-[#0A0F14] text-white">

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          How It Works
        </h1>

        <p className="text-lg text-[#B6C2CF] max-w-2xl mx-auto">
          Authority is not lost in a single system.
          It drifts across systems—and execution continues anyway.
        </p>
      </section>

      {/* STEP 1 — SETUP */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-6">
        <h2 className="text-2xl font-semibold">
          1. Access is removed
        </h2>

        <p className="text-[#B6C2CF]">
          A user is disabled. The system of record reflects the change.
        </p>

        <div className="bg-[#111A23] rounded-xl p-6 font-mono text-sm text-[#B6C2CF] whitespace-pre-line">
{`JumpCloud: Disabled`}
        </div>
      </section>

      {/* STEP 2 — DRIFT */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-6">
        <h2 className="text-2xl font-semibold">
          2. Systems diverge
        </h2>

        <p className="text-[#B6C2CF]">
          Other systems do not reflect the same state. No reconciliation occurs.
        </p>

        <div className="bg-[#111A23] border border-[#2A3A4A] rounded-xl p-6 border-l-4 border-l-[#00C2FF] font-mono text-sm text-[#B6C2CF] whitespace-pre-line">
{`JumpCloud: Disabled
Entra: Enabled

STATE_MISMATCH → AUTHORITY_DRIFT`}
        </div>
      </section>

      {/* STEP 3 — EXECUTION */}
<section className="max-w-4xl mx-auto px-6 py-16 space-y-6">

  <h2 className="text-2xl font-semibold">
    3. Execution still succeeds
  </h2>

  <p className="text-[#B6C2CF]">
    Authentication tokens remain valid. Access continues.
    Execution is not blocked.
  </p>

  <div className="bg-[#0F1720] border border-gray-700 rounded-xl p-6 font-mono text-sm text-gray-300 space-y-3">
    <div>
      <span className="text-gray-500">Expected:</span>{" "}
      <span className="text-green-400">Access revoked</span>
    </div>

    <div>
      <span className="text-gray-500">Actual:</span>{" "}
      <span className="text-red-400">Execution succeeds</span>
    </div>
  </div>

  <p className="text-white font-semibold border-l-2 border-[#00C2FF] pl-4">
    Execution succeeded under invalid authority.
  </p>

  {/* 🔥 EVIDENCE BLOCK (now properly placed) */}
  <div className="bg-[#0A1520] border border-[#1A2830] rounded-xl p-6 mt-6 font-mono text-sm text-[#B6C2CF] space-y-4">

    <div className="text-xs text-[#00C2FF] uppercase tracking-widest">
      Execution Evidence
    </div>

    <div className="flex justify-between">
      <span className="text-gray-500">Authority Integrity Score</span>
      <span className="text-red-400 font-semibold">30 — HIGH RISK</span>
    </div>

    <div className="border-t border-[#1A2830] pt-4 space-y-2">
      <div className="flex justify-between">
        <span className="text-gray-500">Identity</span>
        <span>alice.chen@example.com</span>
      </div>

      <div className="flex justify-between">
        <span className="text-gray-500">JumpCloud</span>
        <span className="text-red-400">Disabled</span>
      </div>

      <div className="flex justify-between">
        <span className="text-gray-500">Entra</span>
        <span className="text-green-400">Enabled</span>
      </div>

      <div className="flex justify-between">
        <span className="text-gray-500">Drift Duration</span>
        <span>30 days</span>
      </div>
    </div>

    <div className="pt-3 text-[#00C2FF]">
      → Execution succeeded under invalid authority
    </div>

  </div>

</section>

      {/* STEP 4 — TIMELINE */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-6">
        <h2 className="text-2xl font-semibold">
          4. Drift persists over time
        </h2>

        <div className="bg-[#111A23] rounded-xl p-6 font-mono text-sm text-[#B6C2CF] whitespace-pre-line">
{`Day 0: User disabled
Day 3: Access still valid
Day 14: Execution still succeeds

→ Authority never revalidated`}
        </div>
      </section>

      {/* STEP 5 — WHY */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-6">
        <h2 className="text-2xl font-semibold">
          5. Why this happens
        </h2>

        <p className="text-[#B6C2CF]">
          Identity systems define access. Security systems monitor behavior.
          Neither is responsible for validating authority at execution.
        </p>

        <p className="text-white font-semibold">
          No system is required to prove authority at execution.
          Execution resolves conflict. It does not validate authority.
        </p>
      </section>

      {/* STEP 6 — AOI */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-6">
        <h2 className="text-2xl font-semibold">
          6. AO Integrity
        </h2>

        <p className="text-[#B6C2CF]">
          AO Integrity challenges authority at execution.
        </p>

        <p className="text-white font-semibold">
          Not before. Not after. At execution.
        </p>
      </section>

      {/* STEP 7 — OUTPUT */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-6">
        <h2 className="text-2xl font-semibold">
          7. What it produces
        </h2>

        <ul className="text-white/70 space-y-2">
          <li>• Cross-system mismatch detection</li>
          <li>• Authority drift identification</li>
          <li>• Execution validation evidence</li>
        </ul>
      </section>

      {/* CLOSE */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center space-y-6">
        <h2 className="text-3xl font-semibold">
          Should this action still be allowed right now?
        </h2>

        <p className="text-[#B6C2CF]">
          If authority cannot be proven, execution must not occur.
        </p>

        <Link
          href="/contact"
          className="inline-flex justify-center items-center rounded-xl bg-white text-black px-6 py-3 font-semibold hover:bg-white/90 transition"
        >
          Request Early Access
        </Link>
      </section>

    </main>
  );
}
