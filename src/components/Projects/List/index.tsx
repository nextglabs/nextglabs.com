import { Project } from "@/graphql/schema";
import { Grid, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { ProjectsListItem } from "./Item";
import { ProjectsListItemEmpty } from "./Item/Empty";

interface ProjectListProps {
  projects: Project[];
}
export const ProjectsList = ({ projects }: ProjectListProps) => {
  const { t } = useTranslation("home");
  if (!projects)
    return (
      <Text fontSize="lg" variant="error">
        {t("projects.notFound")}
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
