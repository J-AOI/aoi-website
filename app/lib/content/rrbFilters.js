import {
  featuredPreviewNumbers,
  publicDispositions,
} from "./rrbValidation";

export function getPublicRrbRecords(records) {
  return records.filter((record) => publicDispositions.has(record.website_disposition));
}

export function getFeaturedRrbRecords(records, editorialPreview = false) {
  if (editorialPreview) {
    return records.filter((record) => featuredPreviewNumbers.has(record.rrb_number));
  }

  return records.filter((record) => record.website_disposition === "FEATURED");
}

export function getVisibleRrbRecords(records, editorialPreview = false) {
  return editorialPreview ? records : getPublicRrbRecords(records);
}

export function groupRecordsByField(records, field) {
  return records.reduce((groups, record) => {
    const key = record[field] || "Unspecified";
    groups[key] = groups[key] || [];
    groups[key].push(record);
    return groups;
  }, {});
}

export function filterRrbRecords(records, filters = {}) {
  const query = String(filters.query || "").trim().toLowerCase();

  return records.filter((record) => {
    const matchesQuery =
      !query ||
      record.rrb_number.toLowerCase().includes(query) ||
      record.canonical_title.toLowerCase().includes(query);

    const matchesTheme =
      !filters.primary_theme || record.primary_theme === filters.primary_theme;

    const matchesPhase =
      !filters.research_phase || record.research_phase === filters.research_phase;

    const matchesAssetType = !filters.asset_type || record.asset_type === filters.asset_type;

    return matchesQuery && matchesTheme && matchesPhase && matchesAssetType;
  });
}

export function getUniqueAssetTypes(records) {
  return Array.from(new Set(records.map((record) => record.asset_type))).sort();
}
