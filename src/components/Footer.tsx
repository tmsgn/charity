"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import type { SocialPlatform } from "@/lib/types";
import { useLanguage } from "@/lib/i18n";
import { CURRENT_YEAR } from "@/lib/year";
import { contactInfo, comingSoon, navItems, org } from "@/content/site";
import Logo from "./Logo";
import SocialIcon, { socialLabels } from "./SocialIcon";

export default function Footer() {
  const { t } = useLanguage();

  const socials = (Object.keys(contactInfo.socials) as SocialPlatform[]).filter(
    (key) => contactInfo.socials[key] !== "",
  );

  return (
    <footer className="bg-navy-950 text-cream-200">
      <div className="mx-auto max-w-6xl px-6 pb-10 pt-16 sm:pt-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <Logo variant="cream" size={44} />
              <span className="font-display text-xl text-cream-50">
                {t(org.name)}
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream-200/80">
              {t(org.description)}
            </p>

            {/* Social links — rendered only when configured */}
            {socials.length > 0 ? (
              <ul className="mt-6 flex gap-3">
                {socials.map((key) => (
                  <li key={key}>
                    <a
                      href={contactInfo.socials[key]}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={socialLabels[key]}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream-50/20 text-cream-100 transition-colors hover:border-gold-400 hover:text-gold-300"
                    >
                      <SocialIcon platform={key} className="h-4 w-4" />
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-6 text-sm text-cream-200/60">
                {t({
                  am: "የማኅበራዊ ሚዲያ ገጾች በቅርቡ ይታያሉ።",
                  en: "Our social media pages will be listed here soon.",
                })}
              </p>
            )}
          </div>

          {/* Navigation */}
          <nav aria-label="Footer">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-cream-50">
              {t({ am: "ገጾች", en: "Pages" })}
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-gold-300"
                  >
                    {t(item.label)}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/get-involved#donate"
                  className="font-medium text-gold-300 transition-colors hover:text-gold-200"
                >
                  {t({ am: "ድጋፍ ያድርጉ", en: "Support Us" })}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-cream-50">
              {t({ am: "ያግኙን", en: "Contact" })}
            </h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden />
                {contactInfo.phone !== "" ? (
                  <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-gold-300">
                    {contactInfo.phone}
                  </a>
                ) : (
                  <span className="text-cream-200/60">{t(comingSoon)}</span>
                )}
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden />
                {contactInfo.email !== "" ? (
                  <a href={`mailto:${contactInfo.email}`} className="transition-colors hover:text-gold-300">
                    {contactInfo.email}
                  </a>
                ) : (
                  <span className="text-cream-200/60">{t(comingSoon)}</span>
                )}
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden />
                {contactInfo.address.am !== "" ? (
                  <span>{t(contactInfo.address)}</span>
                ) : (
                  <span className="text-cream-200/60">{t(comingSoon)}</span>
                )}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream-50/10 pt-8 text-xs text-cream-200/60 sm:flex-row">
          <p>
            © {CURRENT_YEAR} {t(org.name)} · {t({ am: "መብቱ በሕግ የተጠበቀ ነው", en: "All rights reserved" })}
          </p>
          <p className="font-medium text-cream-200/80">{t(org.tagline)}</p>
        </div>
      </div>
    </footer>
  );
}
