"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, User, Lock } from "lucide-react";

import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useAuth } from "@/hooks/useAuth";
import { loginSchema, type LoginFormValues } from "@/lib/validations/auth.schema";

export function LoginForm() {
  const router = useRouter();
  const { login, isLoading, error } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  async function onSubmit(values: LoginFormValues) {
    try {
      const response = await login(values);
      if (response.user.role === "admin") {
        router.push("/admin");
        return;
      }
      // TODO: ganti dengan pengecekan `user.hasCompletedOnboarding` dari
      // backend nanti. Untuk sekarang, semua user baru diarahkan ke onboarding.
      router.push("/onboarding/welcome");
    } catch {
      // Error sudah ditangani & ditampilkan lewat state `error` dari useAuth.
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
      <Input
        label="NIM"
        placeholder="2310••••••"
        icon={<User className="h-4 w-4" />}
        error={errors.nim?.message}
        {...register("nim")}
      />

      <Input
        label="Kata Sandi"
        type={showPassword ? "text" : "password"}
        placeholder="••••••••"
        icon={<Lock className="h-4 w-4" />}
        error={errors.password?.message}
        rightElement={
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="text-gray-400 hover:text-gray-600"
            aria-label={showPassword ? "Sembunyikan kata sandi" : "Tampilkan kata sandi"}
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        }
        {...register("password")}
      />

      <div className="flex justify-end">
        <a href="#" className="text-xs font-medium text-brand-600 hover:underline">
          Lupa Kata Sandi?
        </a>
      </div>

      {error && (
        <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-xs text-red-600">
          {error}
        </p>
      )}

      <Button type="submit" isLoading={isLoading}>
        Masuk ke Dashboard
      </Button>
    </form>
  );
}
