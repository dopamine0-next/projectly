import { Plus, X } from "lucide-react";
import clsx from "clsx";

interface SkillTagProps {
  label: string;
  variant: "selected" | "suggestion";
  onClick: () => void;
}

export function SkillTag({ label, variant, onClick }: SkillTagProps) {
  const isSelected = variant === "selected";

  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        "flex items-center gap-1 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
        isSelected
          ? "border-brand-200 bg-brand-100 text-brand-700"
          : "border-gray-200 bg-white text-gray-600 hover:border-brand-300 hover:text-brand-600"
      )}
    >
      {label}
      {isSelected ? <X className="h-3 w-3" /> : <Plus className="h-3 w-3" />}
    </button>
  );
}
