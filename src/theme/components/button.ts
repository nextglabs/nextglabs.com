import { mode } from "@chakra-ui/theme-tools";

export const Button = {
	defaultProps: {
		variant: "solid",
	},
	baseStyle: {
		borderRadius: "full",
	},
	variants: {
		solid: props => ({
			bg: mode("black", "white")(props),
			color: mode("white", "black")(props),
			_hover: {
				bg: mode("gray.700", "gray.200")(props),
				transform: "translateY(-2px)",
				transition: "all 0.3 cubic-bezier(0.65,0.05,0.36,1)"
			},
		}),
		link: {
			fontWeight: "medium"
		}, 
		ghost: {
			fontWeight: "medium"
		}
	},
};
