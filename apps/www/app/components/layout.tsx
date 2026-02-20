import { Anchor } from "@ngrok/mantle/anchor";
import { Button, IconButton } from "@ngrok/mantle/button";
import { Command, MetaKey } from "@ngrok/mantle/command";
import { cx } from "@ngrok/mantle/cx";
import { DropdownMenu } from "@ngrok/mantle/dropdown-menu";
import type { SvgAttributes } from "@ngrok/mantle/icon";
import { NgrokIcon } from "@ngrok/mantle/icons";
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
import { PrimaryFooter } from "~/components/footer";
import { ThemeSwitcher } from "~/components/theme-switcher";
import { NavLink } from "./nav-link";
import { useNavigation } from "./navigation-context";
import { TOC_PORTAL_ID } from "./table-of-contents";

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
		<div className={cx("flex min-h-full flex-col", className)} style={style}>
			<div className="mx-auto w-full max-w-7xl flex-1 sm:px-4 pb-16">
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
				<header className="xs:gap-4 relative z-10 flex h-20 items-center gap-3 bg-base px-4 sm:px-0 xl:pr-44">
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
						className="px-1 flex focus:outline-hidden focus-visible:ring-3 focus-visible:ring-focus-accent rounded"
					>
						<NgrokIcon className="xs:block hidden h-8.5 w-auto text-blue-600" />
						<MantleLogo />
					</Link>

					<div className="flex flex-col sm:flex-row items-center gap-2 -ml-1">
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
					<div className="hidden w-44 md:block">
						<div className="scrollbar scroll-shadow sticky top-0 max-h-screen w-44 overflow-y-auto px-1 py-4">
							<Navigation />
						</div>
					</div>
					<main
						className="bg-card w-0 flex-1 p-4 shadow-2xl sm:rounded-lg md:p-9 focus:outline-hidden"
						tabIndex={-1}
						ref={mainRef}
						id="main"
					>
						{children}
					</main>
					<aside id={TOC_PORTAL_ID} className="hidden w-40 xl:block" />
				</div>
			</div>
			<PrimaryFooter />
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
const previewComponents = [
	//,
	"Accordion",
	"Calendar",
] as const;

type Route = Parameters<typeof href>[0];

const prodReadyComponentRouteLookup = {
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

const previewComponentsRouteLookup = {
	Accordion: "/components/preview/accordion",
	Calendar: "/components/preview/calendar",
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

const hooksRoute = "/hooks" as const satisfies Route;

function Navigation({ className, style }: WithStyleProps) {
	return (
		<nav className={cx("text-sm pb-16", className)} style={style}>
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

				<li className="mt-6 text-xs font-medium uppercase tracking-wider font-mono">Hooks</li>
				<ul className="mt-2">
					<li>
						<NavLink to={hooksRoute} prefetch="intent">
							Hooks
						</NavLink>
					</li>
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
					<Command.Group heading="Hooks">
						<Command.Item
							onSelect={() => {
								navigate(hooksRoute);
								setOpen(false);
							}}
							asChild
						>
							<Link
								to={hooksRoute}
								prefetch="intent"
								className="flex items-center gap-2 justify-between"
							>
								<ItemName>
									Hooks
									<span className="text-muted text-xs">{hooksRoute}</span>
								</ItemName>
								<ArrowRightIcon />
							</Link>
						</Command.Item>
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
