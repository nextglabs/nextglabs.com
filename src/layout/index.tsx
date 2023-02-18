import { Box, Grid } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import { layoutDimensions } from "./dimensions";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";

interface LayoutProps {
  heroComponent?: React.ReactElement;
  heroImage?: StaticImageData;
}

export const Layout = ({ children, heroComponent, heroImage }: React.PropsWithChildren<LayoutProps>) => (
  <Grid gap="6" templateRows="auto 1fr auto" templateColumns="100%" height="100vh">
    <Box position="relative">
      <Header />
      {heroImage && (
        <Image src={heroImage} alt="Hero background image" quality={100} fill priority sizes="100vw" style={{ objectFit: "cover", zIndex: -1 }} />
      )}
      <Box px={layoutDimensions.px}>{heroComponent}</Box>
    </Box>
    <Main>{children}</Main>
    <Footer />
  </Grid>
);
