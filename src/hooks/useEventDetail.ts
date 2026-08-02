"use client";

import { useEffect, useState } from "react";
import { getEventById, submitFeedback } from "@/services/event.service";
import type { EventDetail } from "@/types/event";

export function useEventDetail(eventId: string) {
  const [event, setEvent] = useState<EventDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    let isCancelled = false;

    async function fetchEvent() {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getEventById(eventId);
        if (!isCancelled) setEvent(data);
      } catch {
        if (!isCancelled) setError("Gagal memuat detail acara.");
      } finally {
        if (!isCancelled) setIsLoading(false);
      }
    }

    fetchEvent();
    return () => {
      isCancelled = true;
    };
  }, [eventId]);

  async function handleSubmitFeedback(rating: number, comment: string) {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      await submitFeedback(eventId, { rating, comment: comment || undefined });
      setHasSubmitted(true);
    } catch {
      setSubmitError("Gagal mengirim masukan, coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return {
    event,
    isLoading,
    error,
    handleSubmitFeedback,
    isSubmitting,
    submitError,
    hasSubmitted,
  };
}
