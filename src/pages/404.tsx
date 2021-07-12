import { useEffect, useState } from "react";
import { Button, Heading, VStack, Text } from "@chakra-ui/react";
import { FiArrowLeft } from "react-icons/fi";
import { useRouter } from "next/router";
import { Memoji } from "@/components/Memoji";

export default function FourOhFour() {
	const router = useRouter();
	const [buttonText, setButtonText] = useState("Go Back");

	useEffect(() => {
		if (window) {
			// Back to previous page is unlikely to work in this case.
			// Let's update the button text for better UX
			if (window.history.length <= 2) {
				setButtonText("Go to Homepage");
			}
		}
	}, []);

	const handleGoBack = () => {
		if (window) {
			if (window.history.length > 2) {
				return router.back();
			}
			// In this case the user came directly to an undefined page,
			// (ie: typing the wrong url in a new browser window)
			// So we redirect to the home page.
			return router.push("/");
		}
	};

	return (
		<VStack spacing="6" mt="24" textAlign="center">
			<Heading as="h1" size="lg">
				Oh &amp;$!#%. This page was not found.
			</Heading>
			<Memoji src="assets/images/memoji-surprised.png" />
			<Text variant="lighter">But hey, the button below should work, I mean theoretically...</Text>
			<Button leftIcon={<FiArrowLeft />} onClick={handleGoBack}>
				{buttonText}
			</Button>
		</VStack>
	);
}
