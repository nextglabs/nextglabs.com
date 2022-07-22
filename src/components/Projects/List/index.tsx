import { Text, Grid } from "@chakra-ui/react";
import { useProjects } from "@/hooks";
import { ProjectsListItem } from "./Item";
import { ProjectsListSkeleton } from "./Skeleton";
import { ProjectsListItemEmpty } from "./Item/Empty";

export const ProjectsList = () => {
  const { isLoading, data: { projects = [] } = {}, isError } = useProjects();
  if (isLoading) return <ProjectsListSkeleton />;
  if (isError)
    return (
      <Text fontSize="lg" variant="error">
        Sorry, something terrible happened and the projects could not be loaded... 😱
      </Text>
    );
  return (
    <Grid
      w="100%"
      justifyItems="center"
      alignItems="flex-start"
      rowGap="12"
      gap="4"
      templateColumns={["1fr", null, `repeat(${Math.min(projects.length + 1, 2)}, 1fr)`, `repeat(${Math.min(projects.length + 1, 3)}, 1fr)`]}
    >
      {projects.length && projects.map((item, index) => <ProjectsListItem key={index} order={index} data={item} />)}
      <ProjectsListItemEmpty order={projects.length} />
    </Grid>
  );
};
