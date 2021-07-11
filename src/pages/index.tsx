import { Divider } from "@chakra-ui/react";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { CallToAction } from "@/components/CallToAction";

const Index = () => (
	<>
		<Hero />
		<Divider mt="12" />
		<Projects />
		<CallToAction />
	</>
);

export default Index;
