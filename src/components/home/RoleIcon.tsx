import { Code2, Server, Palette, Megaphone, type LucideIcon } from "lucide-react";
import clsx from "clsx";
import type { RoleIconKey } from "@/types/project";

const ROLE_ICON_MAP: Record<RoleIconKey, LucideIcon> = {
  frontend: Code2,
  backend: Server,
  design: Palette,
  marketing: Megaphone,
};

const ROLE_COLOR_MAP: Record<RoleIconKey, string> = {
  frontend: "bg-blue-50 text-blue-600",
  backend: "bg-amber-50 text-amber-600",
  design: "bg-brand-50 text-brand-600",
  marketing: "bg-rose-50 text-rose-600",
};

interface RoleIconProps {
  iconKey: RoleIconKey;
  size?: "sm" | "md";
}

export function RoleIcon({ iconKey, size = "sm" }: RoleIconProps) {
  const Icon = ROLE_ICON_MAP[iconKey];
  const dimension = size === "sm" ? "h-6 w-6" : "h-9 w-9";
  const iconSize = size === "sm" ? "h-3 w-3" : "h-4 w-4";

  return (
    <span
      className={clsx(
        "flex shrink-0 items-center justify-center rounded-full",
        dimension,
        ROLE_COLOR_MAP[iconKey]
      )}
    >
      <Icon className={iconSize} />
    </span>
  );
}
