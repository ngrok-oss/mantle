import { Button } from "@/button";
import { cx } from "@/cx";
import { Select, SelectContent, SelectIcon, SelectOption, SelectTrigger } from "@/select";
import { isTheme, theme, useTheme } from "@/theme-provider";
import { WithStyleProps } from "@/types/with-style-props";
import { Link, NavLink } from "@remix-run/react";
import { PropsWithChildren, useState } from "react";

const MantleLogo = () => (
	<svg width="184" height="36">
		<path
			fill="hsl(var(--blue-600))"
			d="M29.149 13.905c-1.187-1.331-2.655-2.001-4.4-2.001-1.075 0-2.065.21-2.976.633a7.307 7.307 0 0 0-2.36 1.733 8.342 8.342 0 0 0-1.566 2.59c-.384.989-.576 2.06-.576 3.218 0 1.135.179 2.17.531 3.105.357.93.853 1.728 1.495 2.393a6.856 6.856 0 0 0 2.289 1.56c.884.373 1.852.56 2.905.56.477 0 .919-.036 1.32-.105a5.166 5.166 0 0 0 1.151-.337c.366-.16.723-.36 1.08-.602a9.31 9.31 0 0 0 1.107-.925v3.953h-.005v.383h-4.872l-3.663 4.212V35h13.747V12.319h-5.207v1.586Zm-.014 7.245c-.183.419-.424.788-.718 1.103a3.257 3.257 0 0 1-2.37.998 3.33 3.33 0 0 1-1.338-.264 3.21 3.21 0 0 1-1.066-.734 3.564 3.564 0 0 1-.964-2.471c0-.47.09-.912.272-1.322.183-.41.424-.766.737-1.072.307-.305.66-.547 1.062-.734a3.031 3.031 0 0 1 1.293-.278c.442 0 .866.087 1.28.265.411.173.773.42 1.08.734.309.314.55.674.737 1.085.183.41.272.861.272 1.354-.004.47-.094.916-.277 1.336Zm-14.514-6.998a5.627 5.627 0 0 0-.923-.876 5.396 5.396 0 0 0-.96-.579 4.44 4.44 0 0 0-.522-.2 5.88 5.88 0 0 0-.843-.197H7.661l-2.454 2.86v-2.8H0v15.08h5.207V17.265h4.89l.406-.009v10.18h5.207v-9.432c0-.803-.076-1.518-.228-2.147a4.216 4.216 0 0 0-.86-1.705Zm35.048-1.833h-5.68l-2.258 2.598V12.32h-5.212V27.4h5.22l.005-10.094h3.788l4.137-4.778v-.21Zm28.136 6.966 7.12-6.711v-.255h-6.861l-5.462 5.439V3h-5.207v24.395h5.207v-6.14l5.725 6.14h7.006v-.287l-7.528-7.823Zm-14.479-5.248c-.794-.716-1.736-1.272-2.82-1.673-1.084-.401-2.258-.602-3.525-.602-1.285 0-2.472.205-3.551.616a8.799 8.799 0 0 0-2.807 1.687 7.71 7.71 0 0 0-1.843 2.53 7.473 7.473 0 0 0-.66 3.132c0 1.235.219 2.357.66 3.364a7.732 7.732 0 0 0 1.83 2.6 8.056 8.056 0 0 0 2.775 1.677c1.075.392 2.244.588 3.512.588 1.285 0 2.476-.196 3.582-.588 1.102-.392 2.048-.944 2.834-1.664a7.795 7.795 0 0 0 1.856-2.558c.45-.99.678-2.079.678-3.278 0-1.194-.223-2.288-.66-3.278a7.649 7.649 0 0 0-1.861-2.553Zm-3.253 7.14c-.183.42-.424.788-.718 1.103a3.272 3.272 0 0 1-2.37.998c-.459 0-.896-.086-1.311-.264a3.145 3.145 0 0 1-1.062-.734 3.77 3.77 0 0 1-.718-1.103 3.451 3.451 0 0 1-.273-1.395c0-.47.09-.912.273-1.323a3.8 3.8 0 0 1 .718-1.084c.299-.315.651-.561 1.062-.735a3.279 3.279 0 0 1 1.312-.264c.46 0 .897.087 1.307.264.41.174.767.42 1.062.735.299.314.535.683.718 1.103.183.42.272.866.272 1.335 0 .488-.089.944-.272 1.364Z"
		/>
		<path
			fill="hsl(var(--gray-600))"
			d="M110.286 27v-8.758c0-1.295-.319-2.31-.957-3.045-.638-.735-1.498-1.102-2.581-1.102-.967 0-1.788.29-2.465.87-.657.56-1.131 1.334-1.421 2.32.039.27.058.483.058.638V27h-2.03v-8.758c0-1.295-.319-2.31-.957-3.045-.638-.735-1.498-1.102-2.58-1.102-.929 0-1.731.261-2.408.783-.657.503-1.13 1.19-1.42 2.06V27h-2.03V12.5h2.03v1.682c.966-1.315 2.406-1.972 4.32-1.972 1.914 0 3.345.85 4.292 2.552 1.121-1.701 2.755-2.552 4.901-2.552 1.624 0 2.91.512 3.857 1.537.947 1.025 1.421 2.417 1.421 4.176V27h-2.03Zm11.914.29c-2.126 0-3.886-.725-5.278-2.175-1.372-1.47-2.059-3.258-2.059-5.365s.687-3.886 2.059-5.336c1.392-1.47 3.152-2.204 5.278-2.204 2.108 0 3.79.686 5.046 2.06V12.5h2.03V27h-2.03v-1.769c-1.256 1.373-2.938 2.06-5.046 2.06Zm.087-1.885c1.122 0 2.108-.242 2.958-.725a5.438 5.438 0 0 0 2.001-1.914v-6.032a5.436 5.436 0 0 0-2.001-1.914c-.85-.483-1.836-.725-2.958-.725-1.566 0-2.851.551-3.857 1.653-.986 1.083-1.479 2.417-1.479 4.002s.493 2.93 1.479 4.031c1.006 1.083 2.291 1.624 3.857 1.624ZM133.247 27V12.5h2.03v2.03c.986-1.547 2.572-2.32 4.756-2.32 1.605 0 2.91.512 3.915 1.537 1.025 1.025 1.537 2.417 1.537 4.176V27h-2.03v-8.787c0-1.315-.348-2.33-1.044-3.045-.676-.715-1.624-1.073-2.842-1.073-1.102 0-2.02.3-2.755.9-.715.58-1.227 1.362-1.537 2.348V27h-2.03Zm21.522.145c-1.199 0-2.204-.358-3.016-1.073-.793-.715-1.189-1.75-1.189-3.103v-8.555h-3.683V12.5h3.683V8.47h2.03v4.03h4.524v1.914h-4.524v8.381c0 .87.213 1.508.638 1.914.445.406 1.015.61 1.711.61.773 0 1.489-.185 2.146-.552l.609 1.74c-.812.425-1.788.638-2.929.638Zm4.797-.145V5.83h2.03V27h-2.03Zm12.272.29c-2.223 0-4.021-.715-5.394-2.146-1.372-1.45-2.059-3.248-2.059-5.394 0-2.127.706-3.915 2.117-5.365 1.412-1.45 3.21-2.175 5.394-2.175 1.953 0 3.577.657 4.872 1.972 1.296 1.315 1.943 3.103 1.943 5.365v.551h-12.238c0 1.508.503 2.774 1.508 3.8 1.006 1.004 2.291 1.507 3.857 1.507 1.16 0 2.108-.222 2.842-.667.754-.464 1.402-1.15 1.943-2.059l1.653 1.073c-1.372 2.359-3.518 3.538-6.438 3.538Zm-5.191-8.99h9.947c-.193-1.295-.725-2.32-1.595-3.074s-1.933-1.13-3.19-1.13a5.306 5.306 0 0 0-3.364 1.16c-.966.753-1.566 1.768-1.798 3.044Z"
		/>
		<path
			fill="hsl(var(--blue-500))"
			d="M86 0v5h2v26h-2v5h5v-2h88v2h5v-5h-2V5h2V0h-5v2H91V0h-5Zm4 1v3h-3V1h3Zm89 2v2h2v26h-2v2H91v-2h-2V5h2V3h88ZM87 32h3v3h-3v-3Zm96 0v3h-3v-3h3Zm-3-31h3v3h-3V1Z"
		/>
	</svg>
);

