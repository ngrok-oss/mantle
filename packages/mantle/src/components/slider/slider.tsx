"use client";

import * as SliderPrimitive from "@radix-ui/react-slider";
import type { ComponentProps } from "react";
import { cx } from "../../utils/cx/cx.js";

type SliderBaseProps = Omit<ComponentProps<typeof SliderPrimitive.Root>, "defaultValue" | "value">;

/**
 * Value props for the {@link Slider} component. Either both `defaultValue` and
 * `value` must be the same type (both `number` or both `number[]`), or only one
 * may be provided.
 */
type SliderValueProps =
	| {
			/**
			 * The value of the slider when initially rendered. Use when you do not need
			 * to control the state of the slider.
			 */
			defaultValue?: number;
			/**
			 * The controlled value of the slider. Must be used with `onValueChange`.
			 */
			value?: number;
	  }
	| {
			/**
			 * The values of the slider when initially rendered. Use when you do not need
			 * to control the state of the slider. Pass an array to create a range slider
			 * with multiple thumbs.
			 */
			defaultValue?: number[];
			/**
			 * The controlled values of the slider. Must be used with `onValueChange`.
			 * Pass an array to create a range slider with multiple thumbs.
			 */
			value?: number[];
	  };

/**
 * Props for the {@link Slider} component.
 */
type SliderProps = SliderBaseProps & SliderValueProps;

/**
 * An input where the user selects a value from within a given range.
 *
 * @see https://mantle.ngrok.com/components/slider
 *
 * @example
 * ```tsx
 * // single thumb
 * <Slider
 *   defaultValue={75}
 *   max={100}
 *   step={1}
 * />
 * ```
 *
 * @example
 * ```tsx
 * // range
 *  <Slider
 *    defaultValue={[25, 50]}
 *    max={100}
 *    step={5}
 *  />
 * ```
 *
 * @example
 * ```tsx
 * // multiple thumbs
 * <Slider
 *   defaultValue={[10, 20, 70]}
 *   max={100}
 *   step={10}
 *  />
 * ```
 */
function Slider({ className, defaultValue, value, min = 0, max = 100, ...props }: SliderProps) {
	const normalizedValue = value != null ? (Array.isArray(value) ? value : [value]) : undefined;
	const normalizedDefaultValue =
		defaultValue != null
			? Array.isArray(defaultValue)
				? defaultValue
				: [defaultValue]
			: undefined;
	const values = normalizedValue ?? normalizedDefaultValue ?? [min, max];

	return (
		<SliderPrimitive.Root
			data-slot="slider"
			defaultValue={normalizedDefaultValue}
			value={normalizedValue}
			min={min}
			max={max}
			className={cx(
				"data-orientation-vertical:min-h-40 relative flex w-full touch-none items-center select-none data-disabled:opacity-50 data-orientation-vertical:h-full data-orientation-vertical:w-auto data-orientation-vertical:flex-col",
				className,
			)}
			{...props}
		>
			<SliderPrimitive.Track
				data-slot="slider-track"
				className={cx(
					"bg-neutral-300 rounded-full relative grow overflow-hidden",
					"data-orientation-horizontal:h-1.5 data-orientation-horizontal:w-full",
					"data-orientation-vertical:w-1.5 data-orientation-vertical:h-full",
				)}
			>
				<SliderPrimitive.Range
					data-slot="slider-range"
					className="bg-accent-500 absolute select-none data-orientation-horizontal:h-full data-orientation-vertical:w-full"
				/>
			</SliderPrimitive.Track>
			{Array.from({ length: values.length }, (_, index) => (
				<SliderPrimitive.Thumb
					data-slot="slider-thumb"
					key={index}
					className={cx(
						"bg-card border-card relative size-4.5 rounded-full border",
						"shadow-sm transition-[color,box-shadow]",
						"after:absolute after:-inset-2",
						"focus-visible:ring-3 focus-visible:ring-accent-500/20 focus-visible:outline-hidden",
						"block shrink-0 cursor-pointer select-none",
						"disabled:pointer-events-none disabled:opacity-50",
					)}
				/>
			))}
		</SliderPrimitive.Root>
	);
}

export { Slider };
export type { SliderProps };
