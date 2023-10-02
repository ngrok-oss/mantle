import { cx } from "@/lib/cx";
import { WithStyleProps } from "@/types/with-style-props";
import { HashNavLink } from "~/components/hash-nav-link";
import type { MetaFunction } from "@vercel/remix";
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
				<h3 className="text-xl text-brand-secondary-600">On this page</h3>
				<ul className="mt-4 text-sm text-gray-600">
					<li>
						<HashNavLink
							className={(isActive) => cx("hover:font-medium", isActive && "text-brand-primary-500 underline")}
							to=".#variables"
						>
							Variables
						</HashNavLink>
					</li>
					<ul className="ml-4 mt-2 flex flex-col gap-2">
						<li>
							<HashNavLink
								className={(isActive) => cx("hover:font-medium", isActive && "text-brand-primary-500 underline")}
								to=".#brand-primary"
							>
								Brand Primary
							</HashNavLink>
						</li>
						<li>
							<HashNavLink
								className={(isActive) => cx("hover:font-medium", isActive && "text-brand-primary-500 underline")}
								to=".#brand-secondary"
							>
								Brand Secondary
							</HashNavLink>
						</li>
						<li>
							<HashNavLink
								className={(isActive) => cx("hover:font-medium", isActive && "text-brand-primary-500 underline")}
								to=".#gray"
							>
								Gray
							</HashNavLink>
						</li>
						<li>
							<HashNavLink
								className={(isActive) => cx("hover:font-medium", isActive && "text-brand-primary-500 underline")}
								to=".#red"
							>
								Red
							</HashNavLink>
						</li>
						<li>
							<HashNavLink
								className={(isActive) => cx("hover:font-medium", isActive && "text-brand-primary-500 underline")}
								to=".#green"
							>
								Green
							</HashNavLink>
						</li>
						<li>
							<HashNavLink
								className={(isActive) => cx("hover:font-medium", isActive && "text-brand-primary-500 underline")}
								to=".#yellow"
							>
								Yellow
							</HashNavLink>
						</li>
					</ul>
				</ul>
			</nav>
			<div className="flex-1">
				<h1 className="text-5xl">Colors</h1>
				<p className="mt-4 text-xl text-gray-600">
					Mantle uses Tailwind under the hood for all its CSS styling. However, we differ from Tailwind when it comes to
					colors. Mantle provides a full color library that automatically provides dark and high contrast modes. This is
					different from standard Tailwind usage that requires dark class variations. By simply specifying light colors
					provided by mantle, you&apos;ll get dark and high contrast modes for free. If you require additional
					customization, you can provide dark variant classes as an override.
				</p>
				<h2 id="variables" className="mt-8 text-3xl">
					Variables
				</h2>
				<p className="mt-3 text-gray-600">
					Mantle&apos;s colors are delivered as CSS variables via Tailwind&apos;s API eg.{" "}
					<code className="rounded bg-gray-100 p-1 font-mono text-sm">.text-brand-primary-500</code>. They can be
					directly accessed via{" "}
					<code className="rounded bg-gray-100 p-1 font-mono text-sm">var(--brand-primary-500)</code> but do note that
					you&apos;ll need to wrap everything in{" "}
					<code className="rounded bg-gray-100 p-1 font-mono text-sm">hsl()</code> like so:{" "}
					<code className="rounded bg-gray-100 p-1 font-mono text-sm">hsl(var(--brand-primary-500))</code>. This allows
					for Tailwind operations like{" "}
					<code className="rounded bg-gray-100 p-1 font-mono text-sm">text-primary-500/25</code>.
				</p>
				<h3 id="brand-primary" className="mt-6 text-2xl">
					Brand Primary
				</h3>
				<p className="mt-2 text-gray-600">
					ngrok&apos;s primary branding color is used in its logo as well as primary links. Use it sparingly to attract
					attention.
				</p>
				<div className="mt-4 flex flex-col overflow-hidden rounded-md md:flex-row">
					<ColorSquare className="bg-brand-primary-900 text-white">900</ColorSquare>
					<ColorSquare className="bg-brand-primary-800 text-white">800</ColorSquare>
					<ColorSquare className="bg-brand-primary-700 text-white">700</ColorSquare>
					<ColorSquare className="bg-brand-primary-600 text-white">600</ColorSquare>
					<ColorSquare className="bg-brand-primary-500 text-white">500</ColorSquare>
					<ColorSquare className="bg-brand-primary-400">400</ColorSquare>
					<ColorSquare className="bg-brand-primary-300">300</ColorSquare>
					<ColorSquare className="bg-brand-primary-200">200</ColorSquare>
					<ColorSquare className="bg-brand-primary-100">100</ColorSquare>
					<ColorSquare className="bg-brand-primary-50">50</ColorSquare>
				</div>
				<h3 id="brand-secondary" className="mt-6 text-2xl">
					Brand Secondary
				</h3>
				<div className="mt-4 flex flex-col overflow-hidden rounded-md md:flex-row">
					<ColorSquare className="bg-brand-secondary-900 text-white">900</ColorSquare>
					<ColorSquare className="bg-brand-secondary-800 text-white">800</ColorSquare>
					<ColorSquare className="bg-brand-secondary-700 text-white">700</ColorSquare>
					<ColorSquare className="bg-brand-secondary-600 text-white">600</ColorSquare>
					<ColorSquare className="bg-brand-secondary-500 text-white">500</ColorSquare>
					<ColorSquare className="bg-brand-secondary-400">400</ColorSquare>
					<ColorSquare className="bg-brand-secondary-300">300</ColorSquare>
					<ColorSquare className="bg-brand-secondary-200">200</ColorSquare>
					<ColorSquare className="bg-brand-secondary-100">100</ColorSquare>
					<ColorSquare className="bg-brand-secondary-50">50</ColorSquare>
				</div>
				<h3 id="gray" className="mt-6 text-2xl">
					Gray
				</h3>
				<div className="mt-4 flex flex-col overflow-hidden rounded-md md:flex-row">
					<ColorSquare className="bg-gray-900 text-white">900</ColorSquare>
					<ColorSquare className="bg-gray-800 text-white">800</ColorSquare>
					<ColorSquare className="bg-gray-700 text-white">700</ColorSquare>
					<ColorSquare className="bg-gray-600 text-white">600</ColorSquare>
					<ColorSquare className="bg-gray-500 text-white">500</ColorSquare>
					<ColorSquare className="bg-gray-400">400</ColorSquare>
					<ColorSquare className="bg-gray-300">300</ColorSquare>
					<ColorSquare className="bg-gray-200">200</ColorSquare>
					<ColorSquare className="bg-gray-100">100</ColorSquare>
					<ColorSquare className="bg-gray-50">50</ColorSquare>
				</div>
				<h3 id="red" className="mt-6 text-2xl">
					Red
				</h3>
				<div className="mt-4 flex flex-col overflow-hidden rounded-md md:flex-row">
					<ColorSquare className="bg-red-900 text-white">900</ColorSquare>
					<ColorSquare className="bg-red-800 text-white">800</ColorSquare>
					<ColorSquare className="bg-red-700 text-white">700</ColorSquare>
					<ColorSquare className="bg-red-600 text-white">600</ColorSquare>
					<ColorSquare className="bg-red-500 text-white">500</ColorSquare>
					<ColorSquare className="bg-red-400">400</ColorSquare>
					<ColorSquare className="bg-red-300">300</ColorSquare>
					<ColorSquare className="bg-red-200">200</ColorSquare>
					<ColorSquare className="bg-red-100">100</ColorSquare>
					<ColorSquare className="bg-red-50">50</ColorSquare>
				</div>
				<h3 id="green" className="mt-6 text-2xl">
					Green
				</h3>
				<div className="mt-4 flex flex-col overflow-hidden rounded-md md:flex-row">
					<ColorSquare className="bg-green-900 text-white">900</ColorSquare>
					<ColorSquare className="bg-green-800 text-white">800</ColorSquare>
					<ColorSquare className="bg-green-700 text-white">700</ColorSquare>
					<ColorSquare className="bg-green-600 text-white">600</ColorSquare>
					<ColorSquare className="bg-green-500 text-white">500</ColorSquare>
					<ColorSquare className="bg-green-400">400</ColorSquare>
					<ColorSquare className="bg-green-300">300</ColorSquare>
					<ColorSquare className="bg-green-200">200</ColorSquare>
					<ColorSquare className="bg-green-100">100</ColorSquare>
					<ColorSquare className="bg-green-50">50</ColorSquare>
				</div>
				<h3 id="yellow" className="mt-6 text-2xl">
					Yellow
				</h3>
				<div className="mt-4 flex flex-col overflow-hidden rounded-md md:flex-row">
					<ColorSquare className="bg-yellow-900 text-white">900</ColorSquare>
					<ColorSquare className="bg-yellow-800 text-white">800</ColorSquare>
					<ColorSquare className="bg-yellow-700 text-white">700</ColorSquare>
					<ColorSquare className="bg-yellow-600 text-white">600</ColorSquare>
					<ColorSquare className="bg-yellow-500 text-white">500</ColorSquare>
					<ColorSquare className="bg-yellow-400">400</ColorSquare>
					<ColorSquare className="bg-yellow-300">300</ColorSquare>
					<ColorSquare className="bg-yellow-200">200</ColorSquare>
					<ColorSquare className="bg-yellow-100">100</ColorSquare>
					<ColorSquare className="bg-yellow-50">50</ColorSquare>
				</div>
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