type Props = PropsWithChildren & WithStyleProps;

export function Layout({ children, className, style }: Props) {
	const [currentTheme, setTheme] = useTheme();
	const [showNavigation, setShowNavigation] = useState(false);

	return (
		<main className={cx("mx-auto h-full max-w-7xl sm:px-4", className)} style={style}>
			<header className="flex h-24 items-center gap-2 px-4 sm:px-0 md:gap-4">
				<Button className="md:hidden" priority="primary" onClick={() => { setShowNavigation((s) => !s) }}>Menu</Button>

				<Link to="/">
					<MantleLogo />
				</Link>

				<Select
					value={currentTheme}
					onValueChange={(value) => {
						const maybeNewTheme = isTheme(value) ? value : undefined;
						if (maybeNewTheme) {
							setTheme(maybeNewTheme);
						}
					}}
				>
					<div className="ml-auto">
						{/* TODO: this should probably have a title/tooltip instead that describes what it is since we ain't got a spot for a label */}
						<span className="sr-only">Theme Switcher</span>
						<SelectTrigger className="w-min" hideIcon>
							<SelectIcon className="text-gray-600">
								<svg width="39" height="24" fill="currentColor">
									<path d="M28 9h10l-5 6-5-6Z" />
									<path d="M16.02 2.297a10.53 10.53 0 0 1 3.58 2.457A10.464 10.464 0 0 1 22.5 12c0 5.799-4.701 10.5-10.5 10.5-2.81 0-5.361-1.104-7.246-2.9A10.468 10.468 0 0 1 1.5 12a10.469 10.469 0 0 1 3.075-7.425A10.469 10.469 0 0 1 12 1.5c1.424 0 2.781.283 4.02.797ZM20.9 12a8.87 8.87 0 0 0-2.432-6.114L5.886 18.468A8.9 8.9 0 0 0 20.9 12Z" />
								</svg>
							</SelectIcon>
						</SelectTrigger>
					</div>
					<SelectContent>
						<SelectOption value={theme("system")}>System</SelectOption>
						<SelectOption value={theme("light")}>Light</SelectOption>
						<SelectOption value={theme("dark")}>Dark</SelectOption>
						<SelectOption value={theme("light-high-contrast")}>Light High Contrast</SelectOption>
						<SelectOption value={theme("dark-high-contrast")}>Dark High Contrast</SelectOption>
					</SelectContent>
				</Select>
			</header>
			{showNavigation &&
				<div className="md:hidden absolute bg-card z-50 p-4 bottom-0 top-24 left-0 right-0">
					<Navigation className="h-full scrollbar overflow-auto" />
				</div>
			}
			<div className="flex gap-4 sm:mb-4 lg:mb-9">
				<Navigation className="hidden w-44 pt-9 md:block" />
				<article className="flex-1 bg-card p-4 shadow-lg sm:rounded-lg md:p-9 w-0">{children}</article>
			</div>
		</main>
	);
}

