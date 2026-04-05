import { IconButton } from "@ngrok/mantle/button";
import { Command, MetaKey } from "@ngrok/mantle/command";
import { cx } from "@ngrok/mantle/cx";
import { DropdownMenu } from "@ngrok/mantle/dropdown-menu";
import { Separator } from "@ngrok/mantle/separator";
import type { SvgAttributes } from "@ngrok/mantle/icon";
import { NgrokLettermarkIcon } from "@ngrok/mantle/icons";
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
// import { PrimaryFooter } from "~/components/footer";
import { ThemeSwitcher } from "~/components/theme-switcher";
import { NavLink } from "./nav-link";
import { useNavigation } from "./navigation-context";
import { TOC_PORTAL_ID } from "./table-of-contents";

function GitHub(props: SvgAttributes) {
	return (
		<svg fill="currentColor" width="1em" height="1em" viewBox="0 0 32 32" {...props}>
			<path d="M16 3C8.82 3 3 8.97 3 16.34c0 5.83 3.64 10.79 8.7 12.6.7.19.59-.31.59-.65v-2.32c-3.95.48-4.1-2.2-4.37-2.65-.53-.93-1.8-1.17-1.42-1.62.9-.48 1.81.12 2.87 1.73.77 1.16 2.27.97 3.02.77a3.8 3.8 0 0 1 1.01-1.81c-4.08-.75-5.78-3.31-5.78-6.36 0-1.47.47-2.83 1.4-3.93-.6-1.8.05-3.35.14-3.58 1.69-.15 3.44 1.24 3.58 1.35.96-.26 2.05-.4 3.28-.4s2.33.14 3.3.41c.32-.25 1.95-1.45 3.52-1.3.08.22.72 1.73.16 3.51a5.97 5.97 0 0 1 1.42 3.95c0 3.05-1.71 5.61-5.81 6.35a3.81 3.81 0 0 1 1.1 2.72v3.36c.03.26 0 .53.44.53A13.33 13.33 0 0 0 29 16.35C29 8.97 23.18 3 16 3Z" />
		</svg>
	);
}

