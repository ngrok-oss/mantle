import baseConfig from "./packages/core/tailwind.preset";

export default {
	presets: [baseConfig],
	content: ["./packages/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
};
