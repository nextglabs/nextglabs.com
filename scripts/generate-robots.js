/**
 * Author: NextGLabs<https://github.com/nextglabs>
 * The purpose of this script is to generate a dynamic robots.txt file
 */
const fs = require("fs");

(async () => {
	const robots = `
    # AUTOMATICALLY GENERATED, DO NOT EDIT
    Sitemap: ${process.env.SITE_URL}/sitemap.xml

    User-agent: *
    Allow: /*
  `;

	fs.writeFileSync("public/robots.txt", robots);
})();
