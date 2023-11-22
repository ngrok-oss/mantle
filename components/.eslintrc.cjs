/** @type {import('eslint').Linter.Config} */
module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/strict-type-checked",
		"plugin:react-hooks/recommended",
		"plugin:@typescript-eslint/stylistic-type-checked",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"plugin:storybook/recommended",
		"prettier", // must be last
	],
	ignorePatterns: ["storybook-static", ".eslintrc.cjs"],
	overrides: [
		{
			files: [".storybook/**/*.{ts,js,html}", "./**/*.stories.{ts,tsx}"],
			extends: ["plugin:storybook/recommended"],
		},
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		project: ["./tsconfig.json", "./tsconfig.node.json"],
		tsconfigRootDir: __dirname,
	},
	plugins: [],
	rules: {
		"@typescript-eslint/consistent-type-definitions": ["error", "type"],
		"@typescript-eslint/ban-types": "off",
		"@typescript-eslint/no-unnecessary-condition": "off",
	},
	settings: {
		react: {
			version: "detect",
		},
	},
};
