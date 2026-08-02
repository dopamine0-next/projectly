"use client";

import clsx from "clsx";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { SkillFilter, SemesterFilter } from "@/hooks/useRecommendedMembers";

const SKILL_OPTIONS = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Vue.js",
  "JavaScript",
  "Figma",
  "HTML/CSS",
  "UI/UX",
];

const SEMESTER_OPTIONS = [2, 3, 4];

interface MemberFilterBarProps {
  skill: SkillFilter;
  onSkillChange: (skill: SkillFilter) => void;
  semester: SemesterFilter;
  onSemesterChange: (semester: SemesterFilter) => void;
  onlyAvailable: boolean;
  onToggleAvailable: () => void;
  onReset: () => void;
  isFiltered: boolean;
}

export function MemberFilterBar({
  skill,
  onSkillChange,
  semester,
  onSemesterChange,
  onlyAvailable,
  onToggleAvailable,
  onReset,
  isFiltered,
}: MemberFilterBarProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1 md:flex-wrap md:overflow-visible">
      <button
        type="button"
        onClick={onReset}
        className={clsx(
          "shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors",
          !isFiltered ? "bg-brand-600 text-white" : "bg-white text-gray-500 hover:bg-gray-100"
        )}
      >
        Semua
      </button>

      <Select value={skill} onValueChange={(value) => onSkillChange(value as SkillFilter)}>
        <SelectTrigger
          className={clsx(
            "h-auto w-auto shrink-0 gap-1 rounded-full border-none px-3.5 py-1.5 text-xs font-semibold",
            skill !== "Semua" ? "bg-brand-100 text-brand-700" : "bg-white text-gray-500"
          )}
        >
          <SelectValue placeholder="Keahlian" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Semua">Semua Keahlian</SelectItem>
          {SKILL_OPTIONS.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <button
        type="button"
        onClick={onToggleAvailable}
        className={clsx(
          "shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors",
          onlyAvailable ? "bg-brand-600 text-white" : "bg-white text-gray-500 hover:bg-gray-100"
        )}
      >
        Tersedia
      </button>

      <Select
        value={semester === "Semua" ? "Semua" : String(semester)}
        onValueChange={(value) => onSemesterChange(value === "Semua" ? "Semua" : Number(value))}
      >
        <SelectTrigger
          className={clsx(
            "h-auto w-auto shrink-0 gap-1 rounded-full border-none px-3.5 py-1.5 text-xs font-semibold",
            semester !== "Semua" ? "bg-brand-100 text-brand-700" : "bg-white text-gray-500"
          )}
        >
          <SelectValue placeholder="Angkatan" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Semua">Semua Angkatan</SelectItem>
          {SEMESTER_OPTIONS.map((option) => (
            <SelectItem key={option} value={String(option)}>
              Smt {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
