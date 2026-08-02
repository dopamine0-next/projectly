"use client";

import { useEffect, useState } from "react";
import { getAdminProjects, removeAdminProject } from "@/services/admin.service";
import type { AdminProjectItem } from "@/types/admin";

export function useAdminProjects() {
  const [projects, setProjects] = useState<AdminProjectItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [removingId, setRemovingId] = useState<string | null>(null);

  useEffect(() => {
    let isCancelled = false;

    async function fetchProjects() {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getAdminProjects();
        if (!isCancelled) setProjects(data);
      } catch {
        if (!isCancelled) setError("Gagal memuat data proyek.");
      } finally {
        if (!isCancelled) setIsLoading(false);
      }
    }

    fetchProjects();
    return () => {
      isCancelled = true;
    };
  }, []);

  async function handleRemove(projectId: string) {
    setRemovingId(projectId);
    try {
      await removeAdminProject(projectId);
      setProjects((prev) => prev.filter((project) => project.id !== projectId));
    } finally {
      setRemovingId(null);
    }
  }

  return { projects, isLoading, error, removingId, handleRemove };
}
