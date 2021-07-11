import { Button, Heading, VStack, Text } from "@chakra-ui/react";
import { FiArrowLeft } from "react-icons/fi";
import { useRouter } from "next/router";
import { Memoji } from "@/components/Memoji";

export default function FourOhFour() {
	const router = useRouter();
	return (
		<VStack spacing="6" mt="24" textAlign="center">
			<Heading as="h1" size="lg">
				Ooh &amp;$!#%. This page was not found.
			</Heading>
			<Memoji src="assets/images/memoji-surprised.png" />
			<Text>But hey, the button below should work, I mean theoretically...</Text>
			<Button leftIcon={<FiArrowLeft />} onClick={() => router.back()}>
				Go back
			</Button>
		</VStack>
	);
}
