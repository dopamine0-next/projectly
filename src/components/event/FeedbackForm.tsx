"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { StarRating } from "./StarRating";
import { Button } from "@/components/ui/Button";

interface FeedbackFormProps {
  hasEnded: boolean;
  isSubmitting: boolean;
  submitError: string | null;
  hasSubmitted: boolean;
  onSubmit: (rating: number, comment: string) => void;
}

export function FeedbackForm({
  hasEnded,
  isSubmitting,
  submitError,
  hasSubmitted,
  onSubmit,
}: FeedbackFormProps) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const isDisabled = !hasEnded || hasSubmitted;

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (rating === 0) return;
    onSubmit(rating, comment);
  }

  if (hasSubmitted) {
    return (
      <div className="flex flex-col items-center gap-2 rounded-xl bg-emerald-50 px-4 py-6 text-center">
        <CheckCircle2 className="h-6 w-6 text-emerald-600" />
        <p className="text-sm font-semibold text-emerald-700">Terima kasih atas masukanmu!</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <p className="mb-2 text-sm font-medium text-gray-700">Rating Keseluruhan</p>
        <StarRating value={rating} onChange={setRating} disabled={isDisabled} />
      </div>

      <div>
        <label htmlFor="feedback-comment" className="mb-1.5 block text-sm font-medium text-gray-700">
          Komentar Tambahan (Opsional)
        </label>
        <textarea
          id="feedback-comment"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          disabled={isDisabled}
          rows={3}
          placeholder="Apa yang paling berkesan bagi Anda? Ada saran untuk perbaikan?"
          className="w-full rounded-xl border border-gray-200 bg-white px-3.5 py-2.5 text-sm text-gray-800 outline-none placeholder:text-gray-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 disabled:bg-gray-50"
        />
      </div>

      {submitError && (
        <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-xs text-red-600">
          {submitError}
        </p>
      )}

      <Button type="submit" disabled={isDisabled || rating === 0} isLoading={isSubmitting}>
        {hasEnded ? "Kirim masukan" : "Acara belum selesai"}
      </Button>
    </form>
  );
}
