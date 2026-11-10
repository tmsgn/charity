import type { LocalizedString } from "@/lib/types";

/* ─────────────────────────────────────────────────────────────
   ABOUT US PAGE
   ⚠️ No facts are invented here. Anything not yet confirmed by
   the organization is marked as a placeholder.
   ───────────────────────────────────────────────────────────── */

export const aboutHero = {
  title: { am: "ስለ እኛ", en: "About Us" } satisfies LocalizedString,

  subtitle: {
    am: "ኄር የበጎ አድራጎት ማህበር የተመሠረተው አንድ ማኅበረሰብ ለራሱ በሚሠራ ታማኝ እጅ ነው",
    en: "Kher Charity Association exists because a community can lift itself when its people stand together",
  } satisfies LocalizedString,
};

export const story = {
  eyebrow: { am: "የእኛ ታሪክ", en: "Our story" } satisfies LocalizedString,

  title: {
    am: "ለለውጥ የቆሙ ሰዎች አንድነት",
    en: "Ordinary people, united by purpose",
  } satisfies LocalizedString,

  paragraphs: [
    {
      am: "ኄር የበጎ አድራጎት ማህበር የተመሠረተው በማኅበረሰባችን ውስጥ ያሉ ችግሮች እንደየታየባቸው ብቻ በማለፍ አይታወቁም የሚል እምነት ያላቸው ሰዎች አንድ ሆነው እንቀጥላለን ስለተባሉ ነው። ማኅበሩ አሁንም ትንሽ ቢሆንም አስተሳሰቡ ትልቅ ነው፦ ትንሽ የመርዳት እጆች በጋራ ሲሰበሰቡ ትልቅ ለውጥ ያመጣሉ።",
      en: "Kher Charity Association began when a few people decided that the problems around them could not simply be walked past. The association is still small — but its ambition is not: small hands, joined together, can create meaningful change.",
    },
    {
      am: "ማኅበሩ ሥራውን የጀምረው በማኅበረሰቡ ውስጥ ነው። የእያንዳንዱ እርምጃ መሠረት የሆነው የወገኖችን አስፈላጊነት በአካባቢው ያየው አባሪዎች የተገኘ ነው። እስከ አሁን የተከናወኑ ሥራዎችን ዝርዝር ለማወቅ እኛ ራሳችንም እንጠቀማለን — መረጃው ሲዘጋጅ በዚህ ገጽ ላይ ይገለጻል።",
      en: "Our work starts from within the community: members who see a need first, respond first. As our record of activities is compiled and verified, it will be published on this page.",
    },
  ] satisfies LocalizedString[],

  // ⚠️ PLACEHOLDER — replace "20XX" with the actual founding year.
  foundedLabel: { am: "የተመሠረበው", en: "Founded" } satisfies LocalizedString,
  foundedValue: "20XX",
};

