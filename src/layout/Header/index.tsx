import { Box, BoxProps, useBreakpointValue } from "@chakra-ui/react";
import { layoutDimensions } from "../dimensions";
import { Nav } from "./Nav";

export const Header = (props: BoxProps) => {
  // Dynamically determine when screen is small (ie: from base up to but not including md` )
  const isSmall = useBreakpointValue({ base: true, md: false });
  return (
    <Box as="header" px={layoutDimensions.px} zIndex={10} data-testid="header" {...props}>
      <Nav isSmall={isSmall} />
    </Box>
  );
};
