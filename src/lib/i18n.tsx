"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import type { Locale, LocalizedString } from "./types";

const STORAGE_KEY = "kher-locale";

/* localStorage-backed external store.
   useSyncExternalStore reads the saved language without hydration
   mismatches: the server renders the default (Amharic), then the
   client re-renders with the stored preference. */

const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  window.addEventListener("storage", callback);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot(): Locale {
  try {
    // 1. Explicit URL parameter (?lang=en) — highest priority,
    //    useful for sharing language-specific links.
    const param = new URLSearchParams(window.location.search).get("lang");
    if (param === "en" || param === "am") return param;

    // 2. Saved preference.
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "am" || saved === "en") return saved;
  } catch {
    // localStorage unavailable — keep the default.
  }
  return "am";
}

function getServerSnapshot(): Locale {
  return "am";
}

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  /** Pick the string for the active language. */
  t: (value: LocalizedString) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

/**
 * Client-side language switching.
 * Amharic ("am") is the default language of the site; English ("en")
 * is optional. The choice is persisted in localStorage and applied to
 * <html lang> for correct rendering and screen-reader pronunciation.
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // Keep <html lang> in sync for accessibility and text rendering.
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore persistence failures.
    }
    listeners.forEach((listener) => listener());
  }, []);

  const t = useCallback((value: LocalizedString) => value[locale], [locale]);

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used inside <LanguageProvider>");
  }
  return ctx;
}
