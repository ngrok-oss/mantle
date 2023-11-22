import baseConfig from "@ngrok/mantle/core/tailwind.preset";

export default {
	presets: [baseConfig],
	content: ["node_modules/@ngrok/mantle/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
};
