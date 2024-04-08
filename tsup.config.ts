import fs from "fs";
import { defineConfig } from "tsup";

const doNotPublish = new Set(["back-to-top-button", "portal"]);

// read all of the folders in the packages folder and then map them to the tsup config
const packages = fs
	.readdirSync("packages", { withFileTypes: true })
	.filter((dirent) => dirent.isDirectory())
	.map((dirent) => dirent.name)
	.filter((name) => !doNotPublish.has(name))
	.reduce<Record<string, string>>((acc, name) => {
		acc[name] = `./packages/${name}/index.ts`;
		return acc;
	}, {});

export default defineConfig((options) => ({
	entry: packages,
	format: ["esm"],
	dts: true,
	external: ["react", "react-dom"],
	...options,
}));
