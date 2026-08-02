import clsx from "clsx";

interface MatchBadgeProps {
  percentage: number;
}

function getTier(percentage: number): "tinggi" | "sedang" | "rendah" {
  if (percentage >= 90) return "tinggi";
  if (percentage >= 70) return "sedang";
  return "rendah";
}

export function MatchBadge({ percentage }: MatchBadgeProps) {
  const tier = getTier(percentage);

  return (
    <span
      className={clsx(
        "shrink-0 rounded-full px-2.5 py-1 text-xs font-bold",
        tier === "tinggi" && "bg-emerald-100 text-emerald-700",
        tier === "sedang" && "bg-orange-100 text-orange-700",
        tier === "rendah" && "bg-gray-100 text-gray-600"
      )}
    >
      {tier === "tinggi" && "🎯 "}
      {percentage}% Cocok
    </span>
  );
}
