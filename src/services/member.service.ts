import type { RecommendedMember, RecommendationContext } from "@/types/member";
import { MOCK_MEMBERS, MOCK_RECOMMENDATION_CONTEXT } from "@/lib/mock/members";

const MOCK_DELAY_MS = 500;

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export interface GetRecommendedMembersParams {
  search?: string;
  skill?: string; // "Semua" atau nama skill spesifik
  semester?: number | "Semua";
  onlyAvailable?: boolean;
}

export async function getRecommendationContext(): Promise<RecommendationContext> {
  await delay(MOCK_DELAY_MS);
  return MOCK_RECOMMENDATION_CONTEXT;
}

export async function getRecommendedMembers(
  params: GetRecommendedMembersParams = {}
): Promise<RecommendedMember[]> {
  await delay(MOCK_DELAY_MS);

  const { search, skill, semester, onlyAvailable } = params;

  return MOCK_MEMBERS.filter((member) => {
    const matchesSearch =
      !search || member.name.toLowerCase().includes(search.trim().toLowerCase());
    const matchesSkill = !skill || skill === "Semua" || member.skills.includes(skill);
    const matchesSemester = !semester || semester === "Semua" || member.semester === semester;
    const matchesAvailability = !onlyAvailable || member.availability === "tersedia";
    return matchesSearch && matchesSkill && matchesSemester && matchesAvailability;
  }).sort((a, b) => b.matchPercentage - a.matchPercentage);
}

export async function inviteMember(memberId: string): Promise<{ success: true }> {
  await delay(MOCK_DELAY_MS);
  // Backend asli: POST /members/{id}/invite
  return { success: true };
}
