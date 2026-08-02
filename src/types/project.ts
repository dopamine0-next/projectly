// Tipe-tipe ini merepresentasikan kontrak data dengan backend untuk fitur
// Project (list di Beranda + Detail Project). Sesuaikan field di sini ketika
// backend sudah siap -> perubahan otomatis mengalir ke semua tempat yang memakainya.

export type ProjectCategory = "UI/UX" | "Web" | "ML" | "Marketing";

export type RoleIconKey = "frontend" | "backend" | "design" | "marketing";

export interface ProjectRoleSummary {
  iconKey: RoleIconKey;
  name: string;
  filled: number;
  total: number;
}

// Bentuk data yang dipakai di kartu list Beranda.
export interface ProjectListItem {
  id: string;
  title: string;
  category: ProjectCategory;
  daysLeftLabel: string; // mis. "Sisa 5 hari" — dikirim backend sudah dalam bentuk teks siap tampil
  description: string;
  roles: ProjectRoleSummary[];
  interestedCount: number;
}

export interface ProjectRoleDetail extends ProjectRoleSummary {
  note: string; // penjelasan singkat kebutuhan role, mis. "Pengalaman React Native lebih diutamakan."
}

export interface ProjectMatchProfile {
  percentage: number; // 0-100
  headline: string; // mis. "Kompatibilitas tinggi untuk Pengembang Frontend"
  tags: string[]; // mis. ["Keahlian React", "Jadwal Selaras"]
}

export type ProjectLevel = "Pemula" | "Menengah" | "Lanjutan";

// Detail lengkap yang dipakai di halaman Detail Project.
// Extends ProjectListItem supaya field yang sama tidak didefinisikan ulang.
export interface ProjectDetail extends ProjectListItem {
  level: ProjectLevel;
  owner: { name: string; role: string };
  about: string;
  rolesDetailed: ProjectRoleDetail[];
  matchProfile: ProjectMatchProfile;
}
