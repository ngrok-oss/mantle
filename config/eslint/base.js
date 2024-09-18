import turboPlugin from "eslint-plugin-turbo";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
	{
		// Globally ignored files
		ignores: [
			"**/.eslintrc.cjs",
			"**/*.config.js",
			"**/*.config.cjs",
			"pnpm-lock.yaml",
			"dist",
			"**/build",
			"**/public/build",
			"**/playwright-report",
		],
	},
	{
		plugins: {
			import: (await import("eslint-plugin-import-x")).default,
		},
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
	},
	{
		files: ["**/*.js", "**/*.ts", "**/*.tsx"],
		plugins: {
			turbo: turboPlugin,
		},
		extends: [
			...tseslint.configs.recommended,
			...tseslint.configs.stylistic,
			...tseslint.configs.recommendedTypeChecked,
		],
		rules: {
			...turboPlugin.configs.recommended.rules,
			"@typescript-eslint/no-non-null-assertion": "off",
			"prefer-const": "off",
			"@typescript-eslint/no-empty-function": "off",
			"@typescript-eslint/no-explicit-any": "off",
			"@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
			"@typescript-eslint/consistent-type-definitions": "off",
			"@typescript-eslint/array-type": "off",
			"@typescript-eslint/consistent-indexed-object-style": "off",
			"@typescript-eslint/prefer-function-type": "off",
			"@typescript-eslint/ban-types": "off",
			"@typescript-eslint/prefer-for-of": "off",

			// new stuff
			"@typescript-eslint/no-redundant-type-constituents": "off",
			"@typescript-eslint/require-await": "off",
			"@typescript-eslint/unbound-method": ["warn", { ignoreStatic: true }],

			// this is mostly library code, so some functions use and return lots of any
			// this should be allowed
			"@typescript-eslint/no-unsafe-call": "off",
			"@typescript-eslint/no-unsafe-member-access": "off",
			"@typescript-eslint/no-unsafe-return": "off",
			"@typescript-eslint/no-unsafe-assignment": "off",
			"@typescript-eslint/no-unsafe-argument": "off",
			"@typescript-eslint/restrict-template-expressions": "off",
			"@typescript-eslint/no-misused-promises": "off",
			"@typescript-eslint/no-floating-promises": "off",
			"@typescript-eslint/no-unnecessary-type-assertion": "warn",
		},
	},
	{
		linterOptions: { reportUnusedDisableDirectives: true },
		languageOptions: { parserOptions: { project: true } },
	},
);
