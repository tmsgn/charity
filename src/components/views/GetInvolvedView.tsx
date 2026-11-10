"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Handshake,
  Heart,
  Info,
  Megaphone,
  UsersRound,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import {
  awareness,
  donate,
  involvedHero,
  partner,
  volunteer,
  involvedNote,
} from "@/content/get-involved";

export default function GetInvolvedView() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero title={involvedHero.title} subtitle={involvedHero.subtitle} />

      <div className="px-6 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl space-y-20">
          <Reveal>
            <p className="mx-auto flex max-w-3xl items-start gap-2.5 rounded-2xl border border-gold-200 bg-gold-50 p-4 text-sm leading-relaxed text-navy-800">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" aria-hidden />
              {t(involvedNote)}
            </p>
          </Reveal>

          {/* ── Volunteer ──────────────────────────────────── */}
          <section id={volunteer.id} className="scroll-mt-28" aria-labelledby="volunteer-title">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <Reveal>
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lift">
                  <Image
                    src={volunteer.image}
                    alt={t({
                      am: "አስተዋጾ በተግባር (ናሙና ምስል)",
                      en: "Volunteers in action (sample image)",
                    })}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={120}>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-900 text-gold-300">
                  <UsersRound className="h-6 w-6" aria-hidden />
                </span>
                <h2
                  id="volunteer-title"
                  className="mt-5 font-display text-3xl text-navy-900 sm:text-4xl"
                >
                  {t(volunteer.title)}
                </h2>
                <p className="mt-4 text-base leading-loose text-navy-700">
                  {t(volunteer.intro)}
                </p>
                <ol className="mt-8 space-y-4">
                  {volunteer.steps.map((step, i) => (
                    <li
                      key={i}
                      className="rounded-2xl border border-navy-100 bg-white p-5"
                    >
                      <h3 className="font-display text-lg text-navy-900">
                        {t(step.title)}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-navy-700">
                        {t(step.text)}
                      </p>
                    </li>
                  ))}
                </ol>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy-900 px-7 py-3.5 text-sm font-semibold text-cream-50 transition-colors hover:bg-navy-800"
                >
                  {t({ am: "በመልእክት ይጀምሩ", en: "Start with a message" })}
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </Reveal>
            </div>
          </section>

          {/* ── Donate ─────────────────────────────────────── */}
          <section id={donate.id} className="scroll-mt-28" aria-labelledby="donate-title">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <Reveal className="order-2 lg:order-1">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-900 text-gold-300">
                  <Heart className="h-6 w-6" aria-hidden />
                </span>
                <h2
                  id="donate-title"
                  className="mt-5 font-display text-3xl text-navy-900 sm:text-4xl"
                >
                  {t(donate.title)}
                </h2>
                <p className="mt-4 text-base leading-loose text-navy-700">
                  {t(donate.intro)}
                </p>

                <h3 className="mt-8 text-sm font-semibold text-navy-500">
                  {t(donate.waysLabel)}
                </h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {donate.ways.map((way, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 rounded-xl border border-navy-100 bg-white p-4 text-sm text-navy-800"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-gold-600"
                        aria-hidden
                      />
                      {t(way)}
                    </li>
                  ))}
                </ul>

                {/* ⚠️ Placeholder panel — no payment details invented */}
                <div className="mt-8 rounded-2xl border-2 border-dashed border-gold-400 bg-gold-50 p-6">
                  <p className="font-display text-lg text-navy-900">
                    {t(donate.placeholderTitle)}
                  </p>
                  <p className="mt-2 text-sm leading-loose text-navy-700">
                    {t(donate.placeholderText)}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-cream-50 transition-colors hover:bg-navy-800"
                  >
                    {t({ am: "ጥያቄ ያለዎት? ያግኙን", en: "Questions? Contact us" })}
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
              </Reveal>
              <Reveal delay={120} className="order-1 lg:order-2">
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lift">
                  <Image
                    src={donate.image}
                    alt={t({
                      am: "እጅ ውስጥ የተያዙ ሙጃዎች (ናሙና ምስል)",
                      en: "Hands holding coins (sample image)",
                    })}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </section>

          {/* ── Partner ────────────────────────────────────── */}
          <section id={partner.id} className="scroll-mt-28" aria-labelledby="partner-title">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <Reveal>
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lift">
                  <Image
                    src={partner.image}
                    alt={t({
                      am: "የሚተላለፉ እጆች (ናሙና ምስል)",
                      en: "Reaching hands (sample image)",
                    })}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={120}>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-900 text-gold-300">
                  <Handshake className="h-6 w-6" aria-hidden />
                </span>
                <h2
                  id="partner-title"
                  className="mt-5 font-display text-3xl text-navy-900 sm:text-4xl"
                >
                  {t(partner.title)}
                </h2>
                <p className="mt-4 text-base leading-loose text-navy-700">
                  {t(partner.intro)}
                </p>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy-900 px-7 py-3.5 text-sm font-semibold text-cream-50 transition-colors hover:bg-navy-800"
                >
                  {t({ am: "የመተባበር እድል ይወያሉ", en: "Discuss a collaboration" })}
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </Reveal>
            </div>
          </section>

          {/* ── Awareness ──────────────────────────────────── */}
          <section id={awareness.id} className="scroll-mt-28" aria-labelledby="awareness-title">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <Reveal className="order-2 lg:order-1">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-900 text-gold-300">
                  <Megaphone className="h-6 w-6" aria-hidden />
                </span>
                <h2
                  id="awareness-title"
                  className="mt-5 font-display text-3xl text-navy-900 sm:text-4xl"
                >
                  {t(awareness.title)}
                </h2>
                <p className="mt-4 text-base leading-loose text-navy-700">
                  {t(awareness.intro)}
                </p>
              </Reveal>
              <Reveal delay={120} className="order-1 lg:order-2">
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lift">
                  <Image
                    src={awareness.image}
                    alt={t({
                      am: "የመክፈያ ማህበር ሥልጠና (ናሙና ምስል)",
                      en: "A community session (sample image)",
                    })}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </section>
        </div>
      </div>

      <CTASection
        title={{
          am: "እናመሰግናለን — አብረን እንቀጥላለን",
          en: "Thank you — let's keep going together",
        }}
        text={{
          am: "የሚያስተዋጡበት መንገድ ማንኛውም ይሁን፣ አስተዋጽኦዎ ለአንድ ሰው የተስፋ እጅ ይሆናል።",
          en: "However you choose to take part, your contribution becomes a hand of hope for someone.",
        }}
        primary={{
          label: { am: "ድጋፍ ያድርጉ", en: "Support us" },
          href: "/get-involved#donate",
        }}
        secondary={{
          label: { am: "ያግኙን", en: "Contact us" },
          href: "/contact",
        }}
      />
    </>
  );
}
