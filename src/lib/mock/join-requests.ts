import type { JoinRequestItem } from "@/types/collaboration";

export const MOCK_JOIN_REQUESTS: JoinRequestItem[] = [
  {
    id: "req_001",
    collaborationId: "col_001",
    collaborationTitle: "Pitch Deck Startup AI",
    roleRequested: "UX Designer",
    applicant: { name: "Fira Ananda", program: "Desain Komunikasi Visual, Smt 4" },
  },
];
