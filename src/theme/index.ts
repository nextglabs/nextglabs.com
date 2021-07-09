import { extendTheme } from "@chakra-ui/react";
// Custom Theme config
import { config } from "./config";
// Global style overrides
import { styles } from "./styles";
// Global fonts overrides
import { fonts } from "./fonts";
// Component style overrides
import { Button } from "./components/button";

const overrides = {
	config,
	styles,
	fonts,
	components: {
		Button,
		// Other components go here
	},
};

export default extendTheme(overrides);
