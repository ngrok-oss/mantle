import reactConfig from "@cfg/eslint-config/react.js";

/** @type {import('typescript-eslint').Config} */
export default [
	...reactConfig,
	{
		ignores: ["server-build/**"],
	},
];
