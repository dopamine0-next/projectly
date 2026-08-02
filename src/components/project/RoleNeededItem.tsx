import type { ProjectRoleDetail } from "@/types/project";
import { RoleIcon } from "@/components/home/RoleIcon";

interface RoleNeededItemProps {
  role: ProjectRoleDetail;
}

export function RoleNeededItem({ role }: RoleNeededItemProps) {
  const progressPercent = role.total > 0 ? Math.round((role.filled / role.total) * 100) : 0;

  return (
    <div className="flex gap-3 rounded-xl border border-gray-100 bg-white p-3.5">
      <RoleIcon iconKey={role.iconKey} size="md" />
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-gray-800">{role.name}</p>
        <p className="mt-0.5 text-xs text-gray-500">{role.note}</p>

        <div className="mt-2 flex items-center gap-2">
          <p className="text-[11px] text-gray-400">Terisi</p>
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-100">
            <div
              className="h-full rounded-full bg-brand-600"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <p className="shrink-0 text-[11px] font-medium text-gray-500">
            {role.filled}/{role.total}
          </p>
        </div>
      </div>
    </div>
  );
}
