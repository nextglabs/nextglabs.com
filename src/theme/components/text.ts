import { mode } from "@chakra-ui/theme-tools";

export const Text = {
	variants: {
        light: props => ({
            color: mode("blackAlpha.900", "whiteAlpha.900")(props),
		}),
        lighter: props => ({
            color: mode("gray.600", "gray.300")(props),
        }),
	},
};
