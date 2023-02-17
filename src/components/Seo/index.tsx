import { SITE_URL } from "@/config/seo";
import { NextSeo, NextSeoProps } from "next-seo";
import { useRouter } from "next/router";
import path from "path";
import { useTranslation } from "next-i18next";

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

export const Seo = ({ openGraph = {}, description: descriptionProp, ...props }: NextSeoProps) => {
  const { locales, locale, asPath } = useRouter();
  const { t } = useTranslation("home");

  const description = descriptionProp || t("description");

  const defaultHrefLang = {
    hrefLang: "x-default",
    href: generateUrl("en", asPath),
  };

  const languageAlternates =
    locales?.map((locale) => ({
      hrefLang: locale,
      href: generateUrl(locale, asPath),
    })) || [];

  const images = !openGraph.images && generateOgImages(locale, `NextGLabs - ${openGraph.title}` || "NextGLabs");
  return (
    <NextSeo
      description={description}
      languageAlternates={[...languageAlternates, defaultHrefLang]}
      openGraph={{ locale, images, ...openGraph }}
      {...props}
    />
  );
};
