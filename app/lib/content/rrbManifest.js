import fs from "fs";
import path from "path";
import { validateRrbManifest } from "./rrbValidation";

const manifestPath = path.join(
  process.cwd(),
  "content",
  "manifests",
  "rrb",
  "RRB_RESEARCH_MANIFEST.json",
);

const artifactDirectory = path.join(process.cwd(), "public", "research", "rrb", "artifacts");

let cachedManifest;

function readManifest() {
  if (!cachedManifest) {
    const raw = fs.readFileSync(manifestPath, "utf8");
    cachedManifest = validateRrbManifest(JSON.parse(raw));
  }

  return cachedManifest;
}

export function getRrbManifest() {
  return readManifest();
}

export function getRrbRecords() {
  return readManifest().records;
}

export function getMissingRrbRecords() {
  return readManifest().missing_from_current_corpus;
}

export function getNoncanonicalCompanions() {
  return readManifest().noncanonical_companions;
}

export function getArtifactHref(record) {
  if (
    !record ||
    record.artifact_status === "METADATA_ONLY_PUBLICATION_RECORD" ||
    !record.current_filename
  ) {
    return null;
  }

  const filePath = path.join(artifactDirectory, path.basename(record.current_filename));

  if (!fs.existsSync(filePath)) {
    return null;
  }

  return `/research/rrb/artifacts/${encodeURIComponent(record.current_filename)}`;
}

export function isEditorialPreviewEnabled(searchParams = {}) {
  const requestedPreview = searchParams?.preview === "editorial";
  const envAllowsPreview =
    process.env.NODE_ENV !== "production" ||
    process.env.AOI_ENABLE_EDITORIAL_PREVIEW === "true";

  return requestedPreview && envAllowsPreview;
}

