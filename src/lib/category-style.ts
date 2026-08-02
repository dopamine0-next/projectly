import type { ProjectCategory } from "@/types/project";

export function categoryBadgeClass(category: ProjectCategory): string {
  switch (category) {
    case "UI/UX":
      return "bg-brand-100 text-brand-700";
    case "Web":
      return "bg-emerald-100 text-emerald-700";
    case "ML":
      return "bg-blue-100 text-blue-700";
    case "Marketing":
      return "bg-orange-100 text-orange-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
}

export function categoryBannerGradient(category: ProjectCategory): string {
  switch (category) {
    case "UI/UX":
      return "from-brand-500 to-brand-800";
    case "Web":
      return "from-emerald-500 to-emerald-800";
    case "ML":
      return "from-blue-500 to-blue-800";
    case "Marketing":
      return "from-orange-500 to-orange-800";
    default:
      return "from-gray-500 to-gray-800";
  }
}
