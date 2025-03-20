import { IconButton } from "@ngrok/mantle/button";
import { cx } from "@ngrok/mantle/cx";
import { Icon } from "@ngrok/mantle/icon";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
} from "@ngrok/mantle/select";
import { $theme, isTheme, useTheme } from "@ngrok/mantle/theme-provider";
import type { WithStyleProps } from "@ngrok/mantle/types";
import { List } from "@phosphor-icons/react/List";
import { Sun } from "@phosphor-icons/react/Sun";
import { X } from "@phosphor-icons/react/X";
import type { PropsWithChildren } from "react";
import { Link, href } from "react-router";
import { NavLink } from "./nav-link";
import { useNavigation } from "./navigation-context";

const NgrokLogo = () => (
	<svg width="82" height="34" className="xs:block hidden">
		<path
			fill="hsl(var(--blue-600))"
			d="M27.888 13.4c-1.136-1.257-2.54-1.89-4.21-1.89-1.028 0-1.976.198-2.847.599a6.99 6.99 0 0 0-2.258 1.636 7.864 7.864 0 0 0-1.498 2.446c-.367.935-.55 1.947-.55 3.041 0 1.072.17 2.05.507 2.933a6.614 6.614 0 0 0 1.43 2.26 6.562 6.562 0 0 0 2.19 1.474c.845.353 1.772.53 2.78.53.456 0 .879-.035 1.263-.1a4.987 4.987 0 0 0 1.101-.318c.35-.15.692-.34 1.033-.569a8.894 8.894 0 0 0 1.059-.874v3.734h-.005v.362h-4.661l-3.505 3.98v.684H32.87V11.902h-4.981V13.4Zm-.013 6.844a3.646 3.646 0 0 1-.687 1.042 3.15 3.15 0 0 1-2.267.943 3.22 3.22 0 0 1-1.28-.25 3.072 3.072 0 0 1-1.021-.693 3.363 3.363 0 0 1-.674-1.042 3.316 3.316 0 0 1-.248-1.292c0-.444.085-.861.26-1.249a3.23 3.23 0 0 1 .705-1.012 3.552 3.552 0 0 1 1.016-.693 2.931 2.931 0 0 1 1.238-.263c.422 0 .828.082 1.225.25.393.163.738.396 1.033.693.294.297.525.637.704 1.025.175.388.26.814.26 1.28-.004.443-.089.865-.264 1.261ZM13.989 13.633a5.356 5.356 0 0 0-1.802-1.373 4.263 4.263 0 0 0-.5-.19 5.671 5.671 0 0 0-.806-.185H7.33l-2.347 2.7v-2.644H0v14.246h4.982v-9.612H9.66l.389-.009v9.617h4.981v-8.91c0-.758-.072-1.435-.217-2.029a3.964 3.964 0 0 0-.824-1.61ZM47.52 11.902h-5.434l-2.16 2.455v-2.455H34.94v14.247h4.994l.004-9.536h3.624L47.52 12.1v-.198ZM74 18.483l6.813-6.34v-.241h-6.566l-5.225 5.138V3.099H64.04v23.045h4.982v-5.8l5.477 5.8h6.703v-.271l-7.203-7.39ZM60.586 13.525c-.76-.676-1.66-1.201-2.698-1.58-1.037-.38-2.16-.569-3.372-.569-1.23 0-2.365.194-3.398.582a8.44 8.44 0 0 0-2.685 1.593 7.29 7.29 0 0 0-1.763 2.39 6.984 6.984 0 0 0-.632 2.96c0 1.166.21 2.226.632 3.177a7.305 7.305 0 0 0 1.75 2.455 7.727 7.727 0 0 0 2.655 1.585c1.03.37 2.148.556 3.36.556 1.23 0 2.37-.185 3.428-.556 1.054-.37 1.96-.891 2.71-1.572a7.37 7.37 0 0 0 1.776-2.416c.431-.934.65-1.964.65-3.096 0-1.129-.214-2.162-.633-3.097a7.23 7.23 0 0 0-1.78-2.412Zm-3.112 6.745a3.644 3.644 0 0 1-.687 1.042 3.053 3.053 0 0 1-1.016.693c-.397.168-.811.25-1.25.25-.44 0-.859-.082-1.256-.25a3.01 3.01 0 0 1-1.016-.693 3.558 3.558 0 0 1-.687-1.042 3.225 3.225 0 0 1-.26-1.318c0-.444.085-.862.26-1.25.175-.387.401-.727.687-1.024a2.99 2.99 0 0 1 1.016-.694c.397-.168.811-.25 1.255-.25.44 0 .858.082 1.251.25a2.95 2.95 0 0 1 1.016.694c.286.297.512.646.687 1.042.175.396.26.818.26 1.262 0 .46-.085.892-.26 1.288Z"
		/>
	</svg>
);

