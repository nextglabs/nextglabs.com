import NextDocument, { Head, Html, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/assets/images/favicon.png" />
          <script type="text/javascript" id="hs-script-loader" async defer src="//js-eu1.hs-scripts.com/27238631.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
