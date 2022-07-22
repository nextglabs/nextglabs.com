import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "@/theme";

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/assets/images/favicon.png" />
        </Head>
        <body>
          {/* Make Color mode to persists when you refresh the page. */}
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
