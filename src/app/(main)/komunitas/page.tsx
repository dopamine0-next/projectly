"use client";

import { Bell } from "lucide-react";
import { useRecommendedMembers } from "@/hooks/useRecommendedMembers";
import { SearchBar } from "@/components/ui/SearchBar";
import { MemberFilterBar } from "@/components/community/MemberFilterBar";
import { MemberCard } from "@/components/community/MemberCard";

export default function KomunitasPage() {
  const {
    context,
    members,
    isLoading,
    error,
    search,
    setSearch,
    skill,
    setSkill,
    semester,
    setSemester,
    onlyAvailable,
    setOnlyAvailable,
    resetFilters,
    invitedIds,
    invitingId,
    handleInvite,
  } = useRecommendedMembers();

  const isFiltered = skill !== "Semua" || semester !== "Semua" || onlyAvailable;

  return (
    <main className="flex flex-col gap-5 px-4 pt-6 md:px-8 md:pt-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-bold text-brand-700">Projectly</p>
          <p className="text-xs text-gray-500">Selamat pagi, Alex</p>
        </div>
        <button
          type="button"
          aria-label="Notifikasi"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-500 shadow-sm hover:bg-gray-50"
        >
          <Bell className="h-4 w-4" />
        </button>
      </div>

      <div>
        <h1 className="text-lg font-bold leading-snug text-gray-800">
          Direkomendasikan untuk: <span className="text-brand-600">{context?.targetRole ?? "..."}</span>
        </h1>
        <p className="mt-1 text-xs text-gray-500 md:max-w-xl">
          AI kami telah menemukan kecocokan terbaik untuk proyek Anda berdasarkan keselarasan
          keahlian, ketersediaan, dan minat bersama.
        </p>
      </div>

      <div className="md:max-w-md">
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Cari anggota..."
          ariaLabel="Cari anggota"
        />
      </div>

      <MemberFilterBar
        skill={skill}
        onSkillChange={setSkill}
        semester={semester}
        onSemesterChange={setSemester}
        onlyAvailable={onlyAvailable}
        onToggleAvailable={() => setOnlyAvailable((prev) => !prev)}
        onReset={resetFilters}
        isFiltered={isFiltered}
      />

      <div className="flex flex-col gap-3 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3">
        {isLoading && <p className="text-xs text-gray-400">Memuat rekomendasi...</p>}
        {error && <p className="text-xs text-red-500">{error}</p>}
        {!isLoading && !error && members.length === 0 && (
          <p className="text-xs text-gray-400">Tidak ada anggota yang cocok dengan filter ini.</p>
        )}
        {members.map((member) => (
          <MemberCard
            key={member.id}
            member={member}
            isInviting={invitingId === member.id}
            isInvited={invitedIds.has(member.id)}
            onInvite={() => handleInvite(member.id)}
          />
        ))}
      </div>
    </main>
  );
}
