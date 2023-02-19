import { Logo } from "@/components/Logo";
import { MenuItem } from "@/components/Menu/Item";
import { MenuList } from "@/components/Menu/List";
import { NAV } from "@/config/nav";
import { useSound } from "@/hooks/useSound";
import { HStack, IconButton, Menu, MenuButton, MenuItemProps } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { FiMenu, FiX } from "react-icons/fi";

interface NavMenuButtonProps extends MenuItemProps {
  index?: number;
  label: string;
  href: string;
}

const NavMenuButton = ({ label, href, ...restProps }: NavMenuButtonProps) => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const isCurrent = router.asPath === href;
  return (
    <MenuItem as={NextLink} href={href} isDisabled={isCurrent} aria-current={isCurrent ? "page" : undefined} prefetch={false} {...restProps}>
      {t(label)}
    </MenuItem>
  );
};

export const HeaderNavMobile = () => {
  const [play] = useSound();

  return (
    <HStack spacing={4} alignItems="center">
      <Menu isLazy autoSelect={false} onClose={play} onOpen={play}>
        {({ isOpen }) => (
          <>
            <MenuButton
              as={IconButton}
              size="md"
              ml={-3}
              icon={isOpen ? <FiX /> : <FiMenu />}
              aria-label="Open Menu"
              display={["inherit", "inherit", "none"]}
              variant="ghost"
            />
            <MenuList>
              {NAV.map((item, index) => (
                <NavMenuButton key={index} {...item} />
              ))}
            </MenuList>
          </>
        )}
      </Menu>
      <Logo />
    </HStack>
  );
};

export default HeaderNavMobile;
