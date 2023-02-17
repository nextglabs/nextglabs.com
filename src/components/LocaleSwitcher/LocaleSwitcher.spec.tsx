import { fireEvent, render, screen, waitFor } from "@/utils/testUtils";
import { LocaleSwitcher } from ".";
import mockRouter from "next-router-mock";

describe("<LocaleSwitcher />", () => {
  it("renders correctly", async () => {
    mockRouter.locales = ["en", "de"];
    mockRouter.locale = "en";
    render(<LocaleSwitcher />);
    fireEvent.click(screen.getByRole("button", { name: /Language Options/i }));

    await waitFor(() => {
      expect(screen.getByText(/German/i)).toBeVisible();
    });
    expect(screen.getByText(/English/i)).toBeDisabled(); // active locale
  });
});
