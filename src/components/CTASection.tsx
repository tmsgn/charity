"use client";

import Link from "next/link";
import { ArrowLeft, HeartHandshake } from "lucide-react";
import type { LocalizedString } from "@/lib/types";
import { useLanguage } from "@/lib/i18n";
import Reveal from "./Reveal";

type CTASectionProps = {
  title: LocalizedString;
  text: LocalizedString;
  primary: { label: LocalizedString; href: string };
  secondary?: { label: LocalizedString; href: string };
};

/** Final call-to-action band shown before the footer. */
export default function CTASection({
  title,
  text,
  primary,
  secondary,
}: CTASectionProps) {
  const { t } = useLanguage();

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24" aria-labelledby="final-cta">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-navy-900 px-6 py-16 text-center sm:px-16 sm:py-20">
          {/* Decorative arcs echoing the logo mark */}
          <svg
            aria-hidden
            viewBox="0 0 200 200"
            className="pointer-events-none absolute -left-20 -bottom-24 h-72 w-72 text-navy-800"
            fill="none"
          >
            <circle cx="100" cy="100" r="88" stroke="currentColor" strokeWidth="14" />
          </svg>
          <svg
            aria-hidden
            viewBox="0 0 200 200"
            className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 text-navy-800"
            fill="none"
          >
            <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="12" />
            <circle cx="40" cy="62" r="12" fill="currentColor" />
          </svg>

          <div className="relative mx-auto max-w-2xl">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold-500/15 text-gold-300">
              <HeartHandshake className="h-7 w-7" aria-hidden />
            </span>
            <h2
              id="final-cta"
              className="mt-6 font-display text-3xl leading-snug text-cream-50 sm:text-4xl"
            >
              {t(title)}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-cream-200 sm:text-lg">
              {t(text)}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href={primary.href}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-400 sm:w-auto"
              >
                {t(primary.label)}
                <ArrowLeft className="h-4 w-4 rtl:rotate-180" aria-hidden />
              </Link>
              {secondary ? (
                <Link
                  href={secondary.href}
                  className="inline-flex w-full items-center justify-center rounded-full border border-cream-50/30 px-7 py-3.5 text-sm font-semibold text-cream-50 transition-colors hover:bg-cream-50/10 sm:w-auto"
                >
                  {t(secondary.label)}
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
