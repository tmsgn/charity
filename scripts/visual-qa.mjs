/* eslint-disable */
/**
 * Visual QA driver (not part of the site build).
 * Screenshots every page at desktop + mobile widths, the open
 * mobile menu, the English locale, and the gallery lightbox.
 * Run: node scripts/visual-qa.mjs
 */
import puppeteer from "puppeteer-core";
import { mkdirSync, existsSync } from "node:fs";

const EDGE = [
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
].find((p) => existsSync(p));

const BASE = "http://localhost:3000";
const OUT = "qa-shots";
mkdirSync(OUT, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: EDGE,
  headless: true,
  args: ["--disable-gpu", "--hide-scrollbars"],
});

const PAGES = ["", "about", "our-work", "gallery", "get-involved", "contact"];

async function shoot(browser, { name, url, width, height, actions }) {
  const page = await browser.newPage();
  await page.setViewport({ width, height, deviceScaleFactor: 1 });
  await page.goto(BASE + url, { waitUntil: "networkidle0", timeout: 60000 });
  await new Promise((r) => setTimeout(r, 1200));
  if (actions) await actions(page);
  await page.screenshot({ path: `${OUT}/${name}.png` });
  const errors = await page.evaluate(() =>
    (window.__qaErrors || []).map((e) => String(e)),
  );
  await page.close();
  console.log(`OK ${name}`);
  if (errors.length) console.log(`  console errors: ${errors.join(" | ")}`);
}

// Collect console errors on every page load
const collector = await browser.newPage();
collector.on("console", (msg) => {
  if (msg.type() === "error") console.log(`CONSOLE[${collector.url()}]: ${msg.text()}`);
});
collector.on("pageerror", (err) => console.log(`PAGEERROR[${collector.url()}]: ${err.message}`));
await collector.close();

// Desktop full pages
for (const route of PAGES) {
  await shoot(browser, {
    name: `d-${route || "home"}`,
    url: `/${route}`,
    width: 1440,
    height: 2000,
  });
}

// English locale (via ?lang=en)
for (const route of ["", "about", "get-involved", "contact"]) {
  await shoot(browser, {
    name: `e-${route || "home"}`,
    url: `/${route}?lang=en`,
    width: 1440,
    height: 1400,
  });
}

// Mobile
for (const route of PAGES) {
  await shoot(browser, {
    name: `m-${route || "home"}`,
    url: `/${route}`,
    width: 390,
    height: 844,
  });
}

// Mobile menu open
await shoot(browser, {
  name: "m-menu",
  url: "/",
  width: 390,
  height: 844,
  actions: async (page) => {
    await page.click('button[aria-controls="mobile-menu"]');
    await new Promise((r) => setTimeout(r, 700));
  },
});

// Language switch click (Amharic → English via switcher)
await shoot(browser, {
  name: "d-lang-switch",
  url: "/",
  width: 1440,
  height: 1000,
  actions: async (page) => {
    await page.evaluate(() => {
      const en = [...document.querySelectorAll('button[aria-pressed="false"]')]
        .find((b) => b.textContent.trim() === "EN");
      if (en) en.click();
    });
    await new Promise((r) => setTimeout(r, 600));
  },
});

// Gallery lightbox
await shoot(browser, {
  name: "d-lightbox",
  url: "/gallery",
  width: 1440,
  height: 1400,
  actions: async (page) => {
    await page.evaluate(() => {
      const item = document.querySelector("div.columns button");
      if (item) item.click();
    });
    await new Promise((r) => setTimeout(r, 800));
  },
});

// Tablet
await shoot(browser, { name: "t-home", url: "/", width: 834, height: 1200 });
await shoot(browser, { name: "t-work", url: "/our-work", width: 834, height: 1200 });

await browser.close();
console.log("DONE");
