import { fetcher } from "@/config/fetcher";
import { gql } from "graphql-tag";
import { Page } from "../schema";

export const GET_PAGE_QUERY = gql`
  query getPage($slug: String!, $locale: Locale!) {
    page(where: { slug: $slug }, locales: [$locale]) {
      id
      title
      body
      slug
      locale
      meta {
        title
        description
        noIndex
        ogImage {
          url
          width
          height
          alt
        }
      }
    }
  }
`;

export const getPage = async (slug: string | string[], locale: string) => {
  const data = await fetcher<{ page: Page | null }>(GET_PAGE_QUERY, {
    slug,
    locale,
  });

  return data;
};
