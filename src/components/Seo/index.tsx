import { SITE_URL } from "@/config/seo";
import { NextSeo, NextSeoProps } from "next-seo";
import { useRouter } from "next/router";
import path from "path";

const generateUrl = (locale: string, slug: string) =>
  new URL(path.join(locale === "en" ? "" : locale, slug), process.env.NEXT_PUBLIC_SITE_URL).toString();

const generateOgImages = (locale: string, alt: string) => [
  {
    url: `${SITE_URL}/assets/images/og-image-${locale}.jpg`,
    width: 1200,
    height: 720,
    alt,
  },
];

export const Seo = ({ openGraph = {}, ...props }: NextSeoProps) => {
  const { locales, locale, asPath } = useRouter();

  const defaultHrefLang = {
    hrefLang: "x-default",
    href: generateUrl("en", asPath),
  };

  const languageAlternates =
    locales?.map((locale) => ({
      hrefLang: locale,
      href: generateUrl(locale, asPath),
    })) || [];

  const images = !openGraph.images && generateOgImages(locale, openGraph.title || "NextGLabs");
  return <NextSeo languageAlternates={[...languageAlternates, defaultHrefLang]} openGraph={{ locale, images, ...openGraph }} {...props} />;
};
