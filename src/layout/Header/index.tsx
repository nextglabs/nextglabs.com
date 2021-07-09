import { Box, BoxProps } from "@chakra-ui/react";
import { TopNav } from "./TopNav";

export const Header = (props: BoxProps) => (
	<Box as="header" {...props}>
		<TopNav />
	</Box>
);
