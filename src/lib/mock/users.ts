import type { AuthUser } from "@/types/auth";

// "Database" sementara. Setiap entri mewakili satu baris user di backend nanti.
// Password disimpan plain di sini HANYA untuk kebutuhan mock (jangan pernah
// lakukan ini di backend sungguhan).
export const MOCK_USERS: Array<AuthUser & { password: string }> = [
  {
    id: "usr_001",
    nim: "2310001",
    name: "Alex Pratama",
    role: "user",
    password: "user123",
  },
  {
    id: "usr_002",
    nim: "admin001",
    name: "Admin Projectly",
    role: "admin",
    password: "admin123",
  },
  {
    id: "usr_003",
    nim: "23101140",
    name: "Amaylia",
    role: "admin",
    password: "amay10",
  },
  {
    id: "usr_004",
    nim: "23101141",
    name: "Marwah",
    role: "admin",
    password: "marwah1",
  },
  {
    id: "usr_006",
    nim: "23101142",
    name: "Aisyah",
    role: "admin",
    password: "aisyah",
  },
  {
    id: "usr_007",
    nim: "23101143",
    name: "Ilyas",
    role: "user",
    password: "ilyas1",
  },
  {
    id: "usr_008",
    nim: "23101144",
    name: "Harahap",
    role: "user",
    password: "harahap",
  },
  {
    id: "usr_009",
    nim: "23101145",
    name: "Joseph",
    role: "user",
    password: "joseph",
  },
];
