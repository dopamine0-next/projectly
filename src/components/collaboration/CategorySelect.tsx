import { forwardRef, type SelectHTMLAttributes } from "react";
import clsx from "clsx";

interface CategorySelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
}

const CATEGORY_OPTIONS = ["UI/UX", "Web", "ML", "Marketing"];

export const CategorySelect = forwardRef<HTMLSelectElement, CategorySelectProps>(
  ({ label, error, id, className, ...props }, ref) => {
    const selectId = id ?? props.name;

    return (
      <div className="flex flex-col gap-1.5">
        <label htmlFor={selectId} className="text-sm font-medium text-gray-700">
          {label}
        </label>
        <select
          id={selectId}
          ref={ref}
          className={clsx(
            "rounded-xl border bg-white px-3.5 py-2.5 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-brand-100",
            error ? "border-red-400 focus:border-red-400" : "border-gray-200 focus:border-brand-500",
            className
          )}
          {...props}
        >
          <option value="">Pilih Kategori</option>
          {CATEGORY_OPTIONS.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);

CategorySelect.displayName = "CategorySelect";
