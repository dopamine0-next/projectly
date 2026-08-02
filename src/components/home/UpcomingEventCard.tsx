import Link from "next/link";
import { MapPin } from "lucide-react";
import type { EventListItem } from "@/types/event";

interface UpcomingEventCardProps {
  event: EventListItem;
}

export function UpcomingEventCard({ event }: UpcomingEventCardProps) {
  return (
    <Link
      href={`/dashboard/acara/${event.id}`}
      className="flex w-64 shrink-0 gap-3 rounded-xl border border-gray-100 bg-white p-2.5 shadow-sm transition-colors hover:border-brand-200"
    >
      {/* Placeholder thumbnail — ganti dengan <Image src={event.imageUrl} /> nanti */}
      <div className="h-14 w-14 shrink-0 rounded-lg bg-gradient-to-br from-brand-400 to-brand-700" />
      <div className="min-w-0">
        <p className="text-[11px] font-medium text-brand-600">{event.dateLabel}</p>
        <p className="truncate text-sm font-semibold text-gray-800">{event.title}</p>
        <p className="mt-0.5 flex items-center gap-1 text-[11px] text-gray-500">
          <MapPin className="h-3 w-3 shrink-0" />
          <span className="truncate">{event.location}</span>
        </p>
      </div>
    </Link>
  );
}
