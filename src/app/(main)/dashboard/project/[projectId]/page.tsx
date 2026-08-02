"use client";

import { useParams } from "next/navigation";
import { useProjectDetail } from "@/hooks/useProjectDetail";
import { categoryBadgeClass, categoryBannerGradient } from "@/lib/category-style";
import { DetailBannerHeader } from "@/components/layout/DetailBannerHeader";
import { RoleNeededItem } from "@/components/project/RoleNeededItem";
import { MatchGauge } from "@/components/project/MatchGauge";
import { JoinProjectButton } from "@/components/project/JoinProjectButton";

export default function ProjectDetailPage() {
  const params = useParams<{ projectId: string }>();
  const { project, isLoading, error, handleJoin, isJoining, hasJoined, joinError } =
    useProjectDetail(params.projectId);

  if (isLoading) {
    return <p className="p-6 text-center text-sm text-gray-400">Memuat detail project...</p>;
  }

  if (error || !project) {
    return (
      <p className="p-6 text-center text-sm text-red-500">
        {error ?? "Project tidak ditemukan."}
      </p>
    );
  }

  return (
    <main className="pb-6 md:mx-auto md:max-w-2xl md:pt-6">
      <DetailBannerHeader bannerGradientClass={categoryBannerGradient(project.category)}>
        <div className="absolute bottom-3 left-4 flex gap-2">
          <span
            className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${categoryBadgeClass(
              project.category
            )}`}
          >
            {project.category}
          </span>
          <span className="rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-gray-700">
            {project.level}
          </span>
        </div>
      </DetailBannerHeader>

      <div className="flex flex-col gap-6 px-4 pt-4 md:px-0">
        <div>
          <h1 className="text-lg font-bold text-gray-800">{project.title}</h1>
          <p className="mt-1 text-xs text-gray-500">
            {project.owner.name} • {project.owner.role}
          </p>
        </div>

        <section>
          <h2 className="mb-2 text-sm font-bold text-gray-800">Tentang Proyek</h2>
          <p className="whitespace-pre-line text-sm leading-relaxed text-gray-600">
            {project.about}
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-sm font-bold text-gray-800">Peran yang Dibutuhkan</h2>
          <div className="flex flex-col gap-2.5">
            {project.rolesDetailed.map((role) => (
              <RoleNeededItem key={role.name} role={role} />
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-gray-100 bg-white p-4">
          <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-wide text-gray-400">
            Profil Kecocokan Anda
          </p>
          <div className="flex flex-col items-center gap-3">
            <MatchGauge percentage={project.matchProfile.percentage} />
            <p className="text-center text-sm font-semibold text-gray-800">
              {project.matchProfile.headline}
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {project.matchProfile.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-gray-50 px-2.5 py-1 text-[11px] font-medium text-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        <JoinProjectButton
          isJoining={isJoining}
          hasJoined={hasJoined}
          joinError={joinError}
          onJoin={handleJoin}
        />
      </div>
    </main>
  );
}
