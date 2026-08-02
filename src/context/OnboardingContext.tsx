"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  initialOnboardingData,
  type OnboardingData,
  type OnboardingResult,
} from "@/types/onboarding";

const STORAGE_KEY = "projectly_onboarding";

interface OnboardingContextValue {
  data: OnboardingData;
  updateData: (patch: Partial<OnboardingData>) => void;
  resetData: () => void;
  result: OnboardingResult | null;
  setResult: (result: OnboardingResult) => void;
}

const OnboardingContext = createContext<OnboardingContextValue | null>(null);

export function OnboardingProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<OnboardingData>(initialOnboardingData);
  const [result, setResult] = useState<OnboardingResult | null>(null);

  // Muat progress yang tersimpan (mis. user reload halaman di tengah alur).
  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        setData(JSON.parse(raw));
      } catch {
        // abaikan data korup
      }
    }
  }, []);

  function updateData(patch: Partial<OnboardingData>) {
    setData((prev) => {
      const next = { ...prev, ...patch };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }

  function resetData() {
    localStorage.removeItem(STORAGE_KEY);
    setData(initialOnboardingData);
  }

  return (
    <OnboardingContext.Provider
      value={{ data, updateData, resetData, result, setResult }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboarding() {
  const ctx = useContext(OnboardingContext);
  if (!ctx) {
    throw new Error("useOnboarding harus dipakai di dalam OnboardingProvider");
  }
  return ctx;
}
