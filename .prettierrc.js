/** @type {import("prettier").Config} */
export default {
	arrowParens: "always",
	plugins: ["prettier-plugin-tailwindcss", "prettier-plugin-astro"],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
	printWidth: 120,
	semi: true,
	singleQuote: false,
	tabWidth: 2,
	trailingComma: "all",
	useTabs: true,
};
