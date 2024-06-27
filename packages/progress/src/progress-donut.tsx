import clsx from "clsx";
import { createContext, useContext, useMemo } from "react";
import type { HTMLAttributes } from "react";
import { cx } from "../../cx";
import type { WithStyleProps } from "../../types";

type RemValue = `${number}rem`;
type StrokeWidth = number | RemValue;

type SvgAttributes = Omit<
	HTMLAttributes<SVGElement>,
	"viewBox" | "role" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow"
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
	 *
	 * @default 0
	 */
	value?: number | undefined; // | null; // in the future we'll support null for `indeterminate` state
};

/**
 * The default maximum value of the progress bar.
 */
const defaultMax = 100;

/**
 * The size of the viewbox for the progress bar svg.
 */
const viewboxSize = 32;

type ProgressContextValue = {
	max: number;
	radius: number;
	strokeWidth: StrokeWidth;
	value: number;
};

const ProgressContext = createContext<ProgressContextValue>({
	max: defaultMax,
	radius: 16,
	strokeWidth: "0.25rem",
	value: 0,
});

/**
 * A simple circular progress bar.
 */
const ProgressDonut = ({
	children,
	className,
	max: _max = defaultMax,
	strokeWidth: _strokeWidth = 4,
	style,
	value: _value,
	...props
}: Props) => {
	const max = isValidMaxNumber(_max) ? _max : defaultMax;
	const value = isValidValueNumber(_value, max) ? _value : 0; // in the future we'll support `null` for `indeterminate` state
	const strokeWidthPx = deriveStrokeWidthPx(_strokeWidth);
	const strokeWidthRem = pxToRem(strokeWidthPx);
	const radius = circleRadius(strokeWidthPx);
	const valueNow = isNumber(value) ? value : undefined;

	const ctx: ProgressContextValue = useMemo(
		() => ({
			max,
			radius,
			strokeWidth: strokeWidthRem,
			value,
		}),
		[max, radius, strokeWidthRem, value],
	);

	return (
		<ProgressContext.Provider value={ctx}>
			<svg
				aria-valuemax={max}
				aria-valuemin={0}
				aria-valuenow={valueNow}
				className={clsx("-rotate-90 transform-gpu", cx("size-6 text-gray-200 dark:text-gray-300", className))}
				data-max={max}
				data-min={0}
				data-value={valueNow}
				role="progressbar"
				viewBox={`0 0 ${viewboxSize} ${viewboxSize}`}
				{...props}
			>
				<circle
					cx={viewboxSize / 2}
					cy={viewboxSize / 2}
					fill="transparent"
					r={radius}
					stroke="currentColor"
					strokeWidth={pxToRem(strokeWidthPx)}
				/>
				{children}
			</svg>
		</ProgressContext.Provider>
	);
};

/**
 * The indicator for the circular progress bar.
 */
const ProgressDonutIndicator = ({ className, style }: WithStyleProps) => {
	const ctx = useContext(ProgressContext);
	const progressValue = ctx.value / ctx.max;
	const circumferenceValue = circumference(ctx.radius);

	return (
		<g className={cx("text-accent-600", className)} style={style}>
			<circle
				cx={viewboxSize / 2}
				cy={viewboxSize / 2}
				fill="transparent"
				r={ctx.radius}
				stroke="currentColor"
				strokeDasharray={circumferenceValue}
				strokeDashoffset={`${(1 - progressValue) * circumferenceValue}px`}
				strokeLinecap="round"
				strokeWidth={ctx.strokeWidth}
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
 * Calculate the radius of a circle given the stroke width.
 * The radius is calculated as half the viewbox size minus half the stroke width
 * so that the stroke doesn't clamp within the viewbox.
 */
function circleRadius(strokeWidth: number): number {
	const value = Number.isNaN(strokeWidth) ? 4 : strokeWidth;
	// clamp the stroke width to a minimum of 1 and max of 16 non-inclusive on both sides
	const clampedStrokeWidth = clamp(value, { min: 1, max: 16 });
	return (viewboxSize - clampedStrokeWidth) / 2;
}

function clamp(value: number, { min, max }: { min: number; max: number }): number {
	return Math.min(max, Math.max(min, value));
}

/**
 * Convert a pixel value to a rem value.
 */
function pxToRem(value: number): RemValue {
	return `${value / 16}rem` as RemValue;
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
 * Calculate the circumference of a circle given its radius.
 * C = 2πr
 */
function circumference(radius: number) {
	return 2 * Math.PI * radius;
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
