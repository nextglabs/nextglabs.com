import { ChakraProvider as BaseChakraProvider, ChakraProviderProps as BaseChakraProviderProps } from "@chakra-ui/provider";
import { theme as defaultTheme, Theme } from "@chakra-ui/theme";

const createChakraProvider = (providerTheme: Theme | (Omit<Theme, "components"> & { components: Record<string, any> })) => {
  return function ChakraProvider({ theme = providerTheme, ...restProps }: BaseChakraProviderProps) {
    return <BaseChakraProvider theme={theme} resetCSS {...restProps} />;
  };
};

export const ThemeProvider = createChakraProvider(defaultTheme);
