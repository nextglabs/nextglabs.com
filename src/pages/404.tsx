import { Button, Heading, VStack, Text, Avatar } from "@chakra-ui/react";
import { FiArrowLeft } from "react-icons/fi";
import { useRouter } from "next/router";

export default function FourOhFour() {
	const router = useRouter();
	return (
		<VStack spacing="6" mt="24">
			<Heading as="h1" size="lg">
				Ooh &amp;$!#%. This page was not found.
			</Heading>
			<Avatar size="2xl" src="assets/images/memoji-surprised.png" bg="transparent" />
			<Text>But hey, the button below should work, I mean theoretically...</Text>
			<Button leftIcon={<FiArrowLeft />} onClick={() => router.back()}>
				Go back
			</Button>
		</VStack>
	);
}
