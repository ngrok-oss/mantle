import { execFile } from "node:child_process";
import path from "node:path";
import { promisify } from "node:util";
import type { Plugin, ViteDevServer } from "vite";

const execFileAsync = promisify(execFile);

/**
 * Debounce window (ms) for coalescing a burst of mantle source saves into a
 * single codegen run.
 */
const DEBOUNCE_MS = 350;

/**
 * Decide whether a changed file should trigger a prop-artifact regeneration.
 * Matches mantle component sources (`src/components/**.{ts,tsx}`) and shared
 * type sources (`src/types/**.ts`), but never the generated artifact directory
 * (`src/__generated__/**`) — excluding it is the primary guard against the
 * write-feedback loop, since the generator writes back into that directory.
 *
 * Paths are compared in `path.posix` form so the match is OS-independent
 * (Windows backslashes would otherwise defeat the suffix/prefix checks).
 *
 * @example
 * const src = "/repo/packages/mantle/src";
 * isWatchedSource(`${src}/components/alert-dialog/alert-dialog.tsx`, src); // true
 * isWatchedSource(`${src}/__generated__/component-props.json`, src); // false
 */
function isWatchedSource(file: string, mantleSrcDir: string): boolean {
	const relative = path.posix.relative(
		mantleSrcDir.split(path.sep).join(path.posix.sep),
		file.split(path.sep).join(path.posix.sep),
	);
	// Outside the mantle src tree (relative climbs out with "..").
	if (relative.startsWith("..") || path.posix.isAbsolute(relative)) {
		return false;
	}
	if (relative.startsWith("__generated__/")) {
		return false;
	}
	if (
		relative.startsWith("components/") &&
		(relative.endsWith(".ts") || relative.endsWith(".tsx"))
	) {
		return true;
	}
	if (relative.startsWith("types/") && relative.endsWith(".ts")) {
		return true;
	}
	return false;
}

/**
 * Clear the process-lifetime schema memos so the next server render re-reads
 * the freshly written JSON. Loaded via `ssrLoadModule` so the reset runs
 * against the same module instances the request handler uses. The reset
 * exports are dev-oriented and harmless if absent (a guard keeps this resilient
 * to refactors of either utility module).
 */
async function resetServerCaches(server: ViteDevServer): Promise<void> {
	const mantleSource = await server.ssrLoadModule("/app/utilities/mantle-source.server.ts");
	if (typeof mantleSource.resetComponentPropSchemaCache === "function") {
		mantleSource.resetComponentPropSchemaCache();
	}
	const componentProps = await server.ssrLoadModule("/app/utilities/component-props.ts");
	if (typeof componentProps.resetComponentPropsCache === "function") {
		componentProps.resetComponentPropsCache();
	}
}

/**
 * Dev-only Vite plugin that keeps the committed prop-extraction artifact
 * (`packages/mantle/src/__generated__/component-props.json`) fresh while the
 * docs site runs under `react-router dev`. When a watched mantle source file
 * changes it shells out to the mantle `codegen` script as a child process — the
 * generator depends on `ts-morph`, which is not resolvable from `apps/www`, so
 * it must run in the `packages/mantle` cwd rather than being imported here.
 *
 * On a successful regen it invalidates the bundled artifact module and resets
 * the two server-side memos that cache the parsed schema (the direct module
 * invalidation alone does not clear those in-process maps), so the next render
 * of the HTML prop tables, the `.md` twin, and `/api/components.json` reflects
 * the new JSON without a manual restart. A failed regen surfaces in the dev
 * overlay and leaves the dev server running.
 *
 * `apply: "serve"` keeps the plugin out of `vite build` / `react-router build`
 * / Vercel — production keeps the committed artifact, regenerated once by
 * mantle's `prebuild`.
 *
 * @example
 * // apps/www/vite.config.ts
 * plugins: [watchComponentProps(), ...otherPlugins]
 */
function watchComponentProps(): Plugin {
	const mantleDir = path.resolve(import.meta.dirname, "../../../packages/mantle");
	const mantleSrcDir = path.join(mantleDir, "src");
	const artifactPath = path.join(mantleSrcDir, "__generated__", "component-props.json");

	let timer: NodeJS.Timeout | null = null;
	let running = false;
	let queued = false;

	async function runCodegen(server: ViteDevServer): Promise<void> {
		if (running) {
			// A change landed mid-run; collapse it into a single re-run on completion.
			queued = true;
			return;
		}
		running = true;
		try {
			await execFileAsync("pnpm", ["-F", "@ngrok/mantle", "run", "codegen"], { cwd: mantleDir });
			invalidateArtifact(server);
			await resetServerCaches(server);
		} catch (error) {
			const message = error instanceof Error ? error.message : String(error);
			server.config.logger.error(`[watch-component-props] codegen failed: ${message}`);
			server.ws.send({
				type: "error",
				err: { message: `Mantle prop codegen failed:\n${message}`, stack: "" },
			});
		} finally {
			running = false;
			if (queued) {
				queued = false;
				await runCodegen(server);
			}
		}
	}

	function invalidateArtifact(server: ViteDevServer): void {
		const mod = server.moduleGraph.getModuleById(artifactPath);
		if (mod) {
			server.moduleGraph.invalidateModule(mod);
			server.ws.send({ type: "full-reload" });
		}
	}

	return {
		name: "watch-component-props",
		apply: "serve",
		handleHotUpdate({ file, server }) {
			if (!isWatchedSource(file, mantleSrcDir)) {
				return;
			}
			if (timer != null) {
				clearTimeout(timer);
			}
			timer = setTimeout(() => {
				timer = null;
				void runCodegen(server);
			}, DEBOUNCE_MS);
		},
	};
}

export { isWatchedSource, watchComponentProps };
