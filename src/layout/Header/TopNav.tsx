import { Box, Flex, HStack, Text, Link, LinkProps, IconButton, useColorModeValue } from "@chakra-ui/react";
import { FiGithub } from "react-icons/fi";
import { FaMedium } from "react-icons/fa";
import { ThemeModeToggler } from "@/components/ui/ThemeModeToggler";
import { SOCIAL } from "@/config/social";
import { NAV } from "@/config/nav";
import { layoutDimensions } from "../dimensions";
import { MobileMenu } from "./MobileMenu";

const socialIcons = [
	{ href: SOCIAL.MEDIUM_ACCOUNT_URL, ariaLabel: "Medium Account", icon: <FaMedium /> },
	{ href: SOCIAL.GITHUB_ACCOUNT_URL, ariaLabel: "Github Account", icon: <FiGithub /> },
];

interface NavLinkProps extends LinkProps {
	label: string | JSX.Element;
}

const NavLink = ({ label, ...restProps }: NavLinkProps) => (
	<Link {...restProps}>
		<Text fontSize="sm" casing="uppercase">
			{label}
		</Text>
	</Link>
);

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

export const TopNav = () => (
	<Box px={4}>
		<Flex h={20} alignItems={"center"} justifyContent={"space-between"} w={layoutDimensions.width} mx="auto">
			<MobileMenu />
			<HStack as="nav" spacing={12} display={{ base: "none", md: "flex" }}>
				{NAV.map((link, index) => (
					<NavLink key={index} label={link.label} href={link.href} />
				))}
			</HStack>
			<HStack spacing={4} alignItems="center">
				{socialIcons.map((icon, index) => (
					<NavIcon key={index} {...icon} />
				))}
				<ThemeModeToggler />
			</HStack>
		</Flex>
	</Box>
);