const MantleLogo = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="94" height="34">
		<path
			fill="hsl(var(--gray-600))"
			d="M23.492 25.826V17.45c0-1.239-.306-2.21-.916-2.913-.61-.702-1.433-1.054-2.469-1.054-.924 0-1.71.278-2.357.833-.63.536-1.082 1.276-1.36 2.219.037.259.056.462.056.61v8.682h-1.942V17.45c0-1.239-.305-2.21-.915-2.913-.61-.702-1.434-1.054-2.47-1.054-.887 0-1.654.25-2.301.75-.63.48-1.082 1.137-1.36 1.969v9.625H5.517v-13.87h1.941v1.61c.925-1.258 2.303-1.887 4.133-1.887 1.831 0 3.2.814 4.106 2.441 1.072-1.627 2.635-2.44 4.688-2.44 1.553 0 2.783.49 3.69 1.47.905.98 1.358 2.311 1.358 3.994v8.682h-1.941ZM34.888 26.104c-2.034 0-3.717-.694-5.049-2.08-1.313-1.406-1.97-3.117-1.97-5.133 0-2.015.657-3.717 1.97-5.104 1.332-1.405 3.015-2.108 5.049-2.108 2.016 0 3.624.657 4.826 1.97v-1.692h1.942v13.87h-1.942v-1.693c-1.202 1.313-2.81 1.97-4.826 1.97Zm.083-1.803c1.073 0 2.016-.232 2.83-.694a5.205 5.205 0 0 0 1.913-1.83v-5.77a5.205 5.205 0 0 0-1.914-1.831c-.813-.463-1.756-.694-2.829-.694-1.498 0-2.728.527-3.69 1.581-.942 1.036-1.414 2.312-1.414 3.828 0 1.517.472 2.802 1.415 3.856.961 1.036 2.191 1.554 3.689 1.554ZM45.454 25.826v-13.87h1.942v1.942c.943-1.479 2.46-2.219 4.55-2.219 1.534 0 2.783.49 3.744 1.47.98.98 1.47 2.312 1.47 3.995v8.682H55.22v-8.405c0-1.257-.333-2.228-.999-2.912-.647-.685-1.553-1.027-2.718-1.027-1.055 0-1.933.287-2.636.86-.684.555-1.174 1.304-1.47 2.247v9.237h-1.942ZM66.04 25.965c-1.146 0-2.108-.342-2.885-1.026-.758-.685-1.137-1.674-1.137-2.968v-8.184h-3.523v-1.83h3.523V8.1h1.942v3.856h4.327v1.83H63.96v8.017c0 .832.203 1.443.61 1.83.426.39.971.583 1.637.583.74 0 1.424-.175 2.053-.527l.582 1.665c-.777.407-1.71.61-2.802.61ZM70.629 25.826V5.576h1.941v20.25H70.63ZM82.368 26.104c-2.127 0-3.847-.685-5.16-2.053-1.313-1.387-1.97-3.107-1.97-5.16 0-2.034.676-3.744 2.026-5.131 1.35-1.387 3.07-2.08 5.16-2.08 1.867 0 3.42.628 4.66 1.886 1.238 1.257 1.858 2.968 1.858 5.131v.527H77.236c0 1.443.48 2.654 1.442 3.634.962.962 2.192 1.443 3.69 1.443 1.11 0 2.015-.213 2.718-.638.721-.444 1.34-1.1 1.859-1.97l1.58 1.026c-1.312 2.257-3.365 3.385-6.157 3.385Zm-4.966-8.6h9.515c-.185-1.239-.694-2.219-1.526-2.94-.832-.721-1.85-1.082-3.051-1.082-1.202 0-2.275.37-3.218 1.11-.924.721-1.498 1.692-1.72 2.912Z"
		/>
		<path
			fill="hsl(var(--blue-500))"
			d="M0 0v5h2v24H0v5h5v-2h84v2h5v-5h-2V5h2V0h-5v2H5V0H0Zm4 1v3H1V1h3Zm85 2v2h2v24h-2v2H5v-2H3V5h2V3h84ZM1 30h3v3H1v-3Zm92 0v3h-3v-3h3ZM90 1h3v3h-3V1Z"
		/>
	</svg>
);

