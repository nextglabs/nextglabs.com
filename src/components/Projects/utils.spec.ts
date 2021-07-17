import { getTagColorScheme, sliceItems } from "./utils";

describe("Projects utils", () => {
	it("Returns correct values", () => {
		const result = sliceItems(["React", "GraphQL", "NodeJS", "TypeScript"], 2);
		expect(result).toEqual({
			displayedItems: ["React", "GraphQL"],
			remainingItems: 2,
		});
	});

	test.each([
		["FRONTEND", "green"],
		["BACKEND", "blue"],
		["FULLSTACK", "orange"],
		["DESIGN", "purple"],
		["AI", "red"],
		["MOBILE", "cyan"],
		["ANYTHING ELSE", undefined],
	])(".for %s it returns %s", (tag, color) => {
		expect(getTagColorScheme(tag)).toEqual(color);
	});
});
