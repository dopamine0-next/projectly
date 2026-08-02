"use client";

import { useRouter } from "next/navigation";
import { OnboardingHeader } from "@/components/onboarding/OnboardingHeader";
import { RadioOption } from "@/components/onboarding/RadioOption";
import { Button } from "@/components/ui/Button";
import { useOnboarding } from "@/context/OnboardingContext";
import { GOAL_OPTIONS } from "@/lib/mock/onboarding-options";
import type { GoalOption } from "@/types/onboarding";

export default function OnboardingGoalPage() {
  const router = useRouter();
  const { data, updateData } = useOnboarding();

  function selectGoal(value: GoalOption) {
    updateData({ goal: value });
  }

  return (
    <div>
      <OnboardingHeader totalSteps={5} currentStep={2} backHref="/onboarding/field" />

      <h1 className="mb-5 text-lg font-bold text-gray-900">
        What&apos;s your main goal on Projectly?
      </h1>

      <div className="mb-8 flex flex-col gap-3">
        {GOAL_OPTIONS.map((option) => (
          <RadioOption
            key={option.value}
            label={option.label}
            icon={option.icon}
            selected={data.goal === option.value}
            onClick={() => selectGoal(option.value)}
          />
        ))}
      </div>

      <Button
        disabled={!data.goal}
        onClick={() => router.push("/onboarding/skills")}
      >
        Continue →
      </Button>
    </div>
  );
}
