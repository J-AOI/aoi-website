export default function PartnerStrip() {
  const placeholders = [
    "Partner Integration",
    "Partner Integration",
    "Partner Integration",
    "Partner Integration"
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <p className="text-center text-white/80 mb-6">
        Seamlessly integrated with the platforms you already trust.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {placeholders.map((text, i) => (
          <div
            key={i}
            className="h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 text-sm"
          >
            {text}
          </div>
        ))}
      </div>
      <p className="mt-3 text-center text-xs text-white/40">
        (Logos shown as placeholders until integrations are confirmed.)
      </p>
    </section>
  );
}
