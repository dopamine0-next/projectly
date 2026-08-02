"use client";

import { useState } from "react";
import { Flag, Trash2, Loader2, Users } from "lucide-react";
import clsx from "clsx";
import type { AdminProjectItem } from "@/types/admin";
import { categoryBadgeClass } from "@/lib/category-style";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

interface AdminProjectCardProps {
  project: AdminProjectItem;
  isRemoving: boolean;
  onRemove: () => void;
}

export function AdminProjectCard({ project, isRemoving, onRemove }: AdminProjectCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-2">
        <span
          className={clsx(
            "rounded-full px-2.5 py-1 text-[11px] font-semibold",
            categoryBadgeClass(project.category)
          )}
        >
          {project.category}
        </span>
        {project.status === "flagged" && (
          <span className="flex items-center gap-1 rounded-full bg-red-100 px-2.5 py-1 text-[11px] font-semibold text-red-700">
            <Flag className="h-3 w-3" />
            Ditandai
          </span>
        )}
      </div>

      <h3 className="mt-2 text-sm font-bold text-gray-900">{project.title}</h3>
      <p className="mt-1 text-xs text-gray-500">Pemilik: {project.ownerName}</p>

      <div className="mt-3 flex items-center justify-between border-t border-gray-50 pt-3">
        <span className="flex items-center gap-1 text-[11px] text-gray-500">
          <Users className="h-3.5 w-3.5" />
          {project.memberCount} anggota
        </span>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <button
              type="button"
              disabled={isRemoving}
              className="flex items-center gap-1.5 rounded-lg border border-red-200 px-3 py-1.5 text-xs font-semibold text-red-600 hover:bg-red-50 disabled:opacity-60"
            >
              {isRemoving ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Trash2 className="h-3.5 w-3.5" />}
              Hapus
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Hapus proyek ini?</DialogTitle>
              <DialogDescription>
                "{project.title}" akan dihapus permanen beserta seluruh data kolaborasinya. Tindakan
                ini tidak bisa dibatalkan.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-50"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={() => {
                  onRemove();
                  setOpen(false);
                }}
                className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
              >
                Ya, Hapus
              </button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
