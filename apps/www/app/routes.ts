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
	...docRoute("components/separator"),
	...docRoute("components/split-button"),
	...docRoute("base/breakpoints"),
	...docRoute("base/shadows"),
	...docRoute("base/tailwind-variants"),
	...docRoute("base/typography"),
	...docRoute("base/colors"),
	...docRoute("hooks"),

	route("components/inline-code", "./routes/components._redirect.inline-code.tsx"),
	route("components/alert-dialog", "./routes/components.alert-dialog.tsx"),
	route("components/alert", "./routes/components.alert.tsx"),
	route("components/anchor", "./routes/components.anchor.tsx"),
	route("components/auto-scroll-to-hash", "./routes/components.auto-scroll-to-hash.tsx"),
	route("components/badge", "./routes/components.badge.tsx"),
	route("components/browser-only", "./routes/components.browser-only.tsx"),
	route("components/button", "./routes/components.button.tsx"),
	route("components/card", "./routes/components.card.tsx"),
	route("components/checkbox", "./routes/components.checkbox.tsx"),
	route("components/code-block", "./routes/components.code-block.tsx"),
	route("components/code", "./routes/components.code.tsx"),
	route("components/description-list", "./routes/components.description-list.tsx"),
	route("components/dialog", "./routes/components.dialog.tsx"),
	route("components/dropdown-menu", "./routes/components.dropdown-menu.tsx"),
	route("components/flag", "./routes/components.flag.tsx"),
	route("components/hover-card", "./routes/components.hover-card.tsx"),
	route("components/icon-button", "./routes/components.icon-button.tsx"),
	route("components/icon", "./routes/components.icon.tsx"),
	route("components/icons", "./routes/components.icons.tsx"),
	route("components/input", "./routes/components.input.tsx"),
	route("components/kbd", "./routes/components.kbd.tsx"),
	route("components/label", "./routes/components.label.tsx"),
	route("components/media-object", "./routes/components.media-object.tsx"),
	route("components/password-input", "./routes/components.password-input.tsx"),
	route("components/preview/accordion", "./routes/components.preview.accordion.tsx"),
	route("components/preview/calendar", "./routes/components.preview.calendar.tsx"),
	route("components/preview/combobox", "./routes/components.preview.combobox.tsx"),
	route("components/preview/command", "./routes/components.preview.command.tsx"),
	route("components/preview/data-table", "./routes/components.preview.data-table.tsx"),
	route("components/preview/pagination", "./routes/components.preview.pagination.tsx"),
	route("components/preview/popover", "./routes/components.preview.popover.tsx"),
	route("components/progress-bar", "./routes/components.progress-bar.tsx"),
	route("components/progress-donut", "./routes/components.progress-donut.tsx"),
	route("components/radio-group", "./routes/components.radio-group.tsx"),
	route("components/sandboxed-on-click", "./routes/components.sandboxed-on-click.tsx"),
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
