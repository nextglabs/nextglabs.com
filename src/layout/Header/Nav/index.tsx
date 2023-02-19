import { Box, Flex, HStack, Link, LinkProps, IconButton, IconButtonProps } from "@chakra-ui/react";
import { HEADER_SOCIAL_ICONS } from "@/config/social";
import { layoutDimensions } from "../../dimensions";
import { HeaderNavDesktop } from "./Desktop";
import dynamic from "next/dynamic";

const LocaleSwitcher = dynamic(() => import("@/components/LocaleSwitcher"));
const HeaderNavMobile = dynamic(() => import("./Mobile"));

const NavIcon = (props: IconButtonProps & LinkProps) => (
  <IconButton
    as={Link}
    size="md"
    _hover={{ textDecoration: "none", bg: "whiteAlpha.200" }}
    _active={{ bg: "whiteAlpha.300" }}
    variant="ghost"
    {...props}
  />
);

export interface NavProps {
  /**
   * Determines if the screen is small
   * Note: Better approach than relying on the "display" prop in Mobile/Desktop nav components
   * Using this variable also facilitates testing of the component
   * @default false
   */
  isSmall: boolean;
}
export const Nav = ({ isSmall = false }: NavProps) => (
  <Box>
    <Flex h={20} alignItems="center" justifyContent="space-between" w={layoutDimensions.width} mx="auto">
      {isSmall ? <HeaderNavMobile /> : <HeaderNavDesktop />}
      <HStack spacing={[2, 4]} alignItems="center" mr={-3}>
        {HEADER_SOCIAL_ICONS.map((icon, index) => (
          <NavIcon key={index} {...icon} />
        ))}
        <LocaleSwitcher />
      </HStack>
    </Flex>
  </Box>
);
