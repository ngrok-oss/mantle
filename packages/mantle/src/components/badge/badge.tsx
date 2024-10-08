import type { HTMLAttributes, ReactNode } from "react";
import invariant from "tiny-invariant";
import type { Color } from "../../utils/color/index.js";
import { cx } from "../../utils/cx/cx.js";
import { IconBase } from "../icon/_icon-base.js";

const appearances = ["muted" /*"strong" */] as const;
type Appearance = (typeof appearances)[number];

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
	/**
	 * The color variant of the badge. Accepts named colors and functional colors from the mantle color palette.
	 */
	color?: Color;
	/**
	 * The icon to render inside the badge.
	 */
	icon?: ReactNode;
	/**
	 * The visual style of the badge.
	 */
	appearance: Appearance;
};

/**
 * A Badge is a non-interactive component used to highlight important information or to visually indicate the status of an item.
 */
const Badge = ({ appearance, children, className, color = "neutral", icon, ...props }: BadgeProps) => {
	const bgColor = computeBgColor(color, appearance);
	const textColor = computeTextColor(color, appearance);

	return (
		<span
			className={cx(
				"inline-flex w-fit shrink-0 cursor-default items-center gap-1 rounded px-1.5 py-0.5 text-sm font-medium sm:text-xs",
				icon && "ps-1",
				bgColor,
				textColor,
				className,
			)}
			{...props}
		>
			{icon && <IconBase className="size-5 sm:size-4" svg={icon} />}
			{children}
		</span>
	);
};

// MARK: - Exports

export { Badge };

export type { BadgeProps };

// MARK: - Private

const mutedBgColorLookup = {
	amber: "bg-amber-700/20",
	blue: "bg-blue-700/20",
	cyan: "bg-cyan-700/20",
	emerald: "bg-emerald-700/20",
	fuchsia: "bg-fuchsia-700/20",
	gray: "bg-gray-700/20",
	green: "bg-green-700/20",
	indigo: "bg-indigo-700/20",
	lime: "bg-lime-700/20",
	orange: "bg-orange-700/20",
	pink: "bg-pink-700/20",
	purple: "bg-purple-700/20",
	red: "bg-red-700/20",
	rose: "bg-rose-700/20",
	sky: "bg-sky-700/20",
	teal: "bg-teal-700/20",
	violet: "bg-violet-700/20",
	yellow: "bg-yellow-700/20",
	accent: "bg-accent-700/20",
	danger: "bg-danger-700/20",
	neutral: "bg-neutral-700/20",
	success: "bg-success-700/20",
	warning: "bg-warning-700/20",
} satisfies Record<Color, string>;

function computeBgColor(color: Color, appearance: Appearance) {
	switch (appearance) {
		case "muted":
			return mutedBgColorLookup[color];
		default:
			invariant(false, `Invalid appearance: ${String(appearance)}`);
	}
}

const textColorMutedLookup = {
	amber: "text-amber-700",
	blue: "text-blue-700",
	cyan: "text-cyan-700",
	emerald: "text-emerald-700",
	fuchsia: "text-fuchsia-700",
	gray: "text-gray-700",
	green: "text-green-700",
	indigo: "text-indigo-700",
	lime: "text-lime-700",
	orange: "text-orange-700",
	pink: "text-pink-700",
	purple: "text-purple-700",
	red: "text-red-700",
	rose: "text-rose-700",
	sky: "text-sky-700",
	teal: "text-teal-700",
	violet: "text-violet-700",
	yellow: "text-yellow-700",
	accent: "text-accent-700",
	danger: "text-danger-700",
	neutral: "text-neutral-700",
	success: "text-success-700",
	warning: "text-warning-700",
} satisfies Record<Color, string>;

function computeTextColor(color: Color, appearance: Appearance) {
	switch (appearance) {
		case "muted":
			return textColorMutedLookup[color];
		default:
			invariant(false, `Invalid appearance: ${String(appearance)}`);
	}
}
