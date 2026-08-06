const labels = {
  CANONICAL_ARTIFACT: "Canonical artifact",
  CANONICAL_NON_PDF_ASSET: "Canonical non-PDF asset",
  METADATA_ONLY_PUBLICATION_RECORD: "Metadata-only record",
};

export default function ArtifactBadge({ status, assetType }) {
  return (
    <span className="inline-flex border border-white/12 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/52">
      {labels[status] || status}
      {assetType ? ` / ${assetType}` : ""}
    </span>
  );
}

