import { gql } from "graphql-request";

export const GET_PROJECTS_QUERY = gql`
	query getProjects {
		projects(orderBy: updatedAt_ASC) {
			id
			title
			description

			liveUrl
			githubUrl

			frameworks
			languages
			libraries
			databases
			categories

			featuredImage {
				id
				url
				alt
			}

			updatedAt
		}
	}
`;
