export default function Eyebrow({ children, className = "" }) {
  return (
    <p className={`text-xs font-semibold uppercase tracking-[0.26em] text-aoi-red ${className}`}>
      {children}
    </p>
  );
}
