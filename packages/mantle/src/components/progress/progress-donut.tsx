import clsx from "clsx";
import { createContext, useContext, useMemo } from "react";
import type { ComponentProps, HTMLAttributes } from "react";
import { useRandomStableId } from "../../hooks/use-random-stable-id.js";
import { cx } from "../../utils/cx/cx.js";

type RemValue = `${number}rem`;
type StrokeWidth = number | RemValue;
type ValueType = number | "indeterminate";

/**
 * The default maximum value of the progress bar.
 */
const defaultMax = 100;

type ProgressContextValue = {
	max: number;
	strokeWidth: StrokeWidth;
	value: ValueType;
};

const defaultContextValue = {
	max: defaultMax,
	strokeWidth: "0.25rem",
	value: 0,
} as const satisfies ProgressContextValue;

const ProgressContext = createContext<ProgressContextValue>(defaultContextValue);

type SvgAttributes = Omit<
	HTMLAttributes<SVGElement>,
	"viewBox" | "role" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "width" | "height"
>;

type Props = SvgAttributes & {
	/**
	 * The maximum value of the progress bar.
	 * This attribute describes how much work the task indicated by the progress element requires.
	 * The max attribute, if present, must have a value greater than 0. The default value is 100.
	 *
	 * @default 100
	 */
	max?: number | undefined;
	/**
	 * The width of the progress bar stroke.
	 * Note, we clamp the stroke width to a minimum of 1px and max of 12px since
	 * it is proportional to the viewbox size (0 0 32 32).
	 *
	 * @default 0.25rem (4px)
	 */
	strokeWidth?: StrokeWidth;
	/**
	 * The current value of the progress bar.
	 * This attribute specifies how much of the task that has been completed.
	 * It must be a valid floating point number between 0 and max, or between 0 and 100 if max is omitted.
	 * If set to `"indeterminate"`, the progress bar is considered indeterminate.
	 *
	 * @default 0
	 */
	value?: ValueType | undefined;
};

/**
 * A simple circular progress bar.
 */
const ProgressDonut = ({
	children,
	className,
	max: _max = defaultMax,
	strokeWidth: _strokeWidth = 4,
	value: _value,
	...props
}: Props) => {
	const max = isValidMaxNumber(_max) ? _max : defaultMax;
	const value = (isValidValueNumber(_value, max) ? _value : _value == null ? 0 : "indeterminate") satisfies ValueType;
	const strokeWidthPx = deriveStrokeWidthPx(_strokeWidth ?? defaultContextValue.strokeWidth);
	const valueNow = isNumber(value) ? value : undefined;
	const radius = `calc(50% - ${strokeWidthPx / 2}px)` as const;

	const ctx: ProgressContextValue = useMemo(
		() => ({
			max,
			strokeWidth: strokeWidthPx,
			value,
		}),
		[max, strokeWidthPx, value],
	);

	return (
		<ProgressContext.Provider value={ctx}>
			<svg
				aria-valuemax={max}
				aria-valuemin={0}
				aria-valuenow={valueNow}
				className={clsx(
					value === "indeterminate" && "animation-duration-[15s] transform-gpu animate-spin",
					cx("size-6 text-gray-200 dark:text-gray-300", className),
				)}
				data-max={max}
				data-min={0}
				data-value={valueNow}
				height="100%"
				role="progressbar"
				width="100%"
				{...props}
			>
				<circle cx="50%" cy="50%" fill="transparent" r={radius} stroke="currentColor" strokeWidth={strokeWidthPx} />
				{children}
			</svg>
		</ProgressContext.Provider>
	);
};

/**
 * Length (value) of the progress indicator tail when the progress bar is indeterminate.
 */
const indeterminateTailPercent = 0.6;

type ProgressDonutIndicatorProps = Omit<ComponentProps<"g">, "children">;

/**
 * The indicator for the circular progress bar.
 */
const ProgressDonutIndicator = ({ className, ...props }: ProgressDonutIndicatorProps) => {
	const gradientId = useRandomStableId();
	const ctx = useContext(ProgressContext) ?? defaultContextValue;
	const percentage = (ctx.value == "indeterminate" ? indeterminateTailPercent : ctx.value / ctx.max) * 100;
	const strokeWidthPx = deriveStrokeWidthPx(ctx.strokeWidth);
	const radius = `calc(50% - ${strokeWidthPx / 2}px)` as const;

	return (
		<g className={cx("text-accent-600", className)} {...props}>
			{ctx.value == "indeterminate" && (
				<defs>
					<linearGradient id={gradientId}>
						<stop className="stop-opacity-100 stop-color-current" offset="0%" />
						<stop className="stop-opacity-0 stop-color-current" offset="95%" />
					</linearGradient>
				</defs>
			)}
			<circle
				cx="50%"
				cy="50%"
				fill="transparent"
				pathLength={100}
				r={radius}
				stroke={ctx.value == "indeterminate" ? `url(#${gradientId})` : "currentColor"}
				strokeDasharray={100}
				strokeDashoffset={100 - percentage}
				strokeLinecap="round"
				strokeWidth={strokeWidthPx}
				transform-origin="center"
				transform="rotate(-90)" // rotate -90 degrees so it starts from the top
			/>
		</g>
	);
};

export {
	//,
	ProgressDonut,
	ProgressDonutIndicator,
};

/**
 * Clamp a value between a minimum and maximum value.
 */
function clamp(value: number, { min, max }: { min: number; max: number }): number {
	return Math.min(max, Math.max(min, value));
}

/**
 * Derive the stroke width in pixels as a number value or pixels/rem from a string value.
 * Note, this function clamps the stroke width to a minimum of 1 and max of 12 since
 * it is proportional to the viewbox size (0 0 32 32).
 */
export function deriveStrokeWidthPx(strokeWidth: number | string | undefined): number {
	let value = 4;
	if (strokeWidth == null) {
		return value;
	}

	if (typeof strokeWidth === "number") {
		value = strokeWidth;
	} else if (strokeWidth.endsWith("rem")) {
		value = Number(strokeWidth.replace("rem", "")) * 16;
	} else {
		value = Number(strokeWidth);
	}

	const stroke = Number.isNaN(value) ? 4 : value;
	return clamp(stroke, { min: 1, max: 12 });
}

/**
 * Check if a value is a number.
 */
function isNumber(value: unknown): value is number {
	return typeof value === "number";
}

/**
 * Check if a value is a valid number within the range of 0 to `max`.
 */
function isValidValueNumber(value: unknown, max: number): value is number {
	return isNumber(value) && !Number.isNaN(value) && value <= max && value >= 0;
}

/**
 * Check if a value is a valid number greater than 0.
 */
function isValidMaxNumber(value: unknown): value is number {
	return isNumber(value) && !Number.isNaN(value) && value > 0;
}
