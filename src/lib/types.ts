/**
 * Shared content types.
 *
 * Every piece of editorial text on the site is a `LocalizedString`
 * (Amharic + English). All copy lives in `src/content/*` so it can
 * be updated in one place without touching components.
 */
export type Locale = "am" | "en";

export type LocalizedString = {
  /** Amharic — the primary language of the site */
  am: string;
  /** English — secondary language */
  en: string;
};

export type NavItem = {
  href: string;
  label: LocalizedString;
};

export type SocialPlatform = "facebook" | "telegram" | "instagram" | "linkedin";
