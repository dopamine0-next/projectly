"use client";

import { useAdminUsers } from "@/hooks/useAdminUsers";
import { SearchBar } from "@/components/ui/SearchBar";
import { AdminUserCard } from "@/components/admin/AdminUserCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { UserStatus } from "@/types/admin";

export default function AdminPenggunaPage() {
  const {
    users,
    isLoading,
    error,
    search,
    setSearch,
    statusFilter,
    setStatusFilter,
    updatingId,
    handleToggleStatus,
  } = useAdminUsers();

  return (
    <main className="flex flex-col gap-5 px-4 pt-6 md:px-8 md:pt-8">
      <div>
        <h1 className="text-lg font-bold text-gray-900">Kelola Pengguna</h1>
        <p className="text-sm text-gray-500">Lihat, aktifkan, atau suspend akun pengguna.</p>
      </div>

      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        <div className="md:max-w-sm md:flex-1">
          <SearchBar
            value={search}
            onChange={setSearch}
            placeholder="Cari nama atau NIM..."
            ariaLabel="Cari pengguna"
          />
        </div>
        <Select value={statusFilter} onValueChange={(value) => setStatusFilter(value as UserStatus | "Semua")}>
          <SelectTrigger className="md:w-48">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Semua">Semua Status</SelectItem>
            <SelectItem value="active">Aktif</SelectItem>
            <SelectItem value="suspended">Suspended</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-2.5 md:grid md:grid-cols-2 md:gap-3">
        {isLoading && <p className="text-xs text-gray-400">Memuat pengguna...</p>}
        {error && <p className="text-xs text-red-500">{error}</p>}
        {!isLoading && !error && users.length === 0 && (
          <p className="text-xs text-gray-400">Tidak ada pengguna yang cocok.</p>
        )}
        {users.map((user) => (
          <AdminUserCard
            key={user.id}
            user={user}
            isUpdating={updatingId === user.id}
            onToggleStatus={() => handleToggleStatus(user.id, user.status)}
          />
        ))}
      </div>
    </main>
  );
}
