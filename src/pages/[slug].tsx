import { Memoji } from "@/components/Memoji";
import { Seo } from "@/components/Seo";
import { Team } from "@/components/Team";
import { SITE_URL } from "@/config/seo";
import { getPage } from "@/graphql/queries/getPage";
import { getPages } from "@/graphql/queries/getPages";
import { Page as IPage } from "@/graphql/schema";
import { Layout } from "@/layout";
import { Box, Center, Heading, HStack, Link, LinkProps, Text, VStack } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { useRouter } from "next/router";
import React from "react";

const components = {
  h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Heading as="h2" size="lg" my="12" textAlign="left" {...props}>
      <span className="underline">{children}</span>
    </Heading>
  ),
  h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Heading as="h3" size="md" my="12" textAlign="left" {...props}>
      <span className="underline">{children}</span>
    </Heading>
  ),
  a: ({ children, href, ...props }: LinkProps) => (
    <Link href={href} variant="colored" isExternal {...props}>
      {children}
    </Link>
  ),
  p: Text,
  Team,
  Text,
  HStack,
  VStack,
  Memoji,
  Heading,
};

interface PageProps {
  page: IPage & { mdx: MDXRemoteSerializeResult };
}

export default function Pages({ page: { title, mdx, meta } }: PageProps) {
  const router = useRouter();
  const pageUrl = `${SITE_URL}${router.asPath}`;
  const { title: metaTitle, description: metaDescription, ogImage, noIndex } = meta || {};

  const seoTitle = metaTitle || title;
  return (
    <Layout>
      <Seo
        title={seoTitle}
        description={metaDescription}
        canonical={pageUrl}
        openGraph={{ url: pageUrl, title: seoTitle, images: ogImage && [ogImage] }}
        noindex={noIndex}
      />
      <Center>
        <Box px={0} maxW="container.lg" textAlign="left">
          <Heading as="h1" size="xl" mb="8">
            <span className="underline">{title}</span>
          </Heading>
          <VStack spacing="8" alignItems="flex-start">
            <MDXRemote {...mdx} components={components} />
          </VStack>
        </Box>
      </Center>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const { pages } = await getPages();

  // Get the paths we want to pre-render for every locale
  const paths = locales.flatMap((locale) => pages.map(({ slug }) => ({ params: { slug }, locale }))) || [];

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params: { slug }, locale }) => {
  let data = await getPage(slug, locale);

  // Try to get the page in the base language
  if (!data.page) {
    data = await getPage(slug, "en");
    if (!data.page) return { notFound: true };
  }

  const mdx = await serialize(data.page.body);

  return {
    props: {
      page: {
        ...data.page,
        mdx,
      },
      ...(await serverSideTranslations(locale || "en", ["common"])),
    },
  };
};
