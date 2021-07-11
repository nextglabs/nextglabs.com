export const sliceItems = (array: string[], maxItems: number) => {
	if (!array) return { displayedItems: [], remainingItems: 0 };

	const displayedItems = array.slice(0, maxItems);
	const remainingItems = array.length - displayedItems.length;
	return {
		displayedItems,
		remainingItems,
	};
};

export const getTagColorScheme = (title: string) => {
	switch (title.toLowerCase()) {
		case "frontend":
			return "green";
		case "backend":
			return "blue";
		case "fullstack":
			return "orange";
		case "design":
			return "purple";
		case "ai":
			return "red";
		case "mobile":
			return "cyan";
		default:
			break;
	}
};
