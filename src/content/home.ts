import type { LocalizedString } from "@/lib/types";

/* ─────────────────────────────────────────────────────────────
   HOMEPAGE COPY
   ───────────────────────────────────────────────────────────── */

export const hero = {
  // ⚠️ PLACEHOLDER — small line above the headline.
  eyebrow: {
    am: "የበጎ አድራጎት ማህበር · ኢትዮጵያ",
    en: "Charity Association · Ethiopia",
  } satisfies LocalizedString,

  // Main headline — the central message of the organization.
  headline: {
    am: "አንድ ትንሽ የመርዳት እጅ ትልቅ ለውጥ ይፈጥራል።",
    en: "Small acts of kindness create meaningful change.",
  } satisfies LocalizedString,

  subtitle: {
    am: "ኄር የበጎ አድራጎት ማህበር በማኅበረሰባችን ውስጥ ላሉ ወገኖች የተስፋ እጅ ለመሆን የተቋቋመ የበጎ አድራጎት ማኅበር ነው። አብረን በመሆን፣ በአንድነት በመርዳት ወደ ተስፋ እንሂድ።",
    en: "Kher Charity Association was founded to be a hand of hope for people in our community — moving forward together, one act of kindness at a time.",
  } satisfies LocalizedString,

  primaryCta: {
    label: { am: "ስለ እኛ ይወቁ", en: "Learn About Us" },
    href: "/about",
  },

  secondaryCta: {
    label: { am: "ድጋፍ ያድርጉ", en: "Support Our Work" },
    href: "/get-involved#donate",
  },
};

export const intro = {
  eyebrow: { am: "ማንነታችን", en: "Who we are" } satisfies LocalizedString,

  title: {
    am: "ከማኅበረሰቡ ልብ የመነገረ እንቅስቃሴ",
    en: "A movement born from the heart of the community",
  } satisfies LocalizedString,

  paragraphs: [
    {
      am: "ኄር የበጎ አድራጎት ማህበር የተመሠረተው አንድ አብሮነት ላይ የተመሠረተ እምነት ነው፦ የማኅበረሰቡ ችግርን በየትም ቦታ ከማስተማረያው ጋር ሆነው መልስ መስጠት ይቻላል። ወጣቶች፣ ቤተሰቦችና ልዩ አቅም ያላቸው አባሪዎች ተሰብስበው ለወገኖቻቸው መድረስ ይፈልጋሉ።",
      en: "Kher Charity Association is built on a simple belief: the challenges of a community are best answered by people who belong to it. Young people, families, and members from all walks of life come together to reach those who need a helping hand.",
    },
    {
      am: "እያንዳንዱ የሚያደርገው አነስተኛ እርምጃ ለአንድ ሰው የተስፋ መስተዋት ሊሆን ይችላል። ድርጅታችን ያለ ማንነት ለሁሉም በሚታይ ክፍት በሆነ መንገድ የጋራ ሥራ ለማድረግ ይጥራል።",
      en: "Every small act can become a turning point for one person. We keep our door open to everyone who wants to give, help, or take part — because change belongs to all of us.",
    },
  ] satisfies LocalizedString[],

  chips: [
    { am: "በማኅበረሰብ ላይ የተመሠረተ", en: "Community-rooted" },
    { am: "በታማኝነት", en: "Built on trust" },
    { am: "በአብሮነት", en: "Working together" },
  ] satisfies LocalizedString[],

  link: { label: { am: "ተጨማሪ ይወቁ", en: "More about us" }, href: "/about" },
};

export const missionVision = {
  eyebrow: { am: "አላማችን", en: "Our purpose" } satisfies LocalizedString,

  title: {
    am: "ተልዕኮችና ራዕያችን",
    en: "Mission & vision",
  } satisfies LocalizedString,

  // ⚠️ DRAFT STATEMENTS — to be confirmed / replaced by the
  // organization's officially approved mission and vision.
  mission: {
    label: { am: "ተልዕኮ", en: "Mission" },
    text: {
      am: "በማኅበረሰባችን ውስጥ ላሉ ወገኖች የኑሮ ሁኔታቸውን እንዲያሻሽሉ ድጋፍ ማድረግ፣ ትምህርትና ጤናን ማበረታታት፣ እንዲሁም የበጎ አድራጎት ልምድን ማስፋፋት የእኛ ተልዕኮ ነው።",
      en: "Our mission is to support people in our community to improve their living conditions, to promote education and health, and to spread the culture of giving.",
    },
  },

  vision: {
    label: { am: "ራእይ", en: "Vision" },
    text: {
      am: "ሁሉም ወገኖች በክብርና በተስፋ እንዲኖሩ፣ ደግነትን በዕለት ተዕለት የሚያሳይ ማኅበረሰብ መሆን ነው የምንመኘው።",
      en: "We envision a community where everyone lives with dignity and hope — and where kindness is part of everyday life.",
    },
  },
};

