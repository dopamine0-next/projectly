import type { LucideIcon } from "lucide-react";
import clsx from "clsx";

interface RadioOptionProps {
  label: string;
  description?: string;
  icon?: LucideIcon;
  selected: boolean;
  onClick: () => void;
}

export function RadioOption({
  label,
  description,
  icon: Icon,
  selected,
  onClick,
}: RadioOptionProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={clsx(
        "flex w-full items-center justify-between rounded-xl border p-3.5 text-left transition-colors",
        selected
          ? "border-brand-500 bg-brand-50"
          : "border-gray-200 bg-white hover:border-gray-300"
      )}
    >
      <span className="flex items-center gap-3">
        {Icon && (
          <Icon
            className={clsx("h-4 w-4", selected ? "text-brand-600" : "text-gray-400")}
          />
        )}
        <span>
          <span
            className={clsx(
              "block text-sm font-medium",
              selected ? "text-brand-700" : "text-gray-700"
            )}
          >
            {label}
          </span>
          {description && (
            <span className="block text-xs text-gray-400">{description}</span>
          )}
        </span>
      </span>

      <span
        className={clsx(
          "flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full border-2",
          selected ? "border-brand-600" : "border-gray-300"
        )}
      >
        {selected && <span className="h-2 w-2 rounded-full bg-brand-600" />}
      </span>
    </button>
  );
}
