/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://nextglabs.com",
  generateRobotsTxt: true,
};

module.exports = config;
