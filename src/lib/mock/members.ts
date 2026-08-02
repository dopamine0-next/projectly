import type { RecommendedMember, RecommendationContext } from "@/types/member";

// Untuk sekarang, "konteks rekomendasi" di-mock statis mengacu ke role
// Frontend Developer yang sedang dibutuhkan di project EcoTrack (prj_002).
// Nantinya backend yang menentukan role acuan ini secara dinamis, mis.
// berdasarkan project milik user yang paling butuh anggota.
export const MOCK_RECOMMENDATION_CONTEXT: RecommendationContext = {
  targetRole: "Frontend Developer",
};

export const MOCK_MEMBERS: RecommendedMember[] = [
  {
    id: "mem_001",
    name: "Sarah J.",
    program: "Ilmu Komputer",
    semester: 3,
    matchPercentage: 98,
    matchReason: "Cocok dengan tech stack dan minat di FinTech.",
    skills: ["React", "TypeScript", "Tailwind CSS"],
    availability: "tersedia",
  },
  {
    id: "mem_002",
    name: "David M.",
    program: "Rekayasa Perangkat Lunak",
    semester: 2,
    matchPercentage: 85,
    matchReason: "Keahlian frontend kuat, namun jadwal terbatas.",
    skills: ["Vue.js", "JavaScript", "Figma"],
    availability: "terbatas",
  },
  {
    id: "mem_003",
    name: "Elena K.",
    program: "Desain Interaktif",
    semester: 4,
    matchPercentage: 72,
    matchReason: "Overlap desain yang bagus, mencari lebih banyak pengalaman kode.",
    skills: ["HTML/CSS", "UI/UX", "React"],
    availability: "tersedia",
  },
];
