import { navigation } from "../../data/navigation";
import NavLink from "./NavLink";

export default function DesktopNav() {
  return (
    <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
      {navigation.map((item) => (
        <NavLink key={item.href} href={item.href}>
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
