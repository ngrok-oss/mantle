import baseConfig from "./tailwind.base.config";

export default {
	presets: [baseConfig],
	content: ["./src/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
};
