import { SlideUpTransition } from "@/components/ui/animation/Transitions";
import { Box, Text, VStack } from "@chakra-ui/react";
import { Service } from "../types";

export interface ServicesListItemProps {
  service: Service;
  /** Animation order */
  order?: number;
}
export const ServicesListItem = (props: ServicesListItemProps) => {
  const { order = 0, service } = props;

  return (
    <SlideUpTransition order={order}>
      <Box maxW="md" textAlign="center">
        <VStack>
          <Box>{service.icon}</Box>
          <Text as="h4" fontSize="xl" fontWeight="bold">
            {service.title}
          </Text>
          <Text>{service.description}</Text>
        </VStack>
      </Box>
    </SlideUpTransition>
  );
};
