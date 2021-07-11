import { GET_PROJECTS_QUERY } from "@/graphql/queries/getProjects";
import { Project } from "@/graphql/schema";
import { useSWR } from "@/hooks";

export const useProjects = () => useSWR<{ projects: Array<Project> }>(GET_PROJECTS_QUERY);
