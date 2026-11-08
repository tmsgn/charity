"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Image as ImageIcon, X } from "lucide-react";
import type { GalleryItem } from "@/content/gallery";
import { useLanguage } from "@/lib/i18n";

type GalleryGridProps = {
  items: GalleryItem[];
};

/**
 * Responsive gallery grid with an accessible lightbox
 * (keyboard: ← → to navigate, Esc to close).
 */
export default function GalleryGrid({ items }: GalleryGridProps) {
  const { t, locale } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (dir: 1 | -1) => {
      setOpenIndex((current) => {
        if (current === null) return current;
        return (current + dir + items.length) % items.length;
      });
    },
    [items.length],
  );

  // Keyboard controls + body scroll lock while the lightbox is open.
  useEffect(() => {
    if (openIndex === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [openIndex, close, step]);

  const current = openIndex !== null ? items[openIndex] : null;

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {items.map((item, index) => (
          <button
            key={item.image + index}
            type="button"
            onClick={() => setOpenIndex(index)}
            aria-label={t(item.caption)}
            className="group relative block w-full overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-soft transition-shadow duration-300 hover:shadow-lift"
          >
            <Image
              src={item.image}
              alt={t(item.alt)}
              width={800}
              height={item.image === "/images/hero.jpg" ? 560 : 560}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <span className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-navy-950/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="p-4 text-left text-sm font-medium text-cream-50">
                {t(item.caption)}
              </span>
            </span>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {current ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t(current.caption)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-950/95 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="overflow-hidden rounded-2xl bg-navy-900">
              <Image
                src={current.image}
                alt={t(current.alt)}
                width={1200}
                height={800}
                sizes="(min-width: 1024px) 896px, 100vw"
                className="max-h-[72vh] w-full object-contain"
                priority
              />
              <div className="flex items-center justify-between gap-4 px-5 py-4">
                <p className="text-sm text-cream-100">{t(current.caption)}</p>
                <div className="flex items-center gap-3">
                  {current.sample ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-500/15 px-3 py-1 text-xs font-medium text-gold-300">
                      <ImageIcon className="h-3 w-3" aria-hidden />
                      {t({
                        am: "ናሙና ምስል",
                        en: "Sample image",
                      })}
                    </span>
                  ) : null}
                  <span className="text-xs text-cream-200/60" dir="ltr">
                    {(openIndex ?? 0) + 1} / {items.length}
                  </span>
                </div>
              </div>
            </div>

            {/* Controls */}
            <button
              type="button"
              onClick={close}
              aria-label={t({ am: "ዝጋ", en: "Close" })}
              className="absolute -top-12 right-0 inline-flex h-10 w-10 items-center justify-center rounded-full bg-cream-50/10 text-cream-50 transition-colors hover:bg-cream-50/20"
            >
              <X className="h-5 w-5" aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label={t({ am: "ያለፈው", en: "Previous" })}
              className="absolute left-0 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-cream-50/10 text-cream-50 transition-colors hover:bg-cream-50/20 sm:-left-5"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label={t({ am: "ቀጣይ", en: "Next" })}
              className="absolute right-0 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-cream-50/10 text-cream-50 transition-colors hover:bg-cream-50/20 sm:-right-5"
            >
              <ChevronRight className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </div>
      ) : null}

      <p className="sr-only" lang={locale}>
        {t({ am: "ለመቀጠል የቀኝ ወይም የግራ ቁልፍ ይጠቀሙ።", en: "Use the arrow keys to navigate the gallery." })}
      </p>
    </>
  );
}
