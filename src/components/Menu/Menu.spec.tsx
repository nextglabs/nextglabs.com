import { render, screen } from "@/utils/testUtils";
import { MenuList } from "./List";
import { MenuItem } from "./Item";
import { Menu } from "@chakra-ui/react";

describe("<Menu />", () => {
  it("renders without crashing", () => {
    render(
      <Menu isOpen>
        <MenuList>
          <MenuItem>Test</MenuItem>
        </MenuList>
      </Menu>,
    );
    expect(screen.getByRole("menu")).toBeInTheDocument();
    expect(screen.getByText(/Test/i)).toBeVisible();
  });
});
