const fs = require("fs");
const globby = require("globby");
const prettier = require("prettier");

const pagesPath = "./src/pages";

(async () => {
	const prettierConfig = await prettier.resolveConfig("./.prettierrc.js");
	const pages = await globby([
		`${pagesPath}/**/*{.tsx,.jsx,.js}`,
		`!${pagesPath}/_*{.tsx,.jsx,.js}`,
		`!${pagesPath}/api`,
	]);

	const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
			.map(page => {
				const path = page.replace(pagesPath, "").replace(".tsx", "");
				const route = path === "/index" ? "" : path;
				return `
                    <url>
                        <loc>${`${process.env.SITE_URL}${route}`}</loc>
                    </url>
                `;
			})
			.join("")}
    </urlset>
  `;

	fs.writeFileSync(
		"public/sitemap.xml",
		prettier.format(sitemap, {
			...prettierConfig,
			parser: "html",
		}),
	);
})();
