export type FieldOption =
  | "ui_ux"
  | "web_dev"
  | "mobile_dev"
  | "machine_learning"
  | "data_science"
  | "cyber_security";

export type GoalOption = "compete" | "portfolio" | "startup" | "learning";

export type AvailabilityOption = "light" | "moderate" | "intensive";

export interface OnboardingData {
  fields: FieldOption[];
  goal: GoalOption | null;
  skills: string[];
  availability: AvailabilityOption | null;
}

export const initialOnboardingData: OnboardingData = {
  fields: [],
  goal: null,
  skills: [],
  availability: null,
};

// Hasil yang dikembalikan backend setelah submit onboarding (mock).
export interface OnboardingResult {
  matchedProjectsCount: number;
  focusAreas: string[];
}
