import { IconButton } from "@ngrok/mantle/button";
import { Command, MetaKey } from "@ngrok/mantle/command";
import { DropdownMenu } from "@ngrok/mantle/dropdown-menu";
import { Separator } from "@ngrok/mantle/separator";
import type { SvgAttributes } from "@ngrok/mantle/icon";
import { NgrokLettermarkIcon } from "@ngrok/mantle/icons";
import { Kbd } from "@ngrok/mantle/kbd";
import { useTheme } from "@ngrok/mantle/theme";
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
import type { PropsWithChildren, ReactNode } from "react";
import { useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { Link, href, useNavigate } from "react-router";
import { PreviewBadge } from "~/components/badges";
import { ThemeSwitcher } from "~/components/theme-switcher";
import { useNavigation } from "./navigation-context";
import {
	basePages,
	baseRoutes,
	hooksRoute,
	previewComponents,
	previewComponentsRouteLookup,
	prodReadyComponents,
	prodReadyComponentRouteLookup,
	utilsPages,
	utilsRoutes,
	welcomePages,
	welcomeRoutes,
} from "./navigation-data";

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

type HeaderProps = {
	/** The current package version string. */
	currentVersion: string | undefined;
	/** Optional mobile navigation content rendered when the hamburger menu is open. */
	mobileNavigation?: ReactNode;
};

/** Shared sticky header with logo, navigation, search, and theme controls. */
export function Header({ currentVersion, mobileNavigation }: HeaderProps) {
	const { showNavigation, setShowNavigation } = useNavigation();

	return (
		<>
			<header className="sticky top-0 z-50 bg-card">
				<div className="mx-auto flex h-15 w-full max-w-7xl items-center gap-3 px-4 md:gap-4">
					<Link
						to={href("/")}
						className="flex items-center gap-2 rounded px-1 font-mono text-xl leading-8 text-strong/90 hover:text-strong focus:outline-hidden focus-visible:ring-3 focus-visible:ring-focus-accent"
					>
						<NgrokLettermarkIcon className="size-6" />
						<span className="text-muted">/</span>
						<span>mantle</span>
					</Link>

					<nav className="hidden md:flex items-center gap-1">
						<HeaderNavLink to={href("/")}>Docs</HeaderNavLink>
						<HeaderNavLink to={href("/components/alert-dialog")}>Components</HeaderNavLink>
						<HeaderNavLink to={href("/blocks")}>Blocks</HeaderNavLink>
					</nav>

					<div className="flex items-center ml-auto">
						<div className="flex items-center">
							<a
								href="https://github.com/ngrok-oss/mantle"
								target="_blank"
								className="hidden md:inline-flex items-center gap-1.5 rounded-md px-2 h-9 text-xs font-mono font-medium text-strong hover:bg-neutral-500/10 focus:outline-hidden focus-visible:ring-4 focus-visible:ring-focus-accent"
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
			{showNavigation && mobileNavigation && (
				<div className="bg-card fixed bottom-0 left-0 right-0 top-15 z-50 p-4 md:hidden">
					<div className="scrollbar h-full overflow-auto overscroll-contain">
						<nav className="text-sm px-1 mb-6">
							<ul className="flex flex-col">
								<li className="mb-2 text-xs font-medium uppercase tracking-wider font-mono">
									Menu
								</li>
								<li>
									<Link
										to={href("/")}
										prefetch="intent"
										className="text-muted hover:text-strong block py-1 rounded focus:outline-hidden focus-visible:ring-3 focus-visible:ring-focus-accent"
										onClick={() => setShowNavigation(false)}
									>
										Docs
									</Link>
								</li>
								<li>
									<Link
										to={href("/components/alert-dialog")}
										prefetch="intent"
										className="text-muted hover:text-strong block py-1 rounded focus:outline-hidden focus-visible:ring-3 focus-visible:ring-focus-accent"
										onClick={() => setShowNavigation(false)}
									>
										Components
									</Link>
								</li>
								<li>
									<Link
										to={href("/blocks")}
										prefetch="intent"
										className="text-muted hover:text-strong block py-1 rounded focus:outline-hidden focus-visible:ring-3 focus-visible:ring-focus-accent"
										onClick={() => setShowNavigation(false)}
									>
										Blocks
									</Link>
								</li>
							</ul>
						</nav>
						{mobileNavigation}
					</div>
				</div>
			)}
		</>
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
				className="hidden md:flex items-center justify-between w-48 h-9 gap-1.5 rounded-md border border-form bg-form py-1.5 pl-3 pr-1.5 text-sm text-muted hover:bg-neutral-500/10 focus:outline-hidden focus-visible:ring-4 focus-visible:ring-focus-accent"
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
