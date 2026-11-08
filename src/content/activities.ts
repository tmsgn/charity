import type { LocalizedString } from "@/lib/types";

/* ─────────────────────────────────────────────────────────────
   RECENT ACTIVITIES
   ⚠️ The three entries below are SAMPLE entries so the homepage
   is complete before the association's real activities are
   documented. Replace them with real activities (title, date,
   photo, summary) as soon as they are available. Add or remove
   entries freely — the layout adapts.
   ───────────────────────────────────────────────────────────── */

export type Activity = {
  title: LocalizedString;
  date: LocalizedString;
  description: LocalizedString;
  image: string;
  imageAlt: LocalizedString;
};

export const activities: Activity[] = [
  {
    title: { am: "[የእንቅስቃሴ ርዕስ]", en: "[Activity title]" },
    date: { am: "[ቀን፣ ዓውደ]", en: "[Date]" },
    description: {
      am: "እዚህ ላይ የእንቅስቃሴው አጭር መግለጫ ይጻፋል — ማን ተሳተፈ፣ የት ተካሄደ፣ ምን ማድረግ ቻለ።",
      en: "A short summary of the activity goes here — who took part, where it happened, and what it achieved.",
    },
    image: "/images/donation-boxes.jpg",
    imageAlt: {
      am: "የድጋፍ ሳጥኖች (ናሙና ምስል)",
      en: "Donation boxes (sample image)",
    },
  },
  {
    title: { am: "[የእንቅስቃሴ ርዕስ]", en: "[Activity title]" },
    date: { am: "[ቀን፣ ዓውደ]", en: "[Date]" },
    description: {
      am: "እዚህ ላይ የእንቅስቃሴው አጭር መግለጫ ይጻፋል።",
      en: "A short summary of the activity goes here.",
    },
    image: "/images/community-event.jpg",
    imageAlt: {
      am: "የማኅበረሰብ እንቅስቃሴ (ናሙና ምስል)",
      en: "Community event (sample image)",
    },
  },
  {
    title: { am: "[የእንቅስቃሴ ርዕስ]", en: "[Activity title]" },
    date: { am: "[ቀን፣ ዓውደ]", en: "[Date]" },
    description: {
      am: "እዚህ ላይ የእንቅስቃሴው አጭር መግለጫ ይጻፋል።",
      en: "A short summary of the activity goes here.",
    },
    image: "/images/sorting-donations.jpg",
    imageAlt: {
      am: "ድጋፎችን የሚያዘጋጁ አስተዋጾች (ናሙና ምስል)",
      en: "Volunteers sorting donations (sample image)",
    },
  },
];
