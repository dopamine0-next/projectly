"use client";

import { useEffect, useState } from "react";
import {
  getJoinRequests,
  getMyCollaborations,
  respondToJoinRequest,
} from "@/services/collaboration.service";
import type { CollaborationListItem, JoinRequestItem } from "@/types/collaboration";

export function useMyCollaborations() {
  const [collaborations, setCollaborations] = useState<CollaborationListItem[]>([]);
  const [joinRequests, setJoinRequests] = useState<JoinRequestItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [respondingId, setRespondingId] = useState<string | null>(null);

  useEffect(() => {
    let isCancelled = false;

    async function fetchAll() {
      setIsLoading(true);
      setError(null);
      try {
        const [collabData, requestData] = await Promise.all([
          getMyCollaborations(),
          getJoinRequests(),
        ]);
        if (!isCancelled) {
          setCollaborations(collabData);
          setJoinRequests(requestData);
        }
      } catch {
        if (!isCancelled) setError("Gagal memuat data kolaborasi.");
      } finally {
        if (!isCancelled) setIsLoading(false);
      }
    }

    fetchAll();
    return () => {
      isCancelled = true;
    };
  }, []);

  async function handleRespond(requestId: string, action: "accept" | "decline") {
    setRespondingId(requestId);
    try {
      await respondToJoinRequest(requestId, action);
      // Optimistically remove dari daftar setelah direspons.
      setJoinRequests((prev) => prev.filter((request) => request.id !== requestId));
    } finally {
      setRespondingId(null);
    }
  }

  return {
    collaborations,
    joinRequests,
    isLoading,
    error,
    handleRespond,
    respondingId,
  };
}
