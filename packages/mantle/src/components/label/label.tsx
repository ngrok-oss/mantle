import { forwardRef } from "react";
import type { ComponentPropsWithoutRef, ComponentRef } from "react";
import { cx } from "../../utils/cx/cx.js";

type LabelProps = ComponentPropsWithoutRef<"label"> & {
	/**
	 * If set, the label will appear disabled.
	 */
	disabled?: boolean;
};

/**
 * A caption for a form control — input, checkbox, radio, switch, select.
 * Renders a native `<label>`. Pair every form control with a `Label` so the
 * control has an accessible name, clicks on the label focus the control, and
 * screen readers announce the field correctly.
 *
 * **When to use**
 * - Every visible form control. Always.
 * - Above or beside an input to describe it ("Email", "API key").
 * - Wrapping a checkbox or radio next to its descriptive text.
 *
 * **When not to use**
 * - For static UI text that isn't labeling a control — use a heading or
 *   plain `<p>`/`<span>`.
 * - As a substitute for `aria-label` on non-`<input>` widgets that don't
 *   support `<label for>` association.
 *
 * **Two ways to associate.** Either wrap the control inside the `<Label>`
 * (implicit association — simplest) or set `htmlFor` to the control's `id`
 * (explicit — required when the control isn't a child).
 *
 * **Disabled state.** Pass `disabled` to render the label in a disabled
 * style. Typically you'll want this to mirror the underlying control's
 * disabled state so the visual treatment stays consistent.
 *
 * @see https://mantle.ngrok.com/components/label
 *
 * @example
 * ```tsx
 * import { Label } from "@ngrok/mantle/label";
 * import { Input } from "@ngrok/mantle/input";
 *
 * // Implicit — control nested inside the label.
 * <Label className="grid gap-1">
 *   <span>Email</span>
 *   <Input type="email" name="email" />
 * </Label>
 *
 * // Explicit — htmlFor matches the control's id.
 * <div className="grid gap-1">
 *   <Label htmlFor="api-key">API key</Label>
 *   <Input id="api-key" name="apiKey" />
 * </div>
 *
 * // Inline label for a checkbox.
 * <Label className="flex items-center gap-2">
 *   <Checkbox name="terms" />
 *   <span>I agree to the terms</span>
 * </Label>
 * ```
 */
const Label = forwardRef<ComponentRef<"label">, LabelProps>(
	(
		{ "aria-disabled": _ariaDisabled, children, className, disabled, onMouseDown, ...props },
		ref,
	) => (
		// biome-ignore lint/a11y/noLabelWithoutControl: this is a composable label component
		<label
			aria-disabled={disabled ?? _ariaDisabled}
			data-slot="label"
			className={cx(
				"text-strong cursor-pointer text-sm peer-disabled:cursor-default has-disabled:cursor-default aria-disabled:cursor-default font-sans",
				className,
			)}
			onMouseDown={(event) => {
				// only prevent text selection if clicking inside the label itself
				const target = event.target as HTMLElement;
				if (target.closest("button, input, select, textarea")) {
					return;
				}

				onMouseDown?.(event);

				// prevent text selection when double clicking label
				if (!event.defaultPrevented && event.detail > 1) {
					event.preventDefault();
				}
			}}
			ref={ref}
			{...props}
		>
			{children}
		</label>
	),
);
Label.displayName = "Label";

export {
	//
	Label,
};
