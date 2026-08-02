import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Projectly",
  description: "Terhubung, kolaborasi, dan capai tujuanmu bersama.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="bg-gray-50 antialiased">{children}</body>
    </html>
  );
}