type Props = PropsWithChildren &
	WithStyleProps & {
		currentVersion: string;
	};

export function Layout({ children, className, currentVersion, style }: Props) {
	const [currentTheme, setTheme] = useTheme();
	const { showNavigation, setShowNavigation } = useNavigation();

	return (
		<main
			className={cx("mx-auto h-full max-w-7xl sm:px-4", className)}
			style={style}
		>
			<header className="xs:gap-4 flex h-20 items-center gap-3 px-4 sm:px-0">
				<IconButton
					className="md:hidden"
					onClick={() => {
						setShowNavigation(!showNavigation);
					}}
					type="button"
					appearance="outlined"
					label="Menu"
					size="md"
					icon={showNavigation ? <X /> : <List />}
				/>

				<Link
					to={href("/")}
					className="static top-auto flex sm:top-[1.4rem] md:fixed"
				>
					<NgrokLogo />
					<MantleLogo />
				</Link>

				<p className="text-strong -ml-1 font-mono text-xs md:ml-48">
					<a href="https://github.com/ngrok-oss/mantle/releases">
						{currentVersion}
					</a>
				</p>

				<Select
					value={currentTheme}
					onChange={(value) => {
						const maybeNewTheme = isTheme(value) ? value : undefined;
						if (maybeNewTheme) {
							setTheme(maybeNewTheme);
						}
					}}
				>
					<div className="ml-auto">
						{/* TODO: this should probably have a title/tooltip instead that describes what it is since we ain't got a spot for a label */}
						<span className="sr-only">Theme Switcher</span>
						<SelectTrigger className="w-min">
							<Icon className="mr-1" svg={<Sun />} />
						</SelectTrigger>
					</div>
					<SelectContent width="content">
						<SelectGroup>
							<SelectLabel>Choose a theme</SelectLabel>
							<SelectItem value={$theme("system")}>System</SelectItem>
							<SelectItem value={$theme("light")}>Light</SelectItem>
							<SelectItem value={$theme("dark")}>Dark</SelectItem>
							<SelectItem value={$theme("light-high-contrast")}>
								Light High Contrast
							</SelectItem>
							<SelectItem value={$theme("dark-high-contrast")}>
								Dark High Contrast
							</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
			</header>
			{showNavigation && (
				<div className="bg-card fixed bottom-0 left-0 right-0 top-20 z-50 p-4 md:hidden">
					<Navigation className="scrollbar h-full overflow-auto overscroll-contain" />
				</div>
			)}
			<div className="flex gap-4">
				<div className="bottom-0 hidden w-44 md:block">
					<div className="fixed bottom-0 top-20 w-44">
						<Navigation className="scrollbar scroll-shadow h-full overflow-auto py-4" />
					</div>
				</div>
				<article className="bg-card w-0 flex-1 p-4 shadow-2xl sm:mb-4 sm:rounded-lg md:p-9 lg:mb-9">
					{children}
				</article>
			</div>
		</main>
	);
}

/**
 * Components that are ready for production use cases
 */
const prodReadyComponents = [
	"Alert",
	"Alert Dialog",
	"Anchor",
	"Badge",
	"Button",
	"Card",
	"Checkbox",
	"Code Block",
	"Dialog",
	"Dropdown Menu",
	"Flag",
	"Hover Card",
	"Icon Button",
	"Icon",
	"Inline Code",
	"Input",
	"Label",
	"Media Object",
	"Password Input",
	"Progress Donut",
	"Radio Group",
	"Select",
	"Separator",
	"Sheet",
	"Skeleton",
	"Switch",
	"Table",
	"Tabs",
	"Text Area",
	"Theme Provider",
	"Toast",
] as const;

