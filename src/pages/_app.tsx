import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import localFont from "@next/font/local";

// Polyfill
import "intersection-observer";

import { configSEO } from "@/config/seo";
import theme from "@/theme";

import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "@/components/ThemeProvider";

export const circluarStd = localFont({
  src: [
    {
      path: "./fonts/CircularStd-book.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/CircularStd-medium.woff2",
      weight: "500",
      style: "medium",
    },
    {
      path: "./fonts/CircularStd-bold.woff2",
      weight: "700",
      style: "bold",
    },
    {
      path: "./fonts/CircularStd-bold.woff2",
      weight: "900",
      style: "black",
    },
  ],
  display: "swap",
  fallback: ["system-ui, sans-serif"],
  adjustFontFallback: "Arial",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <DefaultSeo {...configSEO} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
