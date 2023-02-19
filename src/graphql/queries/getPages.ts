import { fetcher } from "@/config/fetcher";
import { gql } from "graphql-tag";
import { Page } from "../schema";

export const GET_PAGES_QUERY = gql`
  query getPages {
    pages(orderBy: updatedAt_ASC) {
      id
      title
      content
      slug
    }
  }
`;

export const getPages = async () => fetcher<{ pages: Page[] | null }>(GET_PAGES_QUERY);