function Navigation({ className, style }: WithStyleProps) {
	return (
		<nav className={cx("text-sm", className)} style={style}>
			<ul role="list" className="flex flex-col">
				<li className="mb-2 text-xs font-medium uppercase tracking-wide">Welcome</li>

				<li>
					<NavLink
						className={({ isActive }) =>
							cx(
								"block py-1 text-gray-500 hover:text-gray-900",
								isActive && "font-medium text-blue-600 hover:text-blue-600",
							)
						}
						to="/"
					>
						Overview
					</NavLink>
				</li>

				<li className="mt-6 text-xs font-medium uppercase tracking-wide">Base</li>

				<ul role="list" className="mt-2">
					<li>
						<NavLink
							className={({ isActive }) =>
								cx(
									"block py-1 text-gray-500 hover:text-gray-900",
									isActive && "font-medium text-blue-600 hover:text-blue-600",
								)
							}
							to="/base/typography"
						>
							Typography
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								cx(
									"block py-1 text-gray-500 hover:text-gray-900",
									isActive && "font-medium text-blue-600 hover:text-blue-600",
								)
							}
							to="/base/colors"
						>
							Colors
						</NavLink>
					</li>
				</ul>

				<li className="mt-6 text-xs font-medium uppercase tracking-wide">Components</li>
				<ul role="list" className="mt-2">
					<li>
						<NavLink
							className={({ isActive }) =>
								cx(
									"block py-1 text-gray-500 hover:text-gray-900",
									isActive && "font-medium text-blue-600 hover:text-blue-600",
								)
							}
							to="/components/code-block"
						>
							Code Block
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								cx(
									"block py-1 text-gray-500 hover:text-gray-900",
									isActive && "font-medium text-blue-600 hover:text-blue-600",
								)
							}
							to="/components/input"
						>
							Input
						</NavLink>
					</li>
				</ul>
			</ul>
		</nav>
	);
}
