import { IconButton, useColorModeValue, Menu, MenuButton, MenuList, MenuItem, MenuItemProps } from "@chakra-ui/react";
import { FiMenu, FiX } from "react-icons/fi";
import NextLink from "next/link";
import { NAV } from "@/config/nav";

interface NavMenuButtonProps extends MenuItemProps {
	index?: number;
	label: string | JSX.Element;
	href: string;
}

const NavMenuButton = ({ label, href, ...restProps }: NavMenuButtonProps) => (
	<NextLink href={href}>
		<MenuItem borderRadius="6" {...restProps}>
			{label}
		</MenuItem>
	</NextLink>
);

export const MobileMenu = () => {
	const menuBorderColor = useColorModeValue("cyan.100", "cyan.200");
	const menuBgColor = useColorModeValue("", "gray.900");
	return (
		<Menu isLazy>
			{({ isOpen }) => (
				<>
					<MenuButton
						as={IconButton}
						size="md"
						icon={isOpen ? <FiX /> : <FiMenu />}
						aria-label="Open Menu"
						display={["inherit", "inherit", "none"]}
						variant="ghost"
					/>
					<MenuList
						borderWidth="2px"
						borderColor={menuBorderColor}
						bgColor={menuBgColor}
						p="3"
						borderRadius="12"
					>
						{NAV.map((item, index) => (
							<NavMenuButton key={index} {...item} />
						))}
					</MenuList>
				</>
			)}
		</Menu>
	);
};
