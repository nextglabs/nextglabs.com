import { SlideUpTransition } from "@/components/ui/animation/Transitions";
import { SOCIAL } from "@/config/social";
import { Box, Button, Heading, HStack, Image, Tag, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { FiGrid } from "react-icons/fi";

export interface ProjectsListItemEmptyProps {
  /** Animation order */
  order?: number;
}
export const ProjectsListItemEmpty = (props: ProjectsListItemEmptyProps) => {
  const { order = 0 } = props;

  return (
    <SlideUpTransition order={order}>
      <Box maxW="md" textAlign="center">
        <VStack spacing="2">
          <Image
            loading="lazy"
            objectFit="cover"
            src={useColorModeValue("assets/images/coming-next-dark.svg", "assets/images/coming-next-light.svg")}
            alt="Empty Project Image"
            rounded="xl"
            boxShadow="xl"
            mb="5"
          />
          <Heading as="h4" size="md">
            Your project
          </Heading>
          <HStack wrap="wrap" justifyContent="center">
            <Tag colorScheme="orange">Satisfaction Guaranteed</Tag>
          </HStack>
          <Text variant="lighter" pt="2">
            Looking for a professional website or application?
            <br />I am here to help!
          </Text>
          <VStack spacing="3">
            <Button colorScheme="cyan" as="a" href="/#services" size="sm" variant="ghost" rightIcon={<FiGrid />}>
              Services
            </Button>
            <Button as="a" href={`mailto:${SOCIAL.EMAIL}`}>
              Let&apos;s Talk!
            </Button>
          </VStack>
        </VStack>
      </Box>
    </SlideUpTransition>
  );
};
