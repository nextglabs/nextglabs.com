module.exports = {
	webpack: (config, { isServer }) => {
		if (isServer) {
			require("./scripts/generate-sitemap");
			require("./scripts/generate-robots");
		}

		return config;
	},
	images: {
		domains: ["media.graphcms.com"],
	},
};
