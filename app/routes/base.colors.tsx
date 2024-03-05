import { Anchor } from "@/anchor";
import { cx } from "@/core";
import { InlineCode } from "@/inline-code";
import type { HeadersFunction, MetaFunction } from "@remix-run/node";
import { HashNavLink } from "~/components/hash-nav-link";

export const meta: MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Colors" },
		{ name: "description", content: "mantle is ngrok's UI library and design system" },
	];
};

export const headers: HeadersFunction = () => {
	return {
		"Cache-Control": "max-age=300, stale-while-revalidate=604800",
	};
};

export default function Page() {
	return (
		<div className="relative flex flex-row-reverse gap-9">
			<nav className="sticky top-6 hidden w-44 self-start lg:block">
				{/* TODO(cody): make this have scroll aware navigation links instead */}
				{/* TODO: this should be generated automatically */}
				<h3 className="text-xs font-medium uppercase tracking-widest">On this page</h3>
				<ul className="mt-3 flex flex-col gap-2 text-sm text-muted">
					<li>
						<HashNavLink
							className={(isActive) =>
								cx("hover:font-medium hover:text-strong", isActive && "font-medium text-blue-600")
							}
							to=".#tailwind"
						>
							Tailwind
						</HashNavLink>
					</li>
					<li>
						<HashNavLink
							className={(isActive) =>
								cx("hover:font-medium hover:text-strong", isActive && "font-medium text-blue-600")
							}
							to=".#variables"
						>
							Variables
						</HashNavLink>
					</li>
					<li>
						<HashNavLink
							className={(isActive) =>
								cx("hover:font-medium hover:text-strong", isActive && "font-medium text-blue-600")
							}
							to=".#overrides"
						>
							Overrides
						</HashNavLink>
					</li>
					<li>
						<HashNavLink
							className={(isActive) =>
								cx("hover:font-medium hover:text-strong", isActive && "font-medium text-blue-600")
							}
							to=".#branded-colors"
						>
							Branded Colors
						</HashNavLink>
					</li>
					<ul className="ml-4 flex flex-col gap-2">
						<li>
							<HashNavLink
								className={(isActive) =>
									cx("hover:font-medium hover:text-strong", isActive && "font-medium text-blue-600")
								}
								to=".#gray-branded"
							>
								Gray
							</HashNavLink>
						</li>
						<li>
							<HashNavLink
								className={(isActive) =>
									cx("hover:font-medium hover:text-strong", isActive && "font-medium text-blue-600")
								}
								to=".#blue-branded"
							>
								Blue
							</HashNavLink>
						</li>
						<li>
							<HashNavLink
								className={(isActive) =>
									cx("hover:font-medium hover:text-strong", isActive && "font-medium text-blue-600")
								}
								to=".#green-branded"
							>
								Green
							</HashNavLink>
						</li>
						<li>
							<HashNavLink
								className={(isActive) =>
									cx("hover:font-medium hover:text-strong", isActive && "font-medium text-blue-600")
								}
								to=".#red-branded"
							>
								Red
							</HashNavLink>
						</li>
						<li>
							<HashNavLink
								className={(isActive) =>
									cx("hover:font-medium hover:text-strong", isActive && "font-medium text-blue-600")
								}
								to=".#amber-branded"
							>
								Amber
							</HashNavLink>
						</li>
					</ul>
					<li>
						<HashNavLink
							className={(isActive) =>
								cx("hover:font-medium hover:text-strong", isActive && "font-medium text-blue-600")
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
									cx("hover:font-medium hover:text-strong", isActive && "font-medium text-blue-600")
								}
								to=".#gray"
							>
								Gray
							</HashNavLink>
						</li>
						<li>
							<HashNavLink
								className={(isActive) =>
									cx("hover:font-medium hover:text-strong", isActive && "font-medium text-blue-600")
								}
								to=".#red"
							>
								Red
							</HashNavLink>
						</li>
						<li>
							<HashNavLink
								className={(isActive) =>
									cx("hover:font-medium hover:text-strong", isActive && "font-medium text-blue-600")
								}
								to=".#orange"
							>
								Orange
							</HashNavLink>
						</li>
						<li>
							<HashNavLink
								className={(isActive) =>
									cx("hover:font-medium hover:text-strong", isActive && "font-medium text-blue-600")
								}
								to=".#amber"
							>
								Amber
							</HashNavLink>
						</li>
						<li>
							<HashNavLink
								className={(isActive) =>
									cx("hover:font-medium hover:text-strong", isActive && "font-medium text-blue-600")
								}
								to=".#yellow"
							>
								Yellow
							</HashNavLink>
						</li>
						<li>
							<HashNavLink
								className={(isActive) =>
									cx("hover:font-medium hover:text-strong", isActive && "font-medium text-blue-600")
								}
								to=".#lime"
							>
								Lime
							</HashNavLink>
						</li>
						<li>
							<HashNavLink
								className={(isActive) =>
									cx("hover:font-medium hover:text-strong", isActive && "font-medium text-blue-600")
								}
								to=".#green"
							>
								Green
							</HashNavLink>
						</li>
						<li>
							<HashNavLink
								className={(isActive) =>
									cx("hover:font-medium hover:text-strong", isActive && "font-medium text-blue-600")
								}
								to=".#emerald"
							>
								Emerald
							</HashNavLink>
						</li>
						<li>
							<HashNavLink
								className={(isActive) =>
									cx("hover:font-medium hover:text-strong", isActive && "font-medium text-blue-600")
								}
								to=".#teal"
							>
								Teal
							</HashNavLink>
						</li>
						<li>
							<HashNavLink
								className={(isActive) =>
									cx("hover:font-medium hover:text-strong", isActive && "font-medium text-blue-600")
								}
								to=".#cyan"
							>
								Cyan
							</HashNavLink>
						</li>
						<li>
							<HashNavLink
								className={(isActive) =>
									cx("hover:font-medium hover:text-strong", isActive && "font-medium text-blue-600")
								}
								to=".#sky"
							>
								Sky
							</HashNavLink>
						</li>

						<li>
							<HashNavLink
								className={(isActive) =>
									cx("hover:font-medium hover:text-strong", isActive && "font-medium text-blue-600")
								}
								to=".#blue"
							>
								Blue
							</HashNavLink>
						</li>
						<li>
							<HashNavLink
								className={(isActive) =>
									cx("hover:font-medium hover:text-strong", isActive && "font-medium text-blue-600")
								}
								to=".#indigo"
							>
								Indigo
							</HashNavLink>
						</li>
						<li>
							<HashNavLink
								className={(isActive) =>
									cx("hover:font-medium hover:text-strong", isActive && "font-medium text-blue-600")
								}
								to=".#violet"
							>
								Violet
							</HashNavLink>
						</li>
						<li>
							<HashNavLink
								className={(isActive) =>
									cx("hover:font-medium hover:text-strong", isActive && "font-medium text-blue-600")
								}
								to=".#purple"
							>
								Purple
							</HashNavLink>
						</li>
						<li>
							<HashNavLink
								className={(isActive) =>
									cx("hover:font-medium hover:text-strong", isActive && "font-medium text-blue-600")
								}
								to=".#fuchsia"
							>
								Fuchsia
							</HashNavLink>
						</li>
						<li>
							<HashNavLink
								className={(isActive) =>
									cx("hover:font-medium hover:text-strong", isActive && "font-medium text-blue-600")
								}
								to=".#pink"
							>
								Pink
							</HashNavLink>
						</li>
						<li>
							<HashNavLink
								className={(isActive) =>
									cx("hover:font-medium hover:text-strong", isActive && "font-medium text-blue-600")
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
				<h1 className="text-5xl font-medium">Colors</h1>
				<p className="mt-4 text-xl text-default">
					Colors are a key component of any design system. They are used to convey meaning, attract attention, and
					provide feedback. Mantle&rsquo;s color system is designed to be accessible and flexible with dark and high
					contrast modes.
				</p>

				<h2 id="tailwind" className="mt-8 text-3xl font-medium">
					Tailwind
				</h2>
				<p className="mt-3 text-default">
					Mantle uses Tailwind under the hood for all its CSS styling. However, we differ from Tailwind when it comes to
					colors. Mantle provides a full color library that automatically provides a dark and high contrast modes. This
					is different from standard Tailwind usage that <em>requires</em> dark class variations. By simply specifying
					light colors provided by Mantle, you&rsquo;ll get dark and high contrast modes for free. If you require
					additional customization, you can provide dark variant classes as an override.
				</p>

				<h2 id="variables" className="mt-8 text-3xl font-medium">
					Variables
				</h2>
				<p className="mt-3 text-default">
					Mantle&rsquo;s colors are delivered as CSS variables via Tailwind&rsquo;s API eg.{" "}
					<InlineCode>.text-blue-500</InlineCode>. They can be directly accessed via{" "}
					<InlineCode>var(--blue-500)</InlineCode> but do note that you&rsquo;ll need to wrap everything in{" "}
					<InlineCode>hsl()</InlineCode> like so: <InlineCode>hsl(var(--blue-500))</InlineCode>. This allows for
					Tailwind operations like <InlineCode>text-blue-500/25</InlineCode>.
				</p>

				<h2 id="overrides" className="mt-8 text-3xl font-medium">
					Overrides
				</h2>
				<p className="mt-3 text-default">
					Most colors should appropriately swap for sensible values in dark and high contrast modes. However, there are
					often cases where you&rsquo;ll need to specify an override. The <InlineCode>dark:</InlineCode> variant is
					well-documented on <Anchor href="https://tailwindcss.com/docs/dark-mode">Tailwind&rsquo;s website</Anchor>.
					Mantle provides additional variants for high contrast and dark high contrast mode with{" "}
					<InlineCode>high-contrast:</InlineCode> and <InlineCode>dark-high-contrast:</InlineCode> respectively.
				</p>

				<h2 id="branded-colors" className="mt-8 text-3xl font-medium">
					Branded Colors
				</h2>
				<p className="mt-3 text-default">
					Mantle generally limits its color choices to the following branded colors for primary actions, and various
					states like danger and warnings.
				</p>

				<h3 id="gray-branded" className="mt-8 text-xl font-medium">
					Gray
				</h3>
				<div className="mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row">
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-gray-950"></div>
						950
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-gray-900"></div>
						900
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-gray-800"></div>
						800
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-gray-700"></div>
						700
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-gray-600"></div>
						600
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-gray-500"></div>
						500
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-gray-400"></div>
						400
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-gray-300"></div>
						300
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-gray-200"></div>
						200
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-gray-100"></div>
						100
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-gray-50"></div>
						50
					</div>
				</div>

				<h3 id="blue-branded" className="mt-8 text-xl font-medium">
					Blue
				</h3>
				<div className="mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row">
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-blue-950"></div>
						950
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-blue-900"></div>
						900
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-blue-800"></div>
						800
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-blue-700"></div>
						700
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-blue-600"></div>
						600
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-blue-500"></div>
						500
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-blue-400"></div>
						400
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-blue-300"></div>
						300
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-blue-200"></div>
						200
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-blue-100"></div>
						100
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-blue-50"></div>
						50
					</div>
				</div>

				<h3 id="green-branded" className="mt-8 flex items-center gap-2 text-xl font-medium">
					Green
				</h3>
				<div className="mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row">
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-green-950"></div>
						950
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-green-900"></div>
						900
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-green-800"></div>
						800
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-green-700"></div>
						700
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-green-600"></div>
						600
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-green-500"></div>
						500
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-green-400"></div>
						400
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-green-300"></div>
						300
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-green-200"></div>
						200
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-green-100"></div>
						100
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-green-50"></div>
						50
					</div>
				</div>

				<h3 id="red-branded" className="mt-8 text-xl font-medium">
					Red
				</h3>
				<div className="mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row">
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-red-950"></div>
						950
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-red-900"></div>
						900
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-red-800"></div>
						800
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-red-700"></div>
						700
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-red-600"></div>
						600
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-red-500"></div>
						500
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-red-400"></div>
						400
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-red-300"></div>
						300
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-red-200"></div>
						200
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-red-100"></div>
						100
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-red-50"></div>
						50
					</div>
				</div>

				<h3 id="amber-branded" className="mt-8 text-xl font-medium">
					Amber
				</h3>
				<div className="mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row">
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-amber-950"></div>
						950
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-amber-900"></div>
						900
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-amber-800"></div>
						800
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-amber-700"></div>
						700
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-amber-600"></div>
						600
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-amber-500"></div>
						500
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-amber-400"></div>
						400
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-amber-300"></div>
						300
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-amber-200"></div>
						200
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-amber-100"></div>
						100
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-amber-50"></div>
						50
					</div>
				</div>

				<h2 id="extended-palette" className="mt-16 text-3xl font-medium">
					Extended Palette
				</h2>
				<p className="mt-3 text-default">
					Mantle also supports the entirety of Tailwind&rsquo;s color palette in light, dark, and high contrast
					variants. Howver, we&rsquo;ve left out the extended collection of Tailwind&rsquo;s grays eg. slate, zinc, etc.
					since we only want to use our own custom branded gray.
				</p>
				<h3 id="gray" className="mt-8 text-xl font-medium">
					Gray
				</h3>
				<div className="mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row">
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-gray-950"></div>
						950
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-gray-900"></div>
						900
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-gray-800"></div>
						800
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-gray-700"></div>
						700
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-gray-600"></div>
						600
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-gray-500"></div>
						500
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-gray-400"></div>
						400
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-gray-300"></div>
						300
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-gray-200"></div>
						200
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-gray-100"></div>
						100
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-gray-50"></div>
						50
					</div>
				</div>
				<h3 id="red" className="mt-8 text-xl font-medium">
					Red
				</h3>
				<div className="mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row">
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-red-950"></div>
						950
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-red-900"></div>
						900
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-red-800"></div>
						800
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-red-700"></div>
						700
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-red-600"></div>
						600
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-red-500"></div>
						500
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-red-400"></div>
						400
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-red-300"></div>
						300
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-red-200"></div>
						200
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-red-100"></div>
						100
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-red-50"></div>
						50
					</div>
				</div>
				<h3 id="orange" className="mt-8 text-xl font-medium">
					Orange
				</h3>
				<div className="mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row">
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-orange-950"></div>
						950
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-orange-900"></div>
						900
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-orange-800"></div>
						800
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-orange-700"></div>
						700
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-orange-600"></div>
						600
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-orange-500"></div>
						500
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-orange-400"></div>
						400
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-orange-300"></div>
						300
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-orange-200"></div>
						200
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-orange-100"></div>
						100
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-orange-50"></div>
						50
					</div>
				</div>
				<h3 id="amber" className="mt-8 text-xl font-medium">
					Amber
				</h3>
				<div className="mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row">
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-amber-950"></div>
						950
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-amber-900"></div>
						900
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-amber-800"></div>
						800
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-amber-700"></div>
						700
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-amber-600"></div>
						600
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-amber-500"></div>
						500
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-amber-400"></div>
						400
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-amber-300"></div>
						300
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-amber-200"></div>
						200
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-amber-100"></div>
						100
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-amber-50"></div>
						50
					</div>
				</div>
				<h3 id="yellow" className="mt-8 text-xl font-medium">
					Yellow
				</h3>
				<div className="mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row">
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-yellow-950"></div>
						950
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-yellow-900"></div>
						900
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-yellow-800"></div>
						800
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-yellow-700"></div>
						700
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-yellow-600"></div>
						600
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-yellow-500"></div>
						500
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-yellow-400"></div>
						400
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-yellow-300"></div>
						300
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-yellow-200"></div>
						200
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-yellow-100"></div>
						100
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-yellow-50"></div>
						50
					</div>
				</div>
				<h3 id="lime" className="mt-8 text-xl font-medium">
					Lime
				</h3>
				<div className="mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row">
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-lime-950"></div>
						950
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-lime-900"></div>
						900
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-lime-800"></div>
						800
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-lime-700"></div>
						700
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-lime-600"></div>
						600
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-lime-500"></div>
						500
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-lime-400"></div>
						400
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-lime-300"></div>
						300
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-lime-200"></div>
						200
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-lime-100"></div>
						100
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-lime-50"></div>
						50
					</div>
				</div>
				<h3 id="green" className="mt-8 flex items-center gap-2 text-xl font-medium">
					Green
				</h3>
				<div className="mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row">
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-green-950"></div>
						950
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-green-900"></div>
						900
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-green-800"></div>
						800
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-green-700"></div>
						700
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-green-600"></div>
						600
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-green-500"></div>
						500
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-green-400"></div>
						400
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-green-300"></div>
						300
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-green-200"></div>
						200
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-green-100"></div>
						100
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-green-50"></div>
						50
					</div>
				</div>
				<h3 id="emerald" className="mt-8 text-xl font-medium">
					Emerald
				</h3>
				<div className="mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row">
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-emerald-950"></div>
						950
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-emerald-900"></div>
						900
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-emerald-800"></div>
						800
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-emerald-700"></div>
						700
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-emerald-600"></div>
						600
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-emerald-500"></div>
						500
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-emerald-400"></div>
						400
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-emerald-300"></div>
						300
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-emerald-200"></div>
						200
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-emerald-100"></div>
						100
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-emerald-50"></div>
						50
					</div>
				</div>
				<h3 id="teal" className="mt-8 text-xl font-medium">
					Teal
				</h3>
				<div className="mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row">
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-teal-950"></div>
						950
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-teal-900"></div>
						900
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-teal-800"></div>
						800
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-teal-700"></div>
						700
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-teal-600"></div>
						600
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-teal-500"></div>
						500
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-teal-400"></div>
						400
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-teal-300"></div>
						300
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-teal-200"></div>
						200
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-teal-100"></div>
						100
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-teal-50"></div>
						50
					</div>
				</div>
				<h3 id="cyan" className="mt-8 text-xl font-medium">
					Cyan
				</h3>
				<div className="mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row">
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-cyan-950"></div>
						950
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-cyan-900"></div>
						900
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-cyan-800"></div>
						800
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-cyan-700"></div>
						700
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-cyan-600"></div>
						600
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-cyan-500"></div>
						500
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-cyan-400"></div>
						400
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-cyan-300"></div>
						300
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-cyan-200"></div>
						200
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-cyan-100"></div>
						100
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-cyan-50"></div>
						50
					</div>
				</div>

				<h3 id="sky" className="mt-8 text-xl font-medium">
					Sky
				</h3>
				<div className="mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row">
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-sky-950"></div>
						950
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-sky-900"></div>
						900
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-sky-800"></div>
						800
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-sky-700"></div>
						700
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-sky-600"></div>
						600
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-sky-500"></div>
						500
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-sky-400"></div>
						400
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-sky-300"></div>
						300
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-sky-200"></div>
						200
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-sky-100"></div>
						100
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-sky-50"></div>
						50
					</div>
				</div>

				<h3 id="blue" className="mt-8 text-xl font-medium">
					Blue
				</h3>
				<div className="mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row">
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-blue-950"></div>
						950
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-blue-900"></div>
						900
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-blue-800"></div>
						800
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-blue-700"></div>
						700
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-blue-600"></div>
						600
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-blue-500"></div>
						500
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-blue-400"></div>
						400
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-blue-300"></div>
						300
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-blue-200"></div>
						200
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-blue-100"></div>
						100
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-blue-50"></div>
						50
					</div>
				</div>

				<h3 id="indigo" className="mt-8 text-xl font-medium">
					Indigo
				</h3>
				<div className="mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row">
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-indigo-950"></div>
						950
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-indigo-900"></div>
						900
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-indigo-800"></div>
						800
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-indigo-700"></div>
						700
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-indigo-600"></div>
						600
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-indigo-500"></div>
						500
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-indigo-400"></div>
						400
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-indigo-300"></div>
						300
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-indigo-200"></div>
						200
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-indigo-100"></div>
						100
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-indigo-50"></div>
						50
					</div>
				</div>

				<h3 id="violet" className="mt-8 text-xl font-medium">
					Violet
				</h3>
				<div className="mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row">
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-violet-950"></div>
						950
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-violet-900"></div>
						900
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-violet-800"></div>
						800
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-violet-700"></div>
						700
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-violet-600"></div>
						600
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-violet-500"></div>
						500
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-violet-400"></div>
						400
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-violet-300"></div>
						300
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-violet-200"></div>
						200
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-violet-100"></div>
						100
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-violet-50"></div>
						50
					</div>
				</div>
				<h3 id="purple" className="mt-8 text-xl font-medium">
					Purple
				</h3>
				<div className="mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row">
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-purple-950"></div>
						950
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-purple-900"></div>
						900
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-purple-800"></div>
						800
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-purple-700"></div>
						700
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-purple-600"></div>
						600
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-purple-500"></div>
						500
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-purple-400"></div>
						400
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-purple-300"></div>
						300
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-purple-200"></div>
						200
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-purple-100"></div>
						100
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-purple-50"></div>
						50
					</div>
				</div>
				<h3 id="fuchsia" className="mt-8 text-xl font-medium">
					Fuchsia
				</h3>
				<div className="mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row">
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-fuchsia-950"></div>
						950
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-fuchsia-900"></div>
						900
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-fuchsia-800"></div>
						800
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-fuchsia-700"></div>
						700
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-fuchsia-600"></div>
						600
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-fuchsia-500"></div>
						500
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-fuchsia-400"></div>
						400
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-fuchsia-300"></div>
						300
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-fuchsia-200"></div>
						200
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-fuchsia-100"></div>
						100
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-fuchsia-50"></div>
						50
					</div>
				</div>

				<h3 id="pink" className="mt-8 text-xl font-medium">
					Pink
				</h3>
				<div className="mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row">
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-pink-950"></div>
						950
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-pink-900"></div>
						900
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-pink-800"></div>
						800
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-pink-700"></div>
						700
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-pink-600"></div>
						600
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-pink-500"></div>
						500
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-pink-400"></div>
						400
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-pink-300"></div>
						300
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-pink-200"></div>
						200
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-pink-100"></div>
						100
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-pink-50"></div>
						50
					</div>
				</div>
				<h3 id="rose" className="mt-8 text-xl font-medium">
					Rose
				</h3>
				<div className="mt-2 flex flex-col gap-2 overflow-hidden text-xs md:flex-row">
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-rose-950"></div>
						950
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-rose-900"></div>
						900
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-rose-800"></div>
						800
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-rose-700"></div>
						700
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-rose-600"></div>
						600
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-rose-500"></div>
						500
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-rose-400"></div>
						400
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-rose-300"></div>
						300
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-rose-200"></div>
						200
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-rose-100"></div>
						100
					</div>
					<div className="flex flex-grow flex-col gap-1 font-mono">
						<div className="h-10 w-full rounded bg-rose-50"></div>
						50
					</div>
				</div>
			</div>
		</div>
	);
}
