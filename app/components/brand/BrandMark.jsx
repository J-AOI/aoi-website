import { assets } from "../../data/assets";

export default function BrandMark({ className = "h-12 w-auto" }) {
  return (
    <img
      src={assets.brand.lockup}
      alt="AOI Architecture of Integrity"
      className={className}
    />
  );
}
