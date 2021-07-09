import { Grid } from "@chakra-ui/react";
import { Main } from "./Main";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({ children }) => {
	return (
		<Grid gap="6" templateRows="auto 1fr auto" templateColumns="100%" height="100vh">
			<Header />
			<Main>{children}</Main>
			<Footer />
		</Grid>
	);
};
