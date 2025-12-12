import { Memoji } from "@/components/Memoji";
import { Seo } from "@/components/Seo";
import { Team } from "@/components/Team";
import { SITE_URL } from "@/config/seo";
import { getPage } from "@/graphql/queries/getPage";
import { getPages } from "@/graphql/queries/getPages";
import { Page as IPage } from "@/graphql/schema";
import { Layout } from "@/layout";
import {
  Box,
  Center,
  Heading,
  HStack,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { useRouter } from "next/router";
import React from "react";

const H2Component = (props: { children?: React.ReactNode }) => {
  const { children } = props;
  return (
    <Heading as="h2" size="lg" textAlign="left">
      <span className="underline">{children}</span>
    </Heading>
  );
};

const H3Component = (props: { children?: React.ReactNode }) => {
  const { children } = props;
  // @ts-ignore - TypeScript limitation with complex union types in Chakra UI
  return (
    <Heading as="h3" size="md" textAlign="left">
      <span className="underline">{children}</span>
    </Heading>
  );
};

const AComponent = (props: { children?: React.ReactNode; href?: string }) => {
  const { children, href } = props;
  return (
    <Link href={href} variant="colored" isExternal>
      {children}
    </Link>
  );
};

const components: Record<string, React.ComponentType<any>> = {
  h2: H2Component,
  h3: H3Component,
  a: AComponent,
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
  const {
    title: metaTitle,
    description: metaDescription,
    ogImage,
    noIndex,
  } = meta || {};

  const seoTitle = metaTitle || title;
  const images = ogImage
    ? (Array.isArray(ogImage) ? ogImage : [ogImage]).map((img) => ({
        url: img.url,
        width: img.width ?? undefined,
        height: img.height ?? undefined,
        alt: img.alt ?? undefined,
      }))
    : undefined;

  return (
    <Layout>
      <Seo
        title={seoTitle}
        description={metaDescription}
        canonical={pageUrl}
        openGraph={{
          url: pageUrl,
          title: seoTitle,
          images,
        }}
        noindex={noIndex ?? undefined}
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
  const paths: Array<{ params: { slug: string }; locale: string }> = [];
  
  if (locales && pages) {
    for (const locale of locales) {
      for (const page of pages) {
        const slug = page.slug;
        if (slug && typeof slug === "string") {
          paths.push({ params: { slug }, locale });
        }
      }
    }
  }

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
  locale,
}) => {
  const slug = params?.slug;
  
  if (!slug || typeof slug !== "string") {
    return { notFound: true };
  }

  let data = await getPage(slug, locale || "en");

  // Try to get the page in the base language
  if (!data.page) {
    data = await getPage(slug, "en");
    if (!data.page) return { notFound: true };
  }

  const body = data.page.body;
  if (!body || typeof body !== "string") {
    return { notFound: true };
  }

  const mdx = await serialize(body);

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
