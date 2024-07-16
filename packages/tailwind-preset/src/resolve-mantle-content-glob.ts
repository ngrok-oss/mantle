import path from "node:path";

/**
 * Resolve the glob path to all mantle component content.
 * For use in your app's tailwind config content field.
 *
 * This works whether or not the `@ngrok/mantle` package is hoisted to a root node_modules,
 * e.g. in a js monorepo using workspaces.
 *
 * @example
 * import { createRequire } from "node:module";
 * import { resolveMantleContentGlob } from "@ngrok/mantle/tailwind-preset";
 *
 * const mantleContentGlob = resolveMantleContentGlob(createRequire(import.meta.url));
 *
 * export default {
 *  content: [mantleContentGlob, "/your/app/content/here"],
 *  // ...
 * }
 */
function resolveMantleContentGlob(require: NodeRequire) {
	/**
	 * use the tailwind-preset module path since it is dual exported as cjs and esm
	 * as long as we rely on postcss we need to reference a cjs module only or it will fail to resolve
	 */
	const presetPath = require.resolve("@ngrok/mantle/tailwind-preset");

	/**
	 * resolve the glob path to all mantle component content
	 * need to go up two levels to get to the mantle package root since the
	 * tailwind-preset exists at node_modules/@ngrok/mantle/dist/tailwind-preset.js
	 */
	return path.join(presetPath, "..", "..", "**", "*.js");
}

export {
	//,
	resolveMantleContentGlob,
};
