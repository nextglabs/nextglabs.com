import { Button, Badge, Box, Heading, HStack, Text, Image, VStack, BadgeProps, useDisclosure } from "@chakra-ui/react";
import { FiLayers } from "react-icons/fi";
import { HoverTransition, SlideUpTransition } from "@/components/ui/animation/Transitions";
import { ProjectsListItemModal } from "./Modal";
import { ProjectLinks } from "./Links";
import { getTagColorScheme, sliceItems } from "../../utils";
import { useSound } from "@/hooks";
import { useTranslation } from "next-i18next";
import { Project } from "@/graphql/schema";

const Tag = (props: BadgeProps) => <Badge my="1" {...props} />;

export interface ProjectsListItemProps {
  data: Project;
  /** Animation order */
  order?: number;
}
export const ProjectsListItem = (props: ProjectsListItemProps) => {
  const {
    data: { title, description, featuredImage, liveUrl, githubUrl, languages = [], frameworks = [], libraries = [], categories = [] } = {},
    order = 0,
  } = props;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [play] = useSound();
  const { t } = useTranslation("home");
  const handleModalToggle = (mode: "open" | "close") => {
    play();
    if (mode === "open") {
      onOpen();
    } else {
      onClose();
    }
  };

  const { displayedItems, remainingItems } = sliceItems([...frameworks, ...libraries, ...languages], 4);

  // Display nothing if these required vars are not provided somehow
  if (!title || !description || !featuredImage?.url) return null;

  return (
    <SlideUpTransition order={order}>
      <Box maxW="xl" textAlign="center">
        <VStack spacing="2">
          <HoverTransition>
            <a href={liveUrl} target="blank" rel="noopener noreferrer">
              <Image
                loading="lazy"
                objectFit="cover"
                src={featuredImage?.url}
                alt={featuredImage?.alt || `${title}-project-image`}
                rounded="xl"
                boxShadow="xl"
                mb="5"
              />
            </a>
          </HoverTransition>
          <Heading as="h3" size="md">
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
              {displayedItems.map((item, index) => (
                <Tag key={`tag-${index}`} colorScheme={getTagColorScheme(item)}>
                  {item}
                </Tag>
              ))}
              {remainingItems && <Tag>{remainingItems}+</Tag>}
            </HStack>
          </VStack>
          <Text variant="lighter" pt="2">
            {description}
          </Text>
          {displayedItems.length && (
            <Button onClick={() => handleModalToggle("open")} colorScheme="primary" size="sm" variant="ghost" rightIcon={<FiLayers />}>
              {t("projects.viewStack")}
            </Button>
          )}
          <ProjectsListItemModal isOpen={isOpen} onClose={() => handleModalToggle("close")} {...props.data} />
          <ProjectLinks title={title} urls={{ githubUrl, liveUrl }} />
        </VStack>
      </Box>
    </SlideUpTransition>
  );
};
