import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope, Noto_Sans_Ethiopic } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { org, siteUrl } from "@/content/site";

/* ── Fonts ────────────────────────────────────────────────────
   Fraunces (display) + Manrope (body) for Latin text.
   Noto Sans Ethiopic carries all Amharic text — it is part of
   every font stack in globals.css, so Amharic renders correctly
   in both display and body styles. */
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});
const notoEthiopic = Noto_Sans_Ethiopic({
  subsets: ["ethiopic"],
  variable: "--font-noto-ethiopic",
  display: "swap",
});

export const metadata: Metadata = {
  // ⚠️ PLACEHOLDER — update `siteUrl` in src/content/site.ts
  // when the real domain is known.
  metadataBase: new URL(siteUrl),
  title: {
    default: `${org.name.am} | ${org.name.en}`,
    template: `%s | ${org.name.am}`,
  },
  description: org.description.en,
  openGraph: {
    title: `${org.name.am} — ${org.name.en}`,
    description: org.description.en,
    type: "website",
    locale: "am_ET",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1600,
        height: 1000,
        alt: org.name.en,
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#0b2545",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="am"
      className={`${fraunces.variable} ${manrope.variable} ${notoEthiopic.variable}`}
    >
      <body className="bg-cream-50 font-sans text-navy-900 antialiased">
        <LanguageProvider>
          {/* Skip link for keyboard and screen-reader users */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-navy-900 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-cream-50"
          >
            {/* Amharic default; lang is updated by the provider */}
            ወደ ዋናው ይዘት ዝለሉ
          </a>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
