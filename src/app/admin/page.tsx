"use client";

import Link from "next/link";
import { Users, FolderKanban, Layers, CalendarDays, Settings, ChevronRight } from "lucide-react";
import { useRequireAdmin } from "@/hooks/useRequireAdmin";
import { useAdminStats } from "@/hooks/useAdminStats";
import { StatCard } from "@/components/admin/StatCard";

export default function AdminDashboardPage() {
  const { admin } = useRequireAdmin();
  const { stats, isLoading } = useAdminStats();

  return (
    <main className="flex flex-col gap-6 px-4 pt-6 md:px-8 md:pt-8">
      <div>
        <h1 className="text-lg font-bold text-gray-900">Selamat Datang, {admin?.name ?? "Admin"}!</h1>
        <p className="text-sm text-gray-500">Berikut ringkasan aktivitas aplikasi hari ini.</p>
      </div>

      {isLoading || !stats ? (
        <p className="text-xs text-gray-400">Memuat statistik...</p>
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <StatCard
            icon={Users}
            value={stats.totalUsers}
            label="Total Pengguna"
            colorClass="bg-blue-50 text-blue-600"
          />
          <StatCard
            icon={FolderKanban}
            value={stats.activeProjects}
            label="Proyek Aktif"
            colorClass="bg-brand-50 text-brand-600"
          />
          <StatCard
            icon={Layers}
            value={stats.activeCollaborations}
            label="Kolaborasi Aktif"
            colorClass="bg-emerald-50 text-emerald-600"
          />
          <StatCard
            icon={CalendarDays}
            value={stats.upcomingEvents}
            label="Acara Mendatang"
            colorClass="bg-orange-50 text-orange-600"
          />
        </div>
      )}

      <section>
        <h2 className="mb-3 text-sm font-bold text-gray-900">Tindakan Cepat</h2>
        <div className="flex flex-col gap-3 md:grid md:grid-cols-2">
          <Link
            href="/admin/pengguna"
            className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm hover:border-brand-200"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <Users className="h-4 w-4" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-bold text-gray-900">Kelola Pengguna</p>
              <p className="text-xs text-gray-500">Lihat, aktifkan, atau suspend akun pengguna</p>
            </div>
            <ChevronRight className="h-4 w-4 shrink-0 text-gray-300" />
          </Link>

          <Link
            href="/admin/proyek"
            className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm hover:border-brand-200"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
              <FolderKanban className="h-4 w-4" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-bold text-gray-900">Moderasi Proyek</p>
              <p className="text-xs text-gray-500">Tinjau proyek yang ditandai atau hapus</p>
            </div>
            <ChevronRight className="h-4 w-4 shrink-0 text-gray-300" />
          </Link>

          <Link
            href="/admin/pengaturan"
            className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm hover:border-brand-200 md:col-span-2"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-600">
              <Settings className="h-4 w-4" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-bold text-gray-900">Pengaturan Sistem</p>
              <p className="text-xs text-gray-500">Konfigurasi algoritma rekomendasi AI</p>
            </div>
            <ChevronRight className="h-4 w-4 shrink-0 text-gray-300" />
          </Link>
        </div>
      </section>
    </main>
  );
}
