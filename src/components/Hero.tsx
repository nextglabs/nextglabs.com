import { Button, Center, Heading, Text, VStack } from "@chakra-ui/react";

import { useTranslation } from "next-i18next";
import NextLink from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll";

export const Hero = () => {
  const { t } = useTranslation("home");
  return (
    <Center>
      <VStack spacing={[6, null, 8]} textAlign="center" py={["20%", null, null, "10%"]}>
        <Heading as="h1" size={["2xl", null, null, "3xl"]} maxWidth="4xl" lineHeight="shorter">
          {t("hero.title")}
        </Heading>
        <Text fontSize={["lg", null, null, "xl"]} maxWidth="2xl" variant="light" lineHeight="base">
          {t("hero.subtitle")}
        </Text>
        <Button as={ScrollLink} tabIndex={0} smooth="easeInOutCubic" duration={800} href="/#projects" to="projects" rightIcon={<FiArrowRight />}>
          {t("hero.buttons.primary")}
        </Button>
        <Button as={NextLink} href="/about" variant="link" size="sm" prefetch={false}>
          {t("hero.buttons.secondary")}
        </Button>
      </VStack>
    </Center>
  );
};
