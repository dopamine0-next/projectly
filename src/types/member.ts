export type MemberAvailability = "tersedia" | "terbatas";

export interface RecommendedMember {
  id: string;
  name: string;
  program: string;
  semester: number;
  matchPercentage: number; // 0-100, dihitung backend/AI nantinya
  matchReason: string; // alasan singkat kecocokan, mis. "Cocok dengan tech stack dan minat di FinTech."
  skills: string[];
  availability: MemberAvailability;
}

export interface RecommendationContext {
  targetRole: string; // role project yang jadi acuan rekomendasi, mis. "Frontend Developer"
}
