import { Divider } from "@chakra-ui/react";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { CallToAction } from "@/components/CallToAction";
import { Services } from "@/components/Services";

const Index = () => (
  <>
    <Hero />
    <Divider mt="12" />
    <Projects />
    <Services />
    <CallToAction />
  </>
);

export default Index;
