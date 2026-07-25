import "./globals.css";

export const metadata = {
  title: "AOI | Architecture of Integrity",
  description:
    "AOI builds governance continuity systems for validating authority at execution.",
  icons: {
    icon: "/assets/brand/AOI_Favicon_Master.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
