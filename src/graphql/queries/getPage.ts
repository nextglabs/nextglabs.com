import { gql } from "graphql-request";

export const GET_PAGE_QUERY = gql`
  query getPage($slug: String!) {
    page(where: { slug: $slug }) {
      id
      title
      content
      slug
    }
  }
`;
