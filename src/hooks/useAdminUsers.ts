"use client";

import { useEffect, useState } from "react";
import { getAdminUsers, updateUserStatus } from "@/services/admin.service";
import type { AdminUserItem, UserStatus } from "@/types/admin";

export function useAdminUsers() {
  const [users, setUsers] = useState<AdminUserItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<UserStatus | "Semua">("Semua");
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  useEffect(() => {
    let isCancelled = false;

    async function fetchUsers() {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getAdminUsers({ search, status: statusFilter });
        if (!isCancelled) setUsers(data);
      } catch {
        if (!isCancelled) setError("Gagal memuat data pengguna.");
      } finally {
        if (!isCancelled) setIsLoading(false);
      }
    }

    const timeoutId = setTimeout(fetchUsers, 250);
    return () => {
      isCancelled = true;
      clearTimeout(timeoutId);
    };
  }, [search, statusFilter]);

  async function handleToggleStatus(userId: string, currentStatus: UserStatus) {
    const nextStatus: UserStatus = currentStatus === "active" ? "suspended" : "active";
    setUpdatingId(userId);
    try {
      await updateUserStatus(userId, nextStatus);
      setUsers((prev) =>
        prev.map((user) => (user.id === userId ? { ...user, status: nextStatus } : user))
      );
    } finally {
      setUpdatingId(null);
    }
  }

  return {
    users,
    isLoading,
    error,
    search,
    setSearch,
    statusFilter,
    setStatusFilter,
    updatingId,
    handleToggleStatus,
  };
}
