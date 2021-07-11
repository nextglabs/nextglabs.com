import {
	Modal,
	ModalOverlay,
	ModalCloseButton,
	ModalHeader,
	ModalBody,
	ModalContent,
	ModalFooter,
	UseDisclosureProps,
	useColorModeValue,
	Icon,
	Text,
	HStack,
	VStack,
} from "@chakra-ui/react";
import { FiGlobe, FiSettings, FiCodesandbox, FiDatabase } from "react-icons/fi";
import pluralize from "pluralize";
import { ProjectLinks } from "./Links";
import { Project } from "../../types";

const isMulti = (array: string[]) => array.length > 1;
const formatTitle = (title: string, array: string[]) => (isMulti(array) ? pluralize(title) : title);
const formatItems = (array: string[]) =>
	array.map((item, index) => (
		<HStack display="inline-flex" key={index}>
			<Text fontWeight="normal">{item}</Text>
			{index < array.length - 1 && (
				<Text color="gray.500" fontSize="xs" pr="2">
					•
				</Text>
			)}
		</HStack>
	));

type ProjectsListItemModalProps = UseDisclosureProps & Project;

export const ProjectsListItemModal = (props: ProjectsListItemModalProps) => {
	const { isOpen, onClose, languages, frameworks, libraries, databases, title, githubUrl, liveUrl } = props;

	const tree = {
		languages: {
			title: "Language",
			icon: FiGlobe,
			items: languages,
		},
		frameworks: {
			title: "Framework",
			icon: FiSettings,
			items: frameworks,
		},
		libraries: {
			title: "Library",
			icon: FiCodesandbox,
			items: libraries,
		},
		databases: {
			title: "Database",
			icon: FiDatabase,
			items: databases,
		},
	};

	const filteredTree = Object.values(tree).filter(({ items }) => items && items.length);
	const noStack = !filteredTree.length;

	const iconColor = useColorModeValue("cyan.600", "cyan.200");
	const modalBgColor = useColorModeValue("", "gray.800");

	return (
		<Modal
			blockScrollOnMount={false}
			colorScheme="green"
			isOpen={isOpen}
			onClose={onClose}
			isCentered
			motionPreset="slideInBottom"
			size="lg"
		>
			<ModalOverlay />
			<ModalContent m="2" bgColor={modalBgColor}>
				<ModalHeader>{title}</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<VStack spacing="4" align="left">
						{noStack ? (
							<Text>No Stack has been defined for this project.</Text>
						) : (
							filteredTree.map((details, index) => (
								<HStack key={index}>
									<Icon as={details.icon} color={iconColor} />
									<Text fontWeight="500">
										{formatTitle(details.title, details.items)}: {formatItems(details.items)}
									</Text>
								</HStack>
							))
						)}
					</VStack>
				</ModalBody>
				<ModalFooter textAlign="center">
					<ProjectLinks urls={{ githubUrl, liveUrl }} shortLabels={false} />
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};
