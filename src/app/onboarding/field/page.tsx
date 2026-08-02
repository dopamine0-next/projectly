"use client";

import { useRouter } from "next/navigation";
import { OnboardingHeader } from "@/components/onboarding/OnboardingHeader";
import { SelectableCard } from "@/components/onboarding/SelectableCard";
import { Button } from "@/components/ui/Button";
import { useOnboarding } from "@/context/OnboardingContext";
import { FIELD_OPTIONS } from "@/lib/mock/onboarding-options";
import type { FieldOption } from "@/types/onboarding";

export default function OnboardingFieldPage() {
  const router = useRouter();
  const { data, updateData } = useOnboarding();

  function toggleField(value: FieldOption) {
    const isSelected = data.fields.includes(value);
    updateData({
      fields: isSelected
        ? data.fields.filter((f) => f !== value)
        : [...data.fields, value],
    });
  }

  return (
    <div>
      <OnboardingHeader totalSteps={5} currentStep={1} backHref="/onboarding/welcome" />

      <h1 className="mb-1 text-lg font-bold text-gray-900">What&apos;s your field?</h1>
      <p className="mb-5 text-sm text-gray-500">
        Select all that apply to help us tailor your experience.
      </p>

      <div className="mb-8 grid grid-cols-2 gap-3">
        {FIELD_OPTIONS.map((option) => (
          <SelectableCard
            key={option.value}
            label={option.label}
            icon={option.icon}
            selected={data.fields.includes(option.value)}
            onClick={() => toggleField(option.value)}
          />
        ))}
      </div>

      <Button
        disabled={data.fields.length === 0}
        onClick={() => router.push("/onboarding/goal")}
      >
        Continue →
      </Button>
    </div>
  );
}
