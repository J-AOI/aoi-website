import fs from "fs";
import path from "path";

const insightsContentDirectory = path.join(process.cwd(), "content", "insights");

export function getInsightMarkdown(insight) {
  if (!insight.contentFile) {
    return "";
  }

  const fileName = path.basename(insight.contentFile);
  const filePath = path.join(insightsContentDirectory, fileName);

  if (!fs.existsSync(filePath)) {
    return "";
  }

  return fs.readFileSync(filePath, "utf8");
}
