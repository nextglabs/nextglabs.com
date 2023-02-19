import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";

// Polyfill
import "intersection-observer";

import { configSEO } from "@/config/seo";
import theme from "@/theme";

import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "@/components/ThemeProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <DefaultSeo {...configSEO} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
