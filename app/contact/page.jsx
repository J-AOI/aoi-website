export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-semibold mb-4">Contact</h1>
      <p className="text-white/80 leading-relaxed mb-8">
        For Early Access Council invites, partnership conversations, or MVP briefings:
      </p>

      <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
        <p className="text-white/90 mb-2">Email</p>
        <a
          href="mailto:justin@aointegrity.ai"
          className="text-lg font-semibold"
        >
          justin@aointegrity.ai
        </a>

        <p className="text-white/60 mt-6 text-sm">
          (Form integration can be added once you want collection + routing.)
        </p>
      </div>
    </section>
  );
}
