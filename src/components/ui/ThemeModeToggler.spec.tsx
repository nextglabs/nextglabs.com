import { render, waitFor, screen } from "@/utils/testUtils";
import user from "@testing-library/user-event";
import { ColorModeProvider } from "@chakra-ui/react";
import React from "react";
import { ThemeModeToggler } from "./ThemeModeToggler";

const getTooltip = (nextMode: string) => screen.getByLabelText(new RegExp(`${nextMode} mode`, "i"));
const getToggleButton = (nextMode: string) => screen.getByRole("button", { name: new RegExp(`Switch to ${nextMode} mode`, "i") });

describe("<ThemeModeToggler />", () => {
  const initialColorMode = "light";
  const nextMode = "dark";
  it("Shows tooltip in light mode", async () => {
    render(
      <ColorModeProvider options={{ initialColorMode }}>
        <ThemeModeToggler />
      </ColorModeProvider>,
    );
    const button = getToggleButton(nextMode);
    user.hover(button);
    await waitFor(() => getTooltip(nextMode));
  });

  it("Toggles from light to dark & shows correct tooltip", async () => {
    render(
      <ColorModeProvider options={{ initialColorMode }}>
        <ThemeModeToggler />
      </ColorModeProvider>,
    );
    const switchToDarkButton = getToggleButton(nextMode);
    user.click(switchToDarkButton);

    user.hover(switchToDarkButton);

    await waitFor(() => getTooltip(nextMode));
  });
});
