import { playwright, type PlaywrightProviderOptions } from "@vitest/browser-playwright";
import { configDefaults, defineConfig } from "vitest/config";

type ContextOptions = Pick<PlaywrightProviderOptions, "contextOptions">["contextOptions"];

// Grant clipboard permissions so browser tests can read/write the real clipboard
const contextOptions = {
	permissions: ["clipboard-read", "clipboard-write"],
} as const satisfies ContextOptions;

export default defineConfig({
	test: {
		reporters: ["verbose"],
		projects: [
			{
				test: {
					name: "unit",
					environment: "happy-dom",
					include: ["**/*.test.{ts,tsx}"],
					exclude: [...configDefaults.exclude, "**/*.browser.test.{ts,tsx}"],
					setupFiles: "./vitest.setup.ts",
					css: true,
				},
			},
			{
				test: {
					name: "browser",
					include: ["**/*.browser.test.{ts,tsx}"],
					browser: {
						enabled: true,
						screenshotFailures: false,
						headless:
							!process.env.DISABLE_HEADLESS ||
							process.env.CI === "1" ||
							/true/i.test(process.env.CI ?? ""),
						provider: process.env.PLAYWRIGHT_WS_ENDPOINT
							? playwright({
									connectOptions: { wsEndpoint: process.env.PLAYWRIGHT_WS_ENDPOINT },
									contextOptions,
								})
							: playwright({ contextOptions }),
						instances: [{ browser: "chromium" }],
					},
					setupFiles: "./vitest.setup.ts",
				},
			},
		],
	},
});
