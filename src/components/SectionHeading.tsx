"use client";

import type { LocalizedString } from "@/lib/types";
import { useLanguage } from "@/lib/i18n";

type SectionHeadingProps = {
  eyebrow: LocalizedString;
  title: LocalizedString;
  subtitle?: LocalizedString;
  align?: "left" | "center";
  /** "light" renders cream text for dark backgrounds */
  tone?: "dark" | "light";
  className?: string;
};

/** Eyebrow + title + optional subtitle — used at the top of sections. */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "dark",
  className = "",
}: SectionHeadingProps) {
  const { t } = useLanguage();
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignment} ${className}`}>
      <p
        className={`text-sm font-semibold ${
          tone === "light" ? "text-gold-300" : "text-gold-600"
        }`}
      >
        {t(eyebrow)}
      </p>
      <h2
        className={`mt-3 font-display text-3xl leading-snug sm:text-4xl ${
          tone === "light" ? "text-cream-50" : "text-navy-900"
        }`}
      >
        {t(title)}
      </h2>
      {subtitle ? (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            tone === "light" ? "text-cream-200" : "text-navy-700"
          }`}
        >
          {t(subtitle)}
        </p>
      ) : null}
    </div>
  );
}
