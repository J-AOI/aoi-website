import Link from "next/link";
import PartnerStrip from "./components/PartnerStrip";
import PillarCard from "./components/PillarCard";

export default function HomePage() {
  return (
    <div className="bg-[#0A0F14] text-white">

      {/* HERO */}
      <section className="relative mx-auto max-w-6xl px-4 pt-16 pb-16">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(0,140,255,0.18),transparent_55%)]" />

        <p className="text-xs text-[#00C2FF] mb-4 uppercase tracking-widest">
          A Governance Validation Layer
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Authority is assumed.
              <br />
              AO Integrity verifies it at execution.
            </h1>

            <p className="text-lg text-[#B6C2CF] leading-relaxed">
              Systems say access is removed. Execution proves otherwise.
              Authority is never revalidated when it matters most.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex justify-center items-center rounded-xl bg-white text-black px-5 py-3 font-semibold hover:bg-white/90 transition"
              >
                Request Early Access
              </Link>

              <Link
                href="/how-it-works"
                className="inline-flex justify-center items-center rounded-xl border border-white/20 px-5 py-3 font-semibold text-white hover:bg-white/5 transition"
              >
                View Execution Flow
              </Link>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src="/logo.png"
              alt="AoI Architecture of Integrity"
              className="w-[280px] md:w-[360px] drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* BREAKDOWN */}
      <section className="max-w-[1200px] mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Systems agree. Authority does not.
        </h2>

        <p className="text-[#B6C2CF] whitespace-pre-line leading-7">
{`User disabled in one system
Still active in another
Token remains valid

Execution proceeds because nothing forces it to fail.`}
        </p>
      </section>

      {/* AUDIT ≠ AUTHORITY */}
      <section className="max-w-[1200px] mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Audit ≠ Authority
        </h2>

        <p className="text-[#B6C2CF] leading-relaxed mb-4">
          Identity systems define access. Security systems monitor activity.
          Neither verifies if authority is still valid at execution.
        </p>

        <p className="text-white">
          No system is required to prove authority at execution.
        </p>
      </section>

      {/* DETECTION (SHOT 1) — HIGH IMPACT DEPTH */}
      <section className="max-w-[1200px] mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center bg-[radial-gradient(ellipse_at_center,rgba(0,194,255,0.05),transparent_70%)]">

        <div>
          <h2 className="text-3xl font-semibold mb-6">
            14 Days of Unprotected Access
          </h2>

          <div className="bg-[#111A23] border border-[#2A3A4A] rounded-xl p-5 shadow-[0_0_0_1px_rgba(0,194,255,0.1)] border-l-4 border-l-[#00C2FF]">

            <p className="text-xs text-[#00C2FF] mb-3 uppercase tracking-widest">
              Authority Integrity Snapshot
            </p>

            <p className="font-mono text-sm text-[#B6C2CF] leading-7 whitespace-pre-line">
{`JumpCloud: Disabled
Entra: Enabled

STATE_MISMATCH → AUTHORITY_DRIFT`}
            </p>

          </div>

          <p className="text-white font-semibold text-lg mt-6 border-l-2 border-[#00C2FF] pl-4">
            Execution succeeded because authority was never questioned.
          </p>
        </div>

        <div>
          <img
            src="/Images/Shot5.png"
            alt="Mismatch detection"
            className="rounded-xl border border-white/10 shadow-2xl brightness-110"
          />
        </div>

      </section>

      {/* DIAGNOSIS (SHOT 2) */}
      <section className="max-w-[1200px] mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <p className="text-xs text-[#00C2FF] mb-2 uppercase tracking-widest">
            Drift Analysis
          </p>

          <h2 className="text-3xl font-semibold mb-6">
            Systems Don’t Agree on Reality
          </h2>

          <p className="text-[#B6C2CF] leading-relaxed mb-6">
            Identity systems reflect different states.
            No system is required to reconcile them before execution.
          </p>

          <p className="text-white/50">
            Authority is assumed from whichever system responds first.
          </p>
        </div>

        <div>
          <img
            src="/Images/Shot4.png"
            alt="Drift analysis"
            className="rounded-xl border border-white/10 shadow-2xl brightness-110"
          />
        </div>

      </section>

      {/* VALIDATION ENGINE */}
      <section className="max-w-[1200px] mx-auto px-6 py-16">
        <p className="text-xs text-[#00C2FF] mb-2 uppercase tracking-widest">
          Execution Validation Engine
        </p>

        <h2 className="text-3xl font-semibold mb-6">
          Validation at execution
        </h2>

        <p className="text-[#B6C2CF] leading-relaxed mb-6">
          Authority must be proven at execution.
          Not before. Not after. At execution.
        </p>

        <ul className="text-white/60 space-y-2">
          <li>Cross-system mismatch</li>
          <li>Authority drift</li>
          <li>Orphaned identities</li>
          <li>Offboarding failures</li>
        </ul>
      </section>

      {/* VALIDATION PROOF (SHOT 3) */}
      <section className="max-w-[1200px] mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">

        <div className="order-2 md:order-1">
          <img
            src="/Images/Shot6.png"
            alt="Execution validation"
            className="rounded-xl border border-white/10 shadow-2xl brightness-110"
          />
        </div>

        <div className="order-1 md:order-2">
          <h2 className="text-3xl font-semibold mb-6">
            Authority Must Be Proven Before Execution
          </h2>

          <p className="text-[#B6C2CF] leading-relaxed mb-6">
            AoI validates authority across systems at the moment execution occurs.
          </p>

          <p className="text-white/50">
            If validation fails, execution does not proceed.
          </p>
        </div>

      </section>

      {/* PRINCIPLE */}
      <section className="max-w-[1200px] mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Execution must prove authority
        </h2>

        <p className="text-[#B6C2CF] mb-4">
          If authority cannot be proven, execution must not occur.
        </p>

        <p className="text-white/40 mb-8">
          No system should execute on assumed authority.
        </p>

        <Link
          href="/contact"
          className="inline-flex justify-center items-center rounded-xl bg-white text-black px-6 py-3 font-semibold hover:bg-white/90 transition"
        >
          Get Early Access
        </Link>
      </section>

      <PartnerStrip />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          <PillarCard title="UNIFY">
            Normalize identity and access across systems.
          </PillarCard>

          <PillarCard title="VALIDATE">
            Prove authority at execution, not after.
          </PillarCard>

          <PillarCard title="ENFORCE">
            Prevent actions when authority cannot be verified.
          </PillarCard>
        </div>
      </section>

    </div>
  );
}