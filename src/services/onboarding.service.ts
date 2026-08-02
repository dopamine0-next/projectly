import type { OnboardingData, OnboardingResult } from "@/types/onboarding";

/**
 * Sama seperti auth.service.ts: komponen tidak pernah tahu ini mock.
 * Nanti ganti isi fungsi ini dengan POST ke `/onboarding` dan kembalikan
 * response asli sesuai bentuk OnboardingResult.
 */

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function submitOnboarding(
  data: OnboardingData
): Promise<OnboardingResult> {
  await delay(800);

  // Logika mock sederhana: makin banyak skill & field dipilih, makin banyak
  // "project cocok" yang ditemukan. Ini hanya untuk simulasi tampilan.
  const matchedProjectsCount = 8 + data.skills.length + data.fields.length;

  const focusAreas = [
    ...data.fields.slice(0, 2).map((f) => fieldToLabel(f)),
    data.goal === "learning" ? "Community" : "Fast-track",
    data.availability === "light" ? "Part-time" : "Flexible",
  ];

  return { matchedProjectsCount, focusAreas };
}

function fieldToLabel(field: string): string {
  const map: Record<string, string> = {
    ui_ux: "UX Design",
    web_dev: "Frontend Dev",
    mobile_dev: "Mobile Dev",
    machine_learning: "ML Engineering",
    data_science: "Data Science",
    cyber_security: "Security",
  };
  return map[field] ?? field;
}
