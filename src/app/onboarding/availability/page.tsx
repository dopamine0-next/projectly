"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Clock } from "lucide-react";
import { OnboardingHeader } from "@/components/onboarding/OnboardingHeader";
import { RadioOption } from "@/components/onboarding/RadioOption";
import { Button } from "@/components/ui/Button";
import { useOnboarding } from "@/context/OnboardingContext";
import { AVAILABILITY_OPTIONS } from "@/lib/mock/onboarding-options";
import { submitOnboarding } from "@/services/onboarding.service";
import type { AvailabilityOption } from "@/types/onboarding";

export default function OnboardingAvailabilityPage() {
  const router = useRouter();
  const { data, updateData, setResult } = useOnboarding();
  const [isSubmitting, setIsSubmitting] = useState(false);

  function selectAvailability(value: AvailabilityOption) {
    updateData({ availability: value });
  }

  async function handleFinish() {
    setIsSubmitting(true);
    try {
      const result = await submitOnboarding(data);
      setResult(result);
      router.push("/onboarding/success");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div>
      <OnboardingHeader totalSteps={5} currentStep={4} backHref="/onboarding/skills" />

      <h1 className="mb-1 text-lg font-bold text-gray-900">
        How much time can you commit?
      </h1>
      <p className="mb-5 text-sm text-gray-500">
        Set expectations for project collaboration.
      </p>

      <div className="mb-8 flex flex-col gap-3">
        {AVAILABILITY_OPTIONS.map((option) => (
          <RadioOption
            key={option.value}
            label={option.label}
            description={option.description}
            icon={Clock}
            selected={data.availability === option.value}
            onClick={() => selectAvailability(option.value)}
          />
        ))}
      </div>

      <Button
        disabled={!data.availability}
        isLoading={isSubmitting}
        onClick={handleFinish}
      >
        Finish Setup →
      </Button>
    </div>
  );
}
