import { SOCIAL } from "@/config/social";
import { render } from "@/utils/testUtils";
import { axe } from "jest-axe";
import { CallToAction } from ".";

describe("<CallToAction />", () => {
	it("Renders title & clickable email", () => {
		const { getByText } = render(<CallToAction />);
		getByText(/got a project\?/i);
		const link = getByText(/let\'s talk!/i);
		expect(link.closest("a")).toHaveAttribute("href", `mailto:${SOCIAL.EMAIL}`);
	});

	it("Is accessible", async () => {
		const { container } = render(<CallToAction />);
		const results = await axe(container);
		expect(results).toHaveNoViolations();
	});
});
