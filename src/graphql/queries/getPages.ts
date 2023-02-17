import { fetcher } from "@/config/swr";
import { gql } from "graphql-request";
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

interface GetPagesResponse {
  pages: Page[] | null;
}
export const getPages = async (): Promise<GetPagesResponse> => fetcher<GetPagesResponse>(GET_PAGES_QUERY);
