import { ChakraProvider } from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";

// Polyfill
import "intersection-observer";

import { configSEO } from "@/config/seo";
import theme from "@/theme";
import { GlobalFonts } from "@/theme/fonts";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <DefaultSeo {...configSEO} />
      <GlobalFonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default appWithTranslation(MyApp);
