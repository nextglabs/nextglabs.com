import { useColorMode, useColorModeValue, IconButton, IconButtonProps, Tooltip } from "@chakra-ui/react";
import { FiMoon, FiSun } from "react-icons/fi";
import useSound from "use-sound";

type ThemeModeTogglerProps = Omit<IconButtonProps, "aria-label">;

export const ThemeModeToggler: React.FC<ThemeModeTogglerProps> = props => {
	const { toggleColorMode } = useColorMode();
	const text = useColorModeValue("dark", "light");
	const SwitchIcon = useColorModeValue(FiMoon, FiSun);

	const [play] = useSound("/assets/audio/theme-mode-toggle-sound.mp3", {
		volume: 0.05,
		sprite: {
			on: [0, 300],
			off: [500, 300],
		},
	});

	const handleClick = () => {
		text === "dark" ? play({ id: "on" }) : play({ id: "off" });
		toggleColorMode();
	};

	return (
		<Tooltip label={text === "dark" ? "Dark mode" : "Light mode"} aria-label="A tooltip">
			<IconButton
				size="md"
				fontSize="md"
				variant="ghost"
				color="current"
				marginLeft="2"
				onClick={handleClick}
				icon={<SwitchIcon />}
				aria-label={`Switch to ${text} mode`}
				_hover={{
					bg: useColorModeValue("gray.200", "gray.900"),
				}}
				{...props}
			/>
		</Tooltip>
	);
};
