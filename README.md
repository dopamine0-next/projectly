# Projectly — Frontend (Next.js + TypeScript)

## Tahap 1: Halaman Login (mock data)

### Cara menjalankan

```bash
npm install
npm run dev
```

Buka `http://localhost:3000` → otomatis redirect ke `/login`.

### Akun mock untuk testing

| NIM        | Password    | Role  |
|------------|-------------|-------|
| 2310001    | user123     | user  |
| admin001   | admin123    | admin |
| 23101140   | uamay10     | admin |
| 23101141   | marwah1     | admin |
| 23101142   | aisyah      | admin |
| 23101143   | ilyas1      | user  |
| 23101144   | harahap     | user  |
| 23101145   | joseph      | user  |

Login sukses → redirect ke `/dashboard` (placeholder).
Login gagal (NIM/password salah) → pesan error muncul di bawah form.

### Struktur folder

```
src/
├─ app/
│  ├─ layout.tsx          # Root layout
│  ├─ globals.css         # Tailwind entry
│  ├─ page.tsx            # "/" -> redirect ke /login
│  ├─ login/page.tsx      # Halaman login
│  └─ dashboard/page.tsx  # Placeholder tujuan setelah login
├─ components/
│  ├─ ui/                 # Komponen generik (Button, Input)
│  └─ auth/LoginForm.tsx  # Form login (logic + UI form)
├─ hooks/
│  └─ useAuth.ts          # State login (loading, error) + simpan sesi
├─ services/
│  └─ auth.service.ts     # Satu-satunya titik integrasi ke backend nanti
├─ lib/
│  ├─ mock/users.ts       # "Database" user sementara
│  └─ validations/auth.schema.ts  # Skema validasi (zod)
└─ types/
   └─ auth.ts             # Kontrak data (payload, response, error)
```

### Cara integrasi ke backend nanti

Cukup ubah isi fungsi `login()` di `src/services/auth.service.ts` menjadi
pemanggilan `fetch`/axios ke endpoint asli. Tidak ada file lain (LoginForm,
useAuth, halaman) yang perlu diubah karena semuanya bergantung pada
tipe `LoginPayload` / `LoginResponse` di `src/types/auth.ts`, bukan pada
implementasi mock-nya.

Tambahkan `.env.local`:
```
NEXT_PUBLIC_API_URL=https://api-domain-kamu.com
```

### Testing manual (checklist)

- [ ] Submit form kosong → muncul pesan validasi di tiap field
- [ ] NIM/password salah → pesan error merah muncul
- [ ] NIM/password benar → tombol loading, lalu redirect ke `/dashboard`
- [ ] Toggle ikon mata → password terlihat/tersembunyi
- [ ] Responsive di lebar layar mobile (375px)
