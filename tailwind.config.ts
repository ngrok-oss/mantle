import baseConfig from "./packages/core/tailwind.preset";
import plugin from "tailwindcss/plugin";

export default {
	presets: [baseConfig],
	content: ["./packages/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
	plugins: [
		// firefox only modifier https://gist.github.com/samselikoff/b3c5126ee4f4e69e60b0af0aa5bfb2e7
		plugin(({ addVariant, e, postcss }) => {
			addVariant("firefox", ({ container, separator }) => {
				const isFirefoxRule = postcss.atRule({
					name: "supports",
					params: "(-moz-appearance:none)",
				});
				isFirefoxRule.append(container.nodes);
				container.append(isFirefoxRule);
				isFirefoxRule.walkRules((rule) => {
					rule.selector = `.${e(`firefox${separator}${rule.selector.slice(1).replaceAll("\\", "")}`)}`;
				});
			});
		}),
	],
};
