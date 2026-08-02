import type { CollaborationListItem } from "@/types/collaboration";

export const MOCK_COLLABORATIONS: CollaborationListItem[] = [
  {
    id: "col_001",
    title: "Pitch Deck Startup AI",
    description:
      "Sedang mencari desainer UX dan pengembang frontend untuk membantu menyusun pitch deck dan prototipe.",
    role: "owner",
    memberCount: 3,
    memberCapacity: 5,
    members: [{ initial: "A" }, { initial: "R" }, { initial: "D" }],
  },
  {
    id: "col_002",
    title: "Inisiatif Kampus Ramah Lingkungan",
    description:
      "Mengembangkan aplikasi pelacakan keberlanjutan di seluruh kampus. Kami membangun fitur pelacakan sampah dan energi.",
    role: "member",
    memberCount: 5,
    memberCapacity: 5,
    members: [{ initial: "N" }, { initial: "M" }, { initial: "S" }],
  },
];
