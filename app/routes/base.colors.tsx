import { Anchor } from "@/anchor";
import { cx } from "@/cx";
import { InlineCode } from "@/inline-code";
import { WithStyleProps } from "@/types/with-style-props";
import type { MetaFunction } from "@vercel/remix";
import { HashNavLink } from "~/components/hash-nav-link";
import { PropsWithChildren } from "react";

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
					light colors provided by mantle, you&rsquo;ll get dark and high contrast modes for free. If you require
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
				<h3 id="blue" className="mt-8 text-xl font-medium">
					Blue
				</h3>
				<p className="mt-2 text-gray-600">
					ngrok&rsquo;s primary branding color is used in its logo as well as primary links. Use it sparingly to attract
					attention.
				</p>
				<div className="mt-2 flex flex-col overflow-hidden rounded-md md:flex-row">
					<ColorSquare className="bg-blue-950 text-white">950</ColorSquare>
					<ColorSquare className="bg-blue-900 text-white">900</ColorSquare>
					<ColorSquare className="bg-blue-800 text-white">800</ColorSquare>
					<ColorSquare className="bg-blue-700 text-white">700</ColorSquare>
					<ColorSquare className="bg-blue-600 text-white">600</ColorSquare>
					<ColorSquare className="bg-blue-500 text-white dark:text-black">500</ColorSquare>
					<ColorSquare className="bg-blue-400 high-contrast:text-white dark-high-contrast:text-white">400</ColorSquare>
					<ColorSquare className="bg-blue-300 high-contrast:text-white dark-high-contrast:text-white">300</ColorSquare>
					<ColorSquare className="bg-blue-200">200</ColorSquare>
					<ColorSquare className="bg-blue-100">100</ColorSquare>
					<ColorSquare className="bg-blue-50">50</ColorSquare>
				</div>
				<h3 id="gray" className="mt-8 text-xl font-medium">
					Gray
				</h3>
				<div className="mt-2 flex flex-col overflow-hidden rounded-md md:flex-row">
					<ColorSquare className="bg-gray-950 text-white">950</ColorSquare>
					<ColorSquare className="bg-gray-900 text-white">900</ColorSquare>
					<ColorSquare className="bg-gray-800 text-white">800</ColorSquare>
					<ColorSquare className="bg-gray-700 text-white">700</ColorSquare>
					<ColorSquare className="bg-gray-600 text-white">600</ColorSquare>
					<ColorSquare className="bg-gray-500 text-white dark:text-black">500</ColorSquare>
					<ColorSquare className="bg-gray-400 high-contrast:text-white dark-high-contrast:text-white">400</ColorSquare>
					<ColorSquare className="bg-gray-300 high-contrast:text-white dark-high-contrast:text-white">300</ColorSquare>
					<ColorSquare className="bg-gray-200">200</ColorSquare>
					<ColorSquare className="bg-gray-100">100</ColorSquare>
					<ColorSquare className="bg-gray-50">50</ColorSquare>
				</div>
				<h3 id="red" className="mt-8 text-xl font-medium">
					Red
				</h3>
				<div className="mt-2 flex flex-col overflow-hidden rounded-md md:flex-row">
					<ColorSquare className="bg-red-950 text-white">950</ColorSquare>
					<ColorSquare className="bg-red-900 text-white">900</ColorSquare>
					<ColorSquare className="bg-red-800 text-white">800</ColorSquare>
					<ColorSquare className="bg-red-700 text-white">700</ColorSquare>
					<ColorSquare className="bg-red-600 text-white">600</ColorSquare>
					<ColorSquare className="bg-red-500 text-white dark:text-black">500</ColorSquare>
					<ColorSquare className="bg-red-400 high-contrast:text-white dark-high-contrast:text-white">400</ColorSquare>
					<ColorSquare className="bg-red-300 high-contrast:text-white dark-high-contrast:text-white">300</ColorSquare>
					<ColorSquare className="bg-red-200">200</ColorSquare>
					<ColorSquare className="bg-red-100">100</ColorSquare>
					<ColorSquare className="bg-red-50">50</ColorSquare>
				</div>
				<h3 id="green" className="mt-8 text-xl font-medium flex items-center gap-2">
					Green
				</h3>
				<div className="mt-2 flex flex-col overflow-hidden rounded-md md:flex-row">
					<ColorSquare className="bg-green-950 text-white">950</ColorSquare>
					<ColorSquare className="bg-green-900 text-white">900</ColorSquare>
					<ColorSquare className="bg-green-800 text-white">800</ColorSquare>
					<ColorSquare className="bg-green-700 text-white">700</ColorSquare>
					<ColorSquare className="bg-green-600 text-white">600</ColorSquare>
					<ColorSquare className="bg-green-500 text-white dark:text-black">500</ColorSquare>
					<ColorSquare className="bg-green-400 high-contrast:text-white dark-high-contrast:text-white">400</ColorSquare>
					<ColorSquare className="bg-green-300 high-contrast:text-white dark-high-contrast:text-white">300</ColorSquare>
					<ColorSquare className="bg-green-200">200</ColorSquare>
					<ColorSquare className="bg-green-100">100</ColorSquare>
					<ColorSquare className="bg-green-50">50</ColorSquare>
				</div>
				<h3 id="amber" className="mt-8 text-xl font-medium">
					Amber
				</h3>
				<div className="mt-2 flex flex-col overflow-hidden rounded-md md:flex-row">
					<ColorSquare className="bg-amber-950 text-white">950</ColorSquare>
					<ColorSquare className="bg-amber-900 text-white">900</ColorSquare>
					<ColorSquare className="bg-amber-800 text-white">800</ColorSquare>
					<ColorSquare className="bg-amber-700 text-white">700</ColorSquare>
					<ColorSquare className="bg-amber-600 text-white">600</ColorSquare>
					<ColorSquare className="bg-amber-500 text-white dark:text-black">500</ColorSquare>
					<ColorSquare className="bg-amber-400 high-contrast:text-white dark-high-contrast:text-white">400</ColorSquare>
					<ColorSquare className="bg-amber-300 high-contrast:text-white dark-high-contrast:text-white">300</ColorSquare>
					<ColorSquare className="bg-amber-200">200</ColorSquare>
					<ColorSquare className="bg-amber-100">100</ColorSquare>
					<ColorSquare className="bg-amber-50">50</ColorSquare>
				</div>

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
			</div>
		</div>
	);
}

function ColorSquare({ children, className, style }: PropsWithChildren & WithStyleProps) {
	return (
		<div
			className={cx(
				"flex flex-grow items-center justify-center p-3 font-mono text-sm md:aspect-square md:w-0 md:p-0",
				className,
			)}
			style={style}
		>
			{children}
		</div>
	);
}
