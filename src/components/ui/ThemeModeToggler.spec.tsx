import { render, waitFor, screen } from "@/utils/testUtils";
import user from "@testing-library/user-event";
import { ColorModeProvider } from "@chakra-ui/react";
import React from "react";
import { ThemeModeToggler } from "./ThemeModeToggler";

const getTooltip = (nextMode: string) => screen.getByLabelText(new RegExp(`${nextMode} mode`, "i"));
const getToggleButton = (nextMode: string) => screen.getByLabelText(new RegExp(`Switch to ${nextMode} mode`, "i"));

describe("<ThemeModeToggler />", () => {
	it("Shows tooltip in light mode", async () => {
		const nextMode = "dark";
		render(
			<ColorModeProvider options={{ initialColorMode: "light" }}>
				<ThemeModeToggler />
			</ColorModeProvider>,
		);
		const button = getToggleButton(nextMode);
		user.hover(button);
		await waitFor(() => getTooltip(nextMode));
	});

	it("Toggles from light to dark & shows correct tooltip", async () => {
		render(
			<ColorModeProvider options={{ initialColorMode: "light" }}>
				<ThemeModeToggler />
			</ColorModeProvider>,
		);
		const switchToDarkButton = getToggleButton("light");
		user.click(switchToDarkButton);

		user.hover(switchToDarkButton);

		await waitFor(() => getTooltip("dark"));
	});
});
