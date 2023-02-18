import { fetcher } from "@/config/swr";
import { gql } from "graphql-request";
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

interface GetProjectsResponse {
  projects: Project[] | null;
}
export const getProjects = async (locale: string): Promise<GetProjectsResponse> => fetcher<GetProjectsResponse>(GET_PROJECTS_QUERY, { locale });
