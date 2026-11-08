import type { LocalizedString } from "@/lib/types";

/* ─────────────────────────────────────────────────────────────
   CONTACT PAGE
   ───────────────────────────────────────────────────────────── */

export const contactHero = {
  title: { am: "ያግኙን", en: "Contact" } satisfies LocalizedString,

  subtitle: {
    am: "ጥያቄ፣ ምክር ወይም የመተባበር እድል ካለዎት — እንወያለን።",
    en: "Questions, ideas, or a wish to collaborate — we would love to hear from you.",
  } satisfies LocalizedString,
};

export const formLabels = {
  title: { am: "መልእክት ይላኩ", en: "Send us a message" } satisfies LocalizedString,

  name: { am: "ሙሉ ስም", en: "Full name" } satisfies LocalizedString,
  namePlaceholder: { am: "ስምዎን ይጻፉ", en: "Your name" } satisfies LocalizedString,

  email: { am: "ኢሜይል", en: "Email" } satisfies LocalizedString,
  emailPlaceholder: { am: "you@example.com", en: "you@example.com" } satisfies LocalizedString,

  subject: { am: "የመልእክት ይዘት", en: "Subject" } satisfies LocalizedString,
  subjectPlaceholder: {
    am: "ስለ ምን እንዴት ማግኘት እንደሚፈልጉ አጭር ጽሑፍ",
    en: "What is this about?",
  } satisfies LocalizedString,

  message: { am: "መልእክት", en: "Message" } satisfies LocalizedString,
  messagePlaceholder: {
    am: "መልእክትዎን እዚህ ይጻፉ…",
    en: "Write your message here…",
  } satisfies LocalizedString,

  submit: { am: "መልእክት ላክ", en: "Send message" } satisfies LocalizedString,
  submitting: { am: "በመላክ ላይ…", en: "Sending…" } satisfies LocalizedString,

  // Validation errors
  errors: {
    name: { am: "እባክዎ ስምዎን ይጻፉ።", en: "Please enter your name." } satisfies LocalizedString,
    email: { am: "እባክዎ ትክክለኛ ኢሜይል ያስገቡ።", en: "Please enter a valid email address." } satisfies LocalizedString,
    subject: { am: "እባክዎ የመልእክት ይዘት ይጻፉ።", en: "Please enter a subject." } satisfies LocalizedString,
    message: {
      am: "መልእክትዎ ቢያንስ አሥር ቃላት ይሁኑ።",
      en: "Please write a message of at least 10 characters.",
    } satisfies LocalizedString,
  },

  // Success state — only shown when a backend endpoint is
  // configured and accepts the message.
  successTitle: { am: "መልእክትዎ ደርሷል", en: "Message received" } satisfies LocalizedString,
  successText: {
    am: "እናመሰግናለን። በቅርቡ እንመልሳለን።",
    en: "Thank you for reaching out. We will get back to you soon.",
  } satisfies LocalizedString,

  // Error state
  errorTitle: { am: "መልእክትዎ አልተላከም", en: "Message not sent" } satisfies LocalizedString,
  errorText: {
    am: "የጡብ መልእክት ላክ ችግር አጋጥሟል። እባክዎ እንደገና ይሞክሩ።",
    en: "Something went wrong while sending. Please try again in a moment.",
  } satisfies LocalizedString,

  // Honest "not configured" state — shown when no backend
  // endpoint is set (NEXT_PUBLIC_CONTACT_FORM_ENDPOINT).
  unconfiguredTitle: {
    am: "የመልእክት ሥርዓቱ ገና አልተገናኘም",
    en: "The message system is not connected yet",
  } satisfies LocalizedString,
  unconfiguredText: {
    am: "የዚህ ጣቢያ የመልእክት ማስገቢያ አገልግሎት ገና አልተገናኘም። ስለዚህ መልእክትዎ አሁን ላይደረስ ይችላል። እባክዎ በሌላ መንገድ ያግኙን — አስተዋጽኦዎ ለእኛ አስፈላጊ ነው።",
    en: "This website's message service has not been connected yet, so your message may not reach us right now. Please reach us through other channels — we truly want to hear from you.",
  } satisfies LocalizedString,
};

export const contactNote: LocalizedString = {
  am: "ማሳሰቢያ፡ የመገኛ መረጃዎች እስኪዘመኑ በናሙና ይታያሉ።",
  en: "Note: contact details are shown as placeholders until the official information is published.",
};
