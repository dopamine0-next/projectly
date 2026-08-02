import type { ProjectDetail } from "@/types/project";

// "Database" sementara. Setiap entri mewakili satu baris project di backend nanti.
// `ProjectListItem` (dipakai di kartu Beranda) cukup diturunkan dari sini
// dengan mengambil sebagian field saja — lihat project.service.ts.
export const MOCK_PROJECTS: ProjectDetail[] = [
  {
    id: "prj_001",
    title: "Redesain Aplikasi Event Kampus",
    category: "UI/UX",
    daysLeftLabel: "Sisa 5 hari",
    description:
      "Mencari desainer UI/UX untuk merombak aplikasi event student union.",
    interestedCount: 3,
    roles: [{ iconKey: "design", name: "UI/UX Designer", filled: 0, total: 2 }],
    level: "Menengah",
    owner: { name: "Nadia Putri", role: "Ketua Student Union" },
    about:
      "Kami membangun ulang pengalaman aplikasi event kampus supaya lebih mudah dipakai mahasiswa untuk menemukan dan mendaftar acara. Fokus utama tahap ini adalah riset singkat dan redesain alur pendaftaran acara.",
    rolesDetailed: [
      {
        iconKey: "design",
        name: "UI/UX Designer",
        note: "Membuat wireframe dan prototipe Figma untuk alur pendaftaran acara.",
        filled: 0,
        total: 2,
      },
    ],
    matchProfile: {
      percentage: 74,
      headline: "Kompatibilitas cukup baik untuk peran Desainer",
      tags: ["Minat UI/UX Design", "Jadwal Selaras"],
    },
  },
  {
    id: "prj_002",
    title: "Pengembangan Prototipe Aplikasi EcoTrack",
    category: "Web",
    daysLeftLabel: "Sisa 1 minggu",
    description:
      "Kami membangun aplikasi seluler lintas platform yang dirancang untuk membantu mahasiswa memantau jejak karbon dan mendapatkan hadiah atas pilihan ramah lingkungan di kampus.",
    interestedCount: 1,
    roles: [
      { iconKey: "design", name: "UI/UX Designer", filled: 1, total: 1 },
      { iconKey: "frontend", name: "Frontend Developer", filled: 1, total: 2 },
      { iconKey: "backend", name: "Backend Engineer", filled: 0, total: 1 },
    ],
    level: "Menengah",
    owner: { name: "Alex Mercer", role: "Ketua Proyek • Mahasiswa Teknik Informatika" },
    about:
      "Kami membangun aplikasi seluler lintas platform yang dirancang untuk membantu mahasiswa memantau jejak karbon mereka dan mendapatkan hadiah atas pilihan ramah lingkungan di kampus. Proyek ini saat ini berada di fase desain akhir, dan kami sedang bergerak ke pengembangan aktif.\n\nTujuannya adalah meluncurkan MVP fungsional sebelum kompetisi akhir semester. Kami membutuhkan individu yang bersemangat dan ingin membangun sesuatu yang berdampak dan memiliki karya portofolio yang kuat.",
    rolesDetailed: [
      {
        iconKey: "frontend",
        name: "Frontend Developer",
        note: "Pengalaman React Native lebih diutamakan. Fokus pada implementasi UI dan flow.",
        filled: 1,
        total: 2,
      },
      {
        iconKey: "backend",
        name: "Backend Engineer",
        note: "Node.js / Firebase. Menyiapkan autentikasi dan endpoint CRUD dasar.",
        filled: 0,
        total: 1,
      },
      {
        iconKey: "design",
        name: "UI/UX Designer",
        note: "Pembuatan prototipe Figma dan pengujian pengguna.",
        filled: 1,
        total: 1,
      },
    ],
    matchProfile: {
      percentage: 88,
      headline: "Kompatibilitas tinggi untuk Pengembang Frontend",
      tags: ["Keahlian React", "Jadwal Selaras"],
    },
  },
  {
    id: "prj_003",
    title: "Hackathon Promotion Campaign",
    category: "Marketing",
    daysLeftLabel: "Sisa 12 hari",
    description:
      "Mencari pemikir kreatif untuk menjalankan strategi pemasaran digital kampanye hackathon kampus.",
    interestedCount: 3,
    roles: [{ iconKey: "marketing", name: "Marketing", filled: 0, total: 2 }],
    level: "Pemula",
    owner: { name: "Rangga Saputra", role: "Koordinator Acara ISC" },
    about:
      "Kampanye promosi untuk Hackathon Spring 2027. Kami butuh tim kecil yang bisa merancang strategi konten media sosial dan copywriting yang catchy untuk menarik peserta dari seluruh kampus.",
    rolesDetailed: [
      {
        iconKey: "marketing",
        name: "Marketing",
        note: "Menyusun kalender konten media sosial dan copywriting materi promosi.",
        filled: 0,
        total: 2,
      },
    ],
    matchProfile: {
      percentage: 52,
      headline: "Kompatibilitas sedang, cocok untuk eksplorasi minat baru",
      tags: ["Minat Marketing", "Jadwal Fleksibel"],
    },
  },
];
