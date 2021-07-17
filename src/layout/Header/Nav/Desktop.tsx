import { NAV } from "@/config/nav";
import { HStack, Link, LinkProps, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

interface NavLinkProps extends LinkProps {
	label: string | JSX.Element;
}

const NavLink = ({ label, href, ...restProps }: NavLinkProps) => {
	const router = useRouter();
	const isCurrent = router.asPath === href;
	return (
		<Link
			fontWeight={isCurrent ? "bold" : "regular"}
			textDecoration={isCurrent ? "underline" : "initial"}
			aria-current={isCurrent ? "page" : undefined}
			href={href}
			{...restProps}
		>
			<Text fontSize="sm" casing="uppercase">
				{label}
			</Text>
		</Link>
	);
};

export const HeaderNavDesktop = () => {
	return (
		<HStack as="nav" spacing={12} display={{ base: "none", md: "flex" }} data-testid="desktop-nav">
			{NAV.map((link, index) => (
				<NavLink key={index} label={link.label} href={link.href} />
			))}
		</HStack>
	);
};
