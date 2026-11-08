"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Compass,
  Eye,
  HandHeart,
  Handshake,
  Heart,
  Info,
  Megaphone,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import ActivityCard from "@/components/ActivityCard";
import CTASection from "@/components/CTASection";
import {
  activitiesSection,
  careAbout,
  finalCta,
  getInvolvedSection,
  hero,
  intro,
  missionVision,
  workSection,
} from "@/content/home";
import { projects } from "@/content/work";
import { activities } from "@/content/activities";

const involvementCards = [
  {
    icon: HandHeart,
    title: { am: "አስተዋጽኦ ይሁኑ", en: "Volunteer" },
    href: "/get-involved#volunteer",
  },
  {
    icon: Heart,
    title: { am: "ድጋፍ ያድርጉ", en: "Donate" },
    href: "/get-involved#donate",
  },
  {
    icon: Handshake,
    title: { am: "አጋር ይሁኑ", en: "Partner" },
    href: "/get-involved#partner",
  },
  {
    icon: Megaphone,
    title: { am: "ያስተዋውቁ", en: "Spread awareness" },
    href: "/get-involved#awareness",
  },
];

export default function HomeView() {
  const { t } = useLanguage();

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative flex min-h-[92svh] items-center overflow-hidden bg-navy-950">
        <div className="hero-zoom absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt={t({
              am: "ፈገግ የሚሉ ልጆች",
              en: "Children smiling together",
            })}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-950/45 to-navy-950/85"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-navy-950/60 via-navy-950/20 to-transparent"
        />

        <div className="relative mx-auto w-full max-w-6xl px-6 pb-20 pt-36">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-300">
              {t(hero.eyebrow)}
            </p>
            <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.25] text-cream-50 sm:text-5xl lg:text-6xl">
              {t(hero.headline)}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream-100/90 sm:text-lg">
              {t(hero.subtitle)}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href={hero.primaryCta.href}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-8 py-4 text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-400"
              >
                {t(hero.primaryCta.label)}
                <ArrowLeft className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href={hero.secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cream-50/40 px-8 py-4 text-sm font-semibold text-cream-50 transition-colors hover:bg-cream-50/10"
              >
                {t(hero.secondaryCta.label)}
                <Heart className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Introduction ─────────────────────────────────── */}
      <section className="py-20 sm:py-28" aria-labelledby="intro-title">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2">
          <Reveal className="relative">
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lift">
                <Image
                  src="/images/children-hands.jpg"
                  alt={t({
                    am: "ደስተኛ ልጆች",
                    en: "Happy children waving",
                  })}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              {/* Overlapping accent photo + logo mark */}
              <div className="absolute -bottom-10 -right-4 hidden w-48 overflow-hidden rounded-2xl border-4 border-cream-50 shadow-lift sm:block lg:-right-8">
                <div className="relative aspect-square">
                  <Image
                    src="/images/hands-together.jpg"
                    alt={t({
                      am: "የተገናኙ እጆች",
                      en: "A circle of hands",
                    })}
                    fill
                    sizes="192px"
                    className="object-cover"
                  />
                </div>
              </div>
              {/* Logo arc accent */}
              <svg
                aria-hidden
                viewBox="0 0 200 200"
                className="absolute -left-8 -top-8 h-24 w-24 text-gold-500"
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
              </svg>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-600">
              {t(intro.eyebrow)}
            </p>
            <h2
              id="intro-title"
              className="mt-3 font-display text-3xl leading-snug text-navy-900 sm:text-4xl"
            >
              {t(intro.title)}
            </h2>
            {intro.paragraphs.map((paragraph, i) => (
              <p
                key={i}
                className="mt-5 text-base leading-loose text-navy-700"
              >
                {t(paragraph)}
              </p>
            ))}
            <ul className="mt-7 flex flex-wrap gap-2.5">
              {intro.chips.map((chip, i) => (
                <li
                  key={i}
                  className="rounded-full border border-navy-100 bg-white px-4 py-1.5 text-sm font-medium text-navy-800"
                >
                  {t(chip)}
                </li>
              ))}
            </ul>
            <Link
              href={intro.link.href}
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy-900 transition-colors hover:text-gold-600"
            >
              {t(intro.link.label)}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
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
              { icon: Compass, block: missionVision.mission },
              { icon: Eye, block: missionVision.vision },
            ].map(({ icon: Icon, block }, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="relative h-full overflow-hidden rounded-3xl border border-navy-100 bg-cream-50 p-8 sm:p-10">
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

      {/* ── Our work ─────────────────────────────────────── */}
      <section className="py-20 sm:py-28" aria-labelledby="work-title">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow={workSection.eyebrow}
              title={workSection.title}
              subtitle={workSection.subtitle}
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project, i) => (
              <Reveal key={project.slug} delay={i * 100}>
                <ProjectCard {...project} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Link
              href={workSection.link.href}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-navy-200 px-7 py-3.5 text-sm font-semibold text-navy-900 transition-colors hover:border-navy-900"
            >
              {t(workSection.link.label)}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── What we stand for (honest impact section) ───── */}
      <section className="bg-navy-950 py-20 sm:py-28" aria-labelledby="care-title">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow={careAbout.eyebrow}
              title={careAbout.title}
              tone="light"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {careAbout.items.map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="h-full rounded-3xl border border-cream-50/10 bg-navy-900/60 p-8">
                  <span className="font-display text-4xl text-gold-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-2xl text-cream-50">
                    {t(item.title)}
                  </h3>
                  <p className="mt-3 text-sm leading-loose text-cream-200/85">
                    {t(item.text)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <p className="mx-auto flex max-w-2xl items-start justify-center gap-2.5 text-center text-sm text-cream-200/70">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden />
              {t(careAbout.note)}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Recent activities ────────────────────────────── */}
      <section className="py-20 sm:py-28" aria-labelledby="activities-title">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow={activitiesSection.eyebrow}
              title={activitiesSection.title}
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {activities.slice(0, 3).map((activity, i) => (
              <Reveal key={i} delay={i * 100}>
                <ActivityCard {...activity} href="/our-work#activities" />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Link
              href={activitiesSection.link.href}
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 transition-colors hover:text-gold-600"
            >
              {t(activitiesSection.link.label)}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── Get involved ─────────────────────────────────── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow={getInvolvedSection.eyebrow}
              title={getInvolvedSection.title}
              subtitle={getInvolvedSection.subtitle}
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {involvementCards.map((card, i) => (
              <Reveal key={card.href} delay={i * 80}>
                <Link
                  href={card.href}
                  className="group flex h-full flex-col items-start rounded-2xl border border-navy-100 bg-cream-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold-300 hover:shadow-lift"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-900 text-gold-300 transition-colors group-hover:bg-gold-500 group-hover:text-navy-950">
                    <card.icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-display text-xl text-navy-900">
                    {t(card.title)}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700 transition-colors group-hover:text-gold-600">
                    {t({ am: "ዝርዝር", en: "Details" })}
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────── */}
      <CTASection
        title={finalCta.title}
        text={finalCta.text}
        primary={finalCta.primary}
        secondary={finalCta.secondary}
      />
    </>
  );
}
