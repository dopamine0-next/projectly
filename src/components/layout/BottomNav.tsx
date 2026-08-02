"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { NAV_ITEMS, isNavItemActive } from "@/lib/nav-items";

// Hanya tampil di mobile/tablet kecil (< md). Di desktop, navigasi utama
// dipindah ke <Sidebar /> supaya tidak ada dua navigasi bertumpuk.
export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-20 border-t border-gray-100 bg-white md:hidden">
      <div className="mx-auto flex max-w-sm items-center justify-around px-2 py-2">
        {NAV_ITEMS.map((item) => {
          const isActive = isNavItemActive(item.href, pathname);

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center gap-1 px-3 py-1"
            >
              <item.icon
                className={clsx("h-5 w-5", isActive ? "text-brand-600" : "text-gray-400")}
              />
              <span
                className={clsx(
                  "text-[11px] font-medium",
                  isActive ? "text-brand-600" : "text-gray-400"
                )}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
