import { SOCIAL } from "@/config/social";
import { Link, Box, Flex, FlexProps, Text } from "@chakra-ui/react";
import { layoutDimensions } from "../dimensions";

const currentYear = new Date().getFullYear();

export const Footer = (props: FlexProps) => (
	<Box mt="8" py="8" px={layoutDimensions.px} bgColor="transparent" as="footer" {...props}>
		<Flex w={layoutDimensions.width} mx="auto" justifyContent="space-between">
			<Text fontSize="sm">&copy; Copyright Nextglabs {currentYear}.</Text>
			<Text fontSize="sm" textAlign="right">
				Created with ❤️ using React &amp; NextJS.{" "}
				<Link variant="colored" href={SOCIAL.GITHUB_PORTFOLIO_URL} isExternal>
					View Source.
				</Link>
			</Text>
		</Flex>
	</Box>
);
