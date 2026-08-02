import type {
  AdminProjectItem,
  AdminStats,
  AdminUserItem,
  SystemSettings,
  UserStatus,
} from "@/types/admin";
import {
  MOCK_ADMIN_PROJECTS,
  MOCK_ADMIN_STATS,
  MOCK_ADMIN_USERS,
  MOCK_SYSTEM_SETTINGS,
} from "@/lib/mock/admin";

const MOCK_DELAY_MS = 500;

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getAdminStats(): Promise<AdminStats> {
  await delay(MOCK_DELAY_MS);
  return MOCK_ADMIN_STATS;
}

export interface GetAdminUsersParams {
  search?: string;
  status?: UserStatus | "Semua";
}

export async function getAdminUsers(params: GetAdminUsersParams = {}): Promise<AdminUserItem[]> {
  await delay(MOCK_DELAY_MS);
  const { search, status } = params;

  return MOCK_ADMIN_USERS.filter((user) => {
    const matchesSearch =
      !search ||
      user.name.toLowerCase().includes(search.trim().toLowerCase()) ||
      user.nim.toLowerCase().includes(search.trim().toLowerCase());
    const matchesStatus = !status || status === "Semua" || user.status === status;
    return matchesSearch && matchesStatus;
  });
}

export async function updateUserStatus(
  userId: string,
  status: UserStatus
): Promise<{ success: true }> {
  await delay(MOCK_DELAY_MS);
  // Mock: mutasi in-memory supaya perubahan terlihat di sesi yang sama.
  // Backend asli: PATCH /admin/users/{id} { status }
  const user = MOCK_ADMIN_USERS.find((item) => item.id === userId);
  if (user) user.status = status;
  return { success: true };
}

export async function getAdminProjects(): Promise<AdminProjectItem[]> {
  await delay(MOCK_DELAY_MS);
  return MOCK_ADMIN_PROJECTS;
}

export async function removeAdminProject(projectId: string): Promise<{ success: true }> {
  await delay(MOCK_DELAY_MS);
  // Backend asli: DELETE /admin/projects/{id}
  const index = MOCK_ADMIN_PROJECTS.findIndex((item) => item.id === projectId);
  if (index !== -1) MOCK_ADMIN_PROJECTS.splice(index, 1);
  return { success: true };
}

export async function getSystemSettings(): Promise<SystemSettings> {
  await delay(MOCK_DELAY_MS);
  return MOCK_SYSTEM_SETTINGS;
}

export async function updateSystemSettings(
  payload: SystemSettings
): Promise<SystemSettings> {
  await delay(MOCK_DELAY_MS);
  // Backend asli: PATCH /admin/settings
  Object.assign(MOCK_SYSTEM_SETTINGS, payload);
  return MOCK_SYSTEM_SETTINGS;
}