/** A ghost-button-styled navigation link for the top header. */
function HeaderNavLink({ to, children }: PropsWithChildren<{ to: string }>) {
	return (
		<Link
			to={to}
			className="inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-medium text-strong hover:bg-neutral-500/10 focus:outline-hidden focus-visible:ring-4 focus-visible:ring-focus-accent"
		>
			{children}
		</Link>
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
			<header className="sticky top-0 z-50 bg-card">
				<div className="xs:gap-4 mx-auto flex h-15 w-full max-w-screen-2xl items-center gap-3 px-4">
					<Link
						to={href("/")}
						className="flex items-center gap-2 rounded px-1 font-mono text-xl leading-8 text-strong/90 hover:text-strong focus:outline-hidden focus-visible:ring-3 focus-visible:ring-focus-accent"
					>
						<NgrokLettermarkIcon className="size-6" />
						<span className="text-muted">/</span>
						<span className="font-light">mantle</span>
					</Link>

					<nav className="absolute left-1/2 hidden -translate-x-1/2 md:flex items-center gap-1">
						<HeaderNavLink to={href("/")}>Docs</HeaderNavLink>
						<HeaderNavLink to={href("/components/alert")}>Components</HeaderNavLink>
						<HeaderNavLink to={href("/blocks")}>Blocks</HeaderNavLink>
					</nav>

					<div className="flex items-center ml-auto">
						<div className="flex items-center">
							<a
								href="https://github.com/ngrok-oss/mantle"
								target="_blank"
								className="hidden md:inline-flex items-center gap-1.5 rounded-md px-2 h-9 text-xs font-mono text-strong hover:bg-neutral-500/10 focus:outline-hidden focus-visible:ring-4 focus-visible:ring-focus-accent"
							>
								{currentVersion}
								<GitHub className="size-5" />
							</a>

							<DropdownMenu.Root>
								<DropdownMenu.Trigger asChild>
									<IconButton
										appearance="ghost"
										icon={<GitHub />}
										label="link to ngrok Mantle GitHub"
										type="button"
										className="inline-flex md:hidden"
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

							<ThemeSwitcher />
						</div>

						<Separator orientation="vertical" className="mx-3 h-5 hidden md:block" />

						<CommandPalette currentVersion={currentVersion} />

						<Separator orientation="vertical" className="mx-1 h-5 md:hidden" />

						<IconButton
							className="md:hidden"
							onClick={() => {
								setShowNavigation(!showNavigation);
							}}
							type="button"
							appearance="ghost"
							label="Menu"
							size="md"
							icon={showNavigation ? <XIcon /> : <ListIcon />}
						/>
					</div>
				</div>
			</header>
			{showNavigation && (
				<div className="bg-card fixed bottom-0 left-0 right-0 top-15 z-50 p-4 md:hidden">
					<Navigation className="scrollbar h-full overflow-auto px-1 overscroll-contain" />
				</div>
			)}
			<div className="mx-auto w-full max-w-7xl flex-1 px-4 pb-16 pt-20">
				<div className="flex gap-4">
					<div className="hidden w-44 md:block">
						<div className="scrollbar sticky top-15 max-h-[calc(100vh-3.75rem)] w-44 overflow-y-auto px-1 py-4">
							<Navigation />
						</div>
					</div>
					<main
						className="w-0 flex-1 px-4 pb-4 md:px-9 md:pb-9 focus:outline-hidden"
						tabIndex={-1}
						ref={mainRef}
						id="main"
					>
						{children}
					</main>
					<aside id={TOC_PORTAL_ID} className="hidden w-40 xl:block" />
				</div>
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

const previewComponentsRouteLookup = {
	Accordion: "/components/preview/accordion",
	Calendar: "/components/preview/calendar",
} as const satisfies Record<(typeof previewComponents)[number], Route>;

const welcomePages = ["Overview & Setup", "Philosophy"] as const;

const welcomeRoutes = {
	"Overview & Setup": "/",
	Philosophy: "/philosophy",
} as const satisfies Record<(typeof welcomePages)[number], Route>;

const basePages = [
	//,
	"Breakpoints",
	"Colors",
	"Shadows",
	"Tailwind Variants",
	"Typography",
] as const;

const baseRoutes = {
	Breakpoints: "/base/breakpoints",
	Colors: "/base/colors",
	Shadows: "/base/shadows",
	"Tailwind Variants": "/base/tailwind-variants",
	Typography: "/base/typography",
} as const satisfies Record<(typeof basePages)[number], Route>;

const hooksRoute = "/hooks" as const satisfies Route;

const utilsPages = [
	//,
	"cx",
	"color",
	"composeRefs",
	"inView",
	"sorting",
] as const;

const utilsRoutes = {
	cx: "/utils/cx",
	color: "/utils/color",
	composeRefs: "/utils/compose-refs",
	inView: "/utils/in-view",
	sorting: "/utils/sorting",
} as const satisfies Record<(typeof utilsPages)[number], Route>;

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

				<li className="mt-6 text-xs font-medium uppercase tracking-wider font-mono">Hooks</li>
				<ul className="mt-2">
					<li>
						<NavLink to={hooksRoute} prefetch="intent">
							Hooks
						</NavLink>
					</li>
				</ul>

				<li className="mt-6 text-xs font-medium uppercase tracking-wider font-mono">Utils</li>
				<ul className="mt-2">
					{utilsPages.map((page) => (
						<li key={page}>
							<NavLink to={utilsRoutes[page]} prefetch="intent">
								{page}
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
				appearance="ghost"
				className="flex md:hidden"
				icon={<MagnifyingGlassIcon />}
				label="Search Mantle"
				onClick={() => setOpen(true)}
				size="md"
				type="button"
			/>
			<button
				className="hidden md:flex items-center justify-between w-60 h-9 gap-1.5 rounded-md border border-form bg-form px-3 text-sm text-muted hover:bg-neutral-500/10 focus:outline-hidden focus-visible:ring-4 focus-visible:ring-focus-accent"
				onClick={() => setOpen(true)}
				type="button"
			>
				<span className="flex items-center gap-1.5">
					<MagnifyingGlassIcon className="size-5 shrink-0" />
					Search
				</span>
				<span className="inline-flex gap-1 items-center pointer-events-none select-none">
					<MetaKey />
					<Kbd>K</Kbd>
				</span>
			</button>
			<Command.Dialog.Root open={open} onOpenChange={setOpen}>
				<Command.Dialog.Content>
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
						<Command.Group heading="Utils">
							{utilsPages.map((page) => (
								<Command.Item
									key={page}
									onSelect={() => {
										navigate(utilsRoutes[page]);
										setOpen(false);
									}}
									asChild
								>
									<Link
										to={utilsRoutes[page]}
										prefetch="intent"
										className="flex items-center gap-2 justify-between"
									>
										<ItemName>
											{page}
											<span className="text-muted text-xs">{utilsRoutes[page]}</span>
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
				</Command.Dialog.Content>
			</Command.Dialog.Root>
		</>
	);
}
