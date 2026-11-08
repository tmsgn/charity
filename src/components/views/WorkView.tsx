"use client";

import Link from "next/link";
import { ArrowLeft, Info, Users } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import {
  participate,
  projects,
  workHero,
  workIntro,
  workNote,
} from "@/content/work";
import { activities } from "@/content/activities";
import ActivityCard from "@/components/ActivityCard";

export default function WorkView() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero title={workHero.title} subtitle={workHero.subtitle} />

      {/* ── How we work ──────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <h2 className="font-display text-3xl text-navy-900">
              {t(workIntro.title)}
            </h2>
            <p className="mt-5 text-base leading-loose text-navy-700">
              {t(workIntro.text)}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Projects ─────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-24" aria-labelledby="projects-title">
        <div className="mx-auto max-w-6xl px-6">
          <div
            id="projects"
            className="scroll-mt-28"
          >
            <div className="flex flex-col gap-4">
              <h2
                id="projects-title"
                className="font-display text-3xl text-navy-900 sm:text-4xl"
              >
                {t({ am: "የሥራ መስኮቻችን", en: "Areas of work" })}
              </h2>
              <p className="flex max-w-2xl items-start gap-2.5 text-sm text-navy-500">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" aria-hidden />
                {t(workNote)}
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <div key={project.slug} id={project.slug} className="scroll-mt-28">
                <Reveal delay={(i % 3) * 90}>
                  <ProjectCard {...project} href="/contact" />
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Activities archive ───────────────────────────── */}
      <section className="py-20 sm:py-24" aria-labelledby="activities-title">
        <div className="mx-auto max-w-6xl px-6">
          <div id="activities" className="scroll-mt-28">
            <h2
              id="activities-title"
              className="font-display text-3xl text-navy-900 sm:text-4xl"
            >
              {t({ am: "የእንቅስቃሴ ማህደር", en: "Activity archive" })}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-loose text-navy-700">
              {t({
                am: "እያንዳንዱ እንቅስቃሴ ሲከናወን እዚህ ይመዘገባል።",
                en: "Each activity is recorded here as it takes place.",
              })}
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {activities.map((activity, i) => (
              <Reveal key={i} delay={(i % 3) * 90}>
                <ActivityCard {...activity} href="/contact" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Participate ──────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-8 rounded-3xl border border-navy-100 bg-cream-50 p-8 sm:p-12 lg:flex-row lg:items-center">
              <div className="max-w-xl">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-900 text-gold-300">
                  <Users className="h-6 w-6" aria-hidden />
                </span>
                <h2 className="mt-5 font-display text-2xl text-navy-900 sm:text-3xl">
                  {t(participate.title)}
                </h2>
                <p className="mt-4 text-base leading-loose text-navy-700">
                  {t(participate.text)}
                </p>
              </div>
              <Link
                href={participate.cta.href}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-navy-900 px-8 py-4 text-sm font-semibold text-cream-50 transition-colors hover:bg-navy-800"
              >
                {t(participate.cta.label)}
                <ArrowLeft className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
