"use client";

import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminBottomNav } from "@/components/admin/AdminBottomNav";
import { useRequireAdmin } from "@/hooks/useRequireAdmin";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { admin, isChecking } = useRequireAdmin();

  if (isChecking || !admin) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <p className="text-sm text-gray-400">Memeriksa akses...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminSidebar />
      <div className="md:ml-60">
        <div className="mx-auto w-full max-w-sm pb-20 md:max-w-6xl md:pb-10">{children}</div>
      </div>
      <AdminBottomNav />
    </div>
  );
}
