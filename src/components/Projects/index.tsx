import { Center, Text, Box, Heading } from "@chakra-ui/react";
import { layoutDimensions } from "@/layout/dimensions";
import { ProjectsList } from "./List";
import { useTranslation } from "next-i18next";
import { Project } from "@/graphql/schema";

interface ProjectsProps {
  projects: Project[];
}

export const Projects = ({ projects }: ProjectsProps) => {
  const { t } = useTranslation("home");
  return (
    <Center id="projects">
      <Box w={layoutDimensions.width} my="12">
        <Box pb="12">
          <Heading as="h2" size="xl">
            <span className="underline">{t("projects.title")}</span>
          </Heading>
          <Text fontSize="lg" mt="6" variant="lighter">
            {t("projects.description")}
          </Text>
        </Box>
        <ProjectsList projects={projects} />
      </Box>
    </Center>
  );
};

export default Projects;
