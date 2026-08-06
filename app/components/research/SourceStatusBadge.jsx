export default function SourceStatusBadge({ status }) {
  return (
    <span className="inline-flex border border-white/12 bg-white/[0.025] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/46">
      {status}
    </span>
  );
}

