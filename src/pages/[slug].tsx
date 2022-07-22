/* eslint-disable react/display-name */
import { GetStaticPaths, GetStaticProps } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { Box, Center, Heading, Link, Text, VStack, HStack, LinkProps } from "@chakra-ui/react";
import { fetcher } from "@/config/swr";
import { GET_PAGES_QUERY } from "@/graphql/queries/getPages";
import { GET_PAGE_QUERY } from "@/graphql/queries/getPage";
import React from "react";
import { Memoji } from "@/components/Memoji";

const components = {
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
  Text,
  HStack,
  VStack,
  Memoji,
};

interface IPage {
  id: string;
  slug: string;
  title: string;
  content: string;
}

export default function Page({ page }) {
  return (
    <Center>
      <Box px={0} maxW="container.md" textAlign="left">
        <Heading as="h2" size="xl" mb="8">
          <span className="underline">{page.title}</span>
        </Heading>
        <VStack spacing="8" alignItems="flex-start">
          <MDXRemote {...page.content} components={components} />
        </VStack>
      </Box>
    </Center>
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
      },
    },
  };
};
