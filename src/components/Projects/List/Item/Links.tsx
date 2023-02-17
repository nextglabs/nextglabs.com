import { Button, HStack, Link } from "@chakra-ui/react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { ProjectUrls } from "../../types";
import { useTranslation } from "next-i18next";
interface ProjectLinksProps {
  title: string;
  urls: ProjectUrls;
  shortLabels?: boolean;
}
export const ProjectLinks = ({ title, urls: { githubUrl, liveUrl }, shortLabels = true }: ProjectLinksProps) => {
  const { t } = useTranslation("home");
  return (
    <HStack spacing="6">
      {githubUrl && (
        <Button
          colorScheme="black"
          as={Link}
          isExternal
          href={githubUrl}
          size="sm"
          variant="link"
          aria-label={`View ${title} Source in Github`}
          rightIcon={<FiGithub />}
        >
          {shortLabels ? t("projects.viewGithub.short") : t("projects.viewGithub.long")}
        </Button>
      )}
      {liveUrl && (
        <Button
          colorScheme="black"
          as={Link}
          isExternal
          href={liveUrl}
          size="sm"
          variant="link"
          aria-label={`View ${title} Live`}
          rightIcon={<FiExternalLink />}
        >
          {shortLabels ? t("projects.viewLive.short") : t("projects.viewLive.long")}
        </Button>
      )}
    </HStack>
  );
};
