import type { ProjectCategory, ProjectDetail, ProjectListItem } from "@/types/project";
import { MOCK_PROJECTS } from "@/lib/mock/projects";

/**
 * KEPUTUSAN ARSITEKTUR:
 * Sama seperti auth.service.ts — semua akses data project wajib lewat file
 * ini. Komponen & hooks hanya kenal fungsi-fungsi di bawah, tidak peduli
 * datanya mock atau dari API sungguhan.
 *
 * Ketika backend sudah siap, ganti isi tiap fungsi dengan `fetch` ke endpoint
 * REST-nya, contoh untuk getProjects:
 *
 *   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`);
 *   if (!res.ok) throw new Error("Gagal memuat project");
 *   return (await res.json()) as ProjectListItem[];
 *
 * Signature fungsi tetap sama sehingga tidak ada kode di hooks/komponen yang
 * perlu diubah.
 */

const MOCK_DELAY_MS = 500;

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function toListItem(project: ProjectDetail): ProjectListItem {
  const { id, title, category, daysLeftLabel, description, roles, interestedCount } = project;
  return { id, title, category, daysLeftLabel, description, roles, interestedCount };
}

export interface GetProjectsParams {
  category?: ProjectCategory | "Semua";
  search?: string;
}

export async function getProjects(params: GetProjectsParams = {}): Promise<ProjectListItem[]> {
  await delay(MOCK_DELAY_MS);

  const { category, search } = params;

  return MOCK_PROJECTS.filter((project) => {
    const matchesCategory = !category || category === "Semua" || project.category === category;
    const matchesSearch =
      !search || project.title.toLowerCase().includes(search.trim().toLowerCase());
    return matchesCategory && matchesSearch;
  }).map(toListItem);
}

export async function getProjectById(id: string): Promise<ProjectDetail | null> {
  await delay(MOCK_DELAY_MS);
  return MOCK_PROJECTS.find((project) => project.id === id) ?? null;
}

export async function joinProject(id: string): Promise<{ success: true }> {
  await delay(MOCK_DELAY_MS);
  // Mock: anggap selalu berhasil. Backend asli nanti bisa menolak (mis.
  // kuota role penuh) — komponen pemanggil (JoinProjectButton) sudah
  // menangani kemungkinan reject lewat try/catch.
  return { success: true };
}
