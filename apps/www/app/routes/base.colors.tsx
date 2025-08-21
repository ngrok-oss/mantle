import { Anchor } from "@ngrok/mantle/anchor";
import { Code } from "@ngrok/mantle/code";
import { cx } from "@ngrok/mantle/cx";
import { useAppliedTheme } from "@ngrok/mantle/theme-provider";
import { HashNavLink } from "~/components/hash-nav-link";
import { PageHeader } from "~/components/page-header";
import type { Route } from "./+types/base.colors";

export const meta: Route.MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Colors" },
		{
			name: "description",
			content: "mantle is ngrok's UI library and design system",
		},
	];
};

export const headers: Route.HeadersFunction = () => {
	return {
		"Cache-Control": "max-age=300, stale-while-revalidate=604800",
	};
};

export default function Page() {
	const appliedTheme = useAppliedTheme();

	return (
		<div className="relative flex flex-row-reverse gap-9">
			<nav className="sticky top-6 hidden w-44 self-start lg:block">
				{/* TODO(cody): make this have scroll aware navigation links instead */}
				{/* TODO: this should be generated automatically */}
				<h3 className="text-xs font-medium uppercase tracking-widest">
					On this page
				</h3>
				<ul className="text-muted mt-3 flex flex-col gap-2 text-sm">
					<li>
						<HashNavLink
							className={(isActive) =>
								cx(
									"hover:text-strong hover:font-medium",
									isActive && "text-accent-600 font-medium",
								)
							}
							to=".#tailwind"
						>
							Tailwind
						</HashNavLink>
					</li>
					<li>
						<HashNavLink
							className={(isActive) =>
								cx(
									"hover:text-strong hover:font-medium",
									isActive && "text-accent-600 font-medium",
								)
							}
							to=".#variables"
						>
							Variables
						</HashNavLink>
					</li>
					<li>
						<HashNavLink
							className={(isActive) =>
								cx(
									"hover:text-strong hover:font-medium",
									isActive && "text-accent-600 font-medium",
								)
							}
							to=".#overrides"
						>
							Overrides
						</HashNavLink>
					</li>
					<li>
						<HashNavLink
							className={(isActive) =>
								cx(
									"hover:text-strong hover:font-medium",
									isActive && "text-accent-600 font-medium",
								)
							}
							to=".#functional-colors"
						>
							Functional Colors
						</HashNavLink>
					</li>
					<ul className="ml-4 flex flex-col gap-2">
						<li>
							<HashNavLink
								className={(isActive) =>
									cx(
										"hover:text-strong hover:font-medium",
										isActive && "text-accent-600 font-medium",
									)
								}
								to=".#neutral"
							>
								Neutral
							</HashNavLink>
						</li>
						<li>
							<HashNavLink
								className={(isActive) =>
									cx(
										"hover:text-strong hover:font-medium",
										isActive && "text-accent-600 font-medium",
									)
								}
								to=".#accent"
							>
								Accent
							</HashNavLink>
						</li>
						<li>
							<HashNavLink
								className={(isActive) =>
									cx(
										"hover:text-strong hover:font-medium",
										isActive && "text-accent-600 font-medium",
									)
								}
								to=".#success"
							>
								Success
							</HashNavLink>
						</li>
						<li>
							<HashNavLink
								className={(isActive) =>
									cx(
										"hover:text-strong hover:font-medium",
										isActive && "text-accent-600 font-medium",
									)
								}
								to=".#danger"
							>
								Danger
							</HashNavLink>
						</li>
						<li>
							<HashNavLink
								className={(isActive) =>
									cx(
										"hover:text-strong hover:font-medium",
										isActive && "text-accent-600 font-medium",
									)
								}
								to=".#warning"
							>
								Warning
							</HashNavLink>
						</li>
					</ul>
					<li>
						<HashNavLink
							className={(isActive) =>
								cx(
									"hover:text-strong hover:font-medium",
									isActive && "text-accent-600 font-medium",
								)
							}
							to=".#extended-palette"
						>
							Extended Palette
						</HashNavLink>
					</li>
					<ul className="ml-4 flex flex-col gap-2">
						<li>
							<HashNavLink
								className={(isActive) =>
									cx(
										"hover:text-strong hover:font-medium",
										isActive && "text-accent-600 font-medium",
									)
								}
								to=".#gray"
							>
								Gray
							</HashNavLink>
						</li>
						<li>
							<HashNavLink
								className={(isActive) =>
									cx(
										"hover:text-strong hover:font-medium",
										isActive && "text-accent-600 font-medium",
									)
								}
								to=".#red"
							>
								Red
							</HashNavLink>
						</li>
						<li>
							<HashNavLink
								className={(isActive) =>
									cx(
										"hover:text-strong hover:font-medium",
										isActive && "text-accent-600 font-medium",
									)
								}
								to=".#orange"
							>
								Orange
							</HashNavLink>
						</li>
						<li>
							<HashNavLink
								className={(isActive) =>
									cx(
										"hover:text-strong hover:font-medium",
										isActive && "text-accent-600 font-medium",
									)
								}
								to=".#amber"
							>
								Amber
							</HashNavLink>
						</li>
						<li>
							<HashNavLink
								className={(isActive) =>
									cx(
										"hover:text-strong hover:font-medium",
										isActive && "text-accent-600 font-medium",
									)
								}
								to=".#yellow"
							>
								Yellow
							</HashNavLink>
						</li>
						<li>
							<HashNavLink
								className={(isActive) =>
									cx(
										"hover:text-strong hover:font-medium",
										isActive && "text-accent-600 font-medium",
									)
								}
								to=".#lime"
							>
								Lime
							</HashNavLink>
						</li>
						<li>
							<HashNavLink
								className={(isActive) =>
									cx(
										"hover:text-strong hover:font-medium",
										isActive && "text-accent-600 font-medium",
									)
								}
								to=".#green"
							>
								Green
							</HashNavLink>
						</li>
						<li>
							<HashNavLink
								className={(isActive) =>
									cx(
										"hover:text-strong hover:font-medium",
										isActive && "text-accent-600 font-medium",
									)
								}
								to=".#emerald"
							>
								Emerald
							</HashNavLink>
						</li>
						<li>
							<HashNavLink
								className={(isActive) =>
									cx(
										"hover:text-strong hover:font-medium",
										isActive && "text-accent-600 font-medium",
									)
								}
								to=".#teal"
							>
								Teal
							</HashNavLink>
						</li>
						<li>
							<HashNavLink
								className={(isActive) =>
									cx(
										"hover:text-strong hover:font-medium",
										isActive && "text-accent-600 font-medium",
									)
								}
								to=".#cyan"
							>
								Cyan
							</HashNavLink>
						</li>
						<li>
							<HashNavLink
								className={(isActive) =>
									cx(
										"hover:text-strong hover:font-medium",
										isActive && "text-accent-600 font-medium",
									)
								}
								to=".#sky"
							>
								Sky
							</HashNavLink>
						</li>

						<li>
							<HashNavLink
								className={(isActive) =>
									cx(
										"hover:text-strong hover:font-medium",
										isActive && "text-accent-600 font-medium",
									)
								}
								to=".#blue"
							>
								Blue
							</HashNavLink>
						</li>
						<li>
							<HashNavLink
								className={(isActive) =>
									cx(
										"hover:text-strong hover:font-medium",
										isActive && "text-accent-600 font-medium",
									)
								}
								to=".#indigo"
							>
								Indigo
							</HashNavLink>
						</li>
						<li>
							<HashNavLink
								className={(isActive) =>
									cx(
										"hover:text-strong hover:font-medium",
										isActive && "text-accent-600 font-medium",
									)
								}
								to=".#violet"
							>
								Violet
							</HashNavLink>
						</li>
						<li>
							<HashNavLink
								className={(isActive) =>
									cx(
										"hover:text-strong hover:font-medium",
										isActive && "text-accent-600 font-medium",
									)
								}
								to=".#purple"
							>
								Purple
							</HashNavLink>
						</li>
						<li>
							<HashNavLink
								className={(isActive) =>
									cx(
										"hover:text-strong hover:font-medium",
										isActive && "text-accent-600 font-medium",
									)
								}
								to=".#fuchsia"
							>
								Fuchsia
							</HashNavLink>
						</li>
						<li>
							<HashNavLink
								className={(isActive) =>
									cx(
										"hover:text-strong hover:font-medium",
										isActive && "text-accent-600 font-medium",
									)
								}
								to=".#pink"
							>
								Pink
							</HashNavLink>
						</li>
						<li>
							<HashNavLink
								className={(isActive) =>
									cx(
										"hover:text-strong hover:font-medium",
										isActive && "text-accent-600 font-medium",
									)
								}
								to=".#rose"
							>
								Rose
							</HashNavLink>
						</li>
					</ul>
				</ul>
			</nav>
			<div className="flex-1">
				<PageHeader id="colors">Colors</PageHeader>
				<p className="font-body text-body mt-4 text-xl">
					Colors are a key component of any design system. They are used to
					convey meaning, attract attention, and provide feedback.
					Mantle&rsquo;s color system is designed to be accessible and flexible
					with dark and high contrast modes.
				</p>

				<h2 id="tailwind" className="mt-8 text-3xl font-medium">
					Tailwind
				</h2>
				<p className="font-body text-body mt-3">
					Mantle uses Tailwind under the hood for all its CSS styling. However,
					we differ from Tailwind when it comes to colors. Mantle provides a
					full color library that automatically provides a dark and high
					contrast modes. This is different from standard Tailwind usage that{" "}
					<em>requires</em> dark class variations. By simply specifying light
					colors provided by Mantle, you&rsquo;ll get dark and high contrast
					modes for free. If you require additional customization, you can
					provide dark variant classes as an override.
				</p>

				<h2 id="variables" className="mt-8 text-3xl font-medium">
					Variables
				</h2>
				<p className="font-body text-body mt-3">
					Mantle&rsquo;s colors are delivered as CSS variables via
					Tailwind&rsquo;s API eg. <Code>.text-blue-500</Code>. They can be
					directly accessed via <Code>var(--color-blue-500)</Code> and use{" "}
					<Code>oklch()</Code> color space.
				</p>

				<h2 id="black-and-white" className="mt-8 text-3xl font-medium">
					Black and White Color Variables
				</h2>
				<p className="font-body text-body mt-3 mb-2">
					Mantle overrides what "black" and "white" mean depending on the theme.
					We transformed these colors to be semantic colors instead of literal
					colors. For dark modes, we swap them so that white is actually black
					and vice versa. Pay attention to the example below when swapping
					between our themes!
				</p>
				<div className="bg-white flex flex-col items-center justify-center p-6 border border-card rounded text-black gap-2">
					<p>
						This renders <Code>bg-white</Code> and color <Code>text-black</Code>
						.
					</p>
					<p>
						The current applied theme is <Code>{appliedTheme}</Code>
					</p>
				</div>

				<h2 id="overrides" className="mt-8 text-3xl font-medium">
					Overrides
				</h2>
				<p className="font-body text-body mt-3">
					Most colors should appropriately swap for sensible values in dark and
					high contrast modes. However, there are often cases where you&rsquo;ll
					need to specify an override. The <Code>dark:</Code> variant is
					well-documented on{" "}
					<Anchor href="https://tailwindcss.com/docs/dark-mode">
						Tailwind&rsquo;s website
					</Anchor>
					. Mantle provides additional variants for high contrast and dark high
					contrast mode with <Code>high-contrast:</Code> and{" "}
					<Code>dark-high-contrast:</Code> respectively.
				</p>

				<h2 id="functional-colors" className="mt-8 text-3xl font-medium">
					Functional Colors
				</h2>
				<p className="font-body text-body mt-3">
					Mantle generally limits its color choices to the following functional
					colors for primary actions, and various states like danger and
					warnings.
				</p>

				<h3 id="neutral" className="mt-8 text-xl font-medium">
					Neutral
				</h3>
				<div className="mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row">
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-neutral-950" />
						950
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-neutral-900" />
						900
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-neutral-800" />
						800
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-neutral-700" />
						700
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-neutral-600" />
						600
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-neutral-500" />
						500
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-neutral-400" />
						400
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-neutral-300" />
						300
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-neutral-200" />
						200
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-neutral-100" />
						100
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-neutral-50" />
						50
					</div>
				</div>

				<h3 id="accent" className="mt-8 text-xl font-medium">
					Accent
				</h3>
				<div className="mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row">
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="bg-accent-950 h-10 w-full rounded" />
						950
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="bg-accent-900 h-10 w-full rounded" />
						900
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="bg-accent-800 h-10 w-full rounded" />
						800
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="bg-accent-700 h-10 w-full rounded" />
						700
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="bg-accent-600 h-10 w-full rounded" />
						600
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="bg-accent-500 h-10 w-full rounded" />
						500
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="bg-accent-400 h-10 w-full rounded" />
						400
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="bg-accent-300 h-10 w-full rounded" />
						300
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="bg-accent-200 h-10 w-full rounded" />
						200
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="bg-accent-100 h-10 w-full rounded" />
						100
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="bg-accent-50 h-10 w-full rounded" />
						50
					</div>
				</div>

				<h3
					id="success"
					className="mt-8 flex items-center gap-2 text-xl font-medium"
				>
					Success
				</h3>
				<div className="mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row">
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="bg-success-950 h-10 w-full rounded" />
						950
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="bg-success-900 h-10 w-full rounded" />
						900
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="bg-success-800 h-10 w-full rounded" />
						800
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="bg-success-700 h-10 w-full rounded" />
						700
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="bg-success-600 h-10 w-full rounded" />
						600
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="bg-success-500 h-10 w-full rounded" />
						500
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="bg-success-400 h-10 w-full rounded" />
						400
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="bg-success-300 h-10 w-full rounded" />
						300
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="bg-success-200 h-10 w-full rounded" />
						200
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="bg-success-100 h-10 w-full rounded" />
						100
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="bg-success-50 h-10 w-full rounded" />
						50
					</div>
				</div>

				<h3 id="danger" className="mt-8 text-xl font-medium">
					Danger
				</h3>
				<div className="mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row">
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="bg-danger-950 h-10 w-full rounded" />
						950
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="bg-danger-900 h-10 w-full rounded" />
						900
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="bg-danger-800 h-10 w-full rounded" />
						800
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="bg-danger-700 h-10 w-full rounded" />
						700
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="bg-danger-600 h-10 w-full rounded" />
						600
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="bg-danger-500 h-10 w-full rounded" />
						500
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="bg-danger-400 h-10 w-full rounded" />
						400
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="bg-danger-300 h-10 w-full rounded" />
						300
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="bg-danger-200 h-10 w-full rounded" />
						200
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="bg-danger-100 h-10 w-full rounded" />
						100
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="bg-danger-50 h-10 w-full rounded" />
						50
					</div>
				</div>

				<h3 id="warning" className="mt-8 text-xl font-medium">
					Warning
				</h3>
				<div className="mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row">
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="bg-warning-950 h-10 w-full rounded" />
						950
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="bg-warning-900 h-10 w-full rounded" />
						900
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="bg-warning-800 h-10 w-full rounded" />
						800
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="bg-warning-700 h-10 w-full rounded" />
						700
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="bg-warning-600 h-10 w-full rounded" />
						600
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="bg-warning-500 h-10 w-full rounded" />
						500
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="bg-warning-400 h-10 w-full rounded" />
						400
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="bg-warning-300 h-10 w-full rounded" />
						300
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="bg-warning-200 h-10 w-full rounded" />
						200
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="bg-warning-100 h-10 w-full rounded" />
						100
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="bg-warning-50 h-10 w-full rounded" />
						50
					</div>
				</div>

				<h2 id="extended-palette" className="mt-16 text-3xl font-medium">
					Extended Palette
				</h2>
				<p className="font-body text-body mt-3">
					Mantle also supports the entirety of Tailwind&rsquo;s color palette in
					light, dark, and high contrast variants. These are to be used when
					there is no functional meaning behind the color choice. However,
					we&rsquo;ve left out the extended collection of Tailwind&rsquo;s grays
					eg. slate, zinc, etc. since we only want to use our own custom branded
					gray.
				</p>
				<h3 id="gray" className="mt-8 text-xl font-medium">
					Gray
				</h3>
				<div className="mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row">
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-gray-950" />
						950
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-gray-900" />
						900
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-gray-800" />
						800
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-gray-700" />
						700
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-gray-600" />
						600
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-gray-500" />
						500
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-gray-400" />
						400
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-gray-300" />
						300
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-gray-200" />
						200
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-gray-100" />
						100
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-gray-50" />
						50
					</div>
				</div>
				<h3 id="red" className="mt-8 text-xl font-medium">
					Red
				</h3>
				<div className="mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row">
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-red-950" />
						950
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-red-900" />
						900
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-red-800" />
						800
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-red-700" />
						700
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-red-600" />
						600
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-red-500" />
						500
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-red-400" />
						400
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-red-300" />
						300
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-red-200" />
						200
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-red-100" />
						100
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-red-50" />
						50
					</div>
				</div>
				<h3 id="orange" className="mt-8 text-xl font-medium">
					Orange
				</h3>
				<div className="mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row">
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-orange-950" />
						950
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-orange-900" />
						900
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-orange-800" />
						800
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-orange-700" />
						700
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-orange-600" />
						600
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-orange-500" />
						500
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-orange-400" />
						400
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-orange-300" />
						300
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-orange-200" />
						200
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-orange-100" />
						100
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-orange-50" />
						50
					</div>
				</div>
				<h3 id="amber" className="mt-8 text-xl font-medium">
					Amber
				</h3>
				<div className="mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row">
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-amber-950" />
						950
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-amber-900" />
						900
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-amber-800" />
						800
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-amber-700" />
						700
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-amber-600" />
						600
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-amber-500" />
						500
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-amber-400" />
						400
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-amber-300" />
						300
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-amber-200" />
						200
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-amber-100" />
						100
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-amber-50" />
						50
					</div>
				</div>
				<h3 id="yellow" className="mt-8 text-xl font-medium">
					Yellow
				</h3>
				<div className="mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row">
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-yellow-950" />
						950
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-yellow-900" />
						900
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-yellow-800" />
						800
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-yellow-700" />
						700
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-yellow-600" />
						600
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-yellow-500" />
						500
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-yellow-400" />
						400
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-yellow-300" />
						300
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-yellow-200" />
						200
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-yellow-100" />
						100
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-yellow-50" />
						50
					</div>
				</div>
				<h3 id="lime" className="mt-8 text-xl font-medium">
					Lime
				</h3>
				<div className="mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row">
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-lime-950" />
						950
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-lime-900" />
						900
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-lime-800" />
						800
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-lime-700" />
						700
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-lime-600" />
						600
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-lime-500" />
						500
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-lime-400" />
						400
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-lime-300" />
						300
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-lime-200" />
						200
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-lime-100" />
						100
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-lime-50" />
						50
					</div>
				</div>
				<h3
					id="green"
					className="mt-8 flex items-center gap-2 text-xl font-medium"
				>
					Green
				</h3>
				<div className="mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row">
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-green-950" />
						950
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-green-900" />
						900
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-green-800" />
						800
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-green-700" />
						700
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-green-600" />
						600
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-green-500" />
						500
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-green-400" />
						400
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-green-300" />
						300
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-green-200" />
						200
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-green-100" />
						100
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-green-50" />
						50
					</div>
				</div>
				<h3 id="emerald" className="mt-8 text-xl font-medium">
					Emerald
				</h3>
				<div className="mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row">
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-emerald-950" />
						950
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-emerald-900" />
						900
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-emerald-800" />
						800
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-emerald-700" />
						700
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-emerald-600" />
						600
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-emerald-500" />
						500
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-emerald-400" />
						400
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-emerald-300" />
						300
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-emerald-200" />
						200
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-emerald-100" />
						100
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-emerald-50" />
						50
					</div>
				</div>
				<h3 id="teal" className="mt-8 text-xl font-medium">
					Teal
				</h3>
				<div className="mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row">
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-teal-950" />
						950
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-teal-900" />
						900
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-teal-800" />
						800
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-teal-700" />
						700
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-teal-600" />
						600
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-teal-500" />
						500
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-teal-400" />
						400
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-teal-300" />
						300
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-teal-200" />
						200
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-teal-100" />
						100
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-teal-50" />
						50
					</div>
				</div>
				<h3 id="cyan" className="mt-8 text-xl font-medium">
					Cyan
				</h3>
				<div className="mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row">
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-cyan-950" />
						950
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-cyan-900" />
						900
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-cyan-800" />
						800
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-cyan-700" />
						700
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-cyan-600" />
						600
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-cyan-500" />
						500
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-cyan-400" />
						400
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-cyan-300" />
						300
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-cyan-200" />
						200
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-cyan-100" />
						100
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-cyan-50" />
						50
					</div>
				</div>

				<h3 id="sky" className="mt-8 text-xl font-medium">
					Sky
				</h3>
				<div className="mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row">
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-sky-950" />
						950
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-sky-900" />
						900
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-sky-800" />
						800
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-sky-700" />
						700
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-sky-600" />
						600
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-sky-500" />
						500
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-sky-400" />
						400
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-sky-300" />
						300
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-sky-200" />
						200
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-sky-100" />
						100
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-sky-50" />
						50
					</div>
				</div>
				<h3 id="blue" className="mt-8 text-xl font-medium">
					Blue
				</h3>
				<div className="mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row">
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-blue-950" />
						950
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-blue-900" />
						900
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-blue-800" />
						800
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-blue-700" />
						700
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-blue-600" />
						600
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-blue-500" />
						500
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-blue-400" />
						400
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-blue-300" />
						300
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-blue-200" />
						200
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-blue-100" />
						100
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-blue-50" />
						50
					</div>
				</div>

				<h3 id="indigo" className="mt-8 text-xl font-medium">
					Indigo
				</h3>
				<div className="mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row">
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-indigo-950" />
						950
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-indigo-900" />
						900
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-indigo-800" />
						800
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-indigo-700" />
						700
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-indigo-600" />
						600
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-indigo-500" />
						500
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-indigo-400" />
						400
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-indigo-300" />
						300
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-indigo-200" />
						200
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-indigo-100" />
						100
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-indigo-50" />
						50
					</div>
				</div>

				<h3 id="violet" className="mt-8 text-xl font-medium">
					Violet
				</h3>
				<div className="mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row">
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-violet-950" />
						950
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-violet-900" />
						900
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-violet-800" />
						800
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-violet-700" />
						700
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-violet-600" />
						600
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-violet-500" />
						500
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-violet-400" />
						400
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-violet-300" />
						300
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-violet-200" />
						200
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-violet-100" />
						100
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-violet-50" />
						50
					</div>
				</div>
				<h3 id="purple" className="mt-8 text-xl font-medium">
					Purple
				</h3>
				<div className="mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row">
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-purple-950" />
						950
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-purple-900" />
						900
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-purple-800" />
						800
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-purple-700" />
						700
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-purple-600" />
						600
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-purple-500" />
						500
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-purple-400" />
						400
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-purple-300" />
						300
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-purple-200" />
						200
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-purple-100" />
						100
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-purple-50" />
						50
					</div>
				</div>
				<h3 id="fuchsia" className="mt-8 text-xl font-medium">
					Fuchsia
				</h3>
				<div className="mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row">
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-fuchsia-950" />
						950
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-fuchsia-900" />
						900
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-fuchsia-800" />
						800
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-fuchsia-700" />
						700
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-fuchsia-600" />
						600
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-fuchsia-500" />
						500
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-fuchsia-400" />
						400
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-fuchsia-300" />
						300
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-fuchsia-200" />
						200
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-fuchsia-100" />
						100
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-fuchsia-50" />
						50
					</div>
				</div>

				<h3 id="pink" className="mt-8 text-xl font-medium">
					Pink
				</h3>
				<div className="mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row">
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-pink-950" />
						950
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-pink-900" />
						900
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-pink-800" />
						800
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-pink-700" />
						700
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-pink-600" />
						600
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-pink-500" />
						500
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-pink-400" />
						400
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-pink-300" />
						300
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-pink-200" />
						200
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-pink-100" />
						100
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-pink-50" />
						50
					</div>
				</div>
				<h3 id="rose" className="mt-8 text-xl font-medium">
					Rose
				</h3>
				<div className="mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row">
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-rose-950" />
						950
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-rose-900" />
						900
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-rose-800" />
						800
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-rose-700" />
						700
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-rose-600" />
						600
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-rose-500" />
						500
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-rose-400" />
						400
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-rose-300" />
						300
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-rose-200" />
						200
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-rose-100" />
						100
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-rose-50" />
						50
					</div>
				</div>
			</div>
		</div>
	);
}
