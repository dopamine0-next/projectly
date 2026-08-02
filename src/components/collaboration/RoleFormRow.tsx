import { Trash2 } from "lucide-react";
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { CollaborationFormValues } from "@/lib/validations/collaboration.schema";

interface RoleFormRowProps {
  index: number;
  register: UseFormRegister<CollaborationFormValues>;
  errors: FieldErrors<CollaborationFormValues>;
  descriptionValue: string;
  canRemove: boolean;
  onRemove: () => void;
}

const MAX_DESCRIPTION_LENGTH = 100;

export function RoleFormRow({
  index,
  register,
  errors,
  descriptionValue,
  canRemove,
  onRemove,
}: RoleFormRowProps) {
  const roleError = errors.roles?.[index];

  return (
    <div className="rounded-xl border border-gray-100 bg-white p-3.5">
      <div className="flex items-center gap-2">
        <input
          {...register(`roles.${index}.name`)}
          placeholder="Nama Role, mis. Frontend Developer"
          className="min-w-0 flex-1 border-none bg-transparent text-sm font-semibold text-gray-800 outline-none placeholder:font-normal placeholder:text-gray-400"
        />
        <input
          type="number"
          min={1}
          max={20}
          {...register(`roles.${index}.count`, { valueAsNumber: true })}
          aria-label="Jumlah orang dibutuhkan"
          className="w-14 rounded-lg border border-gray-200 px-2 py-1 text-center text-sm text-gray-700 outline-none focus:border-brand-500"
        />
        <button
          type="button"
          onClick={onRemove}
          disabled={!canRemove}
          aria-label="Hapus role"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-red-500 hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-30"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
      {roleError?.name && <p className="mt-1 text-xs text-red-500">{roleError.name.message}</p>}
      {roleError?.count && <p className="mt-1 text-xs text-red-500">{roleError.count.message}</p>}

      <div className="mt-2">
        <textarea
          {...register(`roles.${index}.description`)}
          maxLength={MAX_DESCRIPTION_LENGTH}
          rows={2}
          placeholder="Tambahkan deskripsi singkat"
          className="w-full resize-none rounded-lg border border-gray-100 bg-gray-50 px-3 py-2 text-xs text-gray-600 outline-none placeholder:text-gray-400 focus:border-brand-300"
        />
        <p className="mt-1 text-right text-[10px] text-gray-400">
          {descriptionValue.length}/{MAX_DESCRIPTION_LENGTH}
        </p>
      </div>
    </div>
  );
}
