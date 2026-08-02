"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { AuthUser } from "@/types/auth";

const USER_KEY = "projectly_user";

/**
 * Proteksi sisi klien untuk halaman admin. Ini proteksi kosmetik saja
 * (mudah dilewati lewat devtools) — backend asli WAJIB tetap memvalidasi
 * role di setiap endpoint admin, jangan andalkan pengecekan ini sebagai
 * satu-satunya lapisan keamanan.
 */
export function useRequireAdmin() {
  const router = useRouter();
  const [admin, setAdmin] = useState<AuthUser | null>(null);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const raw = localStorage.getItem(USER_KEY);
    const user: AuthUser | null = raw ? JSON.parse(raw) : null;

    if (!user || user.role !== "admin") {
      router.replace("/login");
      return;
    }

    setAdmin(user);
    setIsChecking(false);
  }, [router]);

  return { admin, isChecking };
}
