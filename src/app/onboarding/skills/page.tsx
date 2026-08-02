"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { OnboardingHeader } from "@/components/onboarding/OnboardingHeader";
import { SkillTag } from "@/components/onboarding/SkillTag";
import { Button } from "@/components/ui/Button";
import { useOnboarding } from "@/context/OnboardingContext";
import { SUGGESTED_SKILLS } from "@/lib/mock/onboarding-options";

export default function OnboardingSkillsPage() {
  const router = useRouter();
  const { data, updateData } = useOnboarding();
  const [query, setQuery] = useState("");

  function addSkill(skill: string) {
    const trimmed = skill.trim();
    if (!trimmed || data.skills.includes(trimmed)) return;
    updateData({ skills: [...data.skills, trimmed] });
    setQuery("");
  }

  function removeSkill(skill: string) {
    updateData({ skills: data.skills.filter((s) => s !== skill) });
  }

  const filteredSuggestions = useMemo(() => {
    return SUGGESTED_SKILLS.filter(
      (skill) =>
        !data.skills.includes(skill) &&
        skill.toLowerCase().includes(query.toLowerCase())
    );
  }, [data.skills, query]);

  return (
    <div>
      <OnboardingHeader totalSteps={5} currentStep={3} backHref="/onboarding/goal" />

      <h1 className="mb-1 text-lg font-bold text-gray-900">
        What skills do you already have?
      </h1>
      <p className="mb-4 text-sm text-gray-500">
        Select a few skills to help us match you with the right projects and
        teammates.
      </p>

      <div className="mb-5 flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3.5 py-2.5">
        <Search className="h-4 w-4 text-gray-400" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") addSkill(query);
          }}
          placeholder="Search skills (e.g. React, Python)"
          className="w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
        />
      </div>

      {data.skills.length > 0 && (
        <div className="mb-5">
          <p className="mb-2 text-xs font-medium text-gray-400">Your Skills</p>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill) => (
              <SkillTag
                key={skill}
                label={skill}
                variant="selected"
                onClick={() => removeSkill(skill)}
              />
            ))}
          </div>
        </div>
      )}

      {filteredSuggestions.length > 0 && (
        <div className="mb-8">
          <p className="mb-2 text-xs font-medium text-gray-400">
            Suggested for you
          </p>
          <div className="flex flex-wrap gap-2">
            {filteredSuggestions.map((skill) => (
              <SkillTag
                key={skill}
                label={skill}
                variant="suggestion"
                onClick={() => addSkill(skill)}
              />
            ))}
          </div>
        </div>
      )}

      <Button
        disabled={data.skills.length === 0}
        onClick={() => router.push("/onboarding/availability")}
      >
        Continue →
      </Button>
    </div>
  );
}
