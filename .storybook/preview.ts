import type { Preview } from "@storybook/react";
import { setupTailwindSelectorStrategy } from "./setup-tailwind-selector-strategy";

import "../src/assets/fonts/fonts.css";

setupTailwindSelectorStrategy();

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

export default preview;
