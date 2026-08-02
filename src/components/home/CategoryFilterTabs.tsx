"use client";

import clsx from "clsx";
import type { CategoryFilter } from "@/hooks/useProjects";

const CATEGORIES: CategoryFilter[] = ["Semua", "UI/UX", "Web", "ML"];

interface CategoryFilterTabsProps {
  active: CategoryFilter;
  onChange: (category: CategoryFilter) => void;
}

export function CategoryFilterTabs({ active, onChange }: CategoryFilterTabsProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1 md:flex-wrap md:overflow-visible" role="tablist" aria-label="Filter kategori project">
      {CATEGORIES.map((category) => {
        const isActive = category === active;
        return (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(category)}
            className={clsx(
              "shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors",
              isActive ? "bg-brand-600 text-white" : "bg-white text-gray-500 hover:bg-gray-100"
            )}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
