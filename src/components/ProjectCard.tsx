"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import type { LocalizedString } from "@/lib/types";
import { useLanguage } from "@/lib/i18n";
import { statusLabels, type ProjectStatus } from "@/content/work";

type ProjectCardProps = {
  title: LocalizedString;
  category: LocalizedString;
  description: LocalizedString;
  status: ProjectStatus;
  image: string;
  imageAlt: LocalizedString;
  href?: string;
};

/** Card for a project / area of work, with status chip. */
export default function ProjectCard({
  title,
  category,
  description,
  status,
  image,
  imageAlt,
  href = "/our-work",
}: ProjectCardProps) {
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
        <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-navy-950/85 px-3 py-1 text-xs font-medium text-cream-50 backdrop-blur-sm">
          <MapPin className="mr-1.5 h-3 w-3 text-gold-300" aria-hidden />
          {t(category)}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-display text-xl text-navy-900">{t(title)}</h3>
          <span
            className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${
              status === "ongoing"
                ? "bg-gold-100 text-gold-700"
                : status === "completed"
                  ? "bg-navy-50 text-navy-700"
                  : "bg-cream-100 text-navy-600"
            }`}
          >
            {t(statusLabels[status])}
          </span>
        </div>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-700">
          {t(description)}
        </p>
        <Link
          href={href}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 transition-colors hover:text-gold-600"
        >
          {t({ am: "ዝርዝር ይወቁ", en: "Learn more" })}
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden
          />
        </Link>
      </div>
    </article>
  );
}
