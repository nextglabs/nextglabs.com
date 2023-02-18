import HomePage from "@/pages/index";
import { render, screen, within } from "@/utils/testUtils";

describe("HomePage", () => {
  it("Renders home page elements", async () => {
    render(<HomePage projects={[]} />);

    // HEADER
    const header = screen.getByTestId("header");
    expect(header).toBeVisible();
    expect(within(header).getByText(/NextGLabs/i)).toBeVisible();

    // HERO
    expect(screen.getByText("hero.title")).toBeVisible();
    expect(screen.getByText("hero.subtitle")).toBeVisible();
    expect(screen.getByText("hero.buttons.primary")).toBeVisible();
    expect(screen.getByText("hero.buttons.secondary")).toBeVisible();
    // eslint-disable-next-line testing-library/no-node-access
    expect(screen.getByText("hero.buttons.secondary").closest("a")).toHaveAttribute("href", "/about");
    expect(screen.getByText("cta.link")).toBeInTheDocument();

    // PROJECTS
    expect(screen.getByText("projects.title")).toBeVisible();
    expect(screen.getByText("projects.description")).toBeVisible();

    // TICKER
    expect(screen.getByTestId("ticker")).toBeVisible();

    // SERVICES
    expect(screen.getByText("services.title")).toBeVisible();
    expect(screen.getByText("services.description")).toBeVisible();

    // CTA
    expect(screen.getByText("cta.text")).toBeInTheDocument();
    expect(screen.getByText("cta.link")).toBeInTheDocument();

    // FOOTER
    const footer = screen.getByTestId("footer");
    expect(within(footer).getByText(/Copyright/i)).toBeVisible();
    expect(within(footer).getByText(/NextGLabs/i)).toBeVisible();
  });
});
