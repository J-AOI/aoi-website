const REQUIRED_TOP_LEVEL_FIELDS = [
  "manifest_version",
  "corpus",
  "allowed_website_dispositions",
  "primary_theme_vocabulary",
  "phase_hypothesis",
  "records",
  "missing_from_current_corpus",
  "noncanonical_companions",
];

const REQUIRED_RECORD_FIELDS = [
  "rrb_number",
  "canonical_title",
  "asset_type",
  "artifact_status",
  "short_abstract",
  "central_question",
  "primary_theme",
  "research_phase",
  "relationship_to_current_aoi_thesis",
  "website_slug",
  "candidate_card_summary",
  "source_status",
  "website_disposition",
];

const KNOWN_ARTIFACT_STATUSES = new Set([
  "CANONICAL_ARTIFACT",
  "CANONICAL_NON_PDF_ASSET",
  "METADATA_ONLY_PUBLICATION_RECORD",
  "NONCANONICAL_COMPANION",
  "MISSING_FROM_CURRENT_CORPUS",
]);

const KNOWN_SOURCE_STATUSES = new Set([
  "directly stated in artifact",
  "manually verified publication history",
  "inferred from artifact content",
  "unavailable",
]);

const WORKING_DISPOSITIONS = new Set(["EDITORIAL REVIEW REQUIRED"]);

function assertArray(manifest, field, errors) {
  if (!Array.isArray(manifest[field])) {
    errors.push(`Top-level field "${field}" must be an array.`);
  }
}

function hasValue(value) {
  return value !== undefined && value !== null && value !== "";
}

export function validateRrbManifest(manifest) {
  const errors = [];

  if (!manifest || typeof manifest !== "object") {
    throw new Error("RRB manifest must be a JSON object.");
  }

  REQUIRED_TOP_LEVEL_FIELDS.forEach((field) => {
    if (!(field in manifest)) {
      errors.push(`Missing top-level field "${field}".`);
    }
  });

  [
    "allowed_website_dispositions",
    "primary_theme_vocabulary",
    "phase_hypothesis",
    "records",
    "missing_from_current_corpus",
    "noncanonical_companions",
  ].forEach((field) => assertArray(manifest, field, errors));

  if (errors.length) {
    throw new Error(`RRB manifest validation failed:\n${errors.join("\n")}`);
  }

  const allowedDispositions = new Set(manifest.allowed_website_dispositions);
  const allowedThemes = new Set(manifest.primary_theme_vocabulary);
  const allowedPhases = new Set(manifest.phase_hypothesis);
  const seenNumbers = new Set();
  const seenSlugs = new Set();

  manifest.records.forEach((record, index) => {
    const label = record?.rrb_number ? `RRB-${record.rrb_number}` : `records[${index}]`;

    REQUIRED_RECORD_FIELDS.forEach((field) => {
      if (!hasValue(record?.[field])) {
        errors.push(`${label}: missing required field "${field}".`);
      }
    });

    if (record?.rrb_number) {
      if (seenNumbers.has(record.rrb_number)) {
        errors.push(`${label}: duplicate rrb_number "${record.rrb_number}".`);
      }
      seenNumbers.add(record.rrb_number);
    }

    if (record?.website_slug) {
      if (seenSlugs.has(record.website_slug)) {
        errors.push(`${label}: duplicate website_slug "${record.website_slug}".`);
      }
      seenSlugs.add(record.website_slug);
    }

    if (record?.primary_theme && !allowedThemes.has(record.primary_theme)) {
      errors.push(`${label}: unknown primary_theme "${record.primary_theme}".`);
    }

    if (record?.research_phase && !allowedPhases.has(record.research_phase)) {
      errors.push(`${label}: unknown research_phase "${record.research_phase}".`);
    }

    if (record?.artifact_status && !KNOWN_ARTIFACT_STATUSES.has(record.artifact_status)) {
      errors.push(`${label}: unknown artifact_status "${record.artifact_status}".`);
    }

    if (record?.source_status && !KNOWN_SOURCE_STATUSES.has(record.source_status)) {
      errors.push(`${label}: unknown source_status "${record.source_status}".`);
    }

    if (
      record?.website_disposition &&
      !allowedDispositions.has(record.website_disposition) &&
      !WORKING_DISPOSITIONS.has(record.website_disposition)
    ) {
      errors.push(`${label}: unknown website_disposition "${record.website_disposition}".`);
    }

    if (record?.artifact_status === "METADATA_ONLY_PUBLICATION_RECORD") {
      return;
    }

    if (!hasValue(record?.current_filename)) {
      errors.push(`${label}: artifact-backed records must contain current_filename.`);
    }

    if (!hasValue(record?.source_sha256)) {
      errors.push(`${label}: artifact-backed records must contain source_sha256.`);
    }
  });

  manifest.missing_from_current_corpus.forEach((record, index) => {
    const label = record?.rrb_number ? `missing RRB-${record.rrb_number}` : `missing[${index}]`;
    if (record?.artifact_status !== "MISSING_FROM_CURRENT_CORPUS") {
      errors.push(`${label}: missing records must use MISSING_FROM_CURRENT_CORPUS.`);
    }
  });

  manifest.noncanonical_companions.forEach((record, index) => {
    const label = record?.current_filename || `noncanonical_companions[${index}]`;
    if (record?.artifact_status !== "NONCANONICAL_COMPANION") {
      errors.push(`${label}: companion records must use NONCANONICAL_COMPANION.`);
    }
  });

  if (errors.length) {
    throw new Error(`RRB manifest validation failed:\n${errors.join("\n")}`);
  }

  return manifest;
}

export const publicDispositions = new Set(["FEATURED", "PUBLISH", "ARCHIVE"]);
export const featuredPreviewNumbers = new Set([
  "025",
  "028",
  "031",
  "032",
  "039",
  "048",
  "049",
  "050",
  "055",
]);
