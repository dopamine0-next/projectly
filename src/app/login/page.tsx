import Image from "next/image";
import { LoginForm } from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-card">
        <div className="mb-6 flex flex-col items-center text-center">
          <Image src="/logo.png" alt="Projectly" width={150} height={114} className="mb-3 h-auto w-40" priority />
          <h1 className="text-lg font-bold text-brand-700">Projectly</h1>
          <p className="mt-1 text-xs text-gray-500">
            Terhubung, kolaborasi, dan capai tujuanmu bersama.
          </p>
        </div>

        <h2 className="mb-4 text-center text-sm font-medium text-gray-400">
          Masuk / Daftar
        </h2>

        <LoginForm />

        <p className="mt-8 text-center text-[11px] text-gray-400">
          © 2025 Projectly - Kelompok 1
        </p>
      </div>
    </main>
  );
}
