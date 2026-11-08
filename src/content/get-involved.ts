import type { LocalizedString } from "@/lib/types";

/* ─────────────────────────────────────────────────────────────
   GET INVOLVED PAGE
   ⚠️ Donation details are intentionally empty placeholders.
   NEVER add bank accounts or payment methods until the
   association provides the official details.
   ───────────────────────────────────────────────────────────── */

export const involvedHero = {
  title: { am: "ይሳተፉ", en: "Get Involved" } satisfies LocalizedString,

  subtitle: {
    am: "በተለያዩ መንገዶች ለለውጡ አብረው ማሰብ ይቻላል። የሚመችዎትን መንገድ ይምረጡ።",
    en: "There is a place for everyone who wants to help. Choose the way that fits you.",
  } satisfies LocalizedString,
};

export type InvolvementStep = {
  title: LocalizedString;
  text: LocalizedString;
};

export const volunteer = {
  id: "volunteer",

  title: { am: "አስተዋጽኦ ይሁኑ", en: "Become a volunteer" } satisfies LocalizedString,

  intro: {
    am: "አስተዋጾ ማለት ትልቅ አቅም መኖር አያስፈልግም። ፈቃደኛ ልብና አብሮ ለመሠራት ፈቃድ እጅ ብቻ በቂ ነው።",
    en: "You do not need to be wealthy or famous to volunteer. A willing heart and a helping hand are enough.",
  } satisfies LocalizedString,

  image: "/images/volunteers-event.jpg",

  steps: [
    {
      title: { am: "1. ያግኙን", en: "1. Reach out" },
      text: {
        am: "መልክት ይላኩ ወይም በማኅበሩ አድራሻ ይጎብኙ።",
        en: "Send us a message through the contact page, or visit us in person.",
      },
    },
    {
      title: { am: "2. ያወሩ", en: "2. Talk with us" },
      text: {
        am: "መንገዳችሁን፣ አቅምዎንና ጊዜዎን አብረን እንወራለን።",
        en: "We talk about where your time, skills, and interests fit best.",
      },
    },
    {
      title: { am: "3. ይሠራሉ", en: "3. Join an activity" },
      text: {
        am: "ከመተዋጾ ጊዜው ሲደረስ አብረው ይሠራሉ።",
        en: "When the next activity comes up, you join the team on the ground.",
      },
    },
  ] satisfies InvolvementStep[],
};

export const donate = {
  id: "donate",

  title: { am: "ድጋፍ ያድርጉ", en: "Make a donation" } satisfies LocalizedString,

  intro: {
    am: "ድጋፍ የሚደረገው የማህበሩን የበጎ አድራጎት ሥራ ወደ ፊት ለማስቀጠል ነው። እያንዳንዱ አስተዋጽኦ በኃላፊነት ተያይዞ ለተባለው አላማ ይተዳደራል።",
    en: "Donations keep our charitable work moving. Every contribution is handled responsibly and used for its stated purpose.",
  } satisfies LocalizedString,

  image: "/images/donate-hands.jpg",

  // ⚠️ PLACEHOLDER PANEL — shown until the association provides
  // official donation channels (bank account, mobile money, etc.).
  placeholderTitle: {
    am: "የድጋፍ መንገዶች በቅርቡ ይፋ ይሆናሉ",
    en: "Donation channels will be published soon",
  } satisfies LocalizedString,

  placeholderText: {
    am: "የማህበሩ ኦፊሴላዊ የባንክ ሂሳብና ሌሎች የመክፈያ መንገዶች ከመጨረሻ ማረጋገጫ በኋላ እዚህ ይታተማሉ። እስከዚያው በዚህ ገጽ ላይ የሚታዩ መንገዶች የሉም — ማንኛውንም የድጋፍ ጥያቄ በእውቂያ ገጹ በኩል ያነጋግሩን።",
    en: "The association's official bank account and other payment channels will be listed here after final verification. Until then, no payment methods are shown on this page. For any donation inquiry, please reach us through the contact page.",
  } satisfies LocalizedString,

  waysLabel: { am: "ማስተዋወቅ ይችሉ የሚችሉት", en: "Your support can take the form of" } satisfies LocalizedString,

  ways: [
    { am: "የገንዘብ ድጋፍ", en: "Financial support" },
    { am: "የምግብ ወይም የልብስ አስተዋጽኦ", en: "Food or clothing contributions" },
    { am: "የትምህርት ዕቃዎች", en: "School supplies" },
    { am: "የባዕድ ዓይነት ሐሳብና አቅም", en: "Professional skills and expertise" },
  ] satisfies LocalizedString[],
};

export const partner = {
  id: "partner",

  title: { am: "አጋር ይሁኑ", en: "Become a partner" } satisfies LocalizedString,

  intro: {
    am: "ድርጅቶች፣ ንግዶችና ሌሎች ማኅበራዊ አካላት አብረው መሠራት የፕሮጀክቶቻችን አቅም ይጨምራል። የመተባበር እድል ካለዎት ደስ ይላል።",
    en: "Businesses, organizations, and community groups multiply what we can do. If you see a chance to collaborate, we would love to hear it.",
  } satisfies LocalizedString,

  image: "/images/reaching-hands.jpg",
};

export const awareness = {
  id: "awareness",

  title: { am: "የበጎ አድራጎቱን ያስተዋውቁ", en: "Spread the word" } satisfies LocalizedString,

  intro: {
    am: "ስለ እኛ የሚያውቁ ሰዎች መብዛት ብቻ የበጎ አድራጎቱን አቅም ይጨምራል። ታሪካችንን ለጓደኞችዎ፣ ለቤተሰብዎና በማኅበራዊ ሚዲያ ያስተዋውቁ።",
    en: "Simply knowing we exist makes the community stronger. Share our story with friends, family, and on social media.",
  } satisfies LocalizedString,

  image: "/images/meeting.jpg",
};

/** Small honest note shown on this page. */
export const involvedNote: LocalizedString = {
  am: "ማሳሰቢያ፡ የድጋፍ እና የባንክ መረጃዎች እስኪዘመኑ ናሙና የሆነ ጽሑፍ ላይ ሊያገኟቸው ይችላሉ።",
  en: "Note: contact and donation details are shown as placeholders until the official information is published.",
};
