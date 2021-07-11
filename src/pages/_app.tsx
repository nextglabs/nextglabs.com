import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

import theme from "@/theme";
import { GlobalFonts } from "@/theme/fonts";
import { Layout } from "@/layout";
import { configSEO } from "@/config/seo";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider resetCSS theme={theme}>
			<DefaultSeo {...configSEO} />
			<GlobalFonts />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ChakraProvider>
	);
}

export default MyApp;
