"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { editProfileSchema, type EditProfileFormValues } from "@/lib/validations/profile.schema";
import { useEditProfile } from "@/hooks/useEditProfile";
import { SUGGESTED_INTERESTS } from "@/lib/mock/profile";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { SkillTag } from "@/components/onboarding/SkillTag";
import type { UserProfile } from "@/types/profile";

interface EditProfileFormProps {
  initialProfile: UserProfile;
}

export function EditProfileForm({ initialProfile }: EditProfileFormProps) {
  const { submit, isSubmitting, submitError } = useEditProfile();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<EditProfileFormValues>({
    resolver: zodResolver(editProfileSchema),
    defaultValues: {
      name: initialProfile.name,
      major: initialProfile.major,
      university: initialProfile.university,
      interests: initialProfile.interests,
    },
  });

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-4">
      <Input label="Nama Lengkap" error={errors.name?.message} {...register("name")} />
      <Input
        label="Program Studi"
        placeholder="mis. Informatics Engineering • Web Dev"
        error={errors.major?.message}
        {...register("major")}
      />
      <Input label="Universitas" error={errors.university?.message} {...register("university")} />

      <Controller
        control={control}
        name="interests"
        render={({ field }) => {
          const selected = field.value ?? [];

          function toggle(interest: string) {
            if (selected.includes(interest)) {
              field.onChange(selected.filter((item) => item !== interest));
            } else {
              field.onChange([...selected, interest]);
            }
          }

          return (
            <div>
              <p className="mb-1.5 text-sm font-medium text-gray-700">Minat</p>
              <div className="flex flex-wrap gap-2">
                {SUGGESTED_INTERESTS.map((interest) => (
                  <SkillTag
                    key={interest}
                    label={interest}
                    variant={selected.includes(interest) ? "selected" : "suggestion"}
                    onClick={() => toggle(interest)}
                  />
                ))}
              </div>
              {errors.interests && (
                <p className="mt-1.5 text-xs text-red-500">{errors.interests.message}</p>
              )}
            </div>
          );
        }}
      />

      {submitError && (
        <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-xs text-red-600">
          {submitError}
        </p>
      )}

      <Button type="submit" isLoading={isSubmitting}>
        Simpan Perubahan
      </Button>
    </form>
  );
}
