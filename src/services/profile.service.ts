import type { UpdateProfilePayload, UserProfile } from "@/types/profile";
import { MOCK_PROFILE } from "@/lib/mock/profile";

const MOCK_DELAY_MS = 500;

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getMyProfile(): Promise<UserProfile> {
  await delay(MOCK_DELAY_MS);
  // Backend asli: GET /profile/me
  return MOCK_PROFILE;
}

export async function updateProfile(payload: UpdateProfilePayload): Promise<UserProfile> {
  await delay(MOCK_DELAY_MS);

  // Mock: mutasi langsung objek in-memory supaya perubahan terlihat kalau
  // user balik lagi ke halaman Profil di sesi yang sama. Backend asli:
  // PATCH /profile/me lalu return profil terbaru dari response-nya.
  MOCK_PROFILE.name = payload.name;
  MOCK_PROFILE.major = payload.major;
  MOCK_PROFILE.university = payload.university;
  MOCK_PROFILE.interests = payload.interests;

  return MOCK_PROFILE;
}
