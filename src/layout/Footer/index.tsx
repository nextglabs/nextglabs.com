import { Link, Box, Flex, FlexProps, Text } from "@chakra-ui/react";

const currentYear = new Date().getFullYear();

export const Footer = (props: FlexProps) => (
	<Box p="6" bgColor="gray.900" as="footer" {...props}>
		<Flex w={["90%", "85%", "80%"]} mx="auto" justifyContent="space-between">
			<Text fontSize="sm" color="whiteAlpha.800">
				&copy; Copyright Nextglabs {currentYear}.
			</Text>
			<Text fontSize="sm" color="whiteAlpha.800">
				Created with ❤️ using React &amp; NextJS. {/* TODO: replace with dynamic url from API */}
				<Link color="blue.100" href="https://github.com/nextglabs/nextglabs-next">View Source.</Link>
			</Text>
		</Flex>
	</Box>
);
