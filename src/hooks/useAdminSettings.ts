"use client";

import { useEffect, useState } from "react";
import { getSystemSettings, updateSystemSettings } from "@/services/admin.service";
import type { SystemSettings } from "@/types/admin";

export function useAdminSettings() {
  const [settings, setSettings] = useState<SystemSettings | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [savedAt, setSavedAt] = useState<number | null>(null);

  useEffect(() => {
    let isCancelled = false;
    getSystemSettings().then((data) => {
      if (!isCancelled) {
        setSettings(data);
        setIsLoading(false);
      }
    });
    return () => {
      isCancelled = true;
    };
  }, []);

  function updateLocal(partial: Partial<SystemSettings>) {
    setSettings((prev) => (prev ? { ...prev, ...partial } : prev));
  }

  async function save() {
    if (!settings) return;
    setIsSaving(true);
    try {
      const updated = await updateSystemSettings(settings);
      setSettings(updated);
      setSavedAt(Date.now());
    } finally {
      setIsSaving(false);
    }
  }

  return { settings, isLoading, isSaving, savedAt, updateLocal, save };
}