export const careAbout = {
  eyebrow: { am: "እሴቶችና ትኩረት", en: "What guides us" } satisfies LocalizedString,

  title: {
    am: "የምንቆምባቸው ሦስት ነገሮች",
    en: "Three things we stand for",
  } satisfies LocalizedString,

  items: [
    {
      title: { am: "ክብር", en: "Dignity" },
      text: {
        am: "እያንዳንዱ ሰው ክብሩን ጠብቆ እንዲረዳ እናስባለን። እርዳታ በሁኔታ መስጠት አይታወቅም፤ በአክብሮት ይሰጣል።",
        en: "Help should never come at the cost of a person's dignity. We give with respect, never with conditions.",
      },
    },
    {
      title: { am: "ተስፋ", en: "Hope" },
      text: {
        am: "ተስፋ ሰውን ይወጣል። የምንሠራው ለወደፊቱ የሚያስችል እርምጃ ሲያደርግ ነው።",
        en: "Hope lifts people up. Everything we do is a step toward a future someone can build on.",
      },
    },
    {
      title: { am: "ታማኝነት", en: "Trust" },
      text: {
        am: "በእጅጉ የተመሠከረውን ብቻ እንገለጻለን። ለአባሪዎችና ለደጋፊዎች ግልጽ ይሆናሉ የሚለው ቃላችን ነው።",
        en: "We only publish what is verified, and we promise openness to our members and supporters.",
      },
    },
  ] satisfies { title: LocalizedString; text: LocalizedString }[],

  // Honest note — shown instead of fabricated statistics.
  note: {
    am: "በተጨባጭ የሥራ ውጤቶችና ስታቲስቲክስ ሲገኙ እዚህ ገጽ ላይ ይታያሉ።",
    en: "Verified results and figures will be published here as they become available.",
  } satisfies LocalizedString,
};

export const workSection = {
  eyebrow: { am: "ሥራችን", en: "Our work" } satisfies LocalizedString,

  title: {
    am: "የምንተነባቸው የሥራ መስኮች",
    en: "Areas of our work",
  } satisfies LocalizedString,

  subtitle: {
    am: "እነዚህ የሥራ መስኮቻችን ናቸው። ዝርዝር ፕሮጀክቶች ሲዘጋጁ እዚህ ይጨምራሉ።",
    en: "These are the areas we focus on. Detailed projects will be added here as they are prepared.",
  } satisfies LocalizedString,

  link: { label: { am: "ሁሉንም ይመልከቱ", en: "View all our work" }, href: "/our-work" },
};

export const activitiesSection = {
  eyebrow: { am: "የቅርብ እንቅስቃሴ", en: "Recent activities" } satisfies LocalizedString,

  title: {
    am: "ያካሄድናቸው እንቅስቃሴዎች",
    en: "What we have been up to",
  } satisfies LocalizedString,

  link: { label: { am: "ሥራችንን ይመልከቱ", en: "See our work" }, href: "/our-work#activities" },

  readMore: { am: "ተጨማሪ ያለው", en: "Read more" } satisfies LocalizedString,
};

export const getInvolvedSection = {
  eyebrow: { am: "ይሳተፉ", en: "Get involved" } satisfies LocalizedString,

  title: {
    am: "አብረን ለለውጥ",
    en: "Change takes all of us",
  } satisfies LocalizedString,

  subtitle: {
    am: "በተለያዩ መንገዶች ማሰብ ይቻላል። የሚመችዎትን ይምረጡ።",
    en: "There are many ways to take part. Choose the one that fits you.",
  } satisfies LocalizedString,
};

export const finalCta = {
  title: {
    am: "ዛሬ የሚያደርጉት እርምጃ የአንደኛ ተስፋ ይሆናል።",
    en: "The step you take today becomes someone's hope tomorrow.",
  } satisfies LocalizedString,

  text: {
    am: "በጋራ ለመርዳት ይሁኑ። ትንሽ ቢሆንም አንድ ሰውን ሊያድን ይችላል።",
    en: "Join us in giving. Even something small can save someone's day — or their life.",
  } satisfies LocalizedString,

  primary: { label: { am: "ድጋፍ ያድርጉ", en: "Support us" }, href: "/get-involved#donate" },
  secondary: { label: { am: "አብረን እንሠራ", en: "Volunteer with us" }, href: "/get-involved#volunteer" },
};
