import { Heading } from "@chakra-ui/react";
import NextLink from "next/link";

export const Logo = () => (
  <NextLink href="/" passHref>
    <Heading as="span" fontSize="lg">
      NextGLabs
    </Heading>
  </NextLink>
);