/**
 * Components that are still in "preview" and not recommended for production use cases yet.
 * These components are still in active development and may not be fully functional or have a complete and stable API.
 * They are exported for early feedback and testing purposes!
 */
const previewComponents = [
	//,
	"Accordion",
	"Calendar",
	"Combobox",
	"Data Table",
	"Pagination",
	"Popover",
	"Tooltip",
] as const;

type Route = Parameters<typeof href>[0];

const prodReadyComponentRouteLookup = {
	Alert: "/components/alert",
	"Alert Dialog": "/components/alert-dialog",
	Anchor: "/components/anchor",
	Badge: "/components/badge",
	Button: "/components/button",
	Card: "/components/card",
	Checkbox: "/components/checkbox",
	"Code Block": "/components/code-block",
	Dialog: "/components/dialog",
	"Dropdown Menu": "/components/dropdown-menu",
	Flag: "/components/flag",
	"Hover Card": "/components/hover-card",
	Icon: "/components/icon",
	"Icon Button": "/components/icon-button",
	"Inline Code": "/components/inline-code",
	Input: "/components/input",
	Label: "/components/label",
	"Media Object": "/components/media-object",
	"Password Input": "/components/password-input",
	"Progress Donut": "/components/progress-donut",
	"Radio Group": "/components/radio-group",
	Select: "/components/select",
	Separator: "/components/separator",
	Sheet: "/components/sheet",
	Skeleton: "/components/skeleton",
	Switch: "/components/switch",
	Table: "/components/table",
	Tabs: "/components/tabs",
	"Text Area": "/components/text-area",
	"Theme Provider": "/components/theme-provider",
	Toast: "/components/toast",
} as const satisfies Record<(typeof prodReadyComponents)[number], Route>;

const previewComponentsRouteLookup = {
	Accordion: "/components/preview/accordion",
	Calendar: "/components/preview/calendar",
	Combobox: "/components/preview/combobox",
	"Data Table": "/components/preview/data-table",
	Pagination: "/components/preview/pagination",
	Popover: "/components/preview/popover",
	Tooltip: "/components/preview/tooltip",
} as const satisfies Record<(typeof previewComponents)[number], Route>;

function Navigation({ className, style }: WithStyleProps) {
	return (
		<nav className={cx("text-sm", className)} style={style}>
			<ul className="flex flex-col">
				<li className="mb-2 text-xs font-medium uppercase tracking-wider">
					Welcome
				</li>

				<li>
					<NavLink to="/" prefetch="intent">
						Overview &amp; Setup
					</NavLink>
				</li>

				<li className="mt-6 text-xs font-medium uppercase tracking-wider">
					Base
				</li>

				<ul className="mt-2">
					<li>
						<NavLink to={href("/base/colors")} prefetch="intent">
							Colors
						</NavLink>
					</li>
					<li>
						<NavLink to={href("/base/shadows")} prefetch="intent">
							Shadows
						</NavLink>
					</li>
					<li>
						<NavLink to={href("/base/typography")} prefetch="intent">
							Typography
						</NavLink>
					</li>
					<li>
						<NavLink to={href("/base/tailwind-variants")} prefetch="intent">
							Tailwind Variants
						</NavLink>
					</li>
				</ul>

				<li className="mt-6 text-xs font-medium uppercase tracking-wider">
					Components
				</li>
				<ul className="mt-2">
					{prodReadyComponents.map((component) => (
						<li key={component}>
							<NavLink
								to={prodReadyComponentRouteLookup[component]}
								prefetch="intent"
							>
								{component}
							</NavLink>
						</li>
					))}
				</ul>

				<li className="mt-6 text-xs font-medium uppercase tracking-wider">
					Preview Components
				</li>
				<ul className="mt-2">
					{previewComponents.map((component) => (
						<li key={component}>
							<NavLink
								to={previewComponentsRouteLookup[component]}
								prefetch="intent"
							>
								{component}
							</NavLink>
						</li>
					))}
				</ul>

				{/* TODO: add back later when we have unreleased components again */}
				{/* <li className="mt-6 text-xs font-medium uppercase tracking-wider">Unreleased Components</li>
				<ul className="mt-2">
					<li>
						<NavLink to="/components/unreleased/data-table" prefetch="intent">
							Data Table
						</NavLink>
					</li>
				</ul> */}
			</ul>
		</nav>
	);
}
