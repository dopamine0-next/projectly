import { Check, X } from "lucide-react";

interface JoinRequestCardProps {
  collaborationTitle: string;
  roleRequested: string;
  applicantName: string;
  applicantProgram: string;
  isResponding: boolean;
  onAccept: () => void;
  onDecline: () => void;
}

export function JoinRequestCard({
  collaborationTitle,
  roleRequested,
  applicantName,
  applicantProgram,
  isResponding,
  onAccept,
  onDecline,
}: JoinRequestCardProps) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
      <p className="text-[11px] text-gray-400">
        Melamar untuk <span className="font-medium text-gray-600">{roleRequested}</span> di{" "}
        {collaborationTitle}
      </p>

      <div className="mt-2 flex items-center gap-2.5">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-brand-700 text-xs font-semibold text-white">
          {applicantName.charAt(0)}
        </span>
        <div>
          <p className="text-sm font-semibold text-gray-800">{applicantName}</p>
          <p className="text-[11px] text-gray-500">{applicantProgram}</p>
        </div>
      </div>

      <div className="mt-3 flex gap-2">
        <button
          type="button"
          disabled={isResponding}
          onClick={onDecline}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-gray-200 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-50 disabled:opacity-60"
        >
          <X className="h-3.5 w-3.5" />
          Tolak
        </button>
        <button
          type="button"
          disabled={isResponding}
          onClick={onAccept}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-brand-600 py-2 text-xs font-semibold text-white hover:bg-brand-700 disabled:opacity-60"
        >
          <Check className="h-3.5 w-3.5" />
          Terima
        </button>
      </div>
    </div>
  );
}
