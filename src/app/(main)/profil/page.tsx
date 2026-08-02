"use client";

import Link from "next/link";
import { useProfile } from "@/hooks/useProfile";
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { SuggestedSkillBanner } from "@/components/profile/SuggestedSkillBanner";
import { SkillBar } from "@/components/profile/SkillBar";
import { ActivityListItem } from "@/components/profile/ActivityListItem";
import { LogoutButton } from "@/components/profile/LogoutButton";

export default function ProfilPage() {
  const { profile, isLoading, error } = useProfile();

  if (isLoading) {
    return <p className="p-6 text-center text-sm text-gray-400">Memuat profil...</p>;
  }

  if (error || !profile) {
    return <p className="p-6 text-center text-sm text-red-500">{error ?? "Profil tidak ditemukan."}</p>;
  }

  return (
    <main className="flex flex-col gap-6 px-4 pt-6 pb-4 md:px-8 md:pt-8 md:pb-8">
      <div className="md:grid md:grid-cols-3 md:gap-8">
        <div className="flex flex-col gap-6 md:col-span-1">
          <ProfileHeader name={profile.name} major={profile.major} university={profile.university} />

          <SuggestedSkillBanner suggestion={profile.suggestedSkill} />

          <section>
            <h2 className="mb-3 text-sm font-bold text-gray-800">Keahlian</h2>
            <div className="flex flex-col gap-3">
              {profile.skills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-sm font-bold text-gray-800">Minat</h2>
            <div className="flex flex-wrap gap-2">
              {profile.interests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  {interest}
                </span>
              ))}
            </div>
          </section>

          <LogoutButton />
        </div>

        <div className="mt-6 md:col-span-2 md:mt-0">
          <section>
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-sm font-bold text-gray-800">Riwayat Aktivitas</h2>
              <Link href="/profil/aktivitas" className="text-xs font-semibold text-brand-600 hover:underline">
                Lihat Semua
              </Link>
            </div>
            <div className="flex flex-col gap-2 md:grid md:grid-cols-2 md:gap-3">
              {profile.activities.map((activity) => (
                <ActivityListItem key={activity.id} activity={activity} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
