/* eslint-disable react/display-name */
import { GetStaticPaths, GetStaticProps } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { Box, Center, Heading, Link, Text, VStack, HStack, LinkProps } from "@chakra-ui/react";
import { fetcher } from "@/config/swr";
import { GET_PAGES_QUERY } from "@/graphql/queries/getPages";
import { GET_PAGE_QUERY } from "@/graphql/queries/getPage";
import React from "react";
import { Memoji } from "@/components/Memoji";
import { SITE_URL } from "@/config/seo";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

const components = {
  h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Heading as="h2" size="md" my="12" textAlign="left" {...props}>
      <span className="underline">{children}</span>
    </Heading>
  ),
  h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Heading as="h3" size="sm" my="12" textAlign="left" {...props}>
      <span className="underline">{children}</span>
    </Heading>
  ),
  a: ({ children, href, ...props }: LinkProps) => (
    <Link href={href} variant="colored" isExternal {...props}>
      {children}
    </Link>
  ),
  p: Text,
  Text,
  HStack,
  VStack,
  Memoji,
};

interface IPage {
  id: string;
  slug: string;
  title: string;
  description?: string | null;
  content: string;
}

interface PageProps {
  page: Pick<IPage, "title" | "description"> & {
    content: MDXRemoteSerializeResult;
  };
}

export default function Page({ page }: PageProps) {
  const router = useRouter();
  const pageTitle = `${page.title} - NextGLabs`;
  const pageUrl = `${SITE_URL}${router.asPath}`;

  return (
    <>
      <NextSeo title={pageTitle} description={page?.description} canonical={pageUrl} openGraph={{ url: pageUrl, title: pageTitle }} />
      <Center>
        <Box px={0} maxW="container.md" textAlign="left">
          <Heading as="h1" size="xl" mb="8">
            <span className="underline">{page.title}</span>
          </Heading>
          <VStack spacing="8" alignItems="flex-start">
            <MDXRemote {...page.content} components={components} />
          </VStack>
        </Box>
      </Center>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { pages } = await fetcher(GET_PAGES_QUERY);
  return {
    paths: pages.map(({ slug }) => ({ params: { slug } })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  const data: { page: IPage | null } = await fetcher(GET_PAGE_QUERY, { slug });

  if (!data.page) return { notFound: true };

  const mdx = await serialize(data.page.content);

  return {
    props: {
      page: {
        content: mdx,
        title: data.page.title,
        description: data.page?.description || null,
      },
    },
  };
};
