import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  value: number;
  label: string;
  colorClass: string;
}

export function StatCard({ icon: Icon, value, label, colorClass }: StatCardProps) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm">
      <span className={`flex h-11 w-11 items-center justify-center rounded-full ${colorClass}`}>
        <Icon className="h-5 w-5" />
      </span>
      <span className="text-2xl font-bold text-gray-900">{value.toLocaleString("id-ID")}</span>
      <span className="text-[10px] font-bold uppercase tracking-wide text-gray-500">{label}</span>
    </div>
  );
}
