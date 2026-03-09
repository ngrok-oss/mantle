/**
 * Codegen script — generates `src/mantle-component-name.ts`.
 *
 * Reads the component directory names from `packages/mantle/src/components/`
 * and writes a `MantleComponentName` string-literal union type.
 *
 * Run via:
 *   pnpm exec tsx scripts/generate-component-names.ts
 *
 * This script is called automatically as part of the `build` script.
 * Do not edit `src/mantle-component-name.ts` by hand — it will be overwritten.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(scriptDir, "..");
const mantleComponentsDir = path.resolve(packageRoot, "../../packages/mantle/src/components");
const outputFile = path.resolve(packageRoot, "src/mantle-component-name.ts");

const names = fs
	.readdirSync(mantleComponentsDir, { withFileTypes: true })
	.filter((entry) => entry.isDirectory())
	.map((entry) => entry.name)
	.sort();

if (names.length === 0) {
	console.error(
		`[generate-component-names] No component directories found in ${mantleComponentsDir}`,
	);
	process.exit(1);
}

const union = names.map((name) => `\t| "${name}"`).join("\n");

const content = `// ⚠️ AUTO-GENERATED — do not edit by hand.
// Re-run \`pnpm exec tsx scripts/generate-component-names.ts\`
// or \`pnpm run build\` to regenerate after adding or removing mantle components.

/**
 * The known \`@ngrok/mantle\` component subpath names — the segment after
 * \`@ngrok/mantle/\` in an import specifier (e.g. \`"button"\` for
 * \`@ngrok/mantle/button\`).
 *
 * Derived from the kebab-case component directories in
 * \`packages/mantle/src/components/\`. This union only includes those
 * kebab-case subpaths. Higher-level option handling (e.g. \`allowlist\`) also
 * accepts PascalCase names (e.g. \`"AlertDialog"\` → \`"alert-dialog"\`), but
 * they are normalized to these kebab-case subpaths before use.
 */
export type MantleComponentName =
${union};
`;

const existing = fs.existsSync(outputFile) ? fs.readFileSync(outputFile, "utf8") : null;
if (existing === content) {
	console.log("[generate-component-names] Already up to date.");
} else {
	fs.writeFileSync(outputFile, content, "utf8");
	console.log(
		`[generate-component-names] Written ${names.length} component names to ${path.relative(packageRoot, outputFile)}`,
	);
}
