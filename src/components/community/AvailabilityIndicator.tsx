import clsx from "clsx";
import type { MemberAvailability } from "@/types/member";

interface AvailabilityIndicatorProps {
  availability: MemberAvailability;
}

export function AvailabilityIndicator({ availability }: AvailabilityIndicatorProps) {
  const isAvailable = availability === "tersedia";

  return (
    <span className="flex items-center gap-1.5 text-[11px] font-medium text-gray-500">
      <span
        className={clsx("h-1.5 w-1.5 rounded-full", isAvailable ? "bg-emerald-500" : "bg-orange-400")}
      />
      {isAvailable ? "Tersedia Sekarang" : "Kapasitas Terbatas"}
    </span>
  );
}
