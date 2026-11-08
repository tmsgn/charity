"use client";

import { Info } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import GalleryGrid from "@/components/GalleryGrid";
import { galleryHero, galleryItems, galleryNotice } from "@/content/gallery";

export default function GalleryView() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        title={galleryHero.title}
        subtitle={galleryHero.subtitle}
        eyebrow={{ am: "የምስል ማህደር", en: "Photo archive" }}
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="mb-10 flex max-w-3xl items-start gap-2.5 rounded-2xl border border-gold-200 bg-gold-50 p-4 text-sm leading-relaxed text-navy-800">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" aria-hidden />
              {t(galleryNotice)}
            </p>
          </Reveal>
          <Reveal>
            <GalleryGrid items={galleryItems} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
