import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-[100dvh] w-full bg-white">
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[oklch(0.55_0.22_280)] to-purple-400 flex items-center justify-center mb-6 shadow-lg shadow-primary/20 animate-pulse">
        <Loader2 className="w-8 h-8 text-white animate-spin" />
      </div>
      <h2 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">Memuat...</h2>
      <p className="text-sm text-gray-500">Tunggu sebentar ya.</p>
    </div>
  );
}
