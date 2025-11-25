import Link from "next/link";
import PartnerStrip from "./components/PartnerStrip";
import PillarCard from "./components/PillarCard";

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative mx-auto max-w-6xl px-4 pt-16 pb-10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(0,140,255,0.18),transparent_55%)]" />

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              From Compliance Chaos to{" "}
              <span className="text-white">Autonomous Governance.</span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              AoI is the Meta Governance Platform — unifying compliance,
              identity, and cloud governance into a single intelligent layer.
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
                Learn How It Works
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

      {/* PARTNER STRIP */}
      <PartnerStrip />

      {/* PILLARS */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid md:grid-cols-3 gap-6">
          <PillarCard title="UNIFY">
            Normalize governance telemetry across compliance and identity systems.
          </PillarCard>
          <PillarCard title="AUTOMATE">
            Transform audit preparation into continuous monitoring.
          </PillarCard>
          <PillarCard title="GOVERN">
            Enforce intelligent policy across clouds, tenants, and autonomous agents.
          </PillarCard>
        </div>
      </section>

      {/* EAC TEASER */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-3xl bg-white/5 border border-white/10 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Early Access Council</h2>
            <p className="text-white/80 leading-relaxed">
              A private, invite-only group of trusted leaders helping shape AoI
              before general availability.
            </p>
          </div>
          <Link
            href="/early-access-council"
            className="inline-flex items-center rounded-xl bg-white text-black px-5 py-3 font-semibold hover:bg-white/90 transition"
          >
            Learn More →
          </Link>
        </div>
      </section>
    </div>
  );
}
