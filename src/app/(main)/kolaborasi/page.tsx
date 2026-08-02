"use client";

import { useState } from "react";
import Link from "next/link";
import { Bell, Plus } from "lucide-react";
import clsx from "clsx";
import { useMyCollaborations } from "@/hooks/useMyCollaborations";
import { CollaborationCard } from "@/components/collaboration/CollaborationCard";
import { JoinRequestCard } from "@/components/collaboration/JoinRequestCard";

type Tab = "proyek_saya" | "permintaan_bergabung";

export default function KolaborasiPage() {
  const [tab, setTab] = useState<Tab>("proyek_saya");
  const { collaborations, joinRequests, isLoading, error, handleRespond, respondingId } =
    useMyCollaborations();

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

      <div
        className="flex rounded-xl bg-white p-1 shadow-sm md:w-fit md:min-w-[320px]"
        role="tablist"
        aria-label="Tab kolaborasi"
      >
        <button
          type="button"
          role="tab"
          aria-selected={tab === "proyek_saya"}
          onClick={() => setTab("proyek_saya")}
          className={clsx(
            "flex-1 rounded-lg px-4 py-2 text-xs font-semibold transition-colors",
            tab === "proyek_saya" ? "bg-brand-100 text-brand-700" : "text-gray-500"
          )}
        >
          Proyek Saya
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === "permintaan_bergabung"}
          onClick={() => setTab("permintaan_bergabung")}
          className={clsx(
            "relative flex-1 rounded-lg px-4 py-2 text-xs font-semibold transition-colors",
            tab === "permintaan_bergabung" ? "bg-brand-100 text-brand-700" : "text-gray-500"
          )}
        >
          Permintaan Bergabung
          {joinRequests.length > 0 && (
            <span className="absolute -top-1 right-3 flex h-4 w-4 items-center justify-center rounded-full bg-brand-600 text-[10px] font-semibold text-white">
              {joinRequests.length}
            </span>
          )}
        </button>
      </div>

      {isLoading && <p className="text-xs text-gray-400">Memuat...</p>}
      {error && <p className="text-xs text-red-500">{error}</p>}

      {!isLoading && !error && tab === "proyek_saya" && (
        <div className="flex flex-col gap-3">
          {collaborations.length === 0 && (
            <p className="text-xs text-gray-400">Kamu belum tergabung di kolaborasi apa pun.</p>
          )}
          <div className="flex flex-col gap-3 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3">
            {collaborations.map((collaboration) => (
              <CollaborationCard key={collaboration.id} collaboration={collaboration} />
            ))}
          </div>

          <Link
            href="/kolaborasi/buat"
            className="flex flex-col items-center gap-2 rounded-xl border border-dashed border-gray-200 bg-white px-4 py-6 text-center hover:border-brand-300 md:flex-row md:justify-between md:text-left"
          >
            <span className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                <Plus className="h-4 w-4" />
              </span>
              <span className="flex flex-col">
                <span className="text-sm font-semibold text-gray-800">Mulai Proyek Baru</span>
                <span className="text-xs text-gray-500">
                  Punya ide cemerlang? Buat ruang kerja dan mulai rekrut anggota.
                </span>
              </span>
            </span>
            <span className="mt-1 shrink-0 rounded-lg bg-brand-600 px-4 py-2 text-xs font-semibold text-white md:mt-0">
              + Buat Project
            </span>
          </Link>
        </div>
      )}

      {!isLoading && !error && tab === "permintaan_bergabung" && (
        <div className="flex flex-col gap-3 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3">
          {joinRequests.length === 0 && (
            <p className="text-xs text-gray-400">Belum ada permintaan bergabung.</p>
          )}
          {joinRequests.map((request) => (
            <JoinRequestCard
              key={request.id}
              collaborationTitle={request.collaborationTitle}
              roleRequested={request.roleRequested}
              applicantName={request.applicant.name}
              applicantProgram={request.applicant.program}
              isResponding={respondingId === request.id}
              onAccept={() => handleRespond(request.id, "accept")}
              onDecline={() => handleRespond(request.id, "decline")}
            />
          ))}
        </div>
      )}
    </main>
  );
}
