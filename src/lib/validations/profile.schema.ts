import { z } from "zod";

export const editProfileSchema = z.object({
  name: z.string().min(3, "Nama minimal 3 karakter"),
  major: z.string().min(3, "Program studi minimal 3 karakter"),
  university: z.string().min(3, "Universitas minimal 3 karakter"),
  interests: z.array(z.string()).min(1, "Pilih minimal 1 minat"),
});

export type EditProfileFormValues = z.infer<typeof editProfileSchema>;
