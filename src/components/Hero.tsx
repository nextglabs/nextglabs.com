import NextLink from "next/link";
import { Button, VStack, Heading, Text, Center, useColorModeValue } from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";
import { Memoji } from "@/components/Memoji";

export const Hero = () => (
  <Center>
    <VStack spacing="6" textAlign="center" mb="16">
      <Memoji src={useColorModeValue("assets/images/memoji-victory.png", "assets/images/memoji-thumbs-up.png")} />
      <Text fontSize="xl" fontWeight="medium" variant="light" lineHeight="shorter">
        👋🏻 Hi, I&apos;m Bassem.
      </Text>
      <Heading as="h1" size="xl" maxWidth="xl" lineHeight="shorter">
        I build <span className="underline">sophisticated</span> websites and web applications.
      </Heading>
      <Text fontSize="md" maxWidth="lg" variant="light" lineHeight="base">
        I’m a freelance designer and developer. I help companies ship quality software for happy customers. Let&apos;s celebrate your success
        together!
      </Text>
      <NextLink href="#projects">
        <Button rightIcon={<FiArrowRight />}>See my projects</Button>
      </NextLink>
      <NextLink href="/about">
        <Button variant="link" size="sm">
          More about me
        </Button>
      </NextLink>
    </VStack>
  </Center>
);
