import Link from "next/link";
import { Users2 } from "lucide-react";
import { ProgressBar } from "@/components/onboarding/ProgressBar";

export default function OnboardingWelcomePage() {
  return (
    <div>
      <div className="mb-6">
        <ProgressBar totalSteps={5} currentStep={0} />
      </div>

      <div className="mb-6 flex h-40 items-center justify-center rounded-xl bg-brand-50">
        <Users2 className="h-14 w-14 text-brand-400" />
      </div>

      <h1 className="mb-2 text-center text-lg font-bold text-gray-900">
        Welcome to <span className="text-brand-600">Projectly!</span>
      </h1>
      <p className="mb-8 text-center text-sm text-gray-500">
        Let&apos;s set up your profile to personalize your project and
        teammate recommendations.
      </p>

      <Link
        href="/onboarding/field"
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
      >
        Let&apos;s Get Started →
      </Link>
    </div>
  );
}
