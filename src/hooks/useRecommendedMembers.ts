"use client";

import { useEffect, useState } from "react";
import {
  getRecommendationContext,
  getRecommendedMembers,
  inviteMember,
} from "@/services/member.service";
import type { RecommendationContext, RecommendedMember } from "@/types/member";

export type AvailabilityFilter = boolean; // true = hanya yang tersedia
export type SkillFilter = string | "Semua";
export type SemesterFilter = number | "Semua";

export function useRecommendedMembers() {
  const [context, setContext] = useState<RecommendationContext | null>(null);
  const [members, setMembers] = useState<RecommendedMember[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [search, setSearch] = useState("");
  const [skill, setSkill] = useState<SkillFilter>("Semua");
  const [semester, setSemester] = useState<SemesterFilter>("Semua");
  const [onlyAvailable, setOnlyAvailable] = useState(false);

  const [invitedIds, setInvitedIds] = useState<Set<string>>(new Set());
  const [invitingId, setInvitingId] = useState<string | null>(null);

  useEffect(() => {
    getRecommendationContext().then(setContext);
  }, []);

  useEffect(() => {
    let isCancelled = false;

    async function fetchMembers() {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getRecommendedMembers({ search, skill, semester, onlyAvailable });
        if (!isCancelled) setMembers(data);
      } catch {
        if (!isCancelled) setError("Gagal memuat rekomendasi anggota.");
      } finally {
        if (!isCancelled) setIsLoading(false);
      }
    }

    const timeoutId = setTimeout(fetchMembers, 250);
    return () => {
      isCancelled = true;
      clearTimeout(timeoutId);
    };
  }, [search, skill, semester, onlyAvailable]);

  function resetFilters() {
    setSearch("");
    setSkill("Semua");
    setSemester("Semua");
    setOnlyAvailable(false);
  }

  async function handleInvite(memberId: string) {
    setInvitingId(memberId);
    try {
      await inviteMember(memberId);
      setInvitedIds((prev) => new Set(prev).add(memberId));
    } finally {
      setInvitingId(null);
    }
  }

  return {
    context,
    members,
    isLoading,
    error,
    search,
    setSearch,
    skill,
    setSkill,
    semester,
    setSemester,
    onlyAvailable,
    setOnlyAvailable,
    resetFilters,
    invitedIds,
    invitingId,
    handleInvite,
  };
}
