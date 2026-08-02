"use client";

import { useEffect, useState } from "react";
import { getProjects } from "@/services/project.service";
import type { ProjectCategory, ProjectListItem } from "@/types/project";

export type CategoryFilter = ProjectCategory | "Semua";

export function useProjects() {
  const [projects, setProjects] = useState<ProjectListItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [category, setCategory] = useState<CategoryFilter>("Semua");
  const [search, setSearch] = useState("");

  useEffect(() => {
    let isCancelled = false;

    async function fetchProjects() {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getProjects({ category, search });
        if (!isCancelled) setProjects(data);
      } catch {
        if (!isCancelled) setError("Gagal memuat project. Coba lagi.");
      } finally {
        if (!isCancelled) setIsLoading(false);
      }
    }

    // Debounce ringan supaya tidak "fetch" tiap ketikan huruf pencarian.
    const timeoutId = setTimeout(fetchProjects, 250);
    return () => {
      isCancelled = true;
      clearTimeout(timeoutId);
    };
  }, [category, search]);

  return { projects, isLoading, error, category, setCategory, search, setSearch };
}
