import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export const metadata = {
  title: "AoI — Architecture of Integrity",
  description:
    "AoI is the Meta Governance Platform — unifying compliance, identity, and cloud governance into a single intelligent layer."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
