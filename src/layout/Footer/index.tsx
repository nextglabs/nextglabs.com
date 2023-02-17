import { CallToAction } from "@/components/CallToAction";
import { SOCIAL } from "@/config/social";
import { Box, Flex, FlexProps, Link, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { layoutDimensions } from "../dimensions";
import NextLink from "next/link";
import { useRouter } from "next/router";

const currentYear = new Date().getFullYear();

export const Footer = (props: FlexProps) => {
  const { t } = useTranslation("common");
  const { locale } = useRouter();

  return (
    <>
      <CallToAction />
      <Box mt="8" py="8" px={layoutDimensions.px} bgColor="transparent" as="footer" data-testid="footer" {...props}>
        <Flex w={layoutDimensions.width} mx="auto" justifyContent="space-between">
          <Text fontSize="sm">
            &copy; Copyright NextGLabs {currentYear}.{" "}
            <Link as={NextLink} variant="colored" href="/imprint" locale={locale}>
              {t("footer.imprint")}
            </Link>
          </Text>
          <Text fontSize="sm" textAlign="right">
            {t("footer.creation")}{" "}
            <Link variant="colored" href={SOCIAL.GITHUB_PORTFOLIO_URL} isExternal>
              {t("footer.source")}
            </Link>
          </Text>
        </Flex>
      </Box>
    </>
  );
};
