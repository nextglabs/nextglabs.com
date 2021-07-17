import { Center, Flex, Heading, Image, Text, Link, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import { SOCIAL } from "@/config/social";

export const CallToAction = () => (
	<Center>
		<Flex mt="200px" mb="100px" py="12" position="relative">
			<Image
				width="100%"
				src={useColorModeValue("assets/images/blob.svg", "assets/images/blob-dark.svg")}
				alt="work-with-me"
				position="absolute"
				top="-180px"
				right="200px"
			/>
			<Image
				src="assets/images/memoji-celebrate.png"
				alt="celebrate-together"
				width="185px"
				position="absolute"
				top="-135px"
				right="150px"
				transform="scaleX(-1)"
			/>
			<Text
				zIndex="10"
				transform="translateX(32px) translateY(-28px) rotate(-28deg)"
				color={useColorModeValue("cyan.600", "cyan.200")}
			>
				Catcha!
			</Text>
			<Heading zIndex="10" as="h3" size="xl">
				Got a project?{" "}
				<Text
					as="span"
					fontSize="2x-large"
					fontWeight="bold"
					textDecoration="underline"
					_hover={{ color: useColorModeValue("purple.400", "orange.200") }}
				>
					<Link as={NextLink} href={`mailto:${SOCIAL.EMAIL}`}>
						Let&apos;s Talk!
					</Link>
				</Text>
			</Heading>
		</Flex>
	</Center>
);
