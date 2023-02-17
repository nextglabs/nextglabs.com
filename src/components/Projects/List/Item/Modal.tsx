import {
  HStack,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  UseDisclosureProps,
  VStack,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { FiCodesandbox, FiDatabase, FiGlobe, FiSettings } from "react-icons/fi";
import { Project } from "../../types";
import { ProjectLinks } from "./Links";

const formatItems = (array: string[]) =>
  array.map((item, index) => (
    <HStack display="inline-flex" key={index}>
      <Text as="span" fontWeight="normal">
        {item}
      </Text>
      {index < array.length - 1 && (
        <Text as="span" color="gray.500" fontSize="xs" pr="2">
          •
        </Text>
      )}
    </HStack>
  ));

type ProjectsListItemModalProps = UseDisclosureProps & Partial<Project>;

export const ProjectsListItemModal = (props: ProjectsListItemModalProps) => {
  const { isOpen, onClose, languages, frameworks, libraries, databases, title, githubUrl, liveUrl } = props;
  const { t } = useTranslation("home");

  const tree = {
    languages: {
      key: "languages",
      icon: FiGlobe,
      items: languages,
    },
    frameworks: {
      key: "frameworks",
      icon: FiSettings,
      items: frameworks,
    },
    libraries: {
      key: "libraries",
      icon: FiCodesandbox,
      items: libraries,
    },
    databases: {
      key: "databases",
      icon: FiDatabase,
      items: databases,
    },
  };

  const filteredTree = Object.values(tree).filter(({ items }) => items && items.length);
  const noStack = !filteredTree.length;

  return (
    <Modal blockScrollOnMount colorScheme="green" isOpen={isOpen} onClose={onClose} isCentered motionPreset="slideInBottom" size="lg">
      <ModalOverlay />
      <ModalContent m="2" bgColor="gray.900" borderRadius="10px">
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing="4" align="left">
            {noStack ? (
              <Text>{t("projects.modal.noStack")}</Text>
            ) : (
              filteredTree.map((details, index) => (
                <HStack key={index} alignItems="flex-start">
                  <HStack>
                    <Icon as={details.icon} color="secondary.200" />
                    <Text as="span" fontWeight="500">
                      {t(`projects.modal.${details.key}`, { count: details.items.length })}:
                    </Text>
                  </HStack>
                  <HStack spacing={0} wrap="wrap" alignItems="flex-end">
                    {formatItems(details.items)}
                  </HStack>
                </HStack>
              ))
            )}
          </VStack>
        </ModalBody>
        <ModalFooter textAlign="center">
          <ProjectLinks title={title} urls={{ githubUrl, liveUrl }} shortLabels={false} />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
