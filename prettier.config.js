/** @type {import("prettier").Config} */
const config = {
	arrowParens: "always",
	plugins: ["@ianvs/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"],
	printWidth: 120,
	semi: true,
	singleQuote: false,
	tabWidth: 2,
	trailingComma: "all",
	useTabs: true,
	tailwindFunctions: ["cva"],
};

export default config;
