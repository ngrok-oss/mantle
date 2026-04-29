import { describe, expect, it } from "vitest";

import { buildHooksManifest } from "./hooks-manifest.server";
import { buildManifest } from "./manifest.server";
import { buildUtilitiesManifest } from "./utils-manifest.server";

describe("agent manifests", () => {
	it("builds hooks from bundled Mantle source", async () => {
		const manifest = await buildHooksManifest();
		const useBreakpoint = manifest.hooks.find((hook) => hook.name === "useBreakpoint");
		const useComposedRefs = manifest.hooks.find((hook) => hook.name === "useComposedRefs");

		expect(manifest.hooks.length).toBeGreaterThan(0);
		expect(useBreakpoint).toMatchObject({
			importPath: "@ngrok/mantle/hooks",
			summary: expect.stringContaining("React hook that returns the current breakpoint"),
		});
		expect(useComposedRefs?.summary).toContain("composes multiple refs");
	});

	it("builds utility summaries from bundled Mantle source", async () => {
		const manifest = await buildUtilitiesManifest();
		const cx = manifest.utilities.find((utility) => utility.name === "cx");
		const highlightUtils = manifest.utilities.find((utility) => utility.name === "highlight-utils");

		expect(cx?.summary).toContain("Conditionally add Tailwind");
		expect(highlightUtils?.summary).toContain("React-free highlighting utilities");
	});

	it("adds component JSDoc from bundled Mantle source", async () => {
		const manifest = await buildManifest();
		const button = manifest.components.find((component) => component.name === "Button");
		const componentsMissingJsdoc = manifest.components
			.filter((component) => component.jsdoc == null)
			.map((component) => component.name);

		expect(button).toMatchObject({
			importPath: "@ngrok/mantle/button",
			jsdoc: expect.stringContaining("Renders a button"),
		});
		expect(componentsMissingJsdoc).toEqual([]);
	});
});
