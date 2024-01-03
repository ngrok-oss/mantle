import { Anchor } from "@/anchor";
import { cx } from "@/cx";
import { InlineCode } from "@/inline-code";
import type { MetaFunction } from "@vercel/remix";
import { HashNavLink } from "~/components/hash-nav-link";

export const meta: MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Colors" },
		{ name: "description", content: "mantle is ngrok's UI library and design system" },
	];
};

export default function Page() {
	return (
		<div className="relative flex flex-row-reverse gap-9">
			<nav className="sticky top-6 hidden w-44 self-start lg:block">
				{/* TODO(cody): make this have scroll aware navigation links instead */}
				{/* TODO: this should be generated automatically */}
				<h3 className="text-xs font-medium uppercase tracking-widest">On this page</h3>
				<ul className="mt-3 text-sm text-gray-600 flex flex-col gap-2">
					<li>
						<HashNavLink
							className={(isActive) =>
								cx("hover:font-medium hover:text-gray-900", isActive && "font-medium text-blue-600")
							}
							to=".#tailwind"
						>
							Tailwind
						</HashNavLink>
					</li>
					<li>
						<HashNavLink
							className={(isActive) =>
								cx("hover:font-medium hover:text-gray-900", isActive && "font-medium text-blue-600")
							}
							to=".#variables"
						>
							Variables
						</HashNavLink>
					</li>
					<ul className="ml-4 flex flex-col gap-2">
						<li>
							<HashNavLink
								className={(isActive) =>
									cx("hover:font-medium hover:text-gray-900", isActive && "font-medium text-blue-600")
								}
								to=".#blue"
							>
								Blue
							</HashNavLink>
						</li>
						<li>
							<HashNavLink
								className={(isActive) =>
									cx("hover:font-medium hover:text-gray-900", isActive && "font-medium text-blue-600")
								}
								to=".#gray"
							>
								Gray
							</HashNavLink>
						</li>
						<li>
							<HashNavLink
								className={(isActive) =>
									cx("hover:font-medium hover:text-gray-900", isActive && "font-medium text-blue-600")
								}
								to=".#red"
							>
								Red
							</HashNavLink>
						</li>
						<li>
							<HashNavLink
								className={(isActive) =>
									cx("hover:font-medium hover:text-gray-900", isActive && "font-medium text-blue-600")
								}
								to=".#green"
							>
								Green
							</HashNavLink>
						</li>
						<li>
							<HashNavLink
								className={(isActive) =>
									cx("hover:font-medium hover:text-gray-900", isActive && "font-medium text-blue-600")
								}
								to=".#amber"
							>
								Amber
							</HashNavLink>
						</li>
					</ul>
					<li>
						<HashNavLink
							className={(isActive) =>
								cx("hover:font-medium hover:text-gray-900", isActive && "font-medium text-blue-600")
							}
							to=".#overrides"
						>
							Overrides
						</HashNavLink>
					</li>
				</ul>
			</nav>
			<div className="flex-1">
				<h1 className="text-5xl font-medium">Colors</h1>
				<p className="mt-4 text-xl text-gray-600">
					Colors are a key component of any design system. They are used to convey meaning, attract attention, and
					provide feedback. Mantle&rsquo;s color system is designed to be accessible and flexible with dark and high
					contrast modes.
				</p>

				<h2 id="tailwind" className="mt-8 text-3xl font-medium">
					Tailwind
				</h2>
				<p className="mt-3 text-gray-600">
					Mantle uses Tailwind under the hood for all its CSS styling. However, we differ from Tailwind when it comes to
					colors. Mantle provides a full color library that automatically provides a dark and high contrast modes. This
					is different from standard Tailwind usage that <em>requires</em> dark class variations. By simply specifying
					light colors provided by Mantle, you&rsquo;ll get dark and high contrast modes for free. If you require
					additional customization, you can provide dark variant classes as an override.
				</p>

				<h2 id="variables" className="mt-8 text-3xl font-medium">
					Variables
				</h2>
				<p className="mt-3 text-gray-600">
					Mantle&rsquo;s colors are delivered as CSS variables via Tailwind&rsquo;s API eg.{" "}
					<InlineCode>.text-blue-500</InlineCode>. They can be directly accessed via{" "}
					<InlineCode>var(--blue-500)</InlineCode> but do note that you&rsquo;ll need to wrap everything in{" "}
					<InlineCode>hsl()</InlineCode> like so: <InlineCode>hsl(var(--blue-500))</InlineCode>. This allows for
					Tailwind operations like <InlineCode>text-blue-500/25</InlineCode>.
				</p>

				<h2 id="overrides" className="mt-8 text-3xl font-medium">
					Overrides
				</h2>
				<p className="mt-3 text-gray-600">
					Most colors should appropriately swap for sensible values in dark and high contrast modes. However, there are
					often cases where you&rsquo;ll need to specify an override. The <InlineCode>dark:</InlineCode> variant is
					well-documented on <Anchor href="https://tailwindcss.com/docs/dark-mode">Tailwind&rsquo;s website</Anchor>.
					Mantle provides additional variants for high contrast and dark high contrast mode with{" "}
					<InlineCode>high-contrast:</InlineCode> and <InlineCode>dark-high-contrast:</InlineCode> respectively.
				</p>

				<h2 id="branded-colors" className="mt-8 text-3xl font-medium">
					Branded Colors
				</h2>
				<p className="mt-3 text-gray-600">
					Mantle generally limits its color choices to the following branded colors for primary actions, and various
					states like danger and warnings.
				</p>

				<h3 id="gray" className="mt-8 text-xl font-medium">
					Gray
				</h3>
				<div className="mt-2 flex flex-col overflow-hidden md:flex-row gap-2 text-xs">
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-gray-950 w-full h-10 rounded"></div>
						950
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-gray-900 w-full h-10 rounded"></div>
						900
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-gray-800 w-full h-10 rounded"></div>
						800
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-gray-700 w-full h-10 rounded"></div>
						700
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-gray-600 w-full h-10 rounded"></div>
						600
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-gray-500 w-full h-10 rounded"></div>
						500
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-gray-400 w-full h-10 rounded"></div>
						400
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-gray-300 w-full h-10 rounded"></div>
						300
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-gray-200 w-full h-10 rounded"></div>
						200
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-gray-100 w-full h-10 rounded"></div>
						100
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-gray-50 w-full h-10 rounded"></div>
						50
					</div>
				</div>

				<h3 id="blue" className="mt-8 text-xl font-medium">
					Blue
				</h3>
				<div className="mt-2 flex flex-col gap-2 overflow-hidden md:flex-row text-xs">
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-blue-950 w-full h-10 rounded"></div>
						950
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-blue-900 w-full h-10 rounded"></div>
						900
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-blue-800 w-full h-10 rounded"></div>
						800
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-blue-700 w-full h-10 rounded"></div>
						700
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-blue-600 w-full h-10 rounded"></div>
						600
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-blue-500 w-full h-10 rounded"></div>
						500
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-blue-400 w-full h-10 rounded"></div>
						400
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-blue-300 w-full h-10 rounded"></div>
						300
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-blue-200 w-full h-10 rounded"></div>
						200
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-blue-100 w-full h-10 rounded"></div>
						100
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-blue-50 w-full h-10 rounded"></div>
						50
					</div>
				</div>

				<h3 id="green" className="mt-8 text-xl font-medium flex items-center gap-2">
					Green
				</h3>
				<div className="mt-2 flex flex-col overflow-hidden md:flex-row gap-2 text-xs">
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-green-950 w-full h-10 rounded"></div>
						950
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-green-900 w-full h-10 rounded"></div>
						900
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-green-800 w-full h-10 rounded"></div>
						800
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-green-700 w-full h-10 rounded"></div>
						700
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-green-600 w-full h-10 rounded"></div>
						600
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-green-500 w-full h-10 rounded"></div>
						500
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-green-400 w-full h-10 rounded"></div>
						400
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-green-300 w-full h-10 rounded"></div>
						300
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-green-200 w-full h-10 rounded"></div>
						200
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-green-100 w-full h-10 rounded"></div>
						100
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-green-50 w-full h-10 rounded"></div>
						50
					</div>
				</div>

				<h3 id="red" className="mt-8 text-xl font-medium">
					Red
				</h3>
				<div className="mt-2 flex flex-col overflow-hidden md:flex-row gap-2 text-xs">
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-red-950 w-full h-10 rounded"></div>
						950
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-red-900 w-full h-10 rounded"></div>
						900
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-red-800 w-full h-10 rounded"></div>
						800
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-red-700 w-full h-10 rounded"></div>
						700
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-red-600 w-full h-10 rounded"></div>
						600
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-red-500 w-full h-10 rounded"></div>
						500
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-red-400 w-full h-10 rounded"></div>
						400
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-red-300 w-full h-10 rounded"></div>
						300
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-red-200 w-full h-10 rounded"></div>
						200
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-red-100 w-full h-10 rounded"></div>
						100
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-red-50 w-full h-10 rounded"></div>
						50
					</div>
				</div>

				<h3 id="amber" className="mt-8 text-xl font-medium">
					Amber
				</h3>
				<div className="mt-2 flex flex-col overflow-hidden md:flex-row gap-2 text-xs">
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-amber-950 w-full h-10 rounded"></div>
						950
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-amber-900 w-full h-10 rounded"></div>
						900
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-amber-800 w-full h-10 rounded"></div>
						800
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-amber-700 w-full h-10 rounded"></div>
						700
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-amber-600 w-full h-10 rounded"></div>
						600
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-amber-500 w-full h-10 rounded"></div>
						500
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-amber-400 w-full h-10 rounded"></div>
						400
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-amber-300 w-full h-10 rounded"></div>
						300
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-amber-200 w-full h-10 rounded"></div>
						200
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-amber-100 w-full h-10 rounded"></div>
						100
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-amber-50 w-full h-10 rounded"></div>
						50
					</div>
				</div>

				<h2 id="variables" className="mt-16 text-3xl font-medium">
					Extended Palette
				</h2>
				<p className="mt-3 text-gray-600">
					Mantle also supports the entirety of Tailwind&rsquo;s color palette in light, dark, and high contrast
					variants. We&rsquo;ve left out Tailwind&rsquo;s gray palette, since we only want to use our own custom branded
					version.
				</p>
				<h3 id="gray" className="mt-8 text-xl font-medium">
					Gray
				</h3>
				<div className="mt-2 flex flex-col overflow-hidden md:flex-row gap-2 text-xs">
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-gray-950 w-full h-10 rounded"></div>
						950
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-gray-900 w-full h-10 rounded"></div>
						900
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-gray-800 w-full h-10 rounded"></div>
						800
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-gray-700 w-full h-10 rounded"></div>
						700
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-gray-600 w-full h-10 rounded"></div>
						600
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-gray-500 w-full h-10 rounded"></div>
						500
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-gray-400 w-full h-10 rounded"></div>
						400
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-gray-300 w-full h-10 rounded"></div>
						300
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-gray-200 w-full h-10 rounded"></div>
						200
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-gray-100 w-full h-10 rounded"></div>
						100
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-gray-50 w-full h-10 rounded"></div>
						50
					</div>
				</div>
				<h3 id="red" className="mt-8 text-xl font-medium">
					Red
				</h3>
				<div className="mt-2 flex flex-col overflow-hidden md:flex-row gap-2 text-xs">
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-red-950 w-full h-10 rounded"></div>
						950
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-red-900 w-full h-10 rounded"></div>
						900
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-red-800 w-full h-10 rounded"></div>
						800
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-red-700 w-full h-10 rounded"></div>
						700
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-red-600 w-full h-10 rounded"></div>
						600
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-red-500 w-full h-10 rounded"></div>
						500
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-red-400 w-full h-10 rounded"></div>
						400
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-red-300 w-full h-10 rounded"></div>
						300
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-red-200 w-full h-10 rounded"></div>
						200
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-red-100 w-full h-10 rounded"></div>
						100
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-red-50 w-full h-10 rounded"></div>
						50
					</div>
				</div>
				<h3 id="orange" className="mt-8 text-xl font-medium">
					Orange
				</h3>
				<div className="mt-2 flex flex-col overflow-hidden md:flex-row gap-2 text-xs">
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-orange-950 w-full h-10 rounded"></div>
						950
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-orange-900 w-full h-10 rounded"></div>
						900
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-orange-800 w-full h-10 rounded"></div>
						800
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-orange-700 w-full h-10 rounded"></div>
						700
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-orange-600 w-full h-10 rounded"></div>
						600
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-orange-500 w-full h-10 rounded"></div>
						500
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-orange-400 w-full h-10 rounded"></div>
						400
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-orange-300 w-full h-10 rounded"></div>
						300
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-orange-200 w-full h-10 rounded"></div>
						200
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-orange-100 w-full h-10 rounded"></div>
						100
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-orange-50 w-full h-10 rounded"></div>
						50
					</div>
				</div>
				<h3 id="amber" className="mt-8 text-xl font-medium">
					Amber
				</h3>
				<div className="mt-2 flex flex-col overflow-hidden md:flex-row gap-2 text-xs">
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-amber-950 w-full h-10 rounded"></div>
						950
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-amber-900 w-full h-10 rounded"></div>
						900
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-amber-800 w-full h-10 rounded"></div>
						800
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-amber-700 w-full h-10 rounded"></div>
						700
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-amber-600 w-full h-10 rounded"></div>
						600
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-amber-500 w-full h-10 rounded"></div>
						500
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-amber-400 w-full h-10 rounded"></div>
						400
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-amber-300 w-full h-10 rounded"></div>
						300
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-amber-200 w-full h-10 rounded"></div>
						200
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-amber-100 w-full h-10 rounded"></div>
						100
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-amber-50 w-full h-10 rounded"></div>
						50
					</div>
				</div>
				<h3 id="yellow" className="mt-8 text-xl font-medium">
					Yellow
				</h3>
				<div className="mt-2 flex flex-col overflow-hidden md:flex-row gap-2 text-xs">
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-yellow-950 w-full h-10 rounded"></div>
						950
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-yellow-900 w-full h-10 rounded"></div>
						900
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-yellow-800 w-full h-10 rounded"></div>
						800
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-yellow-700 w-full h-10 rounded"></div>
						700
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-yellow-600 w-full h-10 rounded"></div>
						600
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-yellow-500 w-full h-10 rounded"></div>
						500
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-yellow-400 w-full h-10 rounded"></div>
						400
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-yellow-300 w-full h-10 rounded"></div>
						300
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-yellow-200 w-full h-10 rounded"></div>
						200
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-yellow-100 w-full h-10 rounded"></div>
						100
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-yellow-50 w-full h-10 rounded"></div>
						50
					</div>
				</div>
				<h3 id="lime" className="mt-8 text-xl font-medium">
					Lime
				</h3>
				<div className="mt-2 flex flex-col overflow-hidden md:flex-row gap-2 text-xs">
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-lime-950 w-full h-10 rounded"></div>
						950
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-lime-900 w-full h-10 rounded"></div>
						900
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-lime-800 w-full h-10 rounded"></div>
						800
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-lime-700 w-full h-10 rounded"></div>
						700
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-lime-600 w-full h-10 rounded"></div>
						600
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-lime-500 w-full h-10 rounded"></div>
						500
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-lime-400 w-full h-10 rounded"></div>
						400
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-lime-300 w-full h-10 rounded"></div>
						300
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-lime-200 w-full h-10 rounded"></div>
						200
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-lime-100 w-full h-10 rounded"></div>
						100
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-lime-50 w-full h-10 rounded"></div>
						50
					</div>
				</div>
				<h3 id="green" className="mt-8 text-xl font-medium flex items-center gap-2">
					Green
				</h3>
				<div className="mt-2 flex flex-col overflow-hidden md:flex-row gap-2 text-xs">
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-green-950 w-full h-10 rounded"></div>
						950
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-green-900 w-full h-10 rounded"></div>
						900
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-green-800 w-full h-10 rounded"></div>
						800
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-green-700 w-full h-10 rounded"></div>
						700
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-green-600 w-full h-10 rounded"></div>
						600
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-green-500 w-full h-10 rounded"></div>
						500
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-green-400 w-full h-10 rounded"></div>
						400
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-green-300 w-full h-10 rounded"></div>
						300
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-green-200 w-full h-10 rounded"></div>
						200
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-green-100 w-full h-10 rounded"></div>
						100
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-green-50 w-full h-10 rounded"></div>
						50
					</div>
				</div>
				<h3 id="emerald" className="mt-8 text-xl font-medium">
					Emerald
				</h3>
				<div className="mt-2 flex flex-col overflow-hidden md:flex-row gap-2 text-xs">
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-emerald-950 w-full h-10 rounded"></div>
						950
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-emerald-900 w-full h-10 rounded"></div>
						900
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-emerald-800 w-full h-10 rounded"></div>
						800
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-emerald-700 w-full h-10 rounded"></div>
						700
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-emerald-600 w-full h-10 rounded"></div>
						600
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-emerald-500 w-full h-10 rounded"></div>
						500
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-emerald-400 w-full h-10 rounded"></div>
						400
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-emerald-300 w-full h-10 rounded"></div>
						300
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-emerald-200 w-full h-10 rounded"></div>
						200
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-emerald-100 w-full h-10 rounded"></div>
						100
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-emerald-50 w-full h-10 rounded"></div>
						50
					</div>
				</div>
				<h3 id="teal" className="mt-8 text-xl font-medium">
					Teal
				</h3>
				<div className="mt-2 flex flex-col overflow-hidden md:flex-row gap-2 text-xs">
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-teal-950 w-full h-10 rounded"></div>
						950
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-teal-900 w-full h-10 rounded"></div>
						900
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-teal-800 w-full h-10 rounded"></div>
						800
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-teal-700 w-full h-10 rounded"></div>
						700
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-teal-600 w-full h-10 rounded"></div>
						600
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-teal-500 w-full h-10 rounded"></div>
						500
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-teal-400 w-full h-10 rounded"></div>
						400
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-teal-300 w-full h-10 rounded"></div>
						300
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-teal-200 w-full h-10 rounded"></div>
						200
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-teal-100 w-full h-10 rounded"></div>
						100
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-teal-50 w-full h-10 rounded"></div>
						50
					</div>
				</div>
				<h3 id="cyan" className="mt-8 text-xl font-medium">
					Cyan
				</h3>
				<div className="mt-2 flex flex-col overflow-hidden md:flex-row gap-2 text-xs">
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-cyan-950 w-full h-10 rounded"></div>
						950
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-cyan-900 w-full h-10 rounded"></div>
						900
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-cyan-800 w-full h-10 rounded"></div>
						800
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-cyan-700 w-full h-10 rounded"></div>
						700
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-cyan-600 w-full h-10 rounded"></div>
						600
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-cyan-500 w-full h-10 rounded"></div>
						500
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-cyan-400 w-full h-10 rounded"></div>
						400
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-cyan-300 w-full h-10 rounded"></div>
						300
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-cyan-200 w-full h-10 rounded"></div>
						200
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-cyan-100 w-full h-10 rounded"></div>
						100
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-cyan-50 w-full h-10 rounded"></div>
						50
					</div>
				</div>

				<h3 id="sky" className="mt-8 text-xl font-medium">
					Sky
				</h3>
				<div className="mt-2 flex flex-col overflow-hidden md:flex-row gap-2 text-xs">
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-sky-950 w-full h-10 rounded"></div>
						950
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-sky-900 w-full h-10 rounded"></div>
						900
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-sky-800 w-full h-10 rounded"></div>
						800
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-sky-700 w-full h-10 rounded"></div>
						700
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-sky-600 w-full h-10 rounded"></div>
						600
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-sky-500 w-full h-10 rounded"></div>
						500
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-sky-400 w-full h-10 rounded"></div>
						400
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-sky-300 w-full h-10 rounded"></div>
						300
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-sky-200 w-full h-10 rounded"></div>
						200
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-sky-100 w-full h-10 rounded"></div>
						100
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-sky-50 w-full h-10 rounded"></div>
						50
					</div>
				</div>

				<h3 id="blue" className="mt-8 text-xl font-medium">
					Blue
				</h3>
				<div className="mt-2 flex flex-col gap-2 overflow-hidden md:flex-row text-xs">
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-blue-950 w-full h-10 rounded"></div>
						950
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-blue-900 w-full h-10 rounded"></div>
						900
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-blue-800 w-full h-10 rounded"></div>
						800
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-blue-700 w-full h-10 rounded"></div>
						700
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-blue-600 w-full h-10 rounded"></div>
						600
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-blue-500 w-full h-10 rounded"></div>
						500
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-blue-400 w-full h-10 rounded"></div>
						400
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-blue-300 w-full h-10 rounded"></div>
						300
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-blue-200 w-full h-10 rounded"></div>
						200
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-blue-100 w-full h-10 rounded"></div>
						100
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-blue-50 w-full h-10 rounded"></div>
						50
					</div>
				</div>

				<h3 id="violet" className="mt-8 text-xl font-medium">
					Violet
				</h3>
				<div className="mt-2 flex flex-col overflow-hidden md:flex-row gap-2 text-xs">
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-violet-950 w-full h-10 rounded"></div>
						950
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-violet-900 w-full h-10 rounded"></div>
						900
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-violet-800 w-full h-10 rounded"></div>
						800
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-violet-700 w-full h-10 rounded"></div>
						700
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-violet-600 w-full h-10 rounded"></div>
						600
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-violet-500 w-full h-10 rounded"></div>
						500
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-violet-400 w-full h-10 rounded"></div>
						400
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-violet-300 w-full h-10 rounded"></div>
						300
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-violet-200 w-full h-10 rounded"></div>
						200
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-violet-100 w-full h-10 rounded"></div>
						100
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-violet-50 w-full h-10 rounded"></div>
						50
					</div>
				</div>
				<h3 id="purple" className="mt-8 text-xl font-medium">
					Purple
				</h3>
				<div className="mt-2 flex flex-col overflow-hidden md:flex-row gap-2 text-xs">
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-purple-950 w-full h-10 rounded"></div>
						950
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-purple-900 w-full h-10 rounded"></div>
						900
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-purple-800 w-full h-10 rounded"></div>
						800
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-purple-700 w-full h-10 rounded"></div>
						700
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-purple-600 w-full h-10 rounded"></div>
						600
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-purple-500 w-full h-10 rounded"></div>
						500
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-purple-400 w-full h-10 rounded"></div>
						400
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-purple-300 w-full h-10 rounded"></div>
						300
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-purple-200 w-full h-10 rounded"></div>
						200
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-purple-100 w-full h-10 rounded"></div>
						100
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-purple-50 w-full h-10 rounded"></div>
						50
					</div>
				</div>
				<h3 id="fuchsia" className="mt-8 text-xl font-medium">
					Fuchsia
				</h3>
				<div className="mt-2 flex flex-col overflow-hidden md:flex-row gap-2 text-xs">
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-fuchsia-950 w-full h-10 rounded"></div>
						950
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-fuchsia-900 w-full h-10 rounded"></div>
						900
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-fuchsia-800 w-full h-10 rounded"></div>
						800
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-fuchsia-700 w-full h-10 rounded"></div>
						700
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-fuchsia-600 w-full h-10 rounded"></div>
						600
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-fuchsia-500 w-full h-10 rounded"></div>
						500
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-fuchsia-400 w-full h-10 rounded"></div>
						400
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-fuchsia-300 w-full h-10 rounded"></div>
						300
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-fuchsia-200 w-full h-10 rounded"></div>
						200
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-fuchsia-100 w-full h-10 rounded"></div>
						100
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-fuchsia-50 w-full h-10 rounded"></div>
						50
					</div>
				</div>

				<h3 id="pink" className="mt-8 text-xl font-medium">
					Pink
				</h3>
				<div className="mt-2 flex flex-col overflow-hidden md:flex-row gap-2 text-xs">
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-pink-950 w-full h-10 rounded"></div>
						950
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-pink-900 w-full h-10 rounded"></div>
						900
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-pink-800 w-full h-10 rounded"></div>
						800
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-pink-700 w-full h-10 rounded"></div>
						700
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-pink-600 w-full h-10 rounded"></div>
						600
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-pink-500 w-full h-10 rounded"></div>
						500
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-pink-400 w-full h-10 rounded"></div>
						400
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-pink-300 w-full h-10 rounded"></div>
						300
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-pink-200 w-full h-10 rounded"></div>
						200
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-pink-100 w-full h-10 rounded"></div>
						100
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-pink-50 w-full h-10 rounded"></div>
						50
					</div>
				</div>
				<h3 id="rose" className="mt-8 text-xl font-medium">
					Rose
				</h3>
				<div className="mt-2 flex flex-col overflow-hidden md:flex-row gap-2 text-xs">
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-rose-950 w-full h-10 rounded"></div>
						950
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-rose-900 w-full h-10 rounded"></div>
						900
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-rose-800 w-full h-10 rounded"></div>
						800
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-rose-700 w-full h-10 rounded"></div>
						700
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-rose-600 w-full h-10 rounded"></div>
						600
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-rose-500 w-full h-10 rounded"></div>
						500
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-rose-400 w-full h-10 rounded"></div>
						400
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-rose-300 w-full h-10 rounded"></div>
						300
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-rose-200 w-full h-10 rounded"></div>
						200
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-rose-100 w-full h-10 rounded"></div>
						100
					</div>
					<div className="font-mono flex-grow flex flex-col gap-1">
						<div className="bg-rose-50 w-full h-10 rounded"></div>
						50
					</div>
				</div>
			</div>
		</div>
	);
}
