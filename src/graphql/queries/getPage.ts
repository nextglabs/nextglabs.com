import { fetcher } from "@/config/swr";
import { gql } from "graphql-request";
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

interface GetPageResponse {
  page: Page | null;
}

export const getPage = async (slug: string | string[], locale: string): Promise<GetPageResponse> => {
  const data = await fetcher<GetPageResponse>(GET_PAGE_QUERY, {
    slug,
    locale,
  });

  return data;
};
