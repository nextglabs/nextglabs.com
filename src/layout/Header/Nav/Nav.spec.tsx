import { useRouter } from "next/router";
import { render, fireEvent, waitFor, screen } from "@/utils/testUtils";
import { HEADER_SOCIAL_ICONS } from "@/config/social";
import { NAV } from "@/config/nav";
import { Nav } from ".";

jest.mock("next/router");
const mockedUseRouter = useRouter as jest.Mock<any>;

describe("<Nav />", () => {
	describe(".on mobile", () => {
		it("Displays correct items", () => {
			render(<Nav isSmall />);

			// Menu Toggle
			expect(screen.getByRole("button", { name: /open menu/i })).toBeVisible();
			expect(screen.queryByTestId("desktop-nav")).not.toBeInTheDocument();

			// Social Icons + Theme Mode Toggle
			HEADER_SOCIAL_ICONS.forEach(item => {
				screen.getByRole("link", { name: item.ariaLabel });
			});
			expect(screen.getByTestId("theme-mode-toggler"));
		});

		it("Toggle Nav Menu & disables current page link", async () => {
			// Simulate that we're currently on a specific page
			const currentPageIndex = 0;
			const currentPage = NAV[currentPageIndex];
			mockedUseRouter.mockImplementation(() => ({ asPath: currentPage.href }));

			render(<Nav isSmall />);
			const button = screen.getByLabelText(/open menu/i);
			fireEvent.click(button);

			await waitFor(() => {
				NAV.forEach((item, pageIndex) => {
					const menuItem = screen.getByRole("menuitem", { name: item.label });

					// Current page link should be disabled
					if (pageIndex === currentPageIndex) {
						expect(menuItem).toBeDisabled();
					}
				});
			});
		});
	});

	describe(".on desktop", () => {
		it("Displays correct items", () => {
			render(<Nav isSmall={false} />);

			// Menu Toggle
			expect(screen.queryByRole("button", { name: /open menu/i })).not.toBeInTheDocument();
			expect(screen.getByTestId("desktop-nav")).toBeInTheDocument();

			// Social Icons + Theme Mode Toggle
			HEADER_SOCIAL_ICONS.forEach(item => {
				screen.getByRole("link", { name: item.ariaLabel });
			});
			expect(screen.getByTestId("theme-mode-toggler"));
		});

		it("Show linkable nav items", async () => {
			// Simulate that we're currently on a specific page
			const currentPageIndex = 0;
			const currentPage = NAV[currentPageIndex];
			mockedUseRouter.mockImplementation(() => ({ asPath: currentPage.href }));

			render(<Nav isSmall={false} />);

			NAV.forEach(item => {
				const menuItem = screen.getByText(item.label);
				expect(menuItem.closest("a")).toHaveAttribute("href", item.href);
			});
		});
	});
});
