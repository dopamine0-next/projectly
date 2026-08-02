import Link from "next/link";
import { Users } from "lucide-react";
import type { ProjectListItem } from "@/types/project";
import { categoryBadgeClass } from "@/lib/category-style";
import { RoleIcon } from "./RoleIcon";

interface ProjectListCardProps {
  project: ProjectListItem;
}

export function ProjectListCard({ project }: ProjectListCardProps) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-2">
        <span
          className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${categoryBadgeClass(
            project.category
          )}`}
        >
          {project.category}
        </span>
        <span className="shrink-0 text-[11px] text-gray-400">{project.daysLeftLabel}</span>
      </div>

      <h3 className="mt-2 text-sm font-bold text-gray-800">{project.title}</h3>
      <p className="mt-1 line-clamp-2 text-xs text-gray-500">{project.description}</p>

      <p className="mt-3 text-[10px] font-semibold uppercase tracking-wide text-gray-400">
        Roles Needed
      </p>
      <div className="mt-1.5 flex flex-wrap gap-2">
        {project.roles.map((role) => (
          <span
            key={role.name}
            title={role.name}
            className="flex items-center gap-1 rounded-full bg-gray-50 py-0.5 pl-0.5 pr-2 text-[11px] font-medium text-gray-600"
          >
            <RoleIcon iconKey={role.iconKey} />
            {role.filled}/{role.total}
          </span>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-between border-t border-gray-50 pt-3">
        <span className="flex items-center gap-1 text-[11px] text-gray-500">
          <Users className="h-3.5 w-3.5" />
          {project.interestedCount} orang tertarik
        </span>
        <Link
          href={`/dashboard/project/${project.id}`}
          className="text-xs font-semibold text-brand-600 hover:underline"
        >
          Lihat Project →
        </Link>
      </div>
    </div>
  );
}
