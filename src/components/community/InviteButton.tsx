import clsx from "clsx";
import { Loader2, Check } from "lucide-react";
import type { MemberAvailability } from "@/types/member";

interface InviteButtonProps {
  availability: MemberAvailability;
  isInviting: boolean;
  isInvited: boolean;
  onInvite: () => void;
}

export function InviteButton({ availability, isInviting, isInvited, onInvite }: InviteButtonProps) {
  if (isInvited) {
    return (
      <span className="flex items-center gap-1 rounded-lg bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-600">
        <Check className="h-3.5 w-3.5" />
        Diundang
      </span>
    );
  }

  const isOutline = availability === "terbatas";

  return (
    <button
      type="button"
      onClick={onInvite}
      disabled={isInviting}
      className={clsx(
        "flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-colors disabled:opacity-60",
        isOutline
          ? "border border-brand-300 text-brand-600 hover:bg-brand-50"
          : "bg-brand-600 text-white hover:bg-brand-700"
      )}
    >
      {isInviting && <Loader2 className="h-3.5 w-3.5 animate-spin" />}
      Undang
    </button>
  );
}
