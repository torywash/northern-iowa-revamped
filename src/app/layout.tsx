import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MyUniverse — University of Northern Iowa",
  description:
    "A concept redesign of MyUniverse, the University of Northern Iowa student portal. Mock data only; not affiliated with UNI.",
};

export const viewport: Viewport = {
  themeColor: "#46257a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-neutral-50 text-neutral-900 antialiased">{children}</body>
    </html>
  );
}
