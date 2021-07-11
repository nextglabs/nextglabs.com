import { Button, HStack, Link } from "@chakra-ui/react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { ProjectUrls } from "../../types";

interface ProjectLinksProps {
	urls: ProjectUrls;
	shortLabels?: boolean;
}
export const ProjectLinks = ({ urls: { githubUrl, liveUrl }, shortLabels = true }: ProjectLinksProps) => (
	<HStack spacing="6">
		{githubUrl && (
			<Button
				colorScheme="black"
				as={Link}
				isExternal
				href={githubUrl}
				size="sm"
				variant="link"
				rightIcon={<FiGithub />}
			>
				{shortLabels ? "Github" : "Github Repository"}
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
				rightIcon={<FiExternalLink />}
			>
				{shortLabels ? "Live" : "Live Website"}
			</Button>
		)}
	</HStack>
);
