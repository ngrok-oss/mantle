import { Anchor } from "@ngrok/mantle/anchor";
import { Button, IconButton } from "@ngrok/mantle/button";
import { Command, MetaKey } from "@ngrok/mantle/command";
import { cx } from "@ngrok/mantle/cx";
import { DropdownMenu } from "@ngrok/mantle/dropdown-menu";
import type { SvgAttributes } from "@ngrok/mantle/icon";
import { Kbd } from "@ngrok/mantle/kbd";
import { useTheme } from "@ngrok/mantle/theme";
import type { WithStyleProps } from "@ngrok/mantle/types";
import {
	ArrowRightIcon,
	ArrowSquareOutIcon,
	CheckIcon,
	MagnifyingGlassIcon,
	MonitorIcon,
	MoonIcon,
	SunIcon,
} from "@phosphor-icons/react";
import { ListIcon } from "@phosphor-icons/react/List";
import { XIcon } from "@phosphor-icons/react/X";
import { type ComponentRef, type PropsWithChildren, useRef, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { Link, href, useNavigate } from "react-router";
import { PreviewBadge } from "~/components/badges";
import { ThemeSwitcher } from "~/components/theme-switcher";
import { NavLink } from "./nav-link";
import { useNavigation } from "./navigation-context";

const NgrokLogo = () => (
	<svg width="82" height="34" className="xs:block hidden">
		<path
			fill="var(--color-blue-600)"
			d="M27.888 13.4c-1.136-1.257-2.54-1.89-4.21-1.89-1.028 0-1.976.198-2.847.599a6.99 6.99 0 0 0-2.258 1.636 7.864 7.864 0 0 0-1.498 2.446c-.367.935-.55 1.947-.55 3.041 0 1.072.17 2.05.507 2.933a6.614 6.614 0 0 0 1.43 2.26 6.562 6.562 0 0 0 2.19 1.474c.845.353 1.772.53 2.78.53.456 0 .879-.035 1.263-.1a4.987 4.987 0 0 0 1.101-.318c.35-.15.692-.34 1.033-.569a8.894 8.894 0 0 0 1.059-.874v3.734h-.005v.362h-4.661l-3.505 3.98v.684H32.87V11.902h-4.981V13.4Zm-.013 6.844a3.646 3.646 0 0 1-.687 1.042 3.15 3.15 0 0 1-2.267.943 3.22 3.22 0 0 1-1.28-.25 3.072 3.072 0 0 1-1.021-.693 3.363 3.363 0 0 1-.674-1.042 3.316 3.316 0 0 1-.248-1.292c0-.444.085-.861.26-1.249a3.23 3.23 0 0 1 .705-1.012 3.552 3.552 0 0 1 1.016-.693 2.931 2.931 0 0 1 1.238-.263c.422 0 .828.082 1.225.25.393.163.738.396 1.033.693.294.297.525.637.704 1.025.175.388.26.814.26 1.28-.004.443-.089.865-.264 1.261ZM13.989 13.633a5.356 5.356 0 0 0-1.802-1.373 4.263 4.263 0 0 0-.5-.19 5.671 5.671 0 0 0-.806-.185H7.33l-2.347 2.7v-2.644H0v14.246h4.982v-9.612H9.66l.389-.009v9.617h4.981v-8.91c0-.758-.072-1.435-.217-2.029a3.964 3.964 0 0 0-.824-1.61ZM47.52 11.902h-5.434l-2.16 2.455v-2.455H34.94v14.247h4.994l.004-9.536h3.624L47.52 12.1v-.198ZM74 18.483l6.813-6.34v-.241h-6.566l-5.225 5.138V3.099H64.04v23.045h4.982v-5.8l5.477 5.8h6.703v-.271l-7.203-7.39ZM60.586 13.525c-.76-.676-1.66-1.201-2.698-1.58-1.037-.38-2.16-.569-3.372-.569-1.23 0-2.365.194-3.398.582a8.44 8.44 0 0 0-2.685 1.593 7.29 7.29 0 0 0-1.763 2.39 6.984 6.984 0 0 0-.632 2.96c0 1.166.21 2.226.632 3.177a7.305 7.305 0 0 0 1.75 2.455 7.727 7.727 0 0 0 2.655 1.585c1.03.37 2.148.556 3.36.556 1.23 0 2.37-.185 3.428-.556 1.054-.37 1.96-.891 2.71-1.572a7.37 7.37 0 0 0 1.776-2.416c.431-.934.65-1.964.65-3.096 0-1.129-.214-2.162-.633-3.097a7.23 7.23 0 0 0-1.78-2.412Zm-3.112 6.745a3.644 3.644 0 0 1-.687 1.042 3.053 3.053 0 0 1-1.016.693c-.397.168-.811.25-1.25.25-.44 0-.859-.082-1.256-.25a3.01 3.01 0 0 1-1.016-.693 3.558 3.558 0 0 1-.687-1.042 3.225 3.225 0 0 1-.26-1.318c0-.444.085-.862.26-1.25.175-.387.401-.727.687-1.024a2.99 2.99 0 0 1 1.016-.694c.397-.168.811-.25 1.255-.25.44 0 .858.082 1.251.25a2.95 2.95 0 0 1 1.016.694c.286.297.512.646.687 1.042.175.396.26.818.26 1.262 0 .46-.085.892-.26 1.288Z"
		/>
	</svg>
);

const MantleLogo = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="94" height="34">
		<path
			fill="var(--color-gray-600)"
			d="M18.567 15.12c.758-1.253 2.45-2.887 4.491-2.887 2.45 0 3.821 1.604 3.821 4.55v8.196h1.838V26h-6.125v-1.02h1.779v-8.05c0-1.605-.846-2.86-2.596-2.86-1.342 0-2.333.643-3.062 1.605v9.304h1.779V26h-6.038v-1.02h1.75v-8.05c0-1.605-.846-2.86-2.567-2.86-1.341 0-2.362.643-3.062 1.605v9.304h1.75V26H6.229v-1.02h1.838v-9.334c0-.788-.263-1.283-1.634-1.634v-.554l3.413-1.225h.146c.379.7.583 1.925.583 2.8.73-1.225 2.275-2.8 4.317-2.8 1.925 0 3.237 1.021 3.675 2.888m12.293-.787c0-1.137 1.429-2.1 3.85-2.1 3.412 0 5.425 1.313 5.425 4.259v7.058c0 .787.437 1.225 1.02 1.225.438 0 .788-.146 1.167-.583l.409.466c-.613.875-1.488 1.634-2.655 1.634-1.37 0-2.275-.934-2.45-2.305-.904 1.342-2.683 2.276-4.229 2.276-1.983 0-3.296-1.371-3.296-3.092 0-2.596 2.684-4.608 7.525-5.95v-.467c0-2.275-.991-3.529-3.266-3.762-.263 1.283-1.08 2.479-2.246 2.479-.73 0-1.254-.438-1.254-1.138m3.85 10.413c.904 0 2.129-.38 2.916-1.342v-5.308c-3.558 1.05-5.045 2.537-5.045 4.462 0 1.4.875 2.188 2.129 2.188m21.206.233h1.809V26h-6.096v-1.02h1.779v-7.905c0-1.75-.904-3.004-2.684-3.004-1.37 0-2.45.642-3.15 1.604v9.304h1.75V26H43.23v-1.02h1.837v-9.334c0-.788-.262-1.283-1.633-1.634v-.554l3.412-1.225h.146c.38.7.584 1.925.584 2.8.729-1.225 2.304-2.8 4.404-2.8 2.479 0 3.937 1.604 3.937 4.55zm4.697-16.012 2.304-.817h.204v4.375h3.559v1.02h-3.56v9.51c0 1.137.817 1.72 1.809 1.72.875 0 1.575-.467 2.246-1.196l.554.613c-.934 1.283-2.217 2.1-3.938 2.1-1.691 0-3.179-1.05-3.179-2.975v-9.771h-2.07v-1.021h2.07zM72.635 24.98h1.838V26h-6.154v-1.02h1.808V9.2c0-1.02-.262-1.546-1.691-1.867V6.75l4.024-1.458h.175zm14.787-2.187c-.904 1.925-2.8 3.5-5.396 3.5-3.53 0-5.892-2.975-5.892-6.709 0-4.316 2.917-7.35 5.95-7.35 3.267 0 5.104 2.334 5.104 5.6l-8.75 1.371c.292 3.296 2.246 5.367 4.696 5.367 1.488 0 2.683-.642 3.734-2.158zm-5.367-9.625c-2.246 0-3.646 2.77-3.646 5.104l4.638-.759c1.02-.175 1.487-.466 1.487-1.341 0-1.43-.729-3.004-2.479-3.004"
		/>
		<path
			fill="var(--color-blue-500)"
			d="M0 0v5h2v24H0v5h5v-2h84v2h5v-5h-2V5h2V0h-5v2H5V0zm4 1v3H1V1zm85 2v2h2v24h-2v2H5v-2H3V5h2V3zM1 30h3v3H1zm92 0v3h-3v-3zM90 1h3v3h-3z"
		/>
	</svg>
);

