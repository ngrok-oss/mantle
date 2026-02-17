import { type RouteConfig, index, route } from "@react-router/dev/routes";

// Helper to create doc routes (handles both /path and /path.md URLs)
function docRoute(path: string) {
	const id = `docs-${path.replace(/\//g, "-")}`;
	return [
		route(path, "./routes/$.tsx", { id }),
		route(`${path}.md`, "./routes/$.md.tsx", { id: `${id}-md` }),
	];
}

export default [
	index("./routes/_index.tsx"),
	route("index.md", "./routes/$.md.tsx", { id: "docs-index-md" }),

	// MDX docs: auto-discovers docs from app/docs/**/*.mdx
	// Handles both /path and /path.md URLs (returns HTML or raw markdown respectively)
	...docRoute("philosophy"),
	...docRoute("components/alert-dialog"),
	...docRoute("components/alert"),
	...docRoute("components/anchor"),
	...docRoute("components/badge"),
	...docRoute("components/browser-only"),
	...docRoute("components/button"),
	...docRoute("components/card"),
	...docRoute("components/checkbox"),
	...docRoute("components/code"),
	...docRoute("components/combobox"),
	...docRoute("components/command"),
	...docRoute("components/data-table"),
	...docRoute("components/description-list"),
	...docRoute("components/dialog"),
	...docRoute("components/dropdown-menu"),
	...docRoute("components/flag"),
	...docRoute("components/hover-card"),
	...docRoute("components/icon-button"),
	...docRoute("components/icon"),
	...docRoute("components/input"),
	...docRoute("components/label"),
	...docRoute("components/media-object"),
	...docRoute("components/pagination"),
	...docRoute("components/password-input"),
	...docRoute("components/popover"),
	...docRoute("components/progress-bar"),
	...docRoute("components/progress-donut"),
	...docRoute("components/radio-group"),
	...docRoute("components/kbd"),
	...docRoute("components/sandboxed-on-click"),
	...docRoute("components/select"),
	...docRoute("components/separator"),
	...docRoute("components/sheet"),
	...docRoute("components/skeleton"),
	...docRoute("components/slot"),
	...docRoute("components/split-button"),
	...docRoute("components/switch"),
	...docRoute("components/table"),
	...docRoute("components/tabs"),
	...docRoute("components/text-area"),
	...docRoute("components/theme"),
	...docRoute("components/toast"),
	...docRoute("components/tooltip"),
	...docRoute("base/breakpoints"),
	...docRoute("base/shadows"),
	...docRoute("base/tailwind-variants"),
	...docRoute("base/typography"),
	...docRoute("base/colors"),
	...docRoute("hooks"),

	...docRoute("components/preview/accordion"),
	...docRoute("components/preview/calendar"),

	...docRoute("components/icons"),

	...docRoute("components/code-block"),
] satisfies RouteConfig;
