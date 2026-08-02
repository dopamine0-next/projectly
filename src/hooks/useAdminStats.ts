"use client";

import { useEffect, useState } from "react";
import { getAdminStats } from "@/services/admin.service";
import type { AdminStats } from "@/types/admin";

export function useAdminStats() {
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isCancelled = false;
    getAdminStats().then((data) => {
      if (!isCancelled) {
        setStats(data);
        setIsLoading(false);
      }
    });
    return () => {
      isCancelled = true;
    };
  }, []);

  return { stats, isLoading };
}
