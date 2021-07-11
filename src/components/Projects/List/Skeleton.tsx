import { SlideUpTransition } from "@/components/ui/animation/Transitions";
import { Box, Grid, GridItem, Skeleton, SkeletonText } from "@chakra-ui/react";

export const ProjectsListSkeleton = () => (
	<Grid width="100%" w="100%" rowGap="12" gap="4" templateColumns={["1fr", null, "repeat(2, 1fr)", "repeat(3, 1fr)"]}>
		{[1, 2, 3].map(index => {
			return (
				<GridItem key={index}>
					<SlideUpTransition order={index}>
						<Box maxW="100%" p="4">
							<Skeleton height="220px" rounded="3xl" mb="8" />
							<Skeleton height="20px" maxW="50%" mb="4" />
							<SkeletonText textAlign="center" noOfLines={3} spacing="2" mb="4" />
							<Skeleton width="80%" height="4" />
						</Box>
					</SlideUpTransition>
				</GridItem>
			);
		})}
	</Grid>
);
