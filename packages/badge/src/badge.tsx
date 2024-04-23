import { cloneElement, isValidElement, type HTMLAttributes, type ReactNode } from "react";
import invariant from "tiny-invariant";
import { cx } from "../../cx";

const appearances = ["muted", "strong"] as const;
type Appearance = (typeof appearances)[number];

const colorPaletteColors = [
	"amber",
	"blue",
	"cyan",
	"emerald",
	"fuchsia",
	"gray",
	"green",
	"indigo",
	"lime",
	"orange",
	"pink",
	"purple",
	"red",
	"rose",
	"sky",
	"teal",
	"violet",
	"yellow",
] as const;

const functionalColors = ["accent", "danger", "neutral", "success", "warning"] as const;

/**
 * Supported Badge colors.
 */
const badgeColors = [...colorPaletteColors, ...functionalColors] as const;

/**
 * Supported Badge colors.
 */
type BadgeColor = (typeof badgeColors)[number];

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
	/**
	 * The color variant of the badge
	 */
	color?: BadgeColor;
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
 * A Badge is used to highlight important information or to visually indicate the status of an item.
 */
const Badge = ({ appearance, children, className, color = "neutral", icon, ...props }: BadgeProps) => {
	const bgColor = computeBgColor(color, appearance);
	const textColor = computeTextColor(color, appearance);

	return (
		<span
			className={cx(
				"inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-xs font-medium",
				icon && "ps-1",
				bgColor,
				textColor,
				className,
			)}
			{...props}
		>
			{icon && isValidElement<HTMLAttributes<SVGElement>>(icon) && cloneElement(icon, { className: "size-4 shrink-0" })}
			{children}
		</span>
	);
};

export { Badge };
export type { BadgeColor, BadgeProps };

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
} satisfies Record<BadgeColor, string>;

const strongBgColorLookup = {
	amber: "bg-amber-500",
	blue: "bg-blue-500",
	cyan: "bg-cyan-500",
	emerald: "bg-emerald-500",
	fuchsia: "bg-fuchsia-500",
	gray: "bg-gray-500",
	green: "bg-green-500",
	indigo: "bg-indigo-500",
	lime: "bg-lime-500",
	orange: "bg-orange-500",
	pink: "bg-pink-500",
	purple: "bg-purple-500",
	red: "bg-red-500",
	rose: "bg-rose-500",
	sky: "bg-sky-500",
	teal: "bg-teal-500",
	violet: "bg-violet-500",
	yellow: "bg-yellow-500",
	accent: "bg-accent-500",
	danger: "bg-danger-500",
	neutral: "bg-neutral-500",
	success: "bg-success-500",
	warning: "bg-warning-500",
} satisfies Record<BadgeColor, string>;

function computeBgColor(color: BadgeColor, appearance: Appearance) {
	switch (appearance) {
		case "muted":
			return mutedBgColorLookup[color];
		case "strong":
			return strongBgColorLookup[color];
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
} satisfies Record<BadgeColor, string>;

function computeTextColor(color: BadgeColor, appearance: Appearance) {
	switch (appearance) {
		case "muted":
			return textColorMutedLookup[color];
		case "strong":
			return "text-[#fff]"; // note: this seems to be causing color contrast issues, we should revisit!
		default:
			invariant(false, `Invalid appearance: ${String(appearance)}`);
	}
}
