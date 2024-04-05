import fs from "fs";
import { defineConfig } from "tsup";

// read only the directories in the packages folder
// const packages = fs.readdirSync("packages", { withFileTypes: true }).filter((dirent) => dirent.isDirectory()).map((dirent) => dirent.name);

// read all of the folders in the packages folder, filter out tailwind-preset and then map them to the tsup config
const packages = fs
	.readdirSync("packages", { withFileTypes: true })
	.filter((dirent) => dirent.isDirectory())
	.map((dirent) => dirent.name)
	.filter((name) => name !== "tailwind-preset")
	.reduce(
		(acc, name) => {
			acc[name] = `./packages/${name}/index.tsx`;
			return acc;
		},
		{} as Record<string, string>,
	);

export default defineConfig((options) => ({
	// entry: ["./components/index.tsx"],
	entry: packages,
	format: ["esm"],
	dts: true,
	external: ["react", "react-dom"],
	// banner: {
	// 	js: "'use client'",
	// },
	...options,
}));
