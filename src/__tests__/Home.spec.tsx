import user from "@testing-library/user-event";
import { waitFor, render, screen } from "@/utils/testUtils";
import HomePage from "@/pages/index";
import { useInView } from "react-intersection-observer";
import { useProjects } from "@/hooks/useProjects";

jest.mock("@/hooks/useProjects");
jest.mock("react-intersection-observer");
(useProjects as jest.Mock<any>).mockImplementation(() => ({ data: { projects: [] } }));
(useInView as jest.Mock<any>).mockImplementation(() => [null, true]);

describe("HomePage", () => {
  it("Overall page and navigation work", async () => {
    render(<HomePage />);
    expect(screen.getByText(/I'm Bassem/i)).toBeInTheDocument();
    expect(screen.getByText(/Projects/i, { selector: "span" })).toBeInTheDocument();
    expect(screen.getAllByText(/Let's Talk!/i)).toHaveLength(2);

    const aboutButton = screen.getByText(/I'm Bassem/i);
    expect(aboutButton).toBeInTheDocument();
    user.click(aboutButton);

    await waitFor(() => {
      screen.getByText(/About/i);
    });
  });
});
