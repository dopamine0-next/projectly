"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

export default function AllActivitiesPage() {
  const router = useRouter();

  return (
    <main className="relative flex min-h-[70vh] flex-col items-center justify-center gap-2 px-4 text-center md:mx-auto md:max-w-lg">
      <button
        type="button"
        onClick={() => router.back()}
        aria-label="Kembali"
        className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-600 shadow-sm"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <h1 className="text-lg font-bold text-brand-700">Riwayat Aktivitas</h1>
      <p className="text-sm text-gray-500">
        Halaman placeholder — belum ada desainnya, akan dikerjakan di tahap berikutnya.
      </p>
    </main>
  );
}
