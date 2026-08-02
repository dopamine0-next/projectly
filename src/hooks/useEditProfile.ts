"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { updateProfile } from "@/services/profile.service";
import type { EditProfileFormValues } from "@/lib/validations/profile.schema";

export function useEditProfile() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  async function submit(values: EditProfileFormValues) {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      await updateProfile(values);
      router.push("/profil");
    } catch {
      setSubmitError("Gagal menyimpan perubahan, coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return { submit, isSubmitting, submitError };
}
