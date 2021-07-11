import { Center, Text, Box, Heading } from "@chakra-ui/react";
import { layoutDimensions } from "@/layout/dimensions";
import { ProjectsList } from "./List";

export const Projects = () => (
	<Center id="projects">
		<Box w={layoutDimensions.width} my="12">
			<Box pb="12">
				<Heading as="h3" size="xl">
					<span className="underline">Projects</span>
				</Heading>
				<Text mt="4" variant="lighter">
					A glimpse of some of the best commercial and personal projects I have built.
				</Text>
			</Box>
			<ProjectsList />
		</Box>
	</Center>
);
