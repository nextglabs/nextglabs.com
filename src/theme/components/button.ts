export const Button = {
  defaultProps: {
    variant: "solid",
  },
  baseStyle: {
    borderRadius: "full",
  },
  variants: {
    solid: {
      bg: "white",
      color: "black",
      _hover: {
        bg: "gray.200",
        transform: "translateY(-2px)",
        transition: "all 0.3 cubic-bezier(0.65,0.05,0.36,1)",
      },
    },
    link: {
      fontWeight: "medium",
    },
    ghost: {
      fontWeight: "medium",
    },
  },
};
