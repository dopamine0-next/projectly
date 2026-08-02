"use client";

import { useEffect, useState } from "react";
import { getMyProfile } from "@/services/profile.service";
import type { UserProfile } from "@/types/profile";

export function useProfile() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isCancelled = false;

    async function fetchProfile() {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getMyProfile();
        if (!isCancelled) setProfile(data);
      } catch {
        if (!isCancelled) setError("Gagal memuat profil.");
      } finally {
        if (!isCancelled) setIsLoading(false);
      }
    }

    fetchProfile();
    return () => {
      isCancelled = true;
    };
  }, []);

  return { profile, isLoading, error };
}
