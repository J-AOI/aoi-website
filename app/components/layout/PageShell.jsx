import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export default function PageShell({ children }) {
  return (
    <div className="min-h-screen bg-aoi-black text-aoi-white">
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
