"use client";

import type { LocalizedString } from "@/lib/types";
import { useLanguage } from "@/lib/i18n";

type PageHeroProps = {
  title: LocalizedString;
  subtitle: LocalizedString;
  eyebrow?: LocalizedString;
};

/**
 * Dark navy page header used at the top of inner pages.
 * The fixed site header renders transparently over it.
 */
export default function PageHero({ title, subtitle, eyebrow }: PageHeroProps) {
  const { t } = useLanguage();

  return (
    <header className="relative overflow-hidden bg-navy-900">
      {/* Decorative arc — an echo of the logo mark */}
      <svg
        aria-hidden
        viewBox="0 0 200 200"
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 text-navy-800"
        fill="none"
      >
        <circle cx="100" cy="100" r="88" stroke="currentColor" strokeWidth="18" />
        <circle cx="34" cy="58" r="14" fill="currentColor" />
      </svg>
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy-950/40 to-transparent"
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-36 sm:pb-24 sm:pt-40">
        <div className="max-w-2xl">
          {eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-300">
              {t(eyebrow)}
            </p>
          ) : null}
          <h1 className="mt-3 font-display text-4xl leading-tight text-cream-50 sm:text-5xl">
            {t(title)}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-cream-200">
            {t(subtitle)}
          </p>
        </div>
      </div>
    </header>
  );
}
