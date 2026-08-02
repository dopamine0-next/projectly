"use client";

import { useEffect, useState } from "react";
import { getProjectById, joinProject } from "@/services/project.service";
import type { ProjectDetail } from "@/types/project";

export function useProjectDetail(projectId: string) {
  const [project, setProject] = useState<ProjectDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [isJoining, setIsJoining] = useState(false);
  const [hasJoined, setHasJoined] = useState(false);
  const [joinError, setJoinError] = useState<string | null>(null);

  useEffect(() => {
    let isCancelled = false;

    async function fetchProject() {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getProjectById(projectId);
        if (!isCancelled) setProject(data);
      } catch {
        if (!isCancelled) setError("Gagal memuat detail project.");
      } finally {
        if (!isCancelled) setIsLoading(false);
      }
    }

    fetchProject();
    return () => {
      isCancelled = true;
    };
  }, [projectId]);

  async function handleJoin() {
    setIsJoining(true);
    setJoinError(null);
    try {
      await joinProject(projectId);
      setHasJoined(true);
    } catch {
      setJoinError("Gagal bergabung, coba lagi.");
    } finally {
      setIsJoining(false);
    }
  }

  return { project, isLoading, error, handleJoin, isJoining, hasJoined, joinError };
}
