// @ts-check
const { i18n } = require("./next-i18next.config.js");

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://nextglabs.com";

/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  priority: 1,
  changefreq: "monthly",
  alternateRefs: [
    {
      href: SITE_URL,
      hreflang: "en",
    },
    {
      href: new URL("de", SITE_URL).href,
      hreflang: "de",
    },
  ],
  exclude: ["*404"],
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs:
        config.alternateRefs?.map((alternate) => {
          // Ex: try to find '/en/'
          const hasPathLocale = i18n.locales.indexOf(path.substring(1, 3)) !== -1;
          //  Only fix alternateRefs if path has a locale
          return hasPathLocale
            ? {
                ...alternate,
                // Note: concat original alternate with  '/en/my-page' => my-page
                href: new URL(path.substring(4), alternate.href).href,
                hrefIsAbsolute: true,
              }
            : alternate;
        }) ?? [],
    };
  },
};

module.exports = config;
