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
	"Flag",
	"Hover Card",
	"Icon Button",
	"Icon",
	"Icons",
	"Input",
	"Label",
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
	Flag: "/components/flag",
	"Hover Card": "/components/hover-card",
	Icon: "/components/icon",
	Icons: "/components/icons",
	"Icon Button": "/components/icon-button",
	Input: "/components/input",
	Label: "/components/label",
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
export const welcomePages = ["Overview & Setup", "Philosophy"] as const;

/** Route lookup for welcome pages. */
export const welcomeRoutes = {
	"Overview & Setup": "/",
	Philosophy: "/philosophy",
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
	"inView",
	"sorting",
] as const;

/** Route lookup for utility pages. */
export const utilsRoutes = {
	cx: "/utils/cx",
	color: "/utils/color",
	composeRefs: "/utils/compose-refs",
	inView: "/utils/in-view",
	sorting: "/utils/sorting",
} as const satisfies Record<(typeof utilsPages)[number], Route>;
