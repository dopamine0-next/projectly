import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BottomNavBar } from "@/components/bottom-nav-bar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Projectly - Kolaborasi",
  description: "AI-Powered Project Collaboration Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-zinc-100">
        <TooltipProvider>
          {/* Mobile wrapper container */}
          <div className="w-full max-w-[430px] mx-auto h-[100dvh] bg-gray-50 shadow-2xl relative flex flex-col overflow-hidden">
            <div className="flex-1 overflow-y-auto overflow-x-hidden pb-[68px] no-scrollbar">
              {children}
            </div>
            <BottomNavBar />
          </div>
        </TooltipProvider>
      </body>
    </html>
  );
}