function GitHub(props: SvgAttributes) {
	return (
		<svg fill="currentColor" width="1em" height="1em" viewBox="0 0 32 32" {...props}>
			<path d="M16 3C8.82 3 3 8.97 3 16.34c0 5.83 3.64 10.79 8.7 12.6.7.19.59-.31.59-.65v-2.32c-3.95.48-4.1-2.2-4.37-2.65-.53-.93-1.8-1.17-1.42-1.62.9-.48 1.81.12 2.87 1.73.77 1.16 2.27.97 3.02.77a3.8 3.8 0 0 1 1.01-1.81c-4.08-.75-5.78-3.31-5.78-6.36 0-1.47.47-2.83 1.4-3.93-.6-1.8.05-3.35.14-3.58 1.69-.15 3.44 1.24 3.58 1.35.96-.26 2.05-.4 3.28-.4s2.33.14 3.3.41c.32-.25 1.95-1.45 3.52-1.3.08.22.72 1.73.16 3.51a5.97 5.97 0 0 1 1.42 3.95c0 3.05-1.71 5.61-5.81 6.35a3.81 3.81 0 0 1 1.1 2.72v3.36c.03.26 0 .53.44.53A13.33 13.33 0 0 0 29 16.35C29 8.97 23.18 3 16 3Z" />
		</svg>
	);
}

