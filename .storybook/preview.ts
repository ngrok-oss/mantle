import { withThemeByClassName } from "@storybook/addon-styling";
import type { Preview } from "@storybook/react";
import { theme } from "../components/theme-provider";
import "../assets/mantle.css";

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
			Light: theme("light"),
			Dark: theme("dark"),
			"Light (High contrast)": theme("light-high-contrast"),
			"Dark (High contrast)": theme("dark-high-contrast"),
		},
		defaultTheme: "Light",
	}),
];

export default preview;
