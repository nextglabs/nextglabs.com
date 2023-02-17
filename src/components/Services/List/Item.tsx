import { SlideUpTransition } from "@/components/ui/animation/Transitions";
import { Box, Text, VStack } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { Service } from "../types";

export interface ServicesListItemProps {
  service: Service;
  /** Animation order */
  order?: number;
}
export const ServicesListItem = (props: ServicesListItemProps) => {
  const {
    order = 0,
    service: { key, icon },
  } = props;
  const { t } = useTranslation("home");

  return (
    <SlideUpTransition order={order}>
      <Box maxW="md" textAlign="center">
        <VStack>
          <Box>{icon}</Box>
          <Text as="h3" fontSize="xl" fontWeight="bold">
            {t(`services.items.${key}.title`)}
          </Text>
          <Text>{t(`services.items.${key}.description`)}</Text>
        </VStack>
      </Box>
    </SlideUpTransition>
  );
};
