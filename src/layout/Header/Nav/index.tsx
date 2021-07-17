import { Box, Flex, HStack, Link, IconButton, useColorModeValue } from "@chakra-ui/react";
import { ThemeModeToggler } from "@/components/ui/ThemeModeToggler";
import { HEADER_SOCIAL_ICONS } from "@/config/social";
import { layoutDimensions } from "../../dimensions";
import { HeaderNavMobile } from "./Mobile";
import { HeaderNavDesktop } from "./Desktop";

const NavIcon = ({ href, ariaLabel, icon }) => (
	<IconButton
		as={Link}
		href={href}
		size="md"
		icon={icon}
		aria-label={ariaLabel}
		_hover={{
			textDecoration: "none",
			bg: useColorModeValue("gray.200", "gray.900"),
		}}
		variant="ghost"
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
	<Box px={4}>
		<Flex h={20} alignItems="center" justifyContent="space-between" w={layoutDimensions.width} mx="auto">
			{isSmall ? <HeaderNavMobile /> : <HeaderNavDesktop />}
			<HStack spacing={4} alignItems="center">
				{HEADER_SOCIAL_ICONS.map((icon, index) => (
					<NavIcon key={index} {...icon} />
				))}
				<ThemeModeToggler data-testid="theme-mode-toggler" />
			</HStack>
		</Flex>
	</Box>
);
