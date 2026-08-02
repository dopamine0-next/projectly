"use client";

import { useForm, useFieldArray, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import {
  collaborationSchema,
  type CollaborationFormValues,
} from "@/lib/validations/collaboration.schema";
import { useCreateCollaboration } from "@/hooks/useCreateCollaboration";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RoleFormRow } from "./RoleFormRow";

const EMPTY_ROLE = { name: "", count: 1, description: "" };
const CATEGORY_OPTIONS = ["UI/UX", "Web", "ML", "Marketing"] as const;

export function CreateCollaborationForm() {
  const { submit, isSubmitting, submitError } = useCreateCollaboration();

  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CollaborationFormValues>({
    resolver: zodResolver(collaborationSchema),
    defaultValues: {
      name: "",
      description: "",
      targetDate: "",
      roles: [EMPTY_ROLE],
    },
  });

  const { fields, append, remove } = useFieldArray({ control, name: "roles" });
  const roleValues = watch("roles");

  function onSubmit(values: CollaborationFormValues) {
    submit(values, false);
  }

  function onSaveDraft() {
    handleSubmit((values) => submit(values, true))();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <section className="flex flex-col gap-4">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-400">
          Detail Proyek
        </p>
        <Input
          label="Nama Proyek"
          placeholder="mis. aplikasi Kampus Ramah Lingkungan"
          error={errors.name?.message}
          {...register("name")}
        />
        <Textarea
          label="Deskripsi"
          placeholder="Jelaskan tujuan, ruang lingkup, dan visi kolaborasi ini..."
          rows={3}
          error={errors.description?.message}
          {...register("description")}
        />
        <Controller
          control={control}
          name="category"
          render={({ field }) => (
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-700">Kategori</label>
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger className={errors.category ? "border-red-400" : undefined}>
                  <SelectValue placeholder="Pilih Kategori" />
                </SelectTrigger>
                <SelectContent>
                  {CATEGORY_OPTIONS.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.category && <p className="text-xs text-red-500">{errors.category.message}</p>}
            </div>
          )}
        />
        <Input
          label="Tenggat Waktu Target"
          type="date"
          error={errors.targetDate?.message}
          {...register("targetDate")}
        />
      </section>

      <section className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-400">
            Role yang Dibutuhkan
          </p>
          <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[11px] font-semibold text-gray-600">
            Total {fields.length} Role
          </span>
        </div>

        {errors.roles?.root && <p className="text-xs text-red-500">{errors.roles.root.message}</p>}
        {errors.roles?.message && <p className="text-xs text-red-500">{errors.roles.message}</p>}

        {fields.map((field, index) => (
          <RoleFormRow
            key={field.id}
            index={index}
            register={register}
            errors={errors}
            descriptionValue={roleValues?.[index]?.description ?? ""}
            canRemove={fields.length > 1}
            onRemove={() => remove(index)}
          />
        ))}

        <button
          type="button"
          onClick={() => append(EMPTY_ROLE)}
          className="flex items-center justify-center gap-1.5 rounded-xl border border-dashed border-gray-200 py-2.5 text-xs font-semibold text-brand-600 hover:border-brand-300 hover:bg-brand-50"
        >
          <Plus className="h-3.5 w-3.5" />
          Tambah Peran Lain
        </button>
      </section>

      {submitError && (
        <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-xs text-red-600">
          {submitError}
        </p>
      )}

      <div className="flex flex-col gap-2">
        <Button type="submit" isLoading={isSubmitting}>
          Publikasikan Kolaborasi
        </Button>
        <button
          type="button"
          onClick={onSaveDraft}
          disabled={isSubmitting}
          className="rounded-xl border border-brand-200 py-2.5 text-sm font-semibold text-brand-600 hover:bg-brand-50 disabled:opacity-60"
        >
          Simpan Draf
        </button>
      </div>
    </form>
  );
}
