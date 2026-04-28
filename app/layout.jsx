import "./globals.css";
import { Syne } from 'next/font/google'
import { JetBrains_Mono } from 'next/font/google'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800']
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500']
})

export const metadata = {
  title: "AO Integrity",
  description: "Authority Validation at Execution",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${syne.className} bg-[#080C10] text-white`}>
        {children}
      </body>
    </html>
  );
}
