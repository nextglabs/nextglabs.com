import { Box, Heading, Text } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
import { useTranslation } from "next-i18next";
import { TICKER_KEYS, TICKER_SEPARATOR_COLORS } from "@/config/services";

export const Ticker = () => {
  const { t } = useTranslation("home");
  // Duplicating the keys to solve issues on wide screens
  // See: https://github.com/justin-chu/react-fast-marquee/issues/7
  const keys = [...TICKER_KEYS, ...TICKER_KEYS];
  const colors = [...TICKER_SEPARATOR_COLORS, ...TICKER_SEPARATOR_COLORS];
  return (
    <Box pb={8} data-testid="ticker" __css={{ "& .marquee": { minWidth: "max-content" } }}>
      <Marquee speed={25} gradientColor={[0, 0, 0]} gradientWidth={100} style={{ overflow: "hidden" }}>
        {keys.map((key, i) => (
          <Heading as="span" whiteSpace="nowrap" mr="4" flexShrink={0} fontSize={["5xl", null, "7xl"]} key={i}>
            {t(`services.items.${key}.title`)}{" "}
            <Text my="auto" verticalAlign="middle" fontSize={["2xl", null, "4xl"]} as="span" mx={8} color={colors[i]}>
              •
            </Text>
          </Heading>
        ))}
      </Marquee>
    </Box>
  );
};

export default Ticker;
