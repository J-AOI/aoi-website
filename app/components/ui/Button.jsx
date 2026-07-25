import Link from "next/link";

const variants = {
  primary: "border-aoi-red bg-aoi-red text-white hover:bg-[#b80f12]",
  secondary: "border-white/18 bg-white/0 text-white hover:bg-white/8",
};

export default function Button({ href, children, variant = "primary", className = "" }) {
  const classes = `inline-flex min-h-12 items-center justify-center border px-5 text-sm font-semibold tracking-wide transition ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}
