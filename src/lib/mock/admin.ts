import type { AdminProjectItem, AdminStats, AdminUserItem, SystemSettings } from "@/types/admin";

export const MOCK_ADMIN_STATS: AdminStats = {
  totalUsers: 1245,
  activeProjects: 342,
  activeCollaborations: 128,
  upcomingEvents: 6,
};

export const MOCK_ADMIN_USERS: AdminUserItem[] = [
  {
    id: "usr_001",
    name: "Alex Pratama",
    nim: "2310001",
    major: "Informatics Engineering",
    role: "user",
    status: "active",
    joinedLabel: "Bergabung Agu 2025",
  },
  {
    id: "usr_003",
    name: "Sarah J.",
    nim: "2310045",
    major: "Ilmu Komputer",
    role: "user",
    status: "active",
    joinedLabel: "Bergabung Sep 2025",
  },
  {
    id: "usr_004",
    name: "David M.",
    nim: "2210089",
    major: "Rekayasa Perangkat Lunak",
    role: "user",
    status: "active",
    joinedLabel: "Bergabung Jan 2025",
  },
  {
    id: "usr_005",
    name: "Elena K.",
    nim: "2310112",
    major: "Desain Interaktif",
    role: "user",
    status: "suspended",
    joinedLabel: "Bergabung Mar 2025",
  },
  {
    id: "usr_002",
    name: "Admin Projectly",
    nim: "admin001",
    major: "—",
    role: "admin",
    status: "active",
    joinedLabel: "Bergabung Jan 2025",
  },
];

export const MOCK_ADMIN_PROJECTS: AdminProjectItem[] = [
  {
    id: "prj_001",
    title: "Redesain Aplikasi Event Kampus",
    category: "UI/UX",
    ownerName: "Nadia Putri",
    memberCount: 0,
    status: "active",
  },
  {
    id: "prj_002",
    title: "Pengembangan Prototipe Aplikasi EcoTrack",
    category: "Web",
    ownerName: "Alex Mercer",
    memberCount: 3,
    status: "active",
  },
  {
    id: "prj_003",
    title: "Hackathon Promotion Campaign",
    category: "Marketing",
    ownerName: "Rangga Saputra",
    memberCount: 0,
    status: "flagged",
  },
];

export const MOCK_SYSTEM_SETTINGS: SystemSettings = {
  aiRecommendationEnabled: true,
  autoApproveProjects: false,
  allowGuestBrowsing: false,
  minMatchPercentage: 60,
};
