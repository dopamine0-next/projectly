"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { ADMIN_NAV_ITEMS, isAdminNavActive } from "@/lib/admin-nav-items";
import { LogoutButton } from "@/components/profile/LogoutButton";

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-20 hidden w-60 shrink-0 flex-col border-r border-gray-100 bg-white md:flex">
      <div className="flex items-center gap-2 px-6 py-6">
        <Image src="/logo.png" alt="Projectly" width={50} height={38} className="h-auto w-12" />
        <div>
          <span className="block text-base font-bold text-brand-700">Projectly</span>
          <span className="block text-[10px] font-semibold uppercase tracking-wide text-gray-400">
            Admin
          </span>
        </div>
      </div>

      <nav className="flex flex-1 flex-col gap-1 px-3">
        {ADMIN_NAV_ITEMS.map((item) => {
          const isActive = isAdminNavActive(item.href, pathname);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                isActive
                  ? "bg-brand-50 text-brand-700"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-3">
        <LogoutButton />
      </div>
    </aside>
  );
}
