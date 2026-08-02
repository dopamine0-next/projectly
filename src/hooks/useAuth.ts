"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login as loginService, logout as logoutService } from "@/services/auth.service";
import type { ApiError, LoginPayload } from "@/types/auth";

const TOKEN_KEY = "projectly_token";
const USER_KEY = "projectly_user";

export function useAuth() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  async function login(payload: LoginPayload) {
    setIsLoading(true);
    setError(null);
    try {
      const response = await loginService(payload);

      // Simpan sesi di localStorage. Nanti bisa diganti dengan cookie
      // httpOnly yang di-set oleh backend untuk keamanan yang lebih baik.
      localStorage.setItem(TOKEN_KEY, response.token);
      localStorage.setItem(USER_KEY, JSON.stringify(response.user));

      return response;
    } catch (err) {
      const apiError = err as ApiError;
      setError(apiError.message ?? "Terjadi kesalahan, coba lagi.");
      throw err;
    } finally {
      setIsLoading(false);
    }
  }

  async function logout() {
    setIsLoggingOut(true);
    try {
      await logoutService();
    } finally {
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(USER_KEY);
      setIsLoggingOut(false);
      router.push("/login");
    }
  }

  return { login, isLoading, error, logout, isLoggingOut };
}
