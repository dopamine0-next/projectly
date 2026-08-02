"use client";

import { useEffect, useState } from "react";
import type { AuthUser } from "@/types/auth";
import type { EventListItem } from "@/types/event";
import { getUpcomingEvents } from "@/services/event.service";
import { useProjects } from "@/hooks/useProjects";

import { GreetingHeader } from "@/components/home/GreetingHeader";
import { SearchBar } from "@/components/ui/SearchBar";
import { CategoryFilterTabs } from "@/components/home/CategoryFilterTabs";
import { UpcomingEventCard } from "@/components/home/UpcomingEventCard";
import { ProjectListCard } from "@/components/home/ProjectListCard";

export default function DashboardPage() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [events, setEvents] = useState<EventListItem[]>([]);
  const [isLoadingEvents, setIsLoadingEvents] = useState(true);

  const { projects, isLoading, error, category, setCategory, search, setSearch } = useProjects();

  useEffect(() => {
    const raw = localStorage.getItem("projectly_user");
    if (raw) setUser(JSON.parse(raw));
  }, []);

  useEffect(() => {
    let isCancelled = false;
    getUpcomingEvents()
      .then((data) => {
        if (!isCancelled) setEvents(data);
      })
      .finally(() => {
        if (!isCancelled) setIsLoadingEvents(false);
      });
    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <main className="flex flex-col gap-6 px-4 pt-6 md:px-8 md:pt-8">
      <GreetingHeader name={user?.name ?? "Pengguna"} />

      <section>
        <h2 className="mb-3 text-sm font-bold text-gray-800">Acara Mendatang</h2>
        {isLoadingEvents ? (
          <p className="text-xs text-gray-400">Memuat acara...</p>
        ) : events.length === 0 ? (
          <p className="text-xs text-gray-400">Belum ada acara mendatang.</p>
        ) : (
          <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-1 md:mx-0 md:px-0">
            {events.map((event) => (
              <UpcomingEventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </section>

      <section>
        <h2 className="mb-3 text-sm font-bold text-gray-800">Open Project untukmu</h2>

        <div className="mb-3 md:max-w-md">
          <SearchBar value={search} onChange={setSearch} placeholder="Cari project..." ariaLabel="Cari project" />
        </div>

        <div className="mb-4">
          <CategoryFilterTabs active={category} onChange={setCategory} />
        </div>

        <div className="flex flex-col gap-3 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3">
          {isLoading && <p className="text-xs text-gray-400">Memuat project...</p>}
          {error && <p className="text-xs text-red-500">{error}</p>}
          {!isLoading && !error && projects.length === 0 && (
            <p className="text-xs text-gray-400">Tidak ada project yang cocok.</p>
          )}
          {projects.map((project) => (
            <ProjectListCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
