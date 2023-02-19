import { ChakraProvider } from "@chakra-ui/react";
import { render, RenderOptions } from "@testing-library/react";
import { FC, PropsWithChildren, ReactElement } from "react";

// Polyfill
import "intersection-observer";

import theme from "@/theme";

const Providers: FC<PropsWithChildren> = ({ children }) => (
  <ChakraProvider resetCSS theme={theme}>
    {children}
  </ChakraProvider>
);

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) => render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from "@testing-library/react";
// override render method
export { customRender as render };
