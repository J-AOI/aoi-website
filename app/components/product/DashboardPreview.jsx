import { assets } from "../../data/assets";

export default function DashboardPreview() {
  return (
    <div className="overflow-hidden border border-white/12 bg-[#030303] shadow-[0_32px_120px_rgba(217,10,22,0.10)]">
      <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/54">
          ValidateAuthority.ai
        </p>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aoi-red">
          Operational View
        </p>
      </div>
      <img
        src={assets.reference.dashboard}
        alt="ValidateAuthority.ai dashboard reference"
        className="block w-full object-cover"
      />
    </div>
  );
}
