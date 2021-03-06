import { mode } from "@chakra-ui/theme-tools";

export const styles = {
  global: (props) => ({
    body: {
      color: mode("gray.800", "whiteAlpha.900")(props),
      bg: mode("white", "black")(props),
      lineHeight: "base",
    },
    ".underline": {
      padding: "0 8px 10px 6px",
      backgroundImage: "url('/assets/images/underline.svg')",
      backgroundPosition: "50% 100%",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
    },
    li: {
      listStylePosition: "outside",
      marginLeft: "18px",
      marginBottom: "4px",
    },
  }),
};
