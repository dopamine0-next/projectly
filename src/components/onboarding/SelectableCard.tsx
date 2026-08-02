import type { LucideIcon } from "lucide-react";
import clsx from "clsx";

interface SelectableCardProps {
  label: string;
  icon: LucideIcon;
  selected: boolean;
  onClick: () => void;
}

export function SelectableCard({
  label,
  icon: Icon,
  selected,
  onClick,
}: SelectableCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={clsx(
        "flex flex-col items-start gap-2 rounded-xl border p-3.5 text-left transition-colors",
        selected
          ? "border-brand-500 bg-brand-50"
          : "border-gray-200 bg-white hover:border-gray-300"
      )}
    >
      <Icon
        className={clsx("h-4 w-4", selected ? "text-brand-600" : "text-gray-400")}
      />
      <span
        className={clsx(
          "text-sm font-medium",
          selected ? "text-brand-700" : "text-gray-700"
        )}
      >
        {label}
      </span>
    </button>
  );
}
