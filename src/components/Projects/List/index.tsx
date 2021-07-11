import { Grid } from "@chakra-ui/react";
import { ProjectsListItem } from "./Item";

interface ProjectsListProps {
	items: any[];
}
export const ProjectsList = ({ items = [] }: ProjectsListProps) => (
	<Grid
		w="100%"
		justifyItems="center"
		alignItems="center"
		rowGap="12"
		gap="4"
		templateColumns={["1fr", null, "repeat(2, 1fr)", "repeat(3, 1fr)"]}
	>
		{items.length ? items.map((item, index) => <ProjectsListItem key={index} order={index} data={item} />) : null}
	</Grid>
);
