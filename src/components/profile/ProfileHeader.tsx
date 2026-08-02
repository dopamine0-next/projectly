import Link from "next/link";

interface ProfileHeaderProps {
  name: string;
  major: string;
  university: string;
}

export function ProfileHeader({ name, major, university }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-brand-700 text-2xl font-bold text-white">
        {name.charAt(0)}
      </div>
      <div>
        <p className="text-base font-bold text-gray-800">{name}</p>
        <p className="mt-0.5 text-xs text-gray-500">{major}</p>
        <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-400">
          {university}
        </p>
      </div>
      <Link
        href="/profil/edit"
        className="rounded-lg border border-brand-300 px-4 py-1.5 text-xs font-semibold text-brand-600 hover:bg-brand-50"
      >
        Edit Profil
      </Link>
    </div>
  );
}
