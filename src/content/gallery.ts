import type { LocalizedString } from "@/lib/types";

/* ─────────────────────────────────────────────────────────────
   GALLERY
   ⚠️ All entries below are SAMPLE IMAGES. They are used only
   until the association's own photographs are available.
   Every item has `sample: true`, which shows a subtle "sample
   image" tag in the lightbox and the page banner. When you add
   real photos, set `sample: false`.
   ───────────────────────────────────────────────────────────── */

export const galleryHero = {
  title: { am: "ፎቶዎች", en: "Gallery" } satisfies LocalizedString,

  subtitle: {
    am: "የማኅበሩ እንቅስቃሴዎችና የማኅበረሰቡ ምስሎች።",
    en: "Moments from our activities and community life.",
  } satisfies LocalizedString,
};

export const galleryNotice: LocalizedString = {
  am: "ማሳሰቢያ፡ እስከ አሁን የተቀመጡት ምስሎች ናሙና ናቸው። የማኅበሩ እውነተኛ የእንቅስቃሴ ፎቶዎች ሲዘጋጁ ይተካሉ።",
  en: "Note: the images currently shown are samples. They will be replaced with the association's own photographs as they are collected.",
};

export type GalleryItem = {
  image: string;
  caption: LocalizedString;
  alt: LocalizedString;
  /** true → shows the "sample image" tag */
  sample: boolean;
};

export const galleryItems: GalleryItem[] = [
  {
    image: "/images/hero.jpg",
    caption: { am: "ደስታ የሚያስተምረው ትውልድ", en: "A generation that knows joy" },
    alt: { am: "ፈገግ የሚሉ ልጆች", en: "Children smiling together" },
    sample: true,
  },
  {
    image: "/images/donation-boxes.jpg",
    caption: { am: "የድጋፍ እቃዎች አመላለስ", en: "Relief supplies on the move" },
    alt: { am: "የድጋፍ ሳጥኖች", en: "Volunteers unloading donation boxes" },
    sample: true,
  },
  {
    image: "/images/students.jpg",
    caption: { am: "በአብሮነት መማር", en: "Learning together" },
    alt: { am: "ተማሪዎች እየተማሩ", en: "Students studying side by side" },
    sample: true,
  },
  {
    image: "/images/hands-together.jpg",
    caption: { am: "የእጆች አንድነት", en: "Hands joined together" },
    alt: { am: "የተገናኙ እጆች", en: "A circle of hands" },
    sample: true,
  },
  {
    image: "/images/sorting-donations.jpg",
    caption: { am: "የድጋፍ እቃዎች ማዘጋጀት", en: "Preparing donations" },
    alt: { am: "ድጋፎችን የሚያዘጋጁ አስተዋጾች", en: "Volunteers sorting donated goods" },
    sample: true,
  },
  {
    image: "/images/community-event.jpg",
    caption: { am: "የማኅበረሰብ እንቅስቃሴ", en: "A community day" },
    alt: { am: "አብረው የሚሠሩ አስተዋጾች", en: "Volunteers at an outdoor community event" },
    sample: true,
  },
  {
    image: "/images/care-support.jpg",
    caption: { am: "የእንክብካቤ እጅ", en: "A hand of care" },
    alt: { am: "ድጋፍ የሚደረግለት ወገን", en: "Volunteer offering water and support" },
    sample: true,
  },
  {
    image: "/images/children-hands.jpg",
    caption: { am: "የልጆች ደስታ", en: "Childhood joy" },
    alt: { am: "ደስተኛ ልጆች", en: "Happy children waving and smiling" },
    sample: true,
  },
  {
    image: "/images/volunteers-event.jpg",
    caption: { am: "አስተዋጾ በተግባር", en: "Volunteers in action" },
    alt: { am: "የመተዋጾ ልብስ ያለበት አስተዋጽኦ", en: "A volunteer wearing a team jersey at an event" },
    sample: true,
  },
  {
    image: "/images/community-group.jpg",
    caption: { am: "የጋራ ሥራ ቡድን", en: "The team together" },
    alt: { am: "አብረው የቆሙ ሰዎች", en: "A group of members sitting together" },
    sample: true,
  },
  {
    image: "/images/donate-hands.jpg",
    caption: { am: "እያንዳንዱ አስተዋጽኦ ይቆጠራል", en: "Every contribution counts" },
    alt: { am: "በእጅ የተያዙ ሙጃዎች", en: "Hands holding coins" },
    sample: true,
  },
  {
    image: "/images/library-learning.jpg",
    caption: { am: "የመማር እድል", en: "The chance to learn" },
    alt: { am: "በቤተ መጻሕፍት የሚማሩ ተማሪዎች", en: "Students working in a library" },
    sample: true,
  },
];
