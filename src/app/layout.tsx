import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LFX Concept Site",
  description: "A Next.js site powered by Sanity CMS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
