import { DefaultSeoProps } from "next-seo";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "";
const title = "NextGLabs – Web Design & Software Engineering";
const site_name = "NextGLabs - Bassem Allani";
const description = "FullStack software engineer who loves to design and create innovative web solutions.";

export const configSEO: DefaultSeoProps = {
  title,
  description,
  canonical: SITE_URL,
  openGraph: {
    url: SITE_URL,
    site_name,
    type: "website",
    title,
    locale: "en-US",
    description,
    images: [
      {
        url: `${SITE_URL}/assets/images/og-banner.jpg`,
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
  twitter: {
    site: "@nextglabs",
    handle: "@nextglabs",
    cardType: "summary_large_image",
  },
};
