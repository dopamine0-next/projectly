import type { UserProfile } from "@/types/profile";

// Pool saran minat untuk form Edit Profil. Idealnya nanti digabung dengan
// daftar minat/interest master dari backend.
export const SUGGESTED_INTERESTS = [
  "UI/UX Design",
  "Web3",
  "Machine Learning",
  "Startups",
  "Hackathons",
  "Mobile Development",
  "Data Science",
  "Cyber Security",
  "Open Source",
];

export const MOCK_PROFILE: UserProfile = {
  name: "Alex Mercer",
  major: "Informatics Engineering • Web Dev",
  university: "UNPAM University",
  skills: [
    { name: "Figma", percentage: 90, colorKey: "orange" },
    { name: "React", percentage: 75, colorKey: "blue" },
    { name: "PostgreSQL", percentage: 60, colorKey: "teal" },
  ],
  interests: ["UI/UX Design", "Web3", "Machine Learning", "Startups", "Hackathons"],
  suggestedSkill: {
    name: "Next.js",
    reason: "Karena anda menguasai React",
  },
  activities: [
    {
      id: "act_001",
      title: "Campus Navigate App",
      description: "Menyelesaikan Prototipe UI di Figma.",
      timeAgoLabel: "2 hari yang lalu",
      iconKey: "completed",
    },
    {
      id: "act_002",
      title: "Study Group Finder",
      description: "Bergabung dengan tim backend...",
      timeAgoLabel: "1 minggu yang lalu",
      iconKey: "joined",
    },
    {
      id: "act_003",
      title: "Hackathon Spring 2024",
      description: "Membentuk tim dengan 3 orang...",
      timeAgoLabel: "2 minggu yang lalu",
      iconKey: "team",
    },
  ],
};
