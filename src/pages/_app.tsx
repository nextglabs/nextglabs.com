import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";

// Polyfill
import "intersection-observer";

import { ThemeProvider } from "@/components/ThemeProvider";
import { configSEO } from "@/config/seo";
import theme from "@/theme";
import { Analytics } from "@vercel/analytics/react";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <DefaultSeo {...configSEO} />
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
