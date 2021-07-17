import { render, screen } from "@/utils/testUtils";
import FourOhFourPage from "@/pages/404";

describe("FourOhFourPage", () => {
	it("Shows text & button", async () => {
		render(<FourOhFourPage />);
		screen.getByText(/Oh &\$!#%. This page was not found./i);
		screen.getByText(/But hey, the button below should work, I mean theoretically.../i);
		screen.getByText(/Go to HomePage/i);
	});
});
