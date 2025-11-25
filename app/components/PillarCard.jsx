export default function PillarCard({ title, children }) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-6 shadow-glow">
      <h3 className="text-lg font-semibold tracking-wide mb-2">{title}</h3>
      <p className="text-white/80 leading-relaxed">{children}</p>
    </div>
  );
}
