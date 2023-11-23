import babel from "@rollup/plugin-babel";
import extensions from "rollup-plugin-extensions";
import typescript from "@rollup/plugin-typescript";
import copy from "rollup-plugin-copy";
// import { dts } from "rollup-plugin-dts";
import packageJson from "./package.json" assert { type: "json" };

const { name, version } = packageJson;

const config = [
	{
		input: ["./components/index.tsx", "./components/config/tailwind.preset.ts"],
		output: {
			dir: "dist",
			format: "esm",
			sourcemap: true,
			banner: createBanner(),
		},
		plugins: [
			extensions({ extensions: [".ts", ".tsx"] }),
			babel({
				babelHelpers: "bundled",
				exclude: "node_modules",
				presets: [["@babel/preset-env", { loose: true }], "@babel/preset-react", "@babel/preset-typescript"],
				plugins: ["babel-plugin-dev-expression"],
				extensions: [".ts", ".tsx"],
			}),
			typescript({
				tsconfig: "./tsconfig.publish.json",
				// declaration: true,
				noEmitOnError: true,
			}),
			// dts(),
			copy({
				targets: [{ src: ["assets"], dest: "dist" }],
			}),
		],
	},
	// {
	// 	input: "./components/index.tsx",
	// 	output: [{ file: "dist/index.d.ts", format: "esm" }],
	// 	plugins: [],
	// },
];

export default config;

/**
 * @typedef {import('rollup').InputOptions} RollupInputOptions
 * @typedef {import('rollup').OutputOptions} RollupOutputOptions
 * @typedef {import('rollup').RollupOptions} RollupOptions
 * @typedef {import('rollup').Plugin} RollupPlugin
 */

function createBanner() {
	return `/**
 * ${name} v${version}
 *
 * Copyright (c) ngrok.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */`;
}
