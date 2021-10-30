import { gql } from "graphql-request";

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
