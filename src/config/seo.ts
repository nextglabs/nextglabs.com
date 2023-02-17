import { DefaultSeoProps } from "next-seo";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://nextglabs.com";
const title = "Professional Web Design, Development & IT Consulting";
const site_name = "NextGLabs";
const description =
  "Experience the future of web design. Our next-generation solutions will help you transform your online presence and stand out from the competition.";

export const configSEO: DefaultSeoProps = {
  title,
  titleTemplate: "NextGLabs | %s",
  description,
  canonical: SITE_URL,
  openGraph: {
    url: SITE_URL,
    site_name,
    type: "website",
    title,
    locale: "en",
    description,
    images: [
      {
        url: `${SITE_URL}/assets/images/og-image-en.jpg`,
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
};
