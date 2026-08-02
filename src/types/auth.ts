// Tipe-tipe ini merepresentasikan kontrak data dengan backend.
// Ketika backend sudah siap, sesuaikan field di sini dengan response API asli
// -> perubahan akan otomatis mengalir ke semua tempat yang memakainya.

export type UserRole = "admin" | "user";

export interface AuthUser {
  id: string;
  nim: string;
  name: string;
  role: UserRole;
}

export interface LoginPayload {
  nim: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: AuthUser;
}

// Bentuk error yang konsisten, meniru pola error response API pada umumnya
// (mis. Laravel/Express: { message, errors? }) agar mudah diintegrasikan nanti.
export interface ApiError {
  message: string;
  errors?: Partial<Record<keyof LoginPayload, string>>;
}
