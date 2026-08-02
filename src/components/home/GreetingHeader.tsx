import { Bell } from "lucide-react";

interface GreetingHeaderProps {
  name: string;
}

export function GreetingHeader({ name }: GreetingHeaderProps) {
  const firstName = name.split(" ")[0];

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-sm font-semibold text-white">
          {firstName.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-bold text-gray-800">Hai {firstName}!</p>
          <p className="text-xs text-gray-500">Temukan project yang sesuai dengan minat kamu</p>
        </div>
      </div>
      {/* Notifikasi belum fungsional — akan disambungkan di tahap fitur Notifikasi. */}
      <button
        type="button"
        aria-label="Notifikasi"
        className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-500 shadow-sm hover:bg-gray-50"
      >
        <Bell className="h-4 w-4" />
      </button>
    </div>
  );
}
