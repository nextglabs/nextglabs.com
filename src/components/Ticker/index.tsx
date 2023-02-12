import { Box, Heading, Text } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";

export const KEYWORDS = ["Web Design", "Programming", "SEO", "Consultancy"];
const COLORS = ["secondary.300", "primary.300", "pink.300", "orange.300"];

export const Ticker = () => (
  <Box pb={8}>
    <Marquee speed={25} gradientColor={[0, 0, 0]} gradientWidth={100} style={{ overflow: "hidden" }}>
      {KEYWORDS.map((keyword, i) => (
        <Heading as="span" whiteSpace="nowrap" mr="4" flexShrink={0} fontSize={["5xl", null, "7xl"]} key={i}>
          {keyword}{" "}
          <Text my="auto" verticalAlign="middle" fontSize={["2xl", null, "4xl"]} as="span" mx={8} color={COLORS[i]}>
            •
          </Text>
        </Heading>
      ))}
    </Marquee>
  </Box>
);
