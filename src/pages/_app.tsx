import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { SWRConfig } from "swr";

// Polyfill
import "intersection-observer";

import theme from "@/theme";
import { GlobalFonts } from "@/theme/fonts";
import { configSEO } from "@/config/seo";
import { swrConfigOptions } from "@/config/swr";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <DefaultSeo {...configSEO} />
      <GlobalFonts />
      <SWRConfig value={swrConfigOptions}>
        <Component {...pageProps} />
      </SWRConfig>
    </ChakraProvider>
  );
}

export default appWithTranslation(MyApp);
