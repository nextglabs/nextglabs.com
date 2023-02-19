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
    domains: ["media.graphcms.com", "media.graphassets.com"],
  },
  swcMinify: true,
});
