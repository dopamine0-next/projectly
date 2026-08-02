// Tipe-tipe ini merepresentasikan kontrak data dengan backend untuk fitur
// Acara (Acara Mendatang di Beranda + Detail Acara & Masukan).

export interface EventListItem {
  id: string;
  title: string;
  categoryTag: string; // mis. "Teknologi & Startup"
  dateLabel: string; // mis. "04 Okt • 19:00" — sudah diformat siap tampil
  location: string;
}

export interface EventDetail extends EventListItem {
  description: string;
  organizer: { name: string; community: string };
  // Menentukan apakah form masukan boleh diisi. Untuk sekarang di-mock manual
  // per data acara; nanti bisa dihitung backend dari (waktu_selesai < now).
  hasEnded: boolean;
}

export interface FeedbackPayload {
  rating: number; // 1-5
  comment?: string;
}

export interface FeedbackResponse {
  id: string;
  eventId: string;
  submittedAt: string;
}
