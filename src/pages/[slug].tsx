import { Memoji } from "@/components/Memoji";
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
import { NextSeo } from "next-seo";
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
  page: Pick<IPage, "title"> & {
    content: MDXRemoteSerializeResult;
  };
}

export default function Pages({ page }: PageProps) {
  const router = useRouter();
  const pageTitle = `${page.title} - NextGLabs`;
  const pageUrl = `${SITE_URL}${router.asPath}`;

  return (
    <Layout>
      <NextSeo
        // TODO: Use Meta Title instead of page title
        title={pageTitle}
        // TODO: Add Meta Description
        // description={page?.description}
        canonical={pageUrl}
        openGraph={{ url: pageUrl, title: pageTitle }}
      />
      <Center>
        <Box px={0} maxW="container.lg" textAlign="left">
          <Heading as="h1" size="xl" mb="8">
            <span className="underline">{page.title}</span>
          </Heading>
          <VStack spacing="8" alignItems="flex-start">
            <MDXRemote {...page.content} components={components} />
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

  const mdx = await serialize(data.page.content);

  return {
    props: {
      page: {
        content: mdx,
        title: data.page.title,
        // description: data.page?.description || null,
      },
      ...(await serverSideTranslations(locale || "en", ["common"])),
    },
  };
};
