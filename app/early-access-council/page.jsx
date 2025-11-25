import Link from "next/link";

export default function EACPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-semibold mb-3">Early Access Council</h1>
      <p className="text-white/80 leading-relaxed mb-6">
        The Early Access Council is a private, invite-only group of trusted
        leaders shaping AoI before general availability.
      </p>

      <div className="rounded-2xl bg-white/5 border border-white/10 p-6 space-y-3 text-white/80">
        <div>• Private roadmap briefings and platform previews</div>
        <div>• Direct influence on MVP priorities and integrations</div>
        <div>• Early visibility into drift detection and governance modeling</div>
        <div>• Confidential participation</div>
        <div className="font-semibold text-white">No cost. No obligation. Invite-only.</div>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <a
          href="mailto:justin@aointegrity.ai?subject=Early%20Access%20Council%20Invite"
          className="inline-flex justify-center items-center rounded-xl bg-white text-black px-5 py-3 font-semibold hover:bg-white/90 transition"
        >
          Request an Invite
        </a>
        <Link
          href="/contact"
          className="inline-flex justify-center items-center rounded-xl border border-white/20 px-5 py-3 font-semibold text-white hover:bg-white/5 transition"
        >
          Contact AoI
        </Link>
      </div>
    </section>
  );
}
