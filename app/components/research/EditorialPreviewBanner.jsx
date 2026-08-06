export default function EditorialPreviewBanner({ enabled }) {
  if (!enabled) {
    return null;
  }

  return (
    <div className="border-b border-aoi-red/40 bg-aoi-red/[0.12] px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-white sm:px-8">
      Editorial preview enabled - unpublished RRB records are visible locally
    </div>
  );
}

