import Link from "next/link";
import { navigation } from "../../data/navigation";

export default function MobileNav() {
  return (
    <details className="group relative lg:hidden">
      <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center border border-white/16 text-sm text-white">
        <span className="sr-only">Open navigation</span>
        <span aria-hidden="true">Menu</span>
      </summary>
      <div className="absolute right-0 top-12 z-50 w-56 border border-white/12 bg-aoi-black p-3 shadow-2xl">
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block px-3 py-3 text-sm text-white/76 hover:bg-white/6 hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </details>
  );
}
