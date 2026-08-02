"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { ProgressBar } from "./ProgressBar";

interface OnboardingHeaderProps {
  totalSteps: number;
  currentStep: number;
  backHref?: string;
}

export function OnboardingHeader({
  totalSteps,
  currentStep,
  backHref,
}: OnboardingHeaderProps) {
  const router = useRouter();

  return (
    <div className="mb-6 flex items-center gap-3">
      {backHref && (
        <button
          type="button"
          onClick={() => router.push(backHref)}
          aria-label="Kembali"
          className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-gray-400 hover:bg-gray-50 hover:text-gray-600"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
      )}
      <ProgressBar totalSteps={totalSteps} currentStep={currentStep} />
    </div>
  );
}
