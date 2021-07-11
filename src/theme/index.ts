import { extendTheme } from "@chakra-ui/react";
// Custom Theme config
import { config } from "./config";
// Global style overrides
import { styles } from "./styles";
// Global fonts overrides
import { fonts } from "./fonts";
// Component style overrides
import { Button, Link, Text } from "./components";

const overrides = {
	config,
	styles,
	fonts,
	components: {
		Button,
		Link,
		Text,
	},
};

export default extendTheme(overrides);
