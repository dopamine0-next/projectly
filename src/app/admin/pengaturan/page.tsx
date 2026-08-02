"use client";

import { Check } from "lucide-react";
import { useAdminSettings } from "@/hooks/useAdminSettings";
import { SettingToggleRow } from "@/components/admin/SettingToggleRow";
import { Button } from "@/components/ui/Button";

export default function AdminPengaturanPage() {
  const { settings, isLoading, isSaving, savedAt, updateLocal, save } = useAdminSettings();

  if (isLoading || !settings) {
    return <p className="p-6 text-center text-sm text-gray-400">Memuat pengaturan...</p>;
  }

  return (
    <main className="flex flex-col gap-5 px-4 pt-6 md:mx-auto md:max-w-2xl md:px-8 md:pt-8">
      <div>
        <h1 className="text-lg font-bold text-gray-900">Pengaturan Sistem</h1>
        <p className="text-sm text-gray-500">
          Konfigurasi perilaku algoritma rekomendasi AI dan alur moderasi platform.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <SettingToggleRow
          label="Rekomendasi AI Aktif"
          description="Tampilkan skor kecocokan & rekomendasi anggota otomatis di halaman Komunitas."
          checked={settings.aiRecommendationEnabled}
          onCheckedChange={(checked) => updateLocal({ aiRecommendationEnabled: checked })}
        />
        <SettingToggleRow
          label="Auto-Approve Proyek Baru"
          description="Proyek yang baru dibuat langsung tayang tanpa persetujuan admin."
          checked={settings.autoApproveProjects}
          onCheckedChange={(checked) => updateLocal({ autoApproveProjects: checked })}
        />
        <SettingToggleRow
          label="Izinkan Jelajah Tamu"
          description="Pengunjung tanpa akun bisa melihat daftar proyek (read-only)."
          checked={settings.allowGuestBrowsing}
          onCheckedChange={(checked) => updateLocal({ allowGuestBrowsing: checked })}
        />
      </div>

      <div className="rounded-xl border border-gray-100 bg-white p-4">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-sm font-semibold text-gray-900">Ambang Batas Skor Kecocokan</p>
          <span className="text-sm font-bold text-brand-600">{settings.minMatchPercentage}%</span>
        </div>
        <p className="mb-3 text-xs text-gray-500">
          Anggota dengan skor kecocokan di bawah angka ini tidak akan direkomendasikan.
        </p>
        <input
          type="range"
          min={0}
          max={100}
          step={5}
          value={settings.minMatchPercentage}
          onChange={(event) => updateLocal({ minMatchPercentage: Number(event.target.value) })}
          className="w-full accent-brand-600"
          aria-label="Ambang batas skor kecocokan"
        />
      </div>

      <div className="flex items-center gap-3">
        <Button onClick={save} isLoading={isSaving} className="w-auto px-6">
          Simpan Pengaturan
        </Button>
        {savedAt && !isSaving && (
          <span className="flex items-center gap-1 text-xs font-medium text-emerald-600">
            <Check className="h-3.5 w-3.5" />
            Tersimpan
          </span>
        )}
      </div>
    </main>
  );
}
