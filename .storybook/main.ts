/**
 * @see https://storybook.js.org/docs/react/configure/overview#configure-your-storybook-project
 */

import path from "node:path";

import type { StorybookConfig } from "@storybook/react-vite";

const relativePath = (...pathSegments: string[]) => path.resolve(__dirname, ...pathSegments);

const fontsPath = (...pathSegments: string[]) => relativePath("..", "packages", "core", "fonts", ...pathSegments);

const config: StorybookConfig = {
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"@storybook/addon-styling",
	],
	core: {
		disableTelemetry: true,
		disableProjectJson: true,
		disableWebpackDefaults: true,
		disableWhatsNewNotifications: true,
	},
	docs: {
		autodocs: "tag",
	},
	framework: {
		name: "@storybook/react-vite",
		options: {
			builder: {
				viteConfigPath: relativePath("..", "vite.config.ts"),
			},
		},
	},
	staticDirs: [
		{
			from: fontsPath("euclid-square"),
			to: "/static",
		},
		{
			from: fontsPath("ibm-plex-mono"),
			to: "/static",
		},
	],
	stories: [relativePath("..", "packages", "**", "*.stories.@(js|jsx|ts|tsx|mdx)")],
};

export default config;
