export type SkillColorKey = "orange" | "blue" | "teal";

export interface SkillProficiency {
  name: string;
  percentage: number; // 0-100
  colorKey: SkillColorKey;
}

export interface SuggestedSkill {
  name: string;
  reason: string; // mis. "Karena anda menguasai React"
}

export type ActivityIconKey = "completed" | "joined" | "team";

export interface ActivityItem {
  id: string;
  title: string;
  description: string;
  timeAgoLabel: string;
  iconKey: ActivityIconKey;
}

export interface UpdateProfilePayload {
  name: string;
  major: string;
  university: string;
  interests: string[];
}

export interface UserProfile {
  name: string;
  major: string;
  university: string;
  skills: SkillProficiency[];
  interests: string[];
  suggestedSkill: SuggestedSkill;
  activities: ActivityItem[];
}
