import type { EventDetail, EventListItem, FeedbackPayload, FeedbackResponse } from "@/types/event";
import { MOCK_EVENTS } from "@/lib/mock/events";

const MOCK_DELAY_MS = 500;

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function toListItem(event: EventDetail): EventListItem {
  const { id, title, categoryTag, dateLabel, location } = event;
  return { id, title, categoryTag, dateLabel, location };
}

export async function getUpcomingEvents(): Promise<EventListItem[]> {
  await delay(MOCK_DELAY_MS);
  return MOCK_EVENTS.map(toListItem);
}

export async function getEventById(id: string): Promise<EventDetail | null> {
  await delay(MOCK_DELAY_MS);
  return MOCK_EVENTS.find((event) => event.id === id) ?? null;
}

export async function submitFeedback(
  eventId: string,
  payload: FeedbackPayload
): Promise<FeedbackResponse> {
  await delay(MOCK_DELAY_MS);

  if (payload.rating < 1 || payload.rating > 5) {
    throw new Error("Rating tidak valid.");
  }

  // Ganti dengan POST ke `${API_URL}/events/${eventId}/feedback` nanti.
  return {
    id: `fb_${Date.now()}`,
    eventId,
    submittedAt: new Date().toISOString(),
  };
}
