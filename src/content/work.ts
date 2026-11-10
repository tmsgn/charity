import type { LocalizedString } from "@/lib/types";

/* ─────────────────────────────────────────────────────────────
   OUR WORK PAGE
   ⚠️ The projects below are FLEXIBLE PLACEHOLDER ENTRIES so the
   page is complete before real project details arrive. They are
   written as "areas of work" (intent), not as claimed completed
   programs. Replace or add entries freely — each is one object
   in the `projects` array.
   ───────────────────────────────────────────────────────────── */

export const workHero = {
  title: { am: "ሥራችን", en: "Our Work" } satisfies LocalizedString,

  subtitle: {
    am: "ኄር የበጎ አድራጎት ማህበር የሚሠራበት የሥራ መስኮችና አካሄዱ በዚህ ገጽ ላይ ተብራርቷል",
    en: "The areas we focus on and how our work takes shape are outlined on this page",
  } satisfies LocalizedString,
};

export const workIntro = {
  title: {
    am: "እንዴት እንሠራለን",
    en: "How we work",
  } satisfies LocalizedString,

  text: {
    am: "እያንዳንዱ እርምጃ ከማኅበረሰቡ አስፈላጊነት ይጀምራል። አባሪዎቻችን የሚያጋጥሙ ችግሮችን ያስተውላሉ፣ የማህበሩ አመራር ይመዘግባል፣ ከዚያም በአቅም ላይ የተመሠረተ እርምጃ ይወሰዳል። የሚከተሉት የሥራ መስኮች በአሁኑ ጊዜ ትኩረታችን የሆኑ ናቸው።",
    en: "Every activity begins with a real need observed in the community. Members identify the problem, the association records and plans a response, and action is taken within the capacity we have. The areas below are where our attention currently goes.",
  } satisfies LocalizedString,
};

export type ProjectStatus = "planned" | "ongoing" | "completed";

export type Project = {
  slug: string;
  title: LocalizedString;
  category: LocalizedString;
  description: LocalizedString;
  /** ⚠️ Editable placeholder status — update as projects progress. */
  status: ProjectStatus;
  image: string;
  imageAlt: LocalizedString;
};

export const statusLabels: Record<ProjectStatus, LocalizedString> = {
  planned: { am: "እየተዘጋጀ", en: "In preparation" },
  ongoing: { am: "በሂደት ላይ", en: "Ongoing" },
  completed: { am: "ተጠናቋል", en: "Completed" },
};

