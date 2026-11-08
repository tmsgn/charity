"use client";

import Image from "next/image";
import { BadgeCheck, ShieldCheck, UserRound } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { aboutHero, missionVision, story, team, transparency, values } from "@/content/about";

export default function AboutView() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        title={aboutHero.title}
        subtitle={aboutHero.subtitle}
        eyebrow={{ am: "ኄር የበጎ አድራጎት ማህበር", en: "Kher Charity Association" }}
      />

      {/* ── Story ────────────────────────────────────────── */}
      <section className="py-20 sm:py-28" aria-labelledby="story-title">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-600">
              {t(story.eyebrow)}
            </p>
            <h2
              id="story-title"
              className="mt-3 font-display text-3xl leading-snug text-navy-900 sm:text-4xl"
            >
              {t(story.title)}
            </h2>
            {story.paragraphs.map((paragraph, i) => (
              <p key={i} className="mt-5 text-base leading-loose text-navy-700">
                {t(paragraph)}
              </p>
            ))}
            <p className="mt-8 inline-flex items-baseline gap-3 rounded-2xl border border-navy-100 bg-white px-6 py-4">
              <span className="text-sm font-medium text-navy-500">
                {t(story.foundedLabel)}
              </span>
              <span className="font-display text-2xl text-navy-900">
                {story.foundedValue}
              </span>
            </p>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-lift sm:aspect-[4/3] lg:aspect-[4/5]">
              <Image
                src="/images/community-group.jpg"
                alt={t({
                  am: "አብረው የቆሙ አባሪዎች (ናሙና ምስል)",
                  en: "Members sitting together (sample image)",
                })}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <svg
              aria-hidden
              viewBox="0 0 200 200"
              className="absolute -bottom-8 -left-8 h-28 w-28 text-gold-500"
              fill="none"
            >
              <circle
                cx="100"
                cy="100"
                r="80"
                stroke="currentColor"
                strokeWidth="16"
                strokeLinecap="round"
              />
              <circle cx="44" cy="60" r="14" fill="currentColor" />
            </svg>
          </Reveal>
        </div>
      </section>

      {/* ── Mission & vision ─────────────────────────────── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow={missionVision.eyebrow}
              title={missionVision.title}
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              { icon: BadgeCheck, block: missionVision.mission },
              { icon: ShieldCheck, block: missionVision.vision },
            ].map(({ icon: Icon, block }, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="h-full rounded-3xl border border-navy-100 bg-cream-50 p-8 sm:p-10">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-900 text-gold-300">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="mt-6 font-display text-2xl text-navy-900">
                    {t(block.label)}
                  </h3>
                  <p className="mt-4 text-base leading-loose text-navy-700">
                    {t(block.text)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────── */}
      <section className="py-20 sm:py-28" aria-labelledby="values-title">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading eyebrow={values.eyebrow} title={values.title} />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.items.map((value, i) => (
              <Reveal key={i} delay={(i % 3) * 90}>
                <div className="h-full rounded-2xl border border-navy-100 bg-white p-7 shadow-soft">
                  <h3 className="font-display text-xl text-navy-900">
                    {t(value.title)}
                  </h3>
                  <p className="mt-3 text-sm leading-loose text-navy-700">
                    {t(value.text)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ─────────────────────────────────────────── */}
      <section className="bg-white py-20 sm:py-28" aria-labelledby="team-title">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow={team.eyebrow}
              title={team.title}
              subtitle={team.subtitle}
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.members.map((member, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="flex h-full flex-col items-center rounded-2xl border border-navy-100 bg-cream-50 p-8 text-center">
                  {member.photo !== "" ? (
                    <div className="relative h-20 w-20 overflow-hidden rounded-full">
                      <Image
                        src={member.photo}
                        alt={t(member.name)}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <span className="flex h-20 w-20 items-center justify-center rounded-full bg-navy-900 font-display text-2xl text-gold-300">
                      {member.initial}
                    </span>
                  )}
                  <h3 className="mt-5 font-display text-lg text-navy-900">
                    {t(member.name)}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-gold-600">
                    {t(member.role)}
                  </p>
                  {member.bio.en !== "" ? (
                    <p className="mt-3 text-sm leading-relaxed text-navy-700">
                      {t(member.bio)}
                    </p>
                  ) : (
                    <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-navy-400">
                      <UserRound className="h-3.5 w-3.5" aria-hidden />
                      {t({ am: "መግለጫ በቅርቡ", en: "Bio coming soon" })}
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Transparency ─────────────────────────────────── */}
      <section className="bg-navy-950 py-20 sm:py-28" aria-labelledby="transparency-title">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <SectionHeading
              eyebrow={transparency.eyebrow}
              title={transparency.title}
              tone="light"
              align="left"
            />
            <p className="mt-6 max-w-md text-base leading-loose text-cream-200/85">
              {t(transparency.text)}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <ul className="space-y-4">
              {transparency.commitments.map((commitment, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 rounded-2xl border border-cream-50/10 bg-navy-900/60 p-5"
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-gold-300">
                    <BadgeCheck className="h-4 w-4" aria-hidden />
                  </span>
                  <p className="text-sm leading-loose text-cream-100">
                    {t(commitment)}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
