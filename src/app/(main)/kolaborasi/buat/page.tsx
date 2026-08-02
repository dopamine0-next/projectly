"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { CreateCollaborationForm } from "@/components/collaboration/CreateCollaborationForm";

export default function BuatKolaborasiPage() {
  const router = useRouter();

  return (
    <main className="flex flex-col gap-5 px-4 pb-6 pt-6 md:mx-auto md:max-w-2xl md:px-8 md:pt-8">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => router.back()}
          aria-label="Kembali"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-600 shadow-sm hover:bg-gray-50"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <h1 className="text-base font-bold text-brand-700">Buat Kolaborasi</h1>
      </div>

      <CreateCollaborationForm />
    </main>
  );
}
