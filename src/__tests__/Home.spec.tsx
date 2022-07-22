import user from "@testing-library/user-event";
import { waitFor, render, screen } from "@/utils/testUtils";
import HomePage from "@/pages/index";
import { useInView } from "react-intersection-observer";
import { useProjects } from "@/hooks/useProjects";

jest.mock("@/hooks/useProjects");
jest.mock("react-intersection-observer");
(useProjects as jest.Mock<any>).mockImplementation(() => ({ data: { projects: [] } }));
(useInView as jest.Mock<any>).mockImplementation(() => [null, true]);

// !Workaround for TypeError: env.window.matchMedia is not a function
// https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe("HomePage", () => {
  it("Overall page and navigation work", async () => {
    render(<HomePage />);
    expect(screen.getByText(/I'm Bassem/i)).toBeInTheDocument();
    expect(screen.queryByText(/Projects/i, { selector: "span" })).toBeInTheDocument();
    expect(screen.queryAllByText(/Let's Talk!/i)).toHaveLength(2);

    const aboutButton = screen.getByText(/I'm Bassem/i);
    expect(aboutButton).toBeInTheDocument();
    user.click(aboutButton);

    await waitFor(() => {
      screen.getByText(/About/i);
    });
  });
});
