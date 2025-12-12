import { Project } from "@/graphql/schema";
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
import React from "react";
import { FiCodesandbox, FiDatabase, FiGlobe, FiSettings } from "react-icons/fi";
import { ProjectLinks } from "./Links";

const formatItem = (item: string, index: number, total: number): React.ReactElement => {
  // @ts-ignore - TypeScript limitation: Expression produces a union type that is too complex to represent.
  // This is a known issue with Chakra UI's complex prop types. The code works correctly at runtime.
  return React.createElement(
    HStack,
    { display: "inline-flex", key: index },
    React.createElement(Text, { as: "span", fontWeight: "normal" }, String(item)),
    index < total - 1 &&
      React.createElement(Text, { as: "span", color: "gray.500", fontSize: "xs", pr: "2" }, "•")
  ) as React.ReactElement;
};

const formatItems = (array: readonly string[]): React.ReactElement[] =>
  array.map((item, index) => formatItem(item, index, array.length));

type ProjectsListItemModalProps = UseDisclosureProps & Partial<Project>;

export const ProjectsListItemModal = (props: ProjectsListItemModalProps) => {
  const { isOpen, onClose, languages, frameworks, libraries, databases, title, githubUrl, liveUrl } = props ?? {};
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

  const filteredTree = Object.values(tree).filter(({ items }) => items && items.length) as Array<{
    key: string;
    icon: React.ComponentType;
    items: readonly unknown[];
  }>;
  const noStack = !filteredTree.length;

  const renderContent = (): React.ReactElement => {
    if (noStack) {
      return <Text>{t("projects.modal.noStack")}</Text>;
    }
    return (
      <>
        {filteredTree.map((details, index) => (
          <HStack key={index} alignItems="flex-start">
            <HStack>
              <Icon as={details.icon} color="secondary.200" />
              <Text as="span" fontWeight="500">
                {t(`projects.modal.${details.key}`, { count: details.items?.length ?? 0 })}:
              </Text>
            </HStack>
            <HStack spacing={0} wrap="wrap" alignItems="flex-end">
              {formatItems((details.items ?? []).map((item) => String(item)))}
            </HStack>
          </HStack>
        ))}
      </>
    );
  };

  return (
    <Modal blockScrollOnMount colorScheme="green" isOpen={isOpen ?? false} onClose={onClose ?? (() => {})} isCentered motionPreset="slideInBottom" size="lg">
      <ModalOverlay />
      <ModalContent m="2" bgColor="gray.900" borderRadius="10px">
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing="4" align="left">
            {renderContent()}
          </VStack>
        </ModalBody>
        <ModalFooter textAlign="center">
          <ProjectLinks title={title ?? ""} urls={{ githubUrl: githubUrl ?? undefined, liveUrl: liveUrl ?? undefined }} shortLabels={false} />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
