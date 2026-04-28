import { href } from "react-router";

type Route = Parameters<typeof href>[0];

/**
 * Components that are ready for production use cases.
 */
export const prodReadyComponents = [
	"Alert Dialog",
	"Alert",
	"Anchor",
	"Badge",
	"Browser Only",
	"Button",
	"Card",
	"Checkbox",
	"Code Block",
	"Code",
	"Combobox",
	"Command",
	"Data Table",
	"Description List",
	"Dialog",
	"Dropdown Menu",
	"Empty",
	"Flag",
	"Hover Card",
	"Icon Button",
	"Icon",
	"Icons",
	"Input",
	"Label",
	"Main",
	"Media Object",
	"Multi Select",
	"Pagination",
	"Password Input",
	"Popover",
	"Progress Bar",
	"Progress Donut",
	"Radio Group",
	"SandboxedOnClick",
	"Select",
	"Separator",
	"Sheet",
	"Skeleton",
	"Skip to Main Link",
	"Slider",
	"Slot",
	"Split Button",
	"Switch",
	"Table",
	"Tabs",
	"Text Area",
	"Theme",
	"Toast",
	"Tooltip",
] as const;

/**
 * Components that are still in "preview" and not recommended for production use cases yet.
 * These components are still in active development and may not be fully functional or have a complete and stable API.
 * They are exported for early feedback and testing purposes!
 */
export const previewComponents = [
	//,
	"Accordion",
	"Calendar",
] as const;

/** Route lookup for production-ready component pages. */
export const prodReadyComponentRouteLookup = {
	Alert: "/components/alert",
	"Alert Dialog": "/components/alert-dialog",
	Anchor: "/components/anchor",
	Badge: "/components/badge",
	"Browser Only": "/components/browser-only",
	Button: "/components/button",
	Card: "/components/card",
	Checkbox: "/components/checkbox",
	Code: "/components/code",
	"Code Block": "/components/code-block",
	Combobox: "/components/combobox",
	Command: "/components/command",
	"Data Table": "/components/data-table",
	"Description List": "/components/description-list",
	Dialog: "/components/dialog",
	"Dropdown Menu": "/components/dropdown-menu",
	Empty: "/components/empty",
	Flag: "/components/flag",
	"Hover Card": "/components/hover-card",
	Icon: "/components/icon",
	Icons: "/components/icons",
	"Icon Button": "/components/icon-button",
	Input: "/components/input",
	Label: "/components/label",
	Main: "/components/main",
	"Media Object": "/components/media-object",
	"Multi Select": "/components/multi-select",
	Pagination: "/components/pagination",
	"Password Input": "/components/password-input",
	Popover: "/components/popover",
	"Progress Donut": "/components/progress-donut",
	"Progress Bar": "/components/progress-bar",
	"Radio Group": "/components/radio-group",
	SandboxedOnClick: "/components/sandboxed-on-click",
	Select: "/components/select",
	Separator: "/components/separator",
	Sheet: "/components/sheet",
	Skeleton: "/components/skeleton",
	"Skip to Main Link": "/components/skip-to-main-link",
	Slider: "/components/slider",
	Slot: "/components/slot",
	"Split Button": "/components/split-button",
	Switch: "/components/switch",
	Table: "/components/table",
	Tabs: "/components/tabs",
	"Text Area": "/components/text-area",
	Theme: "/components/theme",
	Toast: "/components/toast",
	Tooltip: "/components/tooltip",
} as const satisfies Record<(typeof prodReadyComponents)[number], Route>;

/** Route lookup for preview component pages. */
export const previewComponentsRouteLookup = {
	Accordion: "/components/preview/accordion",
	Calendar: "/components/preview/calendar",
} as const satisfies Record<(typeof previewComponents)[number], Route>;

/** Welcome section pages. */
export const welcomePages = [
	"Overview & Setup",
	"Philosophy",
	"Accessibility",
	"For AI Agents",
	"Changelog",
] as const;

/** Route lookup for welcome pages. */
export const welcomeRoutes = {
	"Overview & Setup": "/",
	Philosophy: "/philosophy",
	Accessibility: "/accessibility",
	"For AI Agents": "/for-ai-agents",
	Changelog: "/changelog",
} as const satisfies Record<(typeof welcomePages)[number], Route>;

/** Base/design token pages. */
export const basePages = [
	//,
	"Breakpoints",
	"Colors",
	"Shadows",
	"Tailwind Variants",
	"Typography",
] as const;

/** Route lookup for base pages. */
export const baseRoutes = {
	Breakpoints: "/base/breakpoints",
	Colors: "/base/colors",
	Shadows: "/base/shadows",
	"Tailwind Variants": "/base/tailwind-variants",
	Typography: "/base/typography",
} as const satisfies Record<(typeof basePages)[number], Route>;

/** Hooks page route. */
export const hooksRoute = "/hooks" as const satisfies Route;

/** Utility pages. */
export const utilsPages = [
	//,
	"cx",
	"color",
	"composeRefs",
	"highlight-utils",
	"inView",
	"sorting",
] as const;

/** Route lookup for utility pages. */
export const utilsRoutes = {
	cx: "/utils/cx",
	color: "/utils/color",
	composeRefs: "/utils/compose-refs",
	"highlight-utils": "/utils/highlight-utils",
	inView: "/utils/in-view",
	sorting: "/utils/sorting",
} as const satisfies Record<(typeof utilsPages)[number], Route>;

/**
 * Override map for components whose docs URL slug does not match their
 * package import subpath. For example, "Icon Button" is documented at
 * /components/icon-button but is exported from `@ngrok/mantle/button`
 * (alongside `Button`). Used by the manifest builder to emit correct
 * `importPath` values in /api/components.json.
 *
 * Keys are docs routes (with leading slash). Values are the canonical
 * `@ngrok/mantle/*` import subpath where the component is actually exported.
 */
export const componentImportPathOverrides = {
	"/components/icon-button": "@ngrok/mantle/button",
	"/components/password-input": "@ngrok/mantle/input",
	"/components/progress-bar": "@ngrok/mantle/progress",
	"/components/progress-donut": "@ngrok/mantle/progress",
} as const satisfies Record<string, string>;
