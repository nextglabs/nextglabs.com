import {
	IconButton,
	useColorModeValue,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuItemProps,
	VStack,
} from "@chakra-ui/react";
import { FiMenu, FiX } from "react-icons/fi";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { NAV } from "@/config/nav";

interface NavMenuButtonProps extends MenuItemProps {
	index?: number;
	label: string | JSX.Element;
	href: string;
}

const NavMenuButton = ({ label, href, ...restProps }: NavMenuButtonProps) => {
	const router = useRouter();
	const isCurrent = router.asPath === href;
	return (
		<NextLink href={href}>
			<MenuItem
				borderRadius="6"
				isDisabled={isCurrent}
				isFocusable={!isCurrent}
				fontWeight={isCurrent && "medium"}
				_hover={{
					cursor: isCurrent ? "initial" : "pointer",
				}}
				aria-current={isCurrent ? "page" : undefined}
				{...restProps}
			>
				{label}
			</MenuItem>
		</NextLink>
	);
};

export const HeaderNavMobile = () => {
	const menuBorderColor = useColorModeValue("cyan.100", "cyan.200");
	const menuBgColor = useColorModeValue("", "gray.900");
	return (
		<Menu isLazy autoSelect={false}>
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
						boxShadow="md"
						borderWidth="2px"
						borderColor={menuBorderColor}
						bgColor={menuBgColor}
						p="3"
						borderRadius="12"
					>
						<VStack spacing="1">
							{NAV.map((item, index) => (
								<NavMenuButton key={index} {...item} />
							))}
						</VStack>
					</MenuList>
				</>
			)}
		</Menu>
	);
};
