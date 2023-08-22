/** @type */
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
	ignorePatterns: ["dist", ".eslintrc.cjs"],
	overrides: [
		{
			files: ["*.test.ts", "*.test.tsx"],
			globals: {
				afterAll: true,
				afterEach: true,
				assert: true,
				assertType: true,
				beforeAll: true,
				beforeEach: true,
				describe: true,
				expect: true,
				expectTypeOf: true,
				it: true,
				suite: true,
				test: true,
				vi: true,
				vitest: true,
			},
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
	},
	settings: {
		react: {
			version: "detect",
		},
	},
};
