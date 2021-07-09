import { Avatar, Button, VStack, Heading, Text, Center, useColorModeValue } from "@chakra-ui/react";
import { FiArrowRightCircle } from "react-icons/fi";

export const Hero = () => (
	<Center>
		<VStack spacing="6" textAlign="center">
			<Avatar name="✌" size="2xl" src="assets/images/memoji-thumbs-up.png" bg="transparent" />
			<Text fontSize="xl" fontWeight="medium" color={useColorModeValue("blackAlpha.900", "whiteAlpha.900")} lineHeight="shorter">
				👋 Hi, I'm Bassem.
			</Text>
			<Heading as="h2" size="xl" maxWidth="xl" lineHeight="shorter">
				I build <span className="underline">sophisticated</span> websites and web applications.
			</Heading>
			<Text fontSize="md" maxWidth="lg" color={useColorModeValue("blackAlpha.700", "whiteAlpha.700")} lineHeight="base">
				I’m a freelance designer and developer. I help companies ship quality software for happy customers. Let's celebrate your success together!
			</Text>
			<Button rightIcon={<FiArrowRightCircle />}>See My Projects</Button>
		</VStack>
	</Center>
);
