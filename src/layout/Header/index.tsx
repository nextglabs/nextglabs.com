import { Box, BoxProps, useBreakpointValue } from "@chakra-ui/react";
import { Nav } from "./Nav";

export const Header = (props: BoxProps) => {
	// Dynamically determine when screen is small (ie: from base up to _but not including_ md` )
	const isSmall = useBreakpointValue({ base: true, md: false });
	return (
		<Box as="header" {...props}>
			<Nav isSmall={isSmall} />
		</Box>
	);
};
