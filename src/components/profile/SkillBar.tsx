import clsx from "clsx";
import type { SkillProficiency } from "@/types/profile";

interface SkillBarProps {
  skill: SkillProficiency;
}

const COLOR_CLASSES: Record<SkillProficiency["colorKey"], string> = {
  orange: "bg-orange-500",
  blue: "bg-blue-500",
  teal: "bg-teal-500",
};

export function SkillBar({ skill }: SkillBarProps) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-xs">
        <span className="font-semibold text-gray-700">{skill.name}</span>
        <span className="text-gray-500">{skill.percentage}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
        <div
          className={clsx("h-full rounded-full", COLOR_CLASSES[skill.colorKey])}
          style={{ width: `${skill.percentage}%` }}
        />
      </div>
    </div>
  );
}
