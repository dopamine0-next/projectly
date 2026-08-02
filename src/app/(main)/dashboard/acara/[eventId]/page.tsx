"use client";

import { useParams } from "next/navigation";
import { CalendarDays, MapPin } from "lucide-react";
import { useEventDetail } from "@/hooks/useEventDetail";
import { DetailBannerHeader } from "@/components/layout/DetailBannerHeader";
import { FeedbackForm } from "@/components/event/FeedbackForm";

export default function EventDetailPage() {
  const params = useParams<{ eventId: string }>();
  const { event, isLoading, error, handleSubmitFeedback, isSubmitting, submitError, hasSubmitted } =
    useEventDetail(params.eventId);

  if (isLoading) {
    return <p className="p-6 text-center text-sm text-gray-400">Memuat detail acara...</p>;
  }

  if (error || !event) {
    return (
      <p className="p-6 text-center text-sm text-red-500">
        {error ?? "Acara tidak ditemukan."}
      </p>
    );
  }

  return (
    <main className="pb-6 md:mx-auto md:max-w-2xl md:pt-6">
      <DetailBannerHeader bannerGradientClass="from-brand-500 to-brand-900">
        <div className="absolute bottom-3 left-4">
          <span className="rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-brand-700">
            {event.categoryTag}
          </span>
        </div>
      </DetailBannerHeader>

      <div className="flex flex-col gap-6 px-4 pt-4 md:px-0">
        <div>
          <div className="mb-2 flex flex-wrap gap-3 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <CalendarDays className="h-3.5 w-3.5" />
              {event.dateLabel}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" />
              {event.location}
            </span>
          </div>
          <h1 className="text-lg font-bold text-gray-800">{event.title}</h1>
        </div>

        <p className="text-sm leading-relaxed text-gray-600">{event.description}</p>

        <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-xs font-semibold text-white">
            {event.organizer.name.charAt(0)}
          </div>
          <div>
            <p className="text-[11px] text-gray-400">Diselenggarakan oleh</p>
            <p className="text-sm font-semibold text-gray-800">{event.organizer.name}</p>
          </div>
        </div>

        <section>
          <h2 className="mb-3 text-sm font-bold text-gray-800">Berikan Masukan</h2>
          <FeedbackForm
            hasEnded={event.hasEnded}
            isSubmitting={isSubmitting}
            submitError={submitError}
            hasSubmitted={hasSubmitted}
            onSubmit={handleSubmitFeedback}
          />
        </section>
      </div>
    </main>
  );
}
