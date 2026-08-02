import type { ApiError, LoginPayload, LoginResponse } from "@/types/auth";
import { MOCK_USERS } from "@/lib/mock/users";

/**
 * KEPUTUSAN ARSITEKTUR:
 * Semua komunikasi "ke backend" untuk fitur auth wajib lewat file ini,
 * bukan dipanggil langsung dari komponen. Komponen (LoginForm, dsb.) hanya
 * kenal fungsi `login()` dan tipe LoginPayload/LoginResponse — tidak peduli
 * apakah datanya mock atau asli.
 *
 * Ketika backend sudah siap, ganti isi fungsi `login` di bawah dengan:
 *
 *   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
 *     method: "POST",
 *     headers: { "Content-Type": "application/json" },
 *     body: JSON.stringify(payload),
 *   });
 *   if (!res.ok) {
 *     const err = await res.json();
 *     throw err as ApiError;
 *   }
 *   return (await res.json()) as LoginResponse;
 *
 * Tidak ada kode lain yang perlu diubah karena signature fungsi tetap sama.
 */

const MOCK_DELAY_MS = 700;

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function login(payload: LoginPayload): Promise<LoginResponse> {
  await delay(MOCK_DELAY_MS);

  const found = MOCK_USERS.find((u) => u.nim === payload.nim);

  if (!found || found.password !== payload.password) {
    const error: ApiError = {
      message: "NIM atau kata sandi salah. Silakan coba lagi.",
    };
    throw error;
  }

  const { password: _password, ...user } = found;

  return {
    token: `mock-token-${user.id}-${Date.now()}`,
    user,
  };
}

export async function logout(): Promise<{ success: true }> {
  await delay(300);
  // Backend asli: POST /auth/logout untuk invalidate token di server.
  // Penghapusan token/user di localStorage tetap dilakukan di useAuth,
  // supaya sesi lokal langsung bersih walau request ini lambat/gagal.
  return { success: true };
}
