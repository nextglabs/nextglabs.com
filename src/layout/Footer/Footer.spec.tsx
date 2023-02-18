import { SOCIAL } from "@/config/social";
import { render, screen } from "@/utils/testUtils";
import { Footer } from ".";

describe("<Footer />", () => {
  it("Displays copyright & message", () => {
    render(<Footer />);
    screen.getByText(/Copyright NextGLabs/i);
    screen.getByText(new RegExp(new Date().getFullYear().toString(), "u"));
    screen.getByText("footer.creation");
  });

  it("Links to repository", () => {
    render(<Footer />);
    const link = screen.getByText("footer.source");
    expect(link).toHaveAttribute("href", SOCIAL.GITHUB_PORTFOLIO_URL);
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("Links to imprint page", () => {
    render(<Footer />);
    const link = screen.getByText("footer.imprint");
    expect(link).toHaveAttribute("href", "/imprint");
  });
});
