import { type RouteConfig, index, route } from "@react-router/dev/routes";

// Helper to create doc routes (handles both /path and /path.md URLs)
function docRoute(path: string) {
	const id = `docs-${path.replace(/\//g, "-")}`;
	return [
		route(path, "./routes/docs.$.tsx", { id }),
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
	...docRoute("components/password-input"),
	...docRoute("components/progress-bar"),
	...docRoute("components/progress-donut"),
	...docRoute("components/radio-group"),
	...docRoute("components/sandboxed-on-click"),
	...docRoute("components/separator"),
	...docRoute("components/split-button"),
	...docRoute("base/breakpoints"),
	...docRoute("base/shadows"),
	...docRoute("base/tailwind-variants"),
	...docRoute("base/typography"),
	...docRoute("base/colors"),
	...docRoute("hooks"),

	route("components/inline-code", "./routes/components._redirect.inline-code.tsx"),
	route("components/code-block", "./routes/components.code-block.tsx"),
	route("components/icons", "./routes/components.icons.tsx"),
	route("components/kbd", "./routes/components.kbd.tsx"),
	route("components/preview/accordion", "./routes/components.preview.accordion.tsx"),
	route("components/preview/calendar", "./routes/components.preview.calendar.tsx"),
	route("components/preview/combobox", "./routes/components.preview.combobox.tsx"),
	route("components/preview/command", "./routes/components.preview.command.tsx"),
	route("components/preview/data-table", "./routes/components.preview.data-table.tsx"),
	route("components/preview/pagination", "./routes/components.preview.pagination.tsx"),
	route("components/preview/popover", "./routes/components.preview.popover.tsx"),
	route("components/select", "./routes/components.select.tsx"),
	// separator is now served from MDX docs (see docs.$.tsx routes above)
	route("components/sheet", "./routes/components.sheet.tsx"),
	route("components/skeleton", "./routes/components.skeleton.tsx"),
	route("components/slot", "./routes/components.slot.tsx"),
	route("components/switch", "./routes/components.switch.tsx"),
	route("components/table", "./routes/components.table.tsx"),
	route("components/tabs", "./routes/components.tabs.tsx"),
	route("components/text-area", "./routes/components.text-area.tsx"),
	route("components/theme", "./routes/components.theme.tsx"),
	route("components/toast", "./routes/components.toast.tsx"),
	route("components/tooltip", "./routes/components.tooltip.tsx"),
] satisfies RouteConfig;
