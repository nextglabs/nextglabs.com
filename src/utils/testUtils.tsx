import React, { FC, PropsWithChildren, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { SWRConfig } from "swr";
import { ChakraProvider } from "@chakra-ui/react";

// Polyfill
import "intersection-observer";

import { swrConfigOptions } from "@/config/swr";
import theme from "@/theme";

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <SWRConfig value={swrConfigOptions}>
      <ChakraProvider resetCSS theme={theme}>
        {children}
      </ChakraProvider>
    </SWRConfig>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) => render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
