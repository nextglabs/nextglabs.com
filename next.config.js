// @ts-check
const { i18n } = require("./next-i18next.config.js");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE_BUNDLE === "true",
});

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withBundleAnalyzer({
  i18n,
  images: {
    domains: ["media.graphcms.com", "media.graphassets.com", "https://eu-central-1.graphassets.com"],
    deviceSizes: [320, 480, 640, 750, 828, 992, 1080, 1200, 1440, 1920, 2048, 2560, 3840],
    minimumCacheTTL: 86400,
  },
  swcMinify: true,
});
