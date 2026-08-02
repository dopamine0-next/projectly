import type { EventDetail } from "@/types/event";

// "Database" sementara untuk acara.
// Catatan: `hasEnded` sengaja diisi manual di sini untuk kebutuhan mock —
// satu acara "sudah selesai" (form masukan aktif) dan satu "belum selesai"
// (form masukan dinonaktifkan), supaya kedua kondisi tombol pada desain bisa
// langsung diuji tanpa perlu menunggu tanggal asli lewat.
export const MOCK_EVENTS: EventDetail[] = [
  {
    id: "evt_001",
    title: "Showcase Project Bulanan ISC",
    categoryTag: "Teknologi & Startup",
    dateLabel: "04 Okt • 19:00",
    location: "Unpam Viktor, Ruang 017",
    description:
      "Ikuti acara showcase project paling dinanti di semester ini. Saksikan tim mahasiswa terbaik mempresentasikan ide mereka di hadapan panel ahli industri dan investor. Malam yang penuh dengan presentasi berenergi, jejaring, dan perayaan inovasi kampus.",
    organizer: { name: "Website Developer Club", community: "Komunitas" },
    hasEnded: true,
  },
  {
    id: "evt_002",
    title: "Masterclass Figma untuk Pemula",
    categoryTag: "Desain",
    dateLabel: "25 Okt • 19:00",
    location: "Daring (Zoom)",
    description:
      "Belajar dasar-dasar Figma dari nol: membuat frame, komponen, hingga prototipe interaktif sederhana. Cocok untuk kamu yang baru mulai terjun ke dunia UI/UX design dan ingin punya bekal sebelum ikut kolaborasi project.",
    organizer: { name: "UI/UX Community", community: "Komunitas" },
    hasEnded: false,
  },
];
