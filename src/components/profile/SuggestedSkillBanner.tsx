import type { SuggestedSkill } from "@/types/profile";

interface SuggestedSkillBannerProps {
  suggestion: SuggestedSkill;
}

// "Pelajari Lebih Lanjut" belum diarahkan ke mana pun karena belum ada
// desain/konten untuk halaman pembelajaran skill. Untuk sekarang tombolnya
// dekoratif — tinggal disambungkan begitu fiturnya digarap.
export function SuggestedSkillBanner({ suggestion }: SuggestedSkillBannerProps) {
  return (
    <div className="rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 p-4 text-white">
      <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-100">
        Keahlian selanjutnya yang disarankan
      </p>
      <p className="mt-1 text-lg font-bold">{suggestion.name}</p>
      <p className="mt-1 text-xs text-brand-100">{suggestion.reason}</p>
      <button
        type="button"
        className="mt-2 text-xs font-semibold text-white underline underline-offset-2 hover:text-brand-100"
      >
        Pelajari Lebih Lanjut →
      </button>
    </div>
  );
}