type Props = PropsWithChildren &
	WithStyleProps & {
		currentVersion: string | undefined;
	};

export function Layout({ children, className, currentVersion, style }: Props) {
	const { showNavigation, setShowNavigation } = useNavigation();
	const mainRef = useRef<ComponentRef<"main">>(null);

	return (
		<div className={cx("mx-auto h-full max-w-7xl sm:px-4", className)} style={style}>
			<Link
				className="sr-only"
				onClick={() => {
					mainRef.current?.focus({ preventScroll: true });
				}}
				to={{
					hash: "#main",
				}}
			>
				Skip to main content
			</Link>
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
					icon={showNavigation ? <XIcon /> : <ListIcon />}
				/>

				<Link
					to={href("/")}
					className="px-1 static top-auto flex sm:top-[1.4rem] md:fixed focus:outline-hidden focus-visible:ring-3 focus-visible:ring-focus-accent rounded"
				>
					<NgrokLogo />
					<MantleLogo />
				</Link>

				<div className="flex flex-col sm:flex-row items-center gap-2 -ml-1 md:ml-48">
					<Anchor
						className="text-strong font-mono text-xs hidden sm:inline-block"
						href="https://github.com/ngrok-oss/mantle/releases"
					>
						{currentVersion}
					</Anchor>

					<IconButton
						appearance="ghost"
						asChild
						icon={<GitHub />}
						label="link to ngrok mantle GitHub"
						className="hidden sm:inline-flex"
					>
						<a href="https://github.com/ngrok-oss/mantle" target="_blank" />
					</IconButton>

					<DropdownMenu.Root>
						<DropdownMenu.Trigger asChild>
							<IconButton
								icon={<GitHub />}
								label="link to ngrok Mantle GitHub"
								type="button"
								className="inline-flex sm:hidden"
							/>
						</DropdownMenu.Trigger>
						<DropdownMenu.Content>
							<DropdownMenu.Item asChild>
								<a
									href="https://github.com/ngrok-oss/mantle/releases"
									target="_blank"
									className="justify-between gap-4"
								>
									<span>
										Version <span className="font-mono">{currentVersion}</span>
									</span>
									<ArrowSquareOutIcon className="text-muted" />
								</a>
							</DropdownMenu.Item>
							<DropdownMenu.Item asChild>
								<a
									href="https://github.com/ngrok-oss/mantle"
									target="_blank"
									className="justify-between gap-4"
								>
									GitHub Repo
									<ArrowSquareOutIcon className="text-muted" />
								</a>
							</DropdownMenu.Item>
						</DropdownMenu.Content>
					</DropdownMenu.Root>
				</div>

				<div className="flex items-center gap-3 ml-auto">
					<CommandPalette currentVersion={currentVersion} />

					<ThemeSwitcher />
				</div>
			</header>
			{showNavigation && (
				<div className="bg-card fixed bottom-0 left-0 right-0 top-20 z-50 p-4 md:hidden">
					<Navigation className="scrollbar h-full overflow-auto px-1 overscroll-contain" />
				</div>
			)}
			<div className="flex gap-4">
				<div className="bottom-0 hidden w-44 md:block">
					<div className="fixed bottom-0 top-20 w-44">
						<Navigation className="scrollbar scroll-shadow h-full overflow-y-auto px-1 py-4" />
					</div>
				</div>
				<main
					className="bg-card w-0 flex-1 p-4 shadow-2xl sm:mb-4 sm:rounded-lg md:p-9 lg:mb-9 focus:outline-hidden"
					tabIndex={-1}
					ref={mainRef}
					id="main"
				>
					{children}
				</main>
			</div>
		</div>
	);
}

