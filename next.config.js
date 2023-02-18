// @ts-check
const { i18n } = require("./next-i18next.config.js");

/**
 * @type {import('next').NextConfig}
 **/
module.exports = {
  i18n,
  images: {
    domains: ["media.graphcms.com", "media.graphassets.com"],
  },
  swcMinify: true,
};
