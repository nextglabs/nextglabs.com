import { mode } from "@chakra-ui/theme-tools";

export const Link = {
	variants: {
		colored: props => ({
			color: mode("cyan.600", "cyan.200")(props),
		}),
	},
};
