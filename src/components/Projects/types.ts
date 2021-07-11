export interface Stack {
	categories?: string[];
	libraries?: string[];
	frameworks?: string[];
	languages?: string[];
	databases?: string[];
}

export interface ProjectUrls {
	githubUrl?: string;
	liveUrl?: string;
}

export interface Project extends Stack, ProjectUrls {
	title: string;
	description: string;
	featuredImage: {
		url: string;
		alt?: string;
	};
}
