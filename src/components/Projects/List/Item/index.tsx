import { Button, Badge, Box, Heading, HStack, Text, Image, VStack, BadgeProps, useDisclosure } from "@chakra-ui/react";
import { FiLayers } from "react-icons/fi";
import { SlideUpTransition } from "@/components/ui/animation/Transitions";
import { ProjectsListItemModal } from "./Modal";
import { ProjectLinks } from "./Links";
import { Project } from "../../types";
import { getTagColorScheme, sliceItems } from "../../utils";
import useSound from "use-sound";

const Tag = (props: BadgeProps) => <Badge my="1" {...props} />;

export interface ProjectsListItemProps {
	data: Project;
	/** Animation order */
	order: number;
}
export const ProjectsListItem = (props: ProjectsListItemProps) => {
	const {
		data: {
			title,
			description,
			featuredImage,
			liveUrl,
			githubUrl,
			languages = [],
			frameworks = [],
			libraries = [],
			categories = [],
		} = {},
		order = 0,
	} = props;

	const { isOpen, onOpen, onClose } = useDisclosure();
	const [play] = useSound("assets/audio/menu-open-sound.mp3", { volume: 0.25 });

	const handleModalToggle = (mode: "open" | "close") => {
		play();
		if (mode === "open") {
			onOpen();
		} else {
			onClose();
		}
	};

	const tags = sliceItems([...frameworks, ...libraries, ...languages], 4);

	return (
		<SlideUpTransition order={order}>
			<Box maxW="md" p="4" textAlign="center">
				<VStack spacing="2">
					<Image
						loading="lazy"
						maxH="320px"
						objectFit="cover"
						src={featuredImage?.url}
						alt={featuredImage?.alt || `${title}-project-image`}
						rounded="3xl"
						mb="2"
					/>
					<Heading as="h4" size="md">
						{title}
					</Heading>
					<VStack spacing="0">
						<HStack wrap="wrap" justifyContent="center">
							{categories.map((item, index) => (
								<Tag key={`project-category-${index}`} colorScheme={getTagColorScheme(item)}>
									{item}
								</Tag>
							))}
						</HStack>
						<HStack wrap="wrap" justifyContent="center">
							{tags.displayedItems.map((item, index) => (
								<Tag key={`tag-${index}`} colorScheme={getTagColorScheme(item)}>
									{item}
								</Tag>
							))}
							{tags.remainingItems && <Tag>{tags.remainingItems}+</Tag>}
						</HStack>
					</VStack>
					<Text variant="lighter" pt="2">
						{description}
					</Text>
					<Button
						onClick={() => handleModalToggle("open")}
						colorScheme="cyan"
						size="sm"
						variant="ghost"
						rightIcon={<FiLayers />}
					>
						Stack
					</Button>
					<ProjectsListItemModal isOpen={isOpen} onClose={() => handleModalToggle("close")} {...props.data} />
					<ProjectLinks urls={{ githubUrl, liveUrl }} />
				</VStack>
			</Box>
		</SlideUpTransition>
	);
};
