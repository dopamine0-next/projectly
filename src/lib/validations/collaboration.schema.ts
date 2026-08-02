import { z } from "zod";

export const roleFormSchema = z.object({
  name: z.string().min(1, "Nama role wajib diisi"),
  count: z
    .number({ invalid_type_error: "Wajib diisi angka" })
    .min(1, "Minimal 1 orang")
    .max(20, "Maksimal 20 orang"),
  description: z.string().max(100, "Maksimal 100 karakter").optional(),
});

export const collaborationSchema = z.object({
  name: z.string().min(3, "Nama proyek minimal 3 karakter"),
  description: z.string().min(10, "Deskripsi minimal 10 karakter"),
  category: z.enum(["UI/UX", "Web", "ML", "Marketing"], {
    errorMap: () => ({ message: "Pilih kategori" }),
  }),
  targetDate: z.string().min(1, "Tenggat waktu wajib diisi"),
  roles: z.array(roleFormSchema).min(1, "Tambahkan minimal 1 role"),
});

export type CollaborationFormValues = z.infer<typeof collaborationSchema>;