export const missionVision = {
  eyebrow: { am: "አላማችን", en: "Our purpose" } satisfies LocalizedString,

  title: {
    am: "ተልዕኮና ራእይ",
    en: "Mission & vision",
  } satisfies LocalizedString,

  // ⚠️ DRAFT STATEMENTS — to be confirmed by the organization.
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

export const values = {
  eyebrow: { am: "ዋና እሴቶች", en: "Core values" } satisfies LocalizedString,

  title: {
    am: "ሥራችንን የሚመራባቸው እሴቶች",
    en: "The values that guide our work",
  } satisfies LocalizedString,

  // ⚠️ DRAFT VALUES — adjust once the association finalizes them.
  items: [
    {
      title: { am: "ሩኅሩህነት", en: "Compassion" },
      text: {
        am: "የወገን ስቃይ ላይ ፈገግ ማለት የለም። የመጀመሪያ የምናዳርገው እጅ የመጀመሪያ የምንሰገው ልብ ነው።",
        en: "We let compassion lead. Before plans and programs, we first choose to care.",
      },
    },
    {
      title: { am: "ክብር", en: "Dignity" },
      text: {
        am: "እርዳታ የሚሰጠው በአክብሮት ነው ብቻ። አንድም ሰው ለእርዳታ ሲደረስ ክብሩ ሊንከፍ አይገባም።",
        en: "Help is given with respect. No one should have to trade their dignity to receive support.",
      },
    },
    {
      title: { am: "አብሮነት", en: "Togetherness" },
      text: {
        am: "የማህበሩ አባሪዎች፣ ወጣቶችና ደጋፊዎች የሚሠሩት በአንድነት ነው። ለውጥ ሁልጊዜም የጋራ ፍሬ ነው።",
        en: "Members, volunteers, and supporters work as one. Change is always a shared harvest.",
      },
    },
    {
      title: { am: "ታማኝነት", en: "Integrity" },
      text: {
        am: "ቃል የገባን ቃል እንጠብቃለን። ያልተረጋገጠ ነገር አንገልጽም፤ ያልታየ እርምጃ እንደተከናወነ አንነግርም።",
        en: "We keep our word. We never publish what is unverified, and never claim work that has not happened.",
      },
    },
    {
      title: { am: "ኃላፊነት", en: "Responsibility" },
      text: {
        am: "የተመዘገበውን ገንዘብና አስተዋጽኦ በኃላፊነት እናስተናግዳለን። እያንዳንዱ እርምጃ ለማንነቱ መረጃ አለው።",
        en: "Every contribution is handled with care. Every activity is recorded and answerable.",
      },
    },
    {
      title: { am: "ፍትሐዊነት", en: "Fairness" },
      text: {
        am: "ድጋፍ የሚደረሰው በአካባቢው የቀረውን እንደ አስፈላጊነቱ ነው። ብልጫ የለውም፤ አንድም ሰው ተወያይቷል አይባልም።",
        en: "Support reaches people based on need — never on favoritism or connections.",
      },
    },
  ] satisfies { title: LocalizedString; text: LocalizedString }[],
};

export const team = {
  eyebrow: { am: "አመራር", en: "Leadership" } satisfies LocalizedString,

  title: {
    am: "የማኅበሩ አመራርና አባሪዎች",
    en: "Leadership & members",
  } satisfies LocalizedString,

  subtitle: {
    am: "የማኅበሩ አመራር አባሪዎች ዝርዝር ሲዘጋጅ እዚህ ይታያሉ።",
    en: "Details of the association's leadership will be listed here once confirmed.",
  } satisfies LocalizedString,

  // ⚠️ PLACEHOLDERS — replace names, roles, and bios with real
  // information. Set `photo` to a path in /public/images when
  // real portraits are available ("" shows the initial avatar).
  members: [
    {
      name: { am: "[ስም]", en: "[Name]" },
      role: { am: "ሥራ አስፈጻሚ ዳይሬክተር", en: "Executive Director" },
      bio: { am: "", en: "" },
      photo: "",
      initial: "ኄ",
    },
    {
      name: { am: "[ስም]", en: "[Name]" },
      role: { am: "የፕሮግራም አስተባባሪ", en: "Programs Coordinator" },
      bio: { am: "", en: "" },
      photo: "",
      initial: "ኄ",
    },
    {
      name: { am: "[ስም]", en: "[Name]" },
      role: { am: "የፋይናንስ ኦፊሰር", en: "Finance Officer" },
      bio: { am: "", en: "" },
      photo: "",
      initial: "ኄ",
    },
    {
      name: { am: "[ስም]", en: "[Name]" },
      role: { am: "የኮሙኒኬሽን አስተባባሪ", en: "Communications Coordinator" },
      bio: { am: "", en: "" },
      photo: "",
      initial: "ኄ",
    },
  ],
};

export const transparency = {
  eyebrow: { am: "ግልጽነት", en: "Transparency" } satisfies LocalizedString,

  title: {
    am: "ለማኅበረሰባችን የሚታየው ቃላችን",
    en: "Our commitment to transparency",
  } satisfies LocalizedString,

  text: {
    am: "እያንዳንዱ የበጎ አድራጎት አካል በታማኝነት መሠራት አለበት። ማኅበራችን የሚከተሉትን ቃል ገብቷል፦",
    en: "Charity work must always be done in good faith. As an association, we commit to the following:",
  } satisfies LocalizedString,

  commitments: [
    {
      am: "ገቢዎችንና ወጪዎችን በግልጽና በትክክል መያዝ።",
      en: "Keeping clear and accurate records of income and spending.",
    },
    {
      am: "ለአባሪዎችና ለደጋፊዎች በየጊዜው የሥራ ሪፖርት መስጠት።",
      en: "Reporting our activities regularly to members and supporters.",
    },
    {
      am: "ያልተረጋገጠ መረጃ ወይም ስታቲስቲክስ በዚህ ጣቢያ አለመጫን።",
      en: "Never publishing unverified information or statistics on this website.",
    },
    {
      am: "የማኅበሩ ገንዘብ ለደጋፊዎች ያልተጠቀሙበት የሥራ ለመተዳደር ብቻ መጠቀም።",
      en: "Using the association's funds only for its stated charitable purposes.",
    },
    {
      am: "በማኅበረሰቡ ፊት በክብር መቆም።",
      en: "Standing accountable to the community we serve.",
    },
  ] satisfies LocalizedString[],
};
