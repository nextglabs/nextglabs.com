import { SOCIAL } from "@/config/social";
import { Box, Heading, Link, Text } from "@chakra-ui/react";
import NextImage from "next/image";
import ctaBg from "public/assets/images/cta-bg.jpg";
import { useTranslation } from "next-i18next";
import { SlideUpTransition } from "../ui/animation/Transitions";

export const CallToAction = () => {
  const { t } = useTranslation("common");
  return (
    <Box textAlign={["right", null, null, null, null, "center"]} position="relative" style={{ marginBottom: "-50px", marginTop: "-20px" }}>
      <NextImage
        src={ctaBg}
        alt="work-with-me"
        placeholder="blur"
        loading="lazy"
        sizes="100vw"
        fill
        style={{ objectPosition: "30px 0px", objectFit: "cover", zIndex: -1, opacity: 0.8 }}
      />
      <SlideUpTransition>
        <Heading
          zIndex="10"
          as="h2"
          size="xl"
          mt="100px"
          mb={["100px", null, "200px"]}
          px={[10, null, 16, 48, 64, 96]}
          position="relative"
          top={[3, null, null, null, 16, 24]}
        >
          {t("cta.text")}{" "}
          <Text
            as={Link}
            href={`mailto:${SOCIAL.EMAIL}`}
            fontSize="2x-large"
            fontWeight="bold"
            textDecoration="none"
            borderBottomWidth="0.15em"
            borderColor="white"
            _hover={{ color: "orange.300", borderColor: "orange.300", textDecoration: "none" }}
          >
            {t("cta.link")}
          </Text>
        </Heading>
      </SlideUpTransition>
    </Box>
  );
};
