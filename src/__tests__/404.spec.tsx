import FourOhFourPage from "@/pages/404";
import { render, screen } from "@/utils/testUtils";

import userEvent from "@testing-library/user-event";
import mockRouter from "next-router-mock";

describe("404 Page", () => {
  it("Renders elements", async () => {
    render(<FourOhFourPage />);
    expect(screen.getByText("title")).toBeVisible();
    expect(screen.getByText("description")).toBeVisible();
    expect(screen.getByText("gotoHome")).toBeVisible();
    expect(screen.getAllByRole("img", { name: /Memoji Surprised/i })).toHaveLength(2);
  });

  it("Redirects to home page when button is clicked", async () => {
    render(<FourOhFourPage />);
    const button = screen.getByText("gotoHome");
    await userEvent.click(button);
    expect(mockRouter).toMatchObject({ asPath: "/", pathname: "/" });
  });

  it("Redirects to the previous page when history contains a previous page", () => {
    mockRouter.push("/previous-page?test=1");
    window.history.pushState({}, "");
    window.history.pushState({}, "");
    render(<FourOhFourPage />);
    userEvent.click(screen.getByText("goBack"));
    expect(mockRouter).toMatchObject({ asPath: "/previous-page?test=1", pathname: "/previous-page" });
  });
});
