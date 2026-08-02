import Link from "next/link";
import clsx from "clsx";
import type { CollaborationListItem } from "@/types/collaboration";

interface CollaborationCardProps {
  collaboration: CollaborationListItem;
}

export function CollaborationCard({ collaboration }: CollaborationCardProps) {
  const progressPercent = Math.round(
    (collaboration.memberCount / collaboration.memberCapacity) * 100
  );
  const isOwner = collaboration.role === "owner";

  return (
    <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between">
        <span
          className={clsx(
            "rounded-full px-2.5 py-1 text-[11px] font-semibold",
            isOwner ? "bg-brand-100 text-brand-700" : "bg-gray-100 text-gray-600"
          )}
        >
          {isOwner ? "Status Owner" : "Status Member"}
        </span>
      </div>

      <h3 className="mt-2 text-sm font-bold text-gray-800">{collaboration.title}</h3>
      <p className="mt-1 line-clamp-2 text-xs text-gray-500">{collaboration.description}</p>

      <div className="mt-3">
        <div className="mb-1 flex items-center justify-between text-[11px] text-gray-500">
          <span>
            {collaboration.memberCount}/{collaboration.memberCapacity} Anggota
          </span>
          <span>{progressPercent}% Penuh</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
          <div
            className="h-full rounded-full bg-brand-600"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between border-t border-gray-50 pt-3">
        <div className="flex -space-x-2">
          {collaboration.members.map((member, index) => (
            <span
              key={index}
              className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-brand-400 to-brand-700 text-[10px] font-semibold text-white"
            >
              {member.initial}
            </span>
          ))}
        </div>
        <Link
          href={`/kolaborasi/${collaboration.id}`}
          className="text-xs font-semibold text-brand-600 hover:underline"
        >
          Lihat detail
        </Link>
      </div>
    </div>
  );
}
