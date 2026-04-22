import "./globals.css";

export const metadata = {
  title: "AO Integrity",
  description: "Authority Validation at Execution",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}
