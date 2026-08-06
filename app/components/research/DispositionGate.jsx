import { publicDispositions } from "../../lib/content/rrbValidation";

export default function DispositionGate({ disposition, editorialPreview, children }) {
  if (editorialPreview || publicDispositions.has(disposition)) {
    return children;
  }

  return null;
}

