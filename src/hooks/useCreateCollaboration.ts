"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createCollaboration } from "@/services/collaboration.service";
import type { CollaborationFormValues } from "@/lib/validations/collaboration.schema";

export function useCreateCollaboration() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  async function submit(values: CollaborationFormValues, isDraft: boolean) {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      await createCollaboration({ ...values, isDraft });
      router.push("/kolaborasi");
    } catch {
      setSubmitError("Gagal menyimpan kolaborasi, coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return { submit, isSubmitting, submitError };
}
