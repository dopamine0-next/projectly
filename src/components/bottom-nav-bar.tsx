"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Layers, Users, User } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Beranda", icon: Home },
  { href: "/kolaborasi", label: "Kolaborasi", icon: Layers },
  { href: "/komunitas", label: "Komunitas", icon: Users },
  { href: "/profil", label: "Profil", icon: User },
];

export function BottomNavBar() {
  const pathname = usePathname();

  // Hide nav bar on specific routes
  if (pathname === "/login" || pathname?.startsWith("/onboarding")) {
    return null;
  }

  return (
    <div className="absolute bottom-0 left-0 right-0 h-[68px] bg-white border-t border-gray-100 flex items-center justify-around px-2 z-50">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
        
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex flex-col items-center justify-center w-full h-full gap-1 transition-colors",
              isActive ? "text-[oklch(0.55_0.22_280)]" : "text-gray-400 hover:text-gray-600"
            )}
          >
            <Icon className={cn("w-6 h-6", isActive && "fill-current")} />
            <span className="text-[10px] font-medium">{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
