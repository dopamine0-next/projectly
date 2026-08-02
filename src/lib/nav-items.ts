import { Home, FolderKanban, Users, CircleUserRound, type LucideIcon } from "lucide-react";

export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
}

export const NAV_ITEMS: NavItem[] = [
  { href: "/dashboard", label: "Beranda", icon: Home },
  { href: "/kolaborasi", label: "Kolaborasi", icon: FolderKanban },
  { href: "/komunitas", label: "Komunitas", icon: Users },
  { href: "/profil", label: "Profil", icon: CircleUserRound },
];

// Beranda dianggap aktif juga untuk sub-halaman seperti /dashboard/project/...
export function isNavItemActive(itemHref: string, pathname: string): boolean {
  return itemHref === "/dashboard"
    ? pathname.startsWith("/dashboard")
    : pathname.startsWith(itemHref);
}
