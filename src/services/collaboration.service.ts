import type {
  CollaborationListItem,
  CreateCollaborationPayload,
  JoinRequestItem,
} from "@/types/collaboration";
import { MOCK_COLLABORATIONS } from "@/lib/mock/collaborations";
import { MOCK_JOIN_REQUESTS } from "@/lib/mock/join-requests";

const MOCK_DELAY_MS = 500;

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getMyCollaborations(): Promise<CollaborationListItem[]> {
  await delay(MOCK_DELAY_MS);
  return MOCK_COLLABORATIONS;
}

export async function getJoinRequests(): Promise<JoinRequestItem[]> {
  await delay(MOCK_DELAY_MS);
  return MOCK_JOIN_REQUESTS;
}

export async function respondToJoinRequest(
  requestId: string,
  action: "accept" | "decline"
): Promise<{ success: true }> {
  await delay(MOCK_DELAY_MS);
  // Backend asli: PATCH /join-requests/{id} { action }
  return { success: true };
}

export async function createCollaboration(
  payload: CreateCollaborationPayload
): Promise<{ id: string }> {
  await delay(MOCK_DELAY_MS);
  // Backend asli: POST /collaborations
  return { id: `col_${Date.now()}` };
}
