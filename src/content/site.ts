import type { LocalizedString, NavItem, SocialPlatform } from "@/lib/types";

/* ─────────────────────────────────────────────────────────────
   ORGANIZATION IDENTITY
   ───────────────────────────────────────────────────────────── */

export const org = {
  name: {
    am: "ኄር የበጎ አድራጎት ማህበር",
    en: "Kher Charity Association",
  } satisfies LocalizedString,

  /** Short form used in the header / compact spaces */
  shortName: { am: "ኄር", en: "Kher" } satisfies LocalizedString,

  // ⚠️ PLACEHOLDER — replace with the official tagline once chosen.
  tagline: {
    am: "ትንሽ የሩኅሩህነት እጆች ትልቅ ለውጥ ይፈጥራሉ",
    en: "Small acts of kindness create meaningful change",
  } satisfies LocalizedString,

  // ⚠️ PLACEHOLDER — short description used in the footer and metadata.
  description: {
    am: "ኄር የበጎ አድራጎት ማህበር በማኅበረሰባችን ውስጥ አብረን በመሆን ለወገኖቻችን የተስፋ እጅ ለመሆን የተቋቋመ የበጎ አድራጎት ማኅበር ነው።",
    en: "Kher Charity Association is a community-based charity, founded to be a hand of hope by working side by side with its community.",
  } satisfies LocalizedString,
};

/* ─────────────────────────────────────────────────────────────
   NAVIGATION
   ───────────────────────────────────────────────────────────── */

export const navItems: NavItem[] = [
  { href: "/", label: { am: "መግቢያ", en: "Home" } },
  { href: "/about", label: { am: "ስለ እኛ", en: "About Us" } },
  { href: "/our-work", label: { am: "ሥራችን", en: "Our Work" } },
  { href: "/gallery", label: { am: "ፎቶዎች", en: "Gallery" } },
  { href: "/get-involved", label: { am: "ይሳተፉ", en: "Get Involved" } },
  { href: "/contact", label: { am: "ያግኙን", en: "Contact" } },
];

/** Header call-to-action — leads to the donation section. */
export const supportHref = "/get-involved#donate";

export const supportLabel: LocalizedString = {
  am: "ድጋፍ ያድርጉ",
  en: "Support Us",
};

/* ─────────────────────────────────────────────────────────────
   CONTACT INFORMATION
   ⚠️ ALL VALUES BELOW ARE PLACEHOLDERS.
   Leave a value as "" and the site will render a tasteful
   "coming soon" state instead of fake information.
   ───────────────────────────────────────────────────────────── */

export const contactInfo = {
  /** e.g. "+251 911 234 567" */
  phone: "",

  /** e.g. "info@yourdomain.org" */
  email: "",

  /** e.g. { am: "አዲስ አበባ፣ ክ/ከተማ …", en: "Addis Ababa, Sub-city …" } */
  address: { am: "", en: "" } satisfies LocalizedString,

  /**
   * Social media — paste full URLs (e.g. "https://t.me/khercharity").
   * Empty platforms are hidden automatically.
   */
  socials: {
    facebook: "",
    telegram: "",
    instagram: "",
    linkedin: "",
  } satisfies Record<SocialPlatform, string>,
};

/** Shown wherever contact details have not been filled in yet. */
export const comingSoon: LocalizedString = {
  am: "በቅርቡ ይጠበቃል",
  en: "Coming soon",
};

/* ─────────────────────────────────────────────────────────────
   SITE / DEPLOYMENT
   ⚠️ PLACEHOLDER — replace with the real domain when deployed
   (used for SEO metadata and the sitemap).
   ───────────────────────────────────────────────────────────── */

export const siteUrl = "https://khercharity.org";
