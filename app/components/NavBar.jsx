import Link from "next/link";

const nav = [
  { label: "Problem", href: "/problem" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Early Access Council", href: "/early-access-council" },
  { label: "Contact", href: "/contact" }
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 bg-aoi-bg/80 backdrop-blur border-b border-white/5">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          {/* Logo file path: /public/logo.png */}
          <img
            src="/logo.png"
            alt="AoI logo"
            className="h-9 w-9 object-contain"
          />
          <div className="leading-tight">
            <div className="font-semibold tracking-wide">AoI</div>
            <div className="text-xs text-white/60 tracking-widest">
              ARCHITECTURE OF INTEGRITY
            </div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-white/80 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 inline-flex items-center rounded-xl bg-white text-black px-4 py-2 text-sm font-semibold hover:bg-white/90 transition"
          >
            Request Early Access
          </Link>
        </div>

        {/* Mobile CTA */}
        <div className="md:hidden">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-xl bg-white text-black px-3 py-2 text-sm font-semibold"
          >
            Early Access
          </Link>
        </div>
      </nav>
    </header>
  );
}
