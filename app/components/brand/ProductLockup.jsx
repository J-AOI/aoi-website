import { assets } from "../../data/assets";

export default function ProductLockup({ className = "h-12 w-auto" }) {
  return (
    <img
      src={assets.product.lockup}
      alt="ValidateAuthority.ai"
      className={className}
    />
  );
}
