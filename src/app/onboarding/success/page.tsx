"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { ProgressBar } from "@/components/onboarding/ProgressBar";
import { Button } from "@/components/ui/Button";
import { useOnboarding } from "@/context/OnboardingContext";
import type { AuthUser } from "@/types/auth";

export default function OnboardingSuccessPage() {
  const router = useRouter();
  const { result, resetData } = useOnboarding();
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    const raw = localStorage.getItem("projectly_user");
    if (raw) {
      const user = JSON.parse(raw) as AuthUser;
      setUserName(user.name.split(" ")[0]);
    }

    // Jika user membuka halaman ini langsung tanpa melalui alur onboarding,
    // arahkan kembali ke step Availability agar `result` tersedia.
    if (!result) {
      router.replace("/onboarding/availability");
    }
  }, [result, router]);

  if (!result) return null;

  function handleGoToHome() {
    resetData();
    router.push("/dashboard");
  }

  return (
    <div>
      <div className="mb-8">
        <ProgressBar totalSteps={5} currentStep={5} />
      </div>

      <div className="mb-5 flex justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-600">
          <CheckCircle2 className="h-8 w-8 text-white" />
        </div>
      </div>

      <h1 className="mb-2 text-center text-lg font-bold text-brand-700">
        You&apos;re all set{userName ? `, ${userName}` : ""}!
      </h1>
      <p className="mb-6 text-center text-sm text-gray-500">
        Your recommendations are ready. We&apos;ve found{" "}
        <span className="font-semibold text-brand-600">
          {result.matchedProjectsCount} projects
        </span>{" "}
        matching your profile.
      </p>

      <div className="mb-8">
        <p className="mb-2 text-center text-xs font-medium text-gray-400">
          YOUR FOCUS AREAS
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {result.focusAreas.map((area) => (
            <span
              key={area}
              className="rounded-full bg-brand-50 px-3 py-1.5 text-xs font-medium text-brand-700"
            >
              {area}
            </span>
          ))}
        </div>
      </div>

      <Button onClick={handleGoToHome}>Go to Home →</Button>
    </div>
  );
}
