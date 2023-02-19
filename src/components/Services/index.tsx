import { layoutDimensions } from "@/layout/dimensions";
import { Box, Center, Heading, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { ServicesList } from "./List";

export const Services = () => {
  const { t } = useTranslation("home");

  return (
    <Center id="services">
      <Box w={layoutDimensions.width} mt="4" mb="12">
        <Box pb="12">
          <Heading as="h2" size="xl">
            <span className="underline">{t("services.title")}</span>
          </Heading>
          <Text fontSize="lg" mt="6" variant="lighter">
            {t("services.description")}
          </Text>
        </Box>
        <ServicesList />
      </Box>
    </Center>
  );
};
