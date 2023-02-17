import { Logo } from "@/components/Logo";
import { NAV } from "@/config/nav";
import { HStack, Link, LinkProps, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { useTranslation } from "next-i18next";
interface NavLinkProps extends LinkProps {
  label: string;
}

const NavLink = ({ label, href, ...restProps }: NavLinkProps) => {
  const router = useRouter();
  const isCurrent = router.pathname === href || router.asPath === href;
  const { t } = useTranslation("common");
  return (
    <Link
      as={NextLink}
      fontWeight={isCurrent ? "900" : "500"}
      borderBottomWidth="1.5px"
      borderColor={isCurrent ? "white" : "transparent"}
      letterSpacing="wide"
      _hover={{ textDecoration: "initial", borderColor: "whiteAlpha.800" }}
      aria-current={isCurrent ? "page" : undefined}
      href={href}
      {...restProps}
    >
      <Text fontSize="xs" casing="uppercase">
        {t(label)}
      </Text>
    </Link>
  );
};

export const HeaderNavDesktop = () => {
  return (
    <HStack spacing={12} alignItems="center">
      <Logo />
      <HStack as="nav" spacing={8} display={{ base: "none", md: "flex" }} data-testid="desktop-nav">
        {NAV.map((link, index) => (
          <NavLink key={index} label={link.label} href={link.href} />
        ))}
      </HStack>
    </HStack>
  );
};
