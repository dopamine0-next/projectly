import { MoreVertical, ShieldCheck, UserX, UserCheck, Loader2 } from "lucide-react";
import type { AdminUserItem } from "@/types/admin";
import { UserStatusBadge } from "./UserStatusBadge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface AdminUserCardProps {
  user: AdminUserItem;
  isUpdating: boolean;
  onToggleStatus: () => void;
}

export function AdminUserCard({ user, isUpdating, onToggleStatus }: AdminUserCardProps) {
  const isAdmin = user.role === "admin";

  return (
    <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-3.5 shadow-sm">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-brand-700 text-sm font-semibold text-white">
        {user.name.charAt(0)}
      </span>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <p className="truncate text-sm font-bold text-gray-900">{user.name}</p>
          {isAdmin && <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-brand-600" />}
        </div>
        <p className="truncate text-[11px] text-gray-500">
          {user.nim} • {user.major}
        </p>
      </div>

      <UserStatusBadge status={user.status} />

      <DropdownMenu>
        <DropdownMenuTrigger
          disabled={isAdmin || isUpdating}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-gray-400 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
          aria-label="Menu aksi"
        >
          {isUpdating ? <Loader2 className="h-4 w-4 animate-spin" /> : <MoreVertical className="h-4 w-4" />}
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={onToggleStatus}>
            {user.status === "active" ? (
              <>
                <UserX className="h-4 w-4 text-red-500" />
                Suspend Akun
              </>
            ) : (
              <>
                <UserCheck className="h-4 w-4 text-emerald-600" />
                Aktifkan Akun
              </>
            )}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
