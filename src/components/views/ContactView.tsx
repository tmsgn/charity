"use client";

import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { contactHero, contactNote } from "@/content/contact";
import { comingSoon, contactInfo } from "@/content/site";

type CardProps = {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
};

function ContactCard({ icon: Icon, label, value, href }: CardProps) {
  const content = href ? (
    <a href={href} className="font-medium text-navy-900 transition-colors hover:text-gold-600">
      {value}
    </a>
  ) : (
    <span className="font-medium text-navy-400">{value}</span>
  );

  return (
    <div className="flex items-start gap-4 rounded-2xl border border-navy-100 bg-white p-6 shadow-soft">
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-gold-300">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-navy-500">
          {label}
        </p>
        <div className="mt-1 break-words text-sm sm:text-base">{content}</div>
      </div>
    </div>
  );
}

export default function ContactView() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero title={contactHero.title} subtitle={contactHero.subtitle} />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
            {/* Info column */}
            <Reveal>
              <h2 className="font-display text-2xl text-navy-900 sm:text-3xl">
                {t({ am: "የመገኛ መረጃ", en: "Reach us" })}
              </h2>
              <p className="mt-4 max-w-md text-base leading-loose text-navy-700">
                {t({
                  am: "ማኅበሩ ዋነኛ መገኛ መረጃዎች እዚህ ይታያሉ። ጥያቄ ካለዎት እንዳትመጡ እናውቃለን።",
                  en: "Our main contact points are listed here. Don't hesitate to reach out.",
                })}
              </p>

              <div className="mt-8 space-y-4">
                <ContactCard
                  icon={Phone}
                  label={t({ am: "ስልክ", en: "Phone" })}
                  value={contactInfo.phone || t(comingSoon)}
                  href={
                    contactInfo.phone
                      ? `tel:${contactInfo.phone.replace(/\s/g, "")}`
                      : undefined
                  }
                />
                <ContactCard
                  icon={Mail}
                  label={t({ am: "ኢሜይል", en: "Email" })}
                  value={contactInfo.email || t(comingSoon)}
                  href={
                    contactInfo.email ? `mailto:${contactInfo.email}` : undefined
                  }
                />
                <ContactCard
                  icon={MapPin}
                  label={t({ am: "አድራሻ", en: "Location" })}
                  value={
                    contactInfo.address.am
                      ? t(contactInfo.address)
                      : t(comingSoon)
                  }
                />
                <ContactCard
                  icon={Clock}
                  label={t({ am: "የሥራ ሰዓት", en: "Working hours" })}
                  value={t(comingSoon)}
                />
              </div>

              <p className="mt-6 flex max-w-md items-start gap-2.5 text-sm leading-relaxed text-navy-500">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" aria-hidden />
                {t(contactNote)}
              </p>
            </Reveal>

            {/* Form column */}
            <Reveal delay={120}>
              <div className="rounded-3xl border border-navy-100 bg-white p-7 shadow-soft sm:p-10">
                <h2 className="font-display text-2xl text-navy-900">
                  {t({
                    am: "መልእክት ይላኩ",
                    en: "Send a message",
                  })}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">
                  {t({
                    am: "መስኮቹን ይሙሉ — በቅርቡ እንመልሳለን።",
                    en: "Fill in the fields below and we will get back to you.",
                  })}
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
