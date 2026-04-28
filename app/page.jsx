import Link from "next/link";
import PartnerStrip from "./components/PartnerStrip";
import PillarCard from "./components/PillarCard";

export default function HomePage() {
  return (
    <>

      <div className="aoi-root bg-[#080C10] text-white">

        {/* ── HERO ───────────────────────────────────────────── */}
<section className="relative mx-auto max-w-6xl px-6 pt-20 pb-20">
  <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(0,194,255,0.13),transparent_55%)]" />

  <p className="aoi-mono text-[10px] text-[#00C2FF] uppercase tracking-[0.18em] mb-6">
    Execution-Time Governance
  </p>

  <div className="max-w-2xl flex flex-col gap-5">
    <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.06] tracking-tight">
      Authority is assumed.{" "}
      <span className="text-[#00C2FF]">AO Integrity</span> verifies it at execution.
    </h1>

    <p className="aoi-mono text-[14px] text-[#7A8FA0] leading-relaxed">
      Systems say access is removed. Execution proves otherwise.
      <br />
      Authority is never revalidated when it matters most.
    </p>

    {/* 🔥 NEW SYSTEM LINE (this is the important part) */}
    <p className="aoi-mono text-[12px] text-[#3A5060]">
      Execution resolves conflict. It does not validate authority.
    </p>

    <p className="aoi-mono text-[12px] text-[#3A5060] border-l-2 border-[#1A2830] pl-4">
      In most environments,{" "}
      <span className="text-[#B6C2CF] font-medium">this is already happening.</span>
    </p>

    <div className="flex flex-col sm:flex-row gap-3 pt-2">
      <Link
        href="https://www.aointegrity.ai/contact"
        className="aoi-root inline-flex justify-center items-center rounded bg-white text-black px-6 py-3 font-bold text-sm tracking-wide hover:bg-white/90 transition"
      >
        Request Early Access
      </Link>
      <Link
        href="https://www.aointegrity.ai/how-it-works"
        className="aoi-root inline-flex justify-center items-center rounded border border-white/20 px-6 py-3 font-semibold text-sm text-[#7A8FA0] hover:bg-white/5 transition"
      >
        View Execution Flow
      </Link>
    </div>
  </div>
