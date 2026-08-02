import clsx from "clsx";
import type { UserStatus } from "@/types/admin";

interface UserStatusBadgeProps {
  status: UserStatus;
}

export function UserStatusBadge({ status }: UserStatusBadgeProps) {
  const isActive = status === "active";

  return (
    <span
      className={clsx(
        "rounded-full px-2.5 py-1 text-[11px] font-semibold",
        isActive ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"
      )}
    >
      {isActive ? "Aktif" : "Suspended"}
    </span>
  );
}
