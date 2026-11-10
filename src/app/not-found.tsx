"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Logo from "@/components/Logo";
import { org } from "@/content/site";
import { useLanguage } from "@/lib/i18n";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <section className="flex min-h-[80svh] items-center justify-center bg-navy-950 px-6 py-24 text-center">
      <div>
        <Logo variant="cream" size={72} className="mx-auto" />
        <p className="mt-8 font-display text-6xl text-gold-400" dir="ltr">
          404
        </p>
        <h1 className="mt-4 font-display text-3xl text-cream-50 sm:text-4xl">
          {t({ am: "የሚፈልጉት ገጽ አልተገኘም", en: "Page not found" })}
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-cream-200/80">
          {t({
            am: "የሚፈልጉት ገጽ ሊወርድ ወይም አድራሻው ሊለወጥ ይችላል። እባክዎ ወደ መነሻ ገጽ ይመለሱ።",
            en: "The page you are looking for may have been moved or removed. Please return to the homepage.",
          })}
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-8 py-4 text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-400"
        >
          {t({ am: "ወደ መነሻ ገጽ", en: "Back to homepage" })}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
        <p className="mt-8 text-sm text-cream-200/50">{t(org.name)}</p>
      </div>
    </section>
  );
}
