import { SOCIAL } from "@/config/social";
import { render, screen } from "@/utils/testUtils";
import { CallToAction } from ".";

describe("<CallToAction />", () => {
	it("Renders title & clickable email", () => {
		render(<CallToAction />);
		screen.getByText(/got a project\?/i);
		const link = screen.getByText(/let\'s talk!/i);
		expect(link.closest("a")).toHaveAttribute("href", `mailto:${SOCIAL.EMAIL}`);
	});
});
