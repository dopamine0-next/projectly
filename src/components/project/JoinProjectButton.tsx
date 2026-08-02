import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface JoinProjectButtonProps {
  isJoining: boolean;
  hasJoined: boolean;
  joinError: string | null;
  onJoin: () => void;
}

export function JoinProjectButton({
  isJoining,
  hasJoined,
  joinError,
  onJoin,
}: JoinProjectButtonProps) {
  if (hasJoined) {
    return (
      <Button disabled className="bg-emerald-600 hover:bg-emerald-600 disabled:opacity-100">
        <CheckCircle2 className="h-4 w-4" />
        Berhasil Bergabung
      </Button>
    );
  }

  return (
    <div>
      <Button onClick={onJoin} isLoading={isJoining}>
        Gabung Kolaborasi
      </Button>
      {joinError && <p className="mt-2 text-center text-xs text-red-500">{joinError}</p>}
    </div>
  );
}
