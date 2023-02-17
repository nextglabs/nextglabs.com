import { fetcher } from "@/config/swr";
import { gql } from "graphql-request";
import { Project } from "../schema";

export const GET_PROJECTS_QUERY = gql`
  query getProjects {
    projects(orderBy: updatedAt_ASC) {
      id
      title
      description

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
      }

      updatedAt
    }
  }
`;

interface GetProjectsResponse {
  projects: Project[] | null;
}
export const getProjects = async (): Promise<GetProjectsResponse> => fetcher<GetProjectsResponse>(GET_PROJECTS_QUERY);
