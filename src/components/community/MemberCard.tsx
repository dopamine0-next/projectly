import type { RecommendedMember } from "@/types/member";
import { MatchBadge } from "./MatchBadge";
import { AvailabilityIndicator } from "./AvailabilityIndicator";
import { InviteButton } from "./InviteButton";

interface MemberCardProps {
  member: RecommendedMember;
  isInviting: boolean;
  isInvited: boolean;
  onInvite: () => void;
}

export function MemberCard({ member, isInviting, isInvited, onInvite }: MemberCardProps) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-brand-700 text-sm font-semibold text-white">
          {member.name.charAt(0)}
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-bold text-gray-800">{member.name}</p>
          <p className="text-[11px] text-gray-500">
            {member.program}, Smt {member.semester}
          </p>
        </div>
        <MatchBadge percentage={member.matchPercentage} />
      </div>

      <p className="mt-2.5 text-xs text-gray-600">{member.matchReason}</p>

      <p className="mt-3 text-[10px] font-semibold uppercase tracking-wide text-gray-400">
        Keahlian Utama
      </p>
      <div className="mt-1.5 flex flex-wrap gap-1.5">
        {member.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-gray-50 px-2.5 py-1 text-[11px] font-medium text-gray-600"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-between border-t border-gray-50 pt-3">
        <AvailabilityIndicator availability={member.availability} />
        <InviteButton
          availability={member.availability}
          isInviting={isInviting}
          isInvited={isInvited}
          onInvite={onInvite}
        />
      </div>
    </div>
  );
}
