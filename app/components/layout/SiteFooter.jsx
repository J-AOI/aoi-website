import Link from "next/link";
import BrandMark from "../brand/BrandMark";
import { navigation } from "../../data/navigation";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#050505]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1fr_auto] lg:px-10">
        <div>
          <BrandMark className="h-11 w-auto" />
          <p className="mt-5 max-w-lg text-sm leading-7 text-white/56">
            AO Integrity validates authority at execution and produces governance evidence.
          </p>
        </div>
        <nav className="grid grid-cols-2 gap-x-10 gap-y-4 sm:flex sm:items-start sm:gap-8">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-white/62 hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-white/10 px-5 py-6 text-center text-xs text-white/42">
        Copyright AOI 2026
      </div>
    </footer>
  );
}
