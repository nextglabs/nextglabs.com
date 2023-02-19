import { fetcher } from "@/config/fetcher";
import { gql } from "graphql-tag";
import { Project } from "../schema";

export const GET_PROJECTS_QUERY = gql`
  query getProjects($locale: Locale!) {
    projects(orderBy: updatedAt_ASC, locales: [$locale]) {
      id
      title
      description
      locale

      liveUrl
      githubUrl

      frameworks
      languages
      libraries
      databases
      categories

      featuredImage {
        id
        url
        alt
        width
        height
      }

      updatedAt
    }
  }
`;

export const getProjects = async (locale: string) => fetcher<{ projects: Project[] | null }>(GET_PROJECTS_QUERY, { locale });
