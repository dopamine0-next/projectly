"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { ADMIN_NAV_ITEMS, isAdminNavActive } from "@/lib/admin-nav-items";

export function AdminBottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-20 border-t border-gray-100 bg-white md:hidden">
      <div className="mx-auto flex max-w-sm items-center justify-around px-2 py-2">
        {ADMIN_NAV_ITEMS.map((item) => {
          const isActive = isAdminNavActive(item.href, pathname);

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
