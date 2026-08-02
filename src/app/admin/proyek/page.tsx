"use client";

import { useAdminProjects } from "@/hooks/useAdminProjects";
import { AdminProjectCard } from "@/components/admin/AdminProjectCard";

export default function AdminProyekPage() {
  const { projects, isLoading, error, removingId, handleRemove } = useAdminProjects();

  const flaggedCount = projects.filter((project) => project.status === "flagged").length;

  return (
    <main className="flex flex-col gap-5 px-4 pt-6 md:px-8 md:pt-8">
      <div>
        <h1 className="text-lg font-bold text-gray-900">Moderasi Proyek</h1>
        <p className="text-sm text-gray-500">
          Tinjau seluruh proyek yang aktif di platform.
          {flaggedCount > 0 && (
            <span className="ml-1 font-semibold text-red-600">
              {flaggedCount} proyek ditandai perlu ditinjau.
            </span>
          )}
        </p>
      </div>

      <div className="flex flex-col gap-3 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3">
        {isLoading && <p className="text-xs text-gray-400">Memuat proyek...</p>}
        {error && <p className="text-xs text-red-500">{error}</p>}
        {!isLoading && !error && projects.length === 0 && (
          <p className="text-xs text-gray-400">Belum ada proyek.</p>
        )}
        {projects.map((project) => (
          <AdminProjectCard
            key={project.id}
            project={project}
            isRemoving={removingId === project.id}
            onRemove={() => handleRemove(project.id)}
          />
        ))}
      </div>
    </main>
  );
}
