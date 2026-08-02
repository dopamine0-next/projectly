import type { ProjectCategory } from "./project";

export interface AdminStats {
  totalUsers: number;
  activeProjects: number;
  activeCollaborations: number;
  upcomingEvents: number;
}

export type UserStatus = "active" | "suspended";

export interface AdminUserItem {
  id: string;
  name: string;
  nim: string;
  major: string;
  role: "admin" | "user";
  status: UserStatus;
  joinedLabel: string; // mis. "Bergabung Agu 2025" — sudah diformat siap tampil
}

export type ProjectModerationStatus = "active" | "flagged";

export interface AdminProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  ownerName: string;
  memberCount: number;
  status: ProjectModerationStatus;
}

export interface SystemSettings {
  aiRecommendationEnabled: boolean;
  autoApproveProjects: boolean;
  allowGuestBrowsing: boolean;
  minMatchPercentage: number; // 0-100, ambang batas skor kecocokan AI ditampilkan
}
