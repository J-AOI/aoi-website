import Link from "next/link";

export default function NavLink({ href, children, className = "" }) {
  return (
    <Link
      href={href}
      className={`text-sm font-medium text-white/68 transition hover:text-white ${className}`}
    >
      {children}
    </Link>
  );
}
