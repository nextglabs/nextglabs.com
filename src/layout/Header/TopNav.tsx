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

const links = [
	{ label: "Home", path: "/" },
	{ label: "About", path: "/about" },
	{ label: "Blog", path: "/blog" },
];

const socialIcons = [
	{ href: "https://nextglabs.medium.com/", ariaLabel: "Medium Account", icon: <FaMedium /> },
	{ href: "https://github.com/nextglabs/", ariaLabel: "Github Account", icon: <FiGithub /> },
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
			<Flex h={16} alignItems={"center"} justifyContent={"space-between"} w={["90%", "85%", "80%"]} mx="auto">
				<IconButton
					size={"md"}
					icon={isOpen ? <FiX /> : <FiMenu />}
					aria-label={"Open Menu"}
					display={["inherit", "inherit", "none"]}
					onClick={isOpen ? onClose : onOpen}
					variant="ghost"
				/>
				<HStack as="nav" spacing={12} display={{ base: "none", md: "flex" }}>
					{links.map((link, index) => (
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
