import { z } from "zod";

export const loginSchema = z.object({
  nim: z
    .string()
    .min(1, "NIM wajib diisi")
    .min(5, "NIM minimal 5 karakter"),
  password: z
    .string()
    .min(1, "Kata sandi wajib diisi")
    .min(6, "Kata sandi minimal 6 karakter"),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
