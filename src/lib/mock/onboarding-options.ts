import {
  BarChart3,
  BookOpen,
  Briefcase,
  Code2,
  Palette,
  Rocket,
  Shield,
  Smartphone,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import type {
  AvailabilityOption,
  FieldOption,
  GoalOption,
} from "@/types/onboarding";

export const FIELD_OPTIONS: Array<{
  value: FieldOption;
  label: string;
  icon: LucideIcon;
}> = [
  { value: "ui_ux", label: "UI/UX", icon: Palette },
  { value: "web_dev", label: "Web Development", icon: Code2 },
  { value: "mobile_dev", label: "Mobile Development", icon: Smartphone },
  { value: "machine_learning", label: "Machine Learning", icon: Briefcase },
  { value: "data_science", label: "Data Science", icon: BarChart3 },
  { value: "cyber_security", label: "Cyber Security", icon: Shield },
];

export const GOAL_OPTIONS: Array<{
  value: GoalOption;
  label: string;
  icon: LucideIcon;
}> = [
  { value: "compete", label: "Compete in competitions", icon: Trophy },
  { value: "portfolio", label: "Build my portfolio", icon: Briefcase },
  { value: "startup", label: "Build a startup", icon: Rocket },
  { value: "learning", label: "Just learning & exploring", icon: BookOpen },
];

export const AVAILABILITY_OPTIONS: Array<{
  value: AvailabilityOption;
  label: string;
  description: string;
}> = [
  { value: "light", label: "Light", description: "1-3 hrs/week" },
  { value: "moderate", label: "Moderate", description: "4-8 hrs/week" },
  { value: "intensive", label: "Intensive", description: "9+ hrs/week" },
];

// Saran skill statis. Idealnya nanti di-generate backend berdasarkan `fields`
// yang dipilih user di step sebelumnya.
export const SUGGESTED_SKILLS = [
  "React",
  "Figma",
  "Python",
  "SQL",
  "Data Analysis",
  "Node.js",
];
