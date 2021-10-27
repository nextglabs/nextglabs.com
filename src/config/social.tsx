import { FaMedium } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

export const SOCIAL = {
  // Github
  GITHUB_ACCOUNT_URL: "https://github.com/nextglabs",
  GITHUB_PORTFOLIO_URL: "https://github.com/nextglabs/nextglabs.com",

  // Medium
  MEDIUM_ACCOUNT_URL: "https://nextglabs.medium.com",

  // Email
  EMAIL: "contact@nextglabs.com",
};

export const HEADER_SOCIAL_ICONS = [
  { href: SOCIAL.MEDIUM_ACCOUNT_URL, "aria-label": "Medium Account", icon: <FaMedium />, isExternal: true },
  { href: SOCIAL.GITHUB_ACCOUNT_URL, "aria-label": "Github Account", icon: <FiGithub />, isExternal: true },
];
