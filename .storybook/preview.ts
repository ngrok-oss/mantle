import type { Preview } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-styling";

import "../packages/core/mantle.css";

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
};

export const decorators = [
	withThemeByClassName({
		themes: {
			Light: "light",
			Dark: "dark",
			"Light (High contrast)": "light high-contrast",
			"Dark (High contrast)": "dark high-contrast",
		},
		defaultTheme: "Light",
	}),
];

export default preview;
