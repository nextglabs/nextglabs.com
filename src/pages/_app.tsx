import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { SWRConfig } from "swr";

import theme from "@/theme";
import { GlobalFonts } from "@/theme/fonts";
import { Layout } from "@/layout";
import { configSEO } from "@/config/seo";
import { swrConfigOptions } from "@/config/swr";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider resetCSS theme={theme}>
			<DefaultSeo {...configSEO} />
			<GlobalFonts />
			<SWRConfig value={swrConfigOptions}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</SWRConfig>
		</ChakraProvider>
	);
}

export default MyApp;
