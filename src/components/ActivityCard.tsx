"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import type { LocalizedString } from "@/lib/types";
import { useLanguage } from "@/lib/i18n";

type ActivityCardProps = {
  title: LocalizedString;
  date: LocalizedString;
  description: LocalizedString;
  image: string;
  imageAlt: LocalizedString;
  href: string;
};

/** Compact card for a recent activity (image, date, summary). */
export default function ActivityCard({
  title,
  date,
  description,
  image,
  imageAlt,
  href,
}: ActivityCardProps) {
  const { t } = useLanguage();

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-soft transition-shadow duration-300 hover:shadow-lift">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={t(imageAlt)}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="inline-flex items-center gap-1.5 text-xs font-medium text-navy-500">
          <CalendarDays className="h-3.5 w-3.5 text-gold-600" aria-hidden />
          {t(date)}
        </p>
        <h3 className="mt-2 font-display text-xl leading-snug text-navy-900">
          {t(title)}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-700">
          {t(description)}
        </p>
        <Link
          href={href}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 transition-colors hover:text-gold-600"
        >
          {t({ am: "ተጨማሪ ያለው", en: "Read more" })}
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden
          />
        </Link>
      </div>
    </article>
  );
}
