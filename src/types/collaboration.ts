import type { ProjectCategory } from "./project";

export type CollaborationRole = "owner" | "member";

export interface CollaborationMember {
  initial: string; // dipakai untuk avatar bulat sederhana (belum ada foto profil)
}

// Item di tab "Proyek Saya".
export interface CollaborationListItem {
  id: string;
  title: string;
  description: string;
  role: CollaborationRole; // status user di kolaborasi ini
  memberCount: number;
  memberCapacity: number;
  members: CollaborationMember[];
}

// Item di tab "Permintaan Bergabung": permintaan orang lain untuk join
// proyek milik user.
export interface JoinRequestItem {
  id: string;
  collaborationId: string;
  collaborationTitle: string;
  roleRequested: string;
  applicant: { name: string; program: string };
}

export interface RoleFormValue {
  name: string;
  count: number;
  description?: string;
}

export interface CreateCollaborationPayload {
  name: string;
  description: string;
  category: ProjectCategory;
  targetDate: string;
  roles: RoleFormValue[];
  isDraft: boolean;
}
