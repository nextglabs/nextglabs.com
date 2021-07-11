import {
	Box,
	Flex,
	HStack,
	Text,
	Link,
	LinkProps,
	IconButton,
	useDisclosure,
	useColorModeValue,
} from "@chakra-ui/react";
import { FiGithub, FiMenu, FiX } from "react-icons/fi";
import { FaMedium } from "react-icons/fa";
import NextLink from "next/link";
import { ThemeModeToggler } from "@/components/ui/ThemeModeToggler";
import { SOCIAL } from "@/config/social";
import { NAV } from "@/config/nav";
import { layoutDimensions } from "../dimensions";


const socialIcons = [
	{ href: SOCIAL.MEDIUM_ACCOUNT_URL, ariaLabel: "Medium Account", icon: <FaMedium /> },
	{ href: SOCIAL.GITHUB_ACCOUNT_URL, ariaLabel: "Github Account", icon: <FiGithub /> },
];

interface NavLinkProps extends LinkProps {
	index?: number;
	label: string | JSX.Element;
	path: string;
	onClose: () => void;
}

const NavLink = ({ label, path, onClose, ...restProps }: NavLinkProps) => (
	<NextLink href={path} passHref>
		<Link onClick={onClose} {...restProps}>
			<Text fontSize="sm" casing="uppercase">
				{label}
			</Text>
		</Link>
	</NextLink>
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

export const TopNav = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Box px={4}>
			<Flex h={20} alignItems={"center"} justifyContent={"space-between"} w={layoutDimensions.width} mx="auto">
				<IconButton
					size={"md"}
					icon={isOpen ? <FiX /> : <FiMenu />}
					aria-label={"Open Menu"}
					display={["inherit", "inherit", "none"]}
					onClick={isOpen ? onClose : onOpen}
					variant="ghost"
				/>
				<HStack as="nav" spacing={12} display={{ base: "none", md: "flex" }}>
					{NAV.map((link, index) => (
						<NavLink key={index} label={link.label} path={link.path} onClose={onClose} />
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
};