</section>

        {/* ── DIVIDER ────────────────────────────────────────── */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#1E2D3A] to-transparent" />

        {/* ── GAP / BREAKDOWN ────────────────────────────────── */}
        <section className="max-w-[1100px] mx-auto px-6 py-20">
          <p className="aoi-mono text-[10px] text-[#00C2FF] uppercase tracking-[0.18em] mb-5">
            The Gap
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
            Systems agree.{" "}
            <span className="text-[#00C2FF]">Authority does not.</span>
          </h2>

          <div className="border-l-2 border-[#1A2830] pl-6 mb-8">
            <p className="aoi-mono text-[12px] text-[#4A6070] leading-9 whitespace-pre-line">
{`User disabled in one system
Still active in another
Token remains valid

Execution proceeds because nothing forces it to fail.`}
            </p>
          </div>

          <p className="text-[14px] text-[#B6C2CF] leading-relaxed mb-4">
            Identity systems define access. Security systems monitor activity.
            Neither verifies if authority is still valid at execution.
          </p>
          <p className="text-[17px] font-bold text-white">
            No system is required to prove authority at execution.
          </p>
        </section>

        {/* ── DIVIDER ────────────────────────────────────────── */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#1E2D3A] to-transparent" />

        {/* ── 14 DAYS / SHOT 5 ───────────────────────────────── */}
        <section className="max-w-[1100px] mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="aoi-mono text-[10px] text-[#00C2FF] uppercase tracking-[0.18em] mb-5">
              Live Pattern
            </p>
            <h2 className="text-3xl font-bold tracking-tight mb-8">
              14 Days of Unprotected Access
            </h2>

            <div className="bg-[#0A1520] border border-[#1A2830] border-l-4 border-l-[#00C2FF] rounded-sm p-5 mb-5">
              <p className="aoi-mono text-[10px] text-[#00C2FF] uppercase tracking-[0.16em] mb-4">
                Authority Integrity Snapshot
              </p>
              <p className="aoi-mono text-[12px] text-[#B6C2CF] leading-8 whitespace-pre-line">
{`JumpCloud: Disabled
Entra: Enabled

STATE_MISMATCH → AUTHORITY_DRIFT`}
              </p>
            </div>

            <p className="text-[15px] font-bold text-white border-l-2 border-[#00C2FF] pl-4 mb-4">
              Execution succeeded under invalid authority.
            </p>

            <div className="bg-[rgba(0,194,255,0.04)] border border-[rgba(0,194,255,0.1)] rounded p-4">
              <p className="aoi-mono text-[11px] text-[#7A8FA0] leading-relaxed">
                <span className="text-[#E8ECF0] font-medium">This is not an edge case.</span>{" "}
                This is what happens when execution is never revalidated.
              </p>
            </div>
          </div>

          <div>
            <img
              src="/Images/Shot5.png"
              alt="Mismatch detection"
              className="rounded-lg border border-white/10 shadow-2xl brightness-110 w-full"
            />
          </div>
        </section>

        {/* ── DRIFT / SHOT 4 ─────────────────────────────────── */}
        <section className="max-w-[1100px] mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="aoi-mono text-[10px] text-[#00C2FF] uppercase tracking-[0.18em] mb-5">
              Drift Analysis
            </p>
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              Systems Don't Agree on Reality
            </h2>
            <p className="text-[14px] text-[#B6C2CF] leading-relaxed mb-4">
              Identity systems reflect different states.
              No system is required to reconcile them before execution.
            </p>
            <p className="aoi-mono text-[12px] text-[#3A5060]">
              Execution resolves conflict. It does not validate authority.
            </p>
          </div>

          <div>
            <img
              src="/Images/Shot4.png"
              alt="Drift analysis"
              className="rounded-lg border border-white/10 shadow-2xl brightness-110 w-full"
            />
          </div>
        </section>

        {/* ── DIVIDER ────────────────────────────────────────── */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#1E2D3A] to-transparent" />

        {/* ── VALIDATION ENGINE ──────────────────────────────── */}
        <section className="max-w-[1100px] mx-auto px-6 py-20">
          <p className="aoi-mono text-[10px] text-[#00C2FF] uppercase tracking-[0.18em] mb-5">
            Execution Validation Engine
          </p>
          <h2 className="text-3xl font-bold tracking-tight mb-6">
            Validation at execution
          </h2>
          <p className="text-[14px] text-[#B6C2CF] leading-relaxed mb-8 max-w-xl">
            Authority must be proven at execution.{" "}
            <span className="text-white font-semibold">
              Not before. Not after. At execution.
            </span>
          </p>


        </section>

        {/* ── PROOF / SHOT 6 ─────────────────────────────────── */}
        <section className="max-w-[1100px] mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <img
              src="/Images/Shot6.png"
              alt="Execution validation"
              className="rounded-lg border border-white/10 shadow-2xl brightness-110 w-full"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              Authority Must Be Proven Before Execution
            </h2>
            <p className="text-[14px] text-[#B6C2CF] leading-relaxed mb-4">
              AoI validates authority across systems at the moment execution occurs.
            </p>
            <p className="aoi-mono text-[12px] text-[#3A5060]">
              If validation fails, execution does not proceed.
            </p>
          </div>
        </section>

        {/* ── DIVIDER ────────────────────────────────────────── */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#1E2D3A] to-transparent" />

        {/* ── CLOSING QUESTION ───────────────────────────────── */}
        <section className="max-w-[1100px] mx-auto px-6 py-28 text-center">
          <p className="aoi-mono text-[10px] text-[#00C2FF] uppercase tracking-[0.18em] mb-6">
            The only question that matters
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6">
            Should this action still be allowed{" "}
            <span className="text-[#00C2FF]">right now?</span>
          </h2>
          <p className="text-[14px] text-[#B6C2CF] mb-3">
            If authority cannot be proven, execution must not occur.
          </p>
          <p className="aoi-mono text-[12px] text-[#3A5060] mb-10">
            No system should execute on assumed authority.
          </p>
          <Link
            href="https://www.aointegrity.ai/contact"
            className="aoi-root inline-flex justify-center items-center rounded bg-white text-black px-8 py-4 font-bold text-sm tracking-wide hover:bg-white/90 transition"
          >
            Request Early Access
          </Link>
        </section>

        {/* ── PARTNER STRIP ──────────────────────────────────── */}
        <PartnerStrip />

        {/* ── PILLARS ────────────────────────────────────────── */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid md:grid-cols-3 gap-px bg-[#0D1620] rounded overflow-hidden border border-[#0D1620]">
            <PillarCard title="UNIFY">
              Normalize identity and access across systems.
            </PillarCard>
            <PillarCard title="VALIDATE">
              Prove authority at execution, not after.
            </PillarCard>
            <PillarCard title="EVIDENCE">
              Surface execution occurring under invalid authority.
            </PillarCard>
          </div>
        </section>

      </div>
    </>
  );
}
