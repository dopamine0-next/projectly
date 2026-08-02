"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft, Share2, Bookmark } from "lucide-react";

interface DetailBannerHeaderProps {
  /** Gradient tailwind classes untuk banner placeholder, mis. "from-brand-600 to-brand-900" */
  bannerGradientClass: string;
  children?: React.ReactNode;
}

// Banner sengaja berupa gradient placeholder, bukan foto asli, karena aset
// gambar project/acara belum dikirim/tersedia. Tinggal ganti div ini dengan
// `<Image src={item.imageUrl} fill alt={item.title} />` begitu asetnya ada —
// struktur container (relative + overflow-hidden) sudah kompatibel.
export function DetailBannerHeader({ bannerGradientClass, children }: DetailBannerHeaderProps) {
  const router = useRouter();

  return (
    <div
      className={`relative h-48 w-full overflow-hidden bg-gradient-to-br md:h-64 md:rounded-2xl ${bannerGradientClass}`}
    >
      <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
        <button
          type="button"
          onClick={() => router.back()}
          aria-label="Kembali"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-sm hover:bg-white"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Bagikan"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-sm hover:bg-white"
          >
            <Share2 className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Simpan"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-sm hover:bg-white"
          >
            <Bookmark className="h-4 w-4" />
          </button>
        </div>
      </div>
      {children}
    </div>
  );
}
