import { SOCIAL } from "@/config/social";
import { render, screen } from "@/utils/testUtils";
import { CallToAction } from ".";

describe("<CallToAction />", () => {
  it("Renders title & clickable email", () => {
    render(<CallToAction />);
    screen.getByText("cta.text");
    const link = screen.getByText("cta.link");
    expect(link).toHaveAttribute("href", `mailto:${SOCIAL.EMAIL}`);
  });
});