/**
 * Components that are ready for production use cases
 */
const prodReadyComponents = [
	"Alert Dialog",
	"Alert",
	"Anchor",
	"AutoScrollToHash",
	"Badge",
	"Browser Only",
	"Button",
	"Card",
	"Checkbox",
	"Code Block",
	"Code",
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
	"Password Input",
	"Progress Bar",
	"Progress Donut",
	"Radio Group",
	"SandboxedOnClick",
	"Select",
	"Separator",
	"Sheet",
	"Skeleton",
	"Slot",
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
const previewComponents = [
	//,
	"Accordion",
	"Calendar",
	"Combobox",
	"Command",
	"Data Table",
	"Pagination",
	"Popover",
] as const;

type Route = Parameters<typeof href>[0];

const prodReadyComponentRouteLookup = {
	Alert: "/components/alert",
	"Alert Dialog": "/components/alert-dialog",
	Anchor: "/components/anchor",
	AutoScrollToHash: "/components/auto-scroll-to-hash",
	Badge: "/components/badge",
	"Browser Only": "/components/browser-only",
	Button: "/components/button",
	Card: "/components/card",
	Checkbox: "/components/checkbox",
	Code: "/components/code",
	"Code Block": "/components/code-block",
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
	"Password Input": "/components/password-input",
	"Progress Donut": "/components/progress-donut",
	"Progress Bar": "/components/progress-bar",
	"Radio Group": "/components/radio-group",
	SandboxedOnClick: "/components/sandboxed-on-click",
	Select: "/components/select",
	Separator: "/components/separator",
	Sheet: "/components/sheet",
	Skeleton: "/components/skeleton",
	Slot: "/components/slot",
	Switch: "/components/switch",
	Table: "/components/table",
	Tabs: "/components/tabs",
	"Text Area": "/components/text-area",
	Theme: "/components/theme",
	Toast: "/components/toast",
	Tooltip: "/components/tooltip",
} as const satisfies Record<(typeof prodReadyComponents)[number], Route>;

const previewComponentsRouteLookup = {
	Accordion: "/components/preview/accordion",
	Calendar: "/components/preview/calendar",
	Combobox: "/components/preview/combobox",
	Command: "/components/preview/command",
	"Data Table": "/components/preview/data-table",
	Pagination: "/components/preview/pagination",
	Popover: "/components/preview/popover",
} as const satisfies Record<(typeof previewComponents)[number], Route>;

const welcomePages = ["Overview & Setup", "Philosophy"] as const;

const welcomeRoutes = {
	"Overview & Setup": "/",
	Philosophy: "/philosophy",
} as const satisfies Record<(typeof welcomePages)[number], Route>;

const basePages = ["Breakpoints", "Colors", "Shadows", "Tailwind Variants", "Typography"] as const;

const baseRoutes = {
	Breakpoints: "/base/breakpoints",
	Colors: "/base/colors",
	Shadows: "/base/shadows",
	"Tailwind Variants": "/base/tailwind-variants",
	Typography: "/base/typography",
} as const satisfies Record<(typeof basePages)[number], Route>;

function Navigation({ className, style }: WithStyleProps) {
	return (
		<nav className={cx("text-sm", className)} style={style}>
			<ul className="flex flex-col">
				<li className="mb-2 text-xs font-medium uppercase tracking-wider font-mono">Welcome</li>

				{welcomePages.map((page) => (
					<li key={page}>
						<NavLink to={welcomeRoutes[page]} prefetch="intent">
							{page}
						</NavLink>
					</li>
				))}

				<li className="mt-6 text-xs font-medium uppercase tracking-wider font-mono">Base</li>

				<ul className="mt-2">
					{basePages.map((page) => (
						<li key={page}>
							<NavLink to={baseRoutes[page]} prefetch="intent">
								{page}
							</NavLink>
						</li>
					))}
				</ul>

				<li className="mt-6 text-xs font-medium uppercase tracking-wider font-mono">Components</li>
				<ul className="mt-2">
					{prodReadyComponents.map((component) => (
						<li key={component}>
							<NavLink to={prodReadyComponentRouteLookup[component]} prefetch="intent">
								{component}
							</NavLink>
						</li>
					))}
				</ul>

				<li className="mt-6 text-xs font-medium uppercase tracking-wider font-mono">
					Preview Components
				</li>
				<ul className="mt-2">
					{previewComponents.map((component) => (
						<li key={component}>
							<NavLink to={previewComponentsRouteLookup[component]} prefetch="intent">
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

function ItemName({ children }: PropsWithChildren) {
	return (
		<span className="flex items-start sm:items-center gap-x-2 gap-y-1 flex-col sm:flex-row">
			{children}
		</span>
	);
}

function CommandPalette({ currentVersion }: { currentVersion: string | undefined }) {
	const navigate = useNavigate();
	const [open, setOpen] = useState(false);
	const [currentTheme, setTheme] = useTheme();
	useHotkeys("mod+k", () => setOpen(true), [setOpen]);

	return (
		<>
			<IconButton
				appearance="outlined"
				className="flex sm:hidden"
				icon={<MagnifyingGlassIcon />}
				label="Search Mantle"
				onClick={() => setOpen(true)}
				size="md"
				type="button"
			/>
			<Button
				appearance="outlined"
				className="hidden sm:flex"
				icon={<MagnifyingGlassIcon />}
				onClick={() => setOpen(true)}
				priority="neutral"
				type="button"
			>
				<span className="sr-only">Search Mantle</span>
				Search
				<span className="inline-flex gap-1 items-center pointer-events-none select-none">
					<MetaKey />
					<Kbd>K</Kbd>
				</span>
			</Button>
			<Command.Dialog open={open} onOpenChange={setOpen}>
				<Command.Input placeholder="Search Mantle..." />
				<Command.List>
					<Command.Empty>No results found.</Command.Empty>
					<Command.Group heading="Welcome">
						{welcomePages.map((page) => (
							<Command.Item
								key={page}
								onSelect={() => {
									navigate(welcomeRoutes[page]);
									setOpen(false);
								}}
								asChild
							>
								<Link
									to={welcomeRoutes[page]}
									prefetch="intent"
									className="flex items-center gap-2 justify-between"
								>
									{page}
									<ArrowRightIcon />
								</Link>
							</Command.Item>
						))}
						<Command.Item asChild onSelect={() => setOpen(false)}>
							<a
								href="https://github.com/ngrok-oss/mantle"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 justify-between"
							>
								<ItemName>
									GitHub Repo
									<span className="text-muted text-xs font-mono">ngrok-oss/mantle</span>
								</ItemName>
								<ArrowSquareOutIcon />
							</a>
						</Command.Item>
						<Command.Item asChild onSelect={() => setOpen(false)}>
							<a
								href="https://github.com/ngrok-oss/mantle/releases"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 justify-between"
							>
								<ItemName>
									GitHub Releases
									<span className="text-muted text-xs font-mono">version {currentVersion}</span>
								</ItemName>
								<ArrowSquareOutIcon />
							</a>
						</Command.Item>
					</Command.Group>
					<Command.Separator />
					<Command.Group heading="Base">
						{basePages.map((page) => (
							<Command.Item
								key={page}
								onSelect={() => {
									navigate(baseRoutes[page]);
									setOpen(false);
								}}
								asChild
							>
								<Link
									to={baseRoutes[page]}
									prefetch="intent"
									className="flex items-center gap-2 justify-between"
								>
									<ItemName>
										{page}
										<span className="text-muted text-xs">{baseRoutes[page]}</span>
									</ItemName>
									<ArrowRightIcon />
								</Link>
							</Command.Item>
						))}
					</Command.Group>
					<Command.Separator />
					<Command.Group heading="Components">
						{prodReadyComponents.map((component) => (
							<Command.Item
								key={component}
								onSelect={() => {
									navigate(prodReadyComponentRouteLookup[component]);
									setOpen(false);
								}}
								asChild
							>
								<Link
									to={prodReadyComponentRouteLookup[component]}
									className="flex items-center gap-2 justify-between"
								>
									<ItemName>
										{component}
										<span className="text-muted text-xs">
											{prodReadyComponentRouteLookup[component]}
										</span>
									</ItemName>
									<ArrowRightIcon />
								</Link>
							</Command.Item>
						))}
					</Command.Group>
					<Command.Separator />
					<Command.Group
						heading={
							<span className="flex items-center gap-2">
								Preview Components <PreviewBadge />
							</span>
						}
					>
						{previewComponents.map((component) => (
							<Command.Item
								key={component}
								onSelect={() => {
									navigate(previewComponentsRouteLookup[component]);
									setOpen(false);
								}}
								asChild
							>
								<Link
									to={previewComponentsRouteLookup[component]}
									className="flex items-center gap-2 justify-between"
								>
									<ItemName>
										{component}
										<span className="text-muted text-xs">
											{previewComponentsRouteLookup[component]}
										</span>
									</ItemName>
									<ArrowRightIcon />
								</Link>
							</Command.Item>
						))}
					</Command.Group>
					<Command.Separator />
					<Command.Group heading="Theme">
						<Command.Item
							onSelect={() => {
								setTheme("system");
								setOpen(false);
							}}
						>
							<MonitorIcon />
							Use System theme
							{currentTheme === "system" ? <CheckIcon /> : null}
						</Command.Item>
						<Command.Item
							onSelect={() => {
								setTheme("light");
								setOpen(false);
							}}
						>
							<SunIcon />
							Use Light theme
							{currentTheme === "light" ? <CheckIcon /> : null}
						</Command.Item>
						<Command.Item
							onSelect={() => {
								setTheme("dark");
								setOpen(false);
							}}
						>
							<MoonIcon />
							Use Dark theme
							{currentTheme === "dark" ? <CheckIcon /> : null}
						</Command.Item>
						<Command.Item
							onSelect={() => {
								setTheme("light-high-contrast");
								setOpen(false);
							}}
						>
							<SunIcon weight="fill" />
							Use Light High Contrast theme
							{currentTheme === "light-high-contrast" ? <CheckIcon /> : null}
						</Command.Item>
						<Command.Item
							onSelect={() => {
								setTheme("dark-high-contrast");
								setOpen(false);
							}}
						>
							<MoonIcon weight="fill" />
							Use Dark High Contrast theme
							{currentTheme === "dark-high-contrast" ? <CheckIcon /> : null}
						</Command.Item>
					</Command.Group>
				</Command.List>
			</Command.Dialog>
		</>
	);
}
