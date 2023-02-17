import { useSound } from "@/hooks";
import { IconButton, Menu, MenuButton } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { FiGlobe } from "react-icons/fi";
import { MenuItem } from "../Menu/Item";
import { MenuList } from "../Menu/List";

const capitalize = (lang: string) => lang.slice(0, 1).toUpperCase() + lang.slice(1);

export const LocaleSwitcher = () => {
  const router = useRouter();
  const [play] = useSound();

  const { locale: activeLocale, locales, asPath } = router;

  const languageNames = useMemo(
    () =>
      new Intl.DisplayNames([activeLocale], {
        type: "language",
      }),
    [activeLocale],
  );

  return (
    <Menu onClose={play} onOpen={play}>
      <MenuButton as={IconButton} size="md" aria-label="Language Options" icon={<FiGlobe />} variant="ghost" />
      <MenuList>
        {locales.map((locale) => (
          <NextLink key={locale} href={asPath} locale={locale}>
            <MenuItem isDisabled={locale === activeLocale}>{capitalize(languageNames.of(locale) ?? locale)}</MenuItem>
          </NextLink>
        ))}
      </MenuList>
    </Menu>
  );
};
