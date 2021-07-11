import { Stack, StackProps } from "@chakra-ui/react";
import { layoutDimensions } from "../dimensions";

export const Main = (props: StackProps) => (
	<Stack as="main" spacing="6" width="100%" mx="auto" px={layoutDimensions.px} {...props} />
);
