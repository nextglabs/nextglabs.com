const url = process.env.NEXT_PUBLIC_SITE_URL;
const title = "Bassem Allani – Software Engineer and Content Creator";
const description = "FullStack Software Engineer who loves to teach and create innovative solutions.";

export const configSEO = {
	title,
	description,
	canonical: url,
	openGraph: {
		url,
		type: "website",
		title,
		locale: "en-US",
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
