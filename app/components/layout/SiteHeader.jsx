import Link from "next/link";
import Wordmark from "../brand/Wordmark";
import DesktopNav from "../navigation/DesktopNav";
import MobileNav from "../navigation/MobileNav";
import Button from "../ui/Button";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-aoi-black/88 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link href="/" aria-label="AOI home" className="inline-flex items-center">
          <Wordmark className="h-10 w-auto" />
        </Link>
        <div className="flex items-center gap-5">
          <DesktopNav />
          <Button href="/contact" className="hidden lg:inline-flex">
            Request Briefing
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
