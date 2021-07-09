const title = "Bassem Allani – Software Engineer and Content Creator";
const description = "FullStack Software Engineer who loves to teach and create innovative solutions.";
const url = "https://nextglabs.vercel.app";

export const configSEO = {
	title,
	description,
	canonical: url,
	openGraph: {
		url: url,
		type: "website",
		title,
		locale: "en-CA",
		description,
		images: [
			{
				url: `${url}/images/banner.png`,
				alt: title,
				width: 1280,
				height: 720,
			},
		],
	},
	twitter: {
		site: "@nextglabs",
		handle: "@nextglabs",
		cardType: "summary_large_image",
	},
};
