import { LayoutDashboard, Users, FolderKanban, Settings, type LucideIcon } from "lucide-react";

export interface AdminNavItem {
  href: string;
  label: string;
  icon: LucideIcon;
}

export const ADMIN_NAV_ITEMS: AdminNavItem[] = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/pengguna", label: "Pengguna", icon: Users },
  { href: "/admin/proyek", label: "Proyek", icon: FolderKanban },
  { href: "/admin/pengaturan", label: "Pengaturan", icon: Settings },
];

export function isAdminNavActive(itemHref: string, pathname: string): boolean {
  return itemHref === "/admin" ? pathname === "/admin" : pathname.startsWith(itemHref);
}
