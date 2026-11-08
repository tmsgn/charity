"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Menu, X } from "lucide-react";
import { navItems, org, supportHref, supportLabel } from "@/content/site";
import { useLanguage } from "@/lib/i18n";
import Logo from "./Logo";

function LanguageSwitcher({ onDark }: { onDark: boolean }) {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language / ቋንቋ"
      className={`flex items-center rounded-full border p-0.5 text-xs font-semibold ${
        onDark
          ? "border-cream-50/30 text-cream-50"
          : "border-navy-200 text-navy-900"
      }`}
    >
      {(["am", "en"] as const).map((code) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            aria-pressed={active}
            className={`rounded-full px-2.5 py-1 transition-colors ${
              active
                ? "bg-gold-500 text-navy-950"
                : onDark
                  ? "hover:bg-cream-50/10"
                  : "hover:bg-navy-50"
            }`}
          >
            {code === "am" ? "አማ" : "EN"}
          </button>
        );
      })}
    </div>
  );
}

export default function Header() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastPath = useRef(pathname);

  // Track scroll position for the transparent → solid transition.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation.
  useEffect(() => {
    if (lastPath.current !== pathname) {
      lastPath.current = pathname;
      setMenuOpen(false);
    }
  }, [pathname]);

  // Close on Escape + lock body scroll while open.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "border-b border-navy-100 bg-cream-50/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label={t(org.name)}
        >
          <Logo variant={solid ? "navy" : "cream"} size={42} />
          <span
            className={`font-display text-lg leading-tight sm:text-xl ${
              solid ? "text-navy-900" : "text-cream-50"
            }`}
          >
            {t(org.name)}
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  solid
                    ? active
                      ? "bg-navy-50 text-navy-900"
                      : "text-navy-700 hover:bg-navy-50 hover:text-navy-900"
                    : active
                      ? "bg-cream-50/15 text-cream-50"
                      : "text-cream-100/90 hover:bg-cream-50/10 hover:text-cream-50"
                }`}
              >
                {t(item.label)}
              </Link>
            );
          })}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <LanguageSwitcher onDark={!solid} />
          </div>
          <Link
            href={supportHref}
            className="hidden items-center gap-2 rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-400 sm:inline-flex"
          >
            <Heart className="h-4 w-4" aria-hidden />
            {t(supportLabel)}
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors lg:hidden ${
              solid
                ? "text-navy-900 hover:bg-navy-50"
                : "text-cream-50 hover:bg-cream-50/10"
            }`}
          >
            {menuOpen ? (
              <X className="h-6 w-6" aria-hidden />
            ) : (
              <Menu className="h-6 w-6" aria-hidden />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        data-open={menuOpen}
        className={`menu-overlay fixed inset-0 top-0 z-40 lg:hidden ${
          menuOpen
            ? "pointer-events-auto visible"
            : "pointer-events-none invisible"
        }`}
      >
        <div className="flex h-full flex-col overflow-y-auto bg-navy-950 pt-28 pb-10">
          <nav aria-label="Mobile" className="px-8">
            <ul className="space-y-2">
              {navItems.map((item, i) => (
                <li
                  key={item.href}
                  className="menu-item"
                  style={{ transitionDelay: `${60 + i * 40}ms` }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    aria-current={
                      (item.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(item.href))
                        ? "page"
                        : undefined
                    }
                    className="block rounded-xl px-4 py-3.5 font-display text-2xl text-cream-50 transition-colors hover:bg-navy-900"
                  >
                    {t(item.label)}
                  </Link>
                </li>
              ))}
            </ul>

            <div
              className="menu-item mt-8 space-y-4"
              style={{ transitionDelay: "340ms" }}
            >
              <Link
                href={supportHref}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-4 text-base font-semibold text-navy-950 transition-colors hover:bg-gold-400"
              >
                <Heart className="h-5 w-5" aria-hidden />
                {t(supportLabel)}
              </Link>
              <div className="flex justify-center">
                <LanguageSwitcher onDark />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
