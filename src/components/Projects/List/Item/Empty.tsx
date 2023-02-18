import { SlideUpTransition } from "@/components/ui/animation/Transitions";
import { SOCIAL } from "@/config/social";
import { Box, Button, Heading, HStack, Tag, Text, VStack } from "@chakra-ui/react";
import { Trans, useTranslation } from "next-i18next";
import { FiArrowRight, FiGrid } from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll";
import comingNext from "public/assets/images/coming-next.jpg";
import { Image } from "@/components/Image";
export interface ProjectsListItemEmptyProps {
  /** Animation order */
  order?: number;
}
export const ProjectsListItemEmpty = (props: ProjectsListItemEmptyProps) => {
  const { order = 0 } = props;
  const { t } = useTranslation("home");
  return (
    <SlideUpTransition order={order}>
      <Box maxW="xl" textAlign="center">
        <VStack spacing="2">
          <Image loading="lazy" objectFit="cover" src={comingNext} alt="Empty Project Image" rounded="xl" boxShadow="xl" mb="5" />
          <Heading as="h3" size="md">
            {t("projects.placeholder.title")}
          </Heading>
          <HStack wrap="wrap" justifyContent="center">
            <Tag colorScheme="green"> {t("projects.placeholder.tag")}</Tag>
          </HStack>
          <Text variant="lighter" pt="2">
            <Trans t={t} i18nKey="projects.placeholder.description" />
          </Text>
          <VStack spacing="3">
            <Button
              as={ScrollLink}
              tabIndex={0}
              smooth="easeInOutCubic"
              duration={800}
              colorScheme="primary"
              to="services"
              href="/#services"
              size="sm"
              variant="ghost"
              rightIcon={<FiGrid />}
            >
              {t("projects.placeholder.viewServices")}
            </Button>
            <Button as="a" href={`mailto:${SOCIAL.EMAIL}`} rightIcon={<FiArrowRight />}>
              {t("projects.placeholder.cta")}
            </Button>
          </VStack>
        </VStack>
      </Box>
    </SlideUpTransition>
  );
};