export const projects: Project[] = [
  {
    slug: "education-support",
    title: { am: "የትምህርት ድጋፍ", en: "Education Support" },
    category: { am: "ትምህርት", en: "Education" },
    description: {
      am: "ተማሪዎች ትምህርታቸውን እንዲቀጥሉ የመማሪያ መጽሐፍት፣ የትምህርት ዕቃዎችና ቅርብ ምክር ማድረስ ማህበሩ ሊሠራበት የሚፈልገው የሥራ መስክ ነው።",
      en: "Helping students stay in school — through learning materials, school supplies, and mentorship — is one of the areas the association intends to serve.",
    },
    status: "planned",
    image: "/images/library-learning.jpg",
    imageAlt: {
      am: "ተማሪዎች በአብሮነት የሚማሩበት ምስል (ናሙና ምስል)",
      en: "Students learning together (sample image)",
    },
  },
  {
    slug: "food-support",
    title: { am: "የምግብ ድጋፍ", en: "Food Support" },
    category: { am: "የኑሮ ድጋፍ", en: "Livelihood" },
    description: {
      am: "በችግር ውስጥ ላሉ ቤተሰቦች የምግብ ድጋፍ ማድረስ እንዲሁም በባህላዊ በዓላት ወቅት የመቻቻል ብቃት ለመስጠት እንቆመራለን።",
      en: "We aim to reach families facing hardship with food assistance, including during holidays when the need is felt most.",
    },
    status: "planned",
    image: "/images/sorting-donations.jpg",
    imageAlt: {
      am: "የድጋፍ እቃዎች የሚዘጋጁበት ምስል (ናሙና ምስል)",
      en: "Volunteers preparing relief supplies (sample image)",
    },
  },
  {
    slug: "health-care",
    title: { am: "ጤናና እንክብካቤ", en: "Health & Care" },
    category: { am: "ጤና", en: "Health" },
    description: {
      am: "ከድካም ብቸኛ የተለዩ አቅም ላላቸው ወገኖችና ሽርካ ለተያዙ ዜጎች የእንክብካቤ ድጋፍ ማድረስ ማህበሩ ትኩረት የሚሰጠው የሥራ መስክ ነው።",
      en: "Caring for elderly people and persons with disabilities in our community is a key area of attention for the association.",
    },
    status: "planned",
    image: "/images/care-support.jpg",
    imageAlt: {
      am: "ድጋፍ የሚደረግለት ወገን (ናሙና ምስል)",
      en: "A person receiving care and support (sample image)",
    },
  },
  {
    slug: "community-action",
    title: { am: "የማኅበረሰብ እርምጃ", en: "Community Action" },
    category: { am: "ማኅበረሰብ", en: "Community" },
    description: {
      am: "የአካባቢ ንጽጽት፣ የተሟላ ሰብሳቢነት እንቅስቃሴዎችና የወጣቶች አብሮነትን የሚያጠናክሩ ተግባራት ለማድረግ እንመማመራለን።",
      en: "Environmental clean-ups, community gatherings, and activities that strengthen youth participation are part of our planned action areas.",
    },
    status: "planned",
    image: "/images/community-event.jpg",
    imageAlt: {
      am: "የማኅበረሰብ እንቅስቃሴ (ናሙና ምስል)",
      en: "A community event in progress (sample image)",
    },
  },
  {
    slug: "emergency-relief",
    title: { am: "አስቸኳይ ድጋፍ", en: "Emergency Relief" },
    category: { am: "ድንገተኛ ሁኔታ", en: "Emergency" },
    description: {
      am: "በድንገተኛ ሁኔታ የተጠቁ ወገኖች ላይ በቅርብ ጊዜ የሚደረስ ድጋፍ ለማድረስ አቅም መገንባት የማህበሩ አመላካች ተግባር ነው።",
      en: "Building the capacity to respond quickly when sudden hardship hits a family or a neighborhood is one of our goals.",
    },
    status: "planned",
    image: "/images/donation-boxes.jpg",
    imageAlt: {
      am: "የድጋፍ ሳጥኖች የሚተላለፉበት ምስል (ናሙና ምስል)",
      en: "Relief boxes being handed over (sample image)",
    },
  },
  {
    slug: "awareness",
    title: { am: "የግብረገባል ግንዛቤ", en: "Awareness & Giving Culture" },
    category: { am: "ግንዛቤ", en: "Awareness" },
    description: {
      am: "የበጎ አድራጎት ልምድን ለማስፋፋት በትምህርት ቤቶችና በማኅበረሰብ ውስጥ የግንዛቤ ተግባራትን ለማድረግ እንተጋለን።",
      en: "We want to grow the culture of giving — through awareness activities in schools and across the community.",
    },
    status: "planned",
    image: "/images/students.jpg",
    imageAlt: {
      am: "ወጣቶች የሚማሩበት ምስል (ናሙና ምስል)",
      en: "Young people learning together (sample image)",
    },
  },
];

/** Small honest note shown near the project list. */
export const workNote: LocalizedString = {
  am: "የፕሮጀክቶች ዝርዝር የማህበሩ አመራር ሲያረጋግጥ ይዘምናል።",
  en: "The project list will be finalized once confirmed by the association's leadership.",
};

export const participate = {
  title: { am: "በሥራችን ውስጥ ይሳተፉ", en: "Take part in our work" } satisfies LocalizedString,

  text: {
    am: "ማንኛውም የሥራ መስክ የእጅ አቅምን፣ ሐሳብን ወይም የገንዘብ ድጋፍን ይፈልጋል። ለመሳተፍ ፈቃደኛ ከሆኑ ያግኙን።",
    en: "Every area of work needs hands, ideas, and material support. If you are willing to take part, get in touch.",
  } satisfies LocalizedString,

  cta: { label: { am: "ይሳተፉ", en: "Get involved" }, href: "/get-involved" },
};
