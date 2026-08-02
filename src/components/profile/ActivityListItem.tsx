import { CheckCircle2, Handshake, Users, type LucideIcon } from "lucide-react";
import clsx from "clsx";
import type { ActivityIconKey, ActivityItem } from "@/types/profile";

const ICON_MAP: Record<ActivityIconKey, LucideIcon> = {
  completed: CheckCircle2,
  joined: Handshake,
  team: Users,
};

const COLOR_MAP: Record<ActivityIconKey, string> = {
  completed: "bg-emerald-50 text-emerald-600",
  joined: "bg-orange-50 text-orange-600",
  team: "bg-brand-50 text-brand-600",
};

interface ActivityListItemProps {
  activity: ActivityItem;
}

export function ActivityListItem({ activity }: ActivityListItemProps) {
  const Icon = ICON_MAP[activity.iconKey];

  return (
    <div className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-3">
      <span
        className={clsx(
          "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
          COLOR_MAP[activity.iconKey]
        )}
      >
        <Icon className="h-4 w-4" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-gray-800">{activity.title}</p>
        <p className="truncate text-xs text-gray-500">{activity.description}</p>
      </div>
      <span className="shrink-0 text-[11px] text-gray-400">{activity.timeAgoLabel}</span>
    </div>
  );
}
