import { QuestionIcon } from "@phosphor-icons/react/Question";
import { Children, type ComponentProps, type ReactNode } from "react";
import type { WithAsChild } from "../../types/as-child.js";
import { cx } from "../../utils/cx/cx.js";
import { IconButton, type IconButtonProps } from "../button/icon-button.js";
import { Popover } from "../popover/index.js";
import { Slot } from "../slot/index.js";

/**
 * Renders a semantic `<fieldset>` for grouping related controls under a
 * single accessible name. Resets the default browser fieldset chrome
 * (border, padding, `min-width` quirk) so it composes cleanly with
 * `Field.Legend` and `Field.Group`.
 *
 * Reach for `Field.Set` when the grouping carries semantic weight — most
 * commonly a `RadioGroup` (where the legend names the question the radios
 * answer) or a set of related checkboxes. For laying out unrelated fields
 * with consistent spacing, prefer `Field.Group` on its own.
 *
 * @see https://mantle.ngrok.com/components/field
 *
 * @example
 * ```tsx
 * <Field.Set>
 *   <Field.Legend>Notification frequency</Field.Legend>
 *   <RadioGroup.Root name="frequency" defaultValue="daily">
 *     <RadioGroup.Item value="daily" id="freq-daily">…</RadioGroup.Item>
 *     <RadioGroup.Item value="weekly" id="freq-weekly">…</RadioGroup.Item>
 *   </RadioGroup.Root>
 * </Field.Set>
 * ```
 */
const FieldSet = ({ asChild, className, ...props }: ComponentProps<"fieldset"> & WithAsChild) => {
	const Comp = asChild ? Slot : "fieldset";

	return (
		<Comp
			data-slot="field-set"
			className={cx("flex w-full min-w-0 flex-col gap-4 border-0 p-0", className)}
			{...props}
		/>
	);
};
FieldSet.displayName = "FieldSet";

/**
 * The caption for a `Field.Set`. Renders a semantic `<legend>` styled to
 * match the `Label` component so a fieldset reads like a section header,
 * and gives screen readers an accessible name for the surrounding group
 * (e.g. "Notification frequency, group, Daily").
 *
 * @see https://mantle.ngrok.com/components/field
 *
 * @example
 * ```tsx
 * <Field.Set>
 *   <Field.Legend>Notification frequency</Field.Legend>
 *   <RadioGroup.Root name="frequency" defaultValue="daily">…</RadioGroup.Root>
 * </Field.Set>
 * ```
 */
const Legend = ({ asChild, className, ...props }: ComponentProps<"legend"> & WithAsChild) => {
	const Comp = asChild ? Slot : "legend";

	return (
		<Comp
			data-slot="field-legend"
			className={cx("text-strong text-sm font-medium font-sans", className)}
			{...props}
		/>
	);
};
Legend.displayName = "FieldLegend";

/**
 * Horizontal layout container for the label area of a field. Aligns a
 * `<Label>` (which may contain `Field.Optional`) with adjacent affordances
 * like a help-icon `Popover.Trigger` on a shared center line with a tight
 * `gap-1`. Center-alignment is used (not baseline) so SVG icon buttons —
 * which have no text baseline — sit visually centered next to the label
 * text rather than dropping to the box bottom.
 *
 * Use this when the label needs sibling decorations that can't live inside
 * the `<Label>` itself (e.g. an interactive help button — clicking inside a
 * `<label>` would forward focus to the associated control). For a label
 * with only an `(Optional)` suffix, place `Field.Optional` directly inside
 * the `<Label>` instead — no `LabelRow` needed.
 *
 * @see https://mantle.ngrok.com/components/field
 *
 * @example
 * ```tsx
 * <Field.Item>
 *   <Field.LabelRow>
 *     <Label htmlFor="api-key">
 *       API key <Field.Optional />
 *     </Label>
 *     <Popover.Root>
 *       <Popover.Trigger asChild>
 *         <IconButton
 *           type="button"
 *           appearance="ghost"
 *           size="xs"
 *           label="More info"
 *           icon={<QuestionIcon />}
 *         />
 *       </Popover.Trigger>
 *       <Popover.Content>Copy this from the dashboard.</Popover.Content>
 *     </Popover.Root>
 *   </Field.LabelRow>
 *   <Input id="api-key" name="apiKey" />
 * </Field.Item>
 * ```
 */
const LabelRow = ({ asChild, className, ...props }: ComponentProps<"div"> & WithAsChild) => {
	const Comp = asChild ? Slot : "div";

	return (
		<Comp
			data-slot="field-label-row"
			className={cx("flex items-center gap-1", className)}
			{...props}
		/>
	);
};
LabelRow.displayName = "FieldLabelRow";

/**
 * Lightweight `Popover.Root` wrapper for the help-affordance pattern. Pair
 * with `Field.HelpTrigger` (renders a default question-mark `IconButton`)
 * and `Field.HelpContent` (the popover body) to drop a help button into a
 * `Field.LabelRow` without manually wiring `Popover` + `IconButton` +
 * `QuestionIcon`. All `Popover.Root` props are forwarded — pass `modal`,
 * `defaultOpen`, etc. as needed.
 *
 * Popover (not Tooltip) so the affordance is reachable on touch devices.
 *
 * @see https://mantle.ngrok.com/components/field
 *
 * @example
 * ```tsx
 * <Field.LabelRow>
 *   <Label htmlFor="api-key">API key</Label>
 *   <Field.Help>
 *     <Field.HelpTrigger />
 *     <Field.HelpContent>Copy this from the dashboard.</Field.HelpContent>
 *   </Field.Help>
 * </Field.LabelRow>
 * ```
 */
const Help = (props: ComponentProps<typeof Popover.Root>) => <Popover.Root {...props} />;
Help.displayName = "FieldHelp";

type FieldHelpTriggerProps = Partial<Omit<IconButtonProps, "icon">> & {
	/**
	 * The icon to render inside the trigger button. Defaults to a Phosphor
	 * `QuestionIcon` so the most common case requires no props.
	 */
	icon?: ReactNode;
};

/**
 * The trigger for a `Field.Help` popover — a `Popover.Trigger` wired to a
 * ghost-appearance `IconButton` with a default Phosphor `QuestionIcon`.
 * Override the icon via `icon`, the screen-reader text via `label`, or any
 * other `IconButton` prop.
 *
 * Pre-styled with `text-body` (matching the figma) so the icon reads as
 * subtle metadata at rest; `IconButton`'s ghost `hover:text-strong` still
 * brightens it on interaction.
 *
 * @see https://mantle.ngrok.com/components/field
 *
 * @example
 * ```tsx
 * // Default question-mark icon
 * <Field.Help>
 *   <Field.HelpTrigger />
 *   <Field.HelpContent>Copy this from the dashboard.</Field.HelpContent>
 * </Field.Help>
 *
 * // Custom icon + label
 * <Field.Help>
 *   <Field.HelpTrigger icon={<InfoIcon />} label="What is this?" />
 *   <Field.HelpContent>Custom info.</Field.HelpContent>
 * </Field.Help>
 * ```
 */
const HelpTrigger = ({
	appearance = "ghost",
	className,
	icon = <QuestionIcon />,
	label = "Show help",
	size = "xs",
	type = "button",
	...props
}: FieldHelpTriggerProps) => (
	<Popover.Trigger asChild>
		<IconButton
			appearance={appearance}
			className={cx("text-body", className)}
			icon={icon}
			label={label}
			size={size}
			type={type}
			{...props}
		/>
	</Popover.Trigger>
);
HelpTrigger.displayName = "FieldHelpTrigger";

/**
 * The popover body for a `Field.Help`. Forwards every prop to
 * `Popover.Content`, so all positioning / sizing options (`side`, `align`,
 * `preferredWidth`, etc.) work as expected.
 *
 * @see https://mantle.ngrok.com/components/field
 *
 * @example
 * ```tsx
 * <Field.Help>
 *   <Field.HelpTrigger />
 *   <Field.HelpContent side="top">
 *     Pinned above the trigger.
 *   </Field.HelpContent>
 * </Field.Help>
 * ```
 */
const HelpContent = (props: ComponentProps<typeof Popover.Content>) => (
	<Popover.Content {...props} />
);
HelpContent.displayName = "FieldHelpContent";

/**
 * Inline "(Optional)" suffix to mark a field as optional. Defaults to the
 * literal string `(Optional)` so the common case is `<Field.Optional />` with
 * no children — pass children to translate or replace the text. Renders a
 * `<span>` in `text-muted` at `text-sm` / `font-normal` so it reads as
 * secondary metadata next to the bolder Label text.
 *
 * Place inside the `<Label>` so screen readers announce it as part of the
 * accessible name (e.g. "Email, Optional, edit text"). Pair with a small
 * `gap` on the label's flex layout, or rely on the natural inline spacing.
 *
 * @see https://mantle.ngrok.com/components/field
 *
 * @example
 * ```tsx
 * <Field.Item>
 *   <Label htmlFor="email" className="flex items-baseline gap-1">
 *     Email <Field.Optional />
 *   </Label>
 *   <Input id="email" name="email" type="email" />
 * </Field.Item>
 * ```
 */
const Optional = ({
	asChild,
	children,
	className,
	...props
}: ComponentProps<"span"> & WithAsChild) => {
	const Comp = asChild ? Slot : "span";

	return (
		<Comp
			data-slot="field-optional"
			className={cx("text-muted text-sm font-normal font-sans", className)}
			{...props}
		>
			{children ?? "(Optional)"}
		</Comp>
	);
};
Optional.displayName = "FieldOptional";

/**
 * Layout container that stacks multiple `Field.Item`s vertically with
 * `gap-4` between them. This is the default way to compose multiple fields
 * — most forms only need a `Field.Group` of `Field.Item`s. Reach for
 * `Field.Set` + `Field.Legend` only when the grouping carries semantic
 * weight (e.g. a `RadioGroup` or related checkboxes).
 *
 * @see https://mantle.ngrok.com/components/field
 *
 * @example
 * ```tsx
 * <Field.Group>
 *   <Field.Item>
 *     <Label htmlFor="email">Email</Label>
 *     <Input id="email" name="email" type="email" />
 *   </Field.Item>
 *   <Field.Item>
 *     <Label htmlFor="password">Password</Label>
 *     <Input id="password" name="password" type="password" />
 *   </Field.Item>
 * </Field.Group>
 * ```
 */
const Group = ({ asChild, className, ...props }: ComponentProps<"div"> & WithAsChild) => {
	const Comp = asChild ? Slot : "div";

	return (
		<Comp
			data-slot="field-group"
			className={cx("flex w-full flex-col gap-4", className)}
			{...props}
		/>
	);
};
Group.displayName = "FieldGroup";

/**
 * A single form field — `Label`, a control (`Input`, `Select`, `Checkbox`,
 * etc.), and any `Field.Description` / `Field.ErrorList` siblings stacked
 * vertically with a consistent `gap-1.5` so help and error messaging sit
 * tightly under the input.
 *
 * Renders a plain `<div>` — the `<label htmlFor>` ↔ control association
 * already provides the right semantics for a single field, so no implicit
 * `role` is added. When you need explicit ARIA wiring between the control
 * and its description / error, set `aria-describedby` and `aria-errormessage`
 * on the control yourself — `Field.Item` is layout-only, by design, so it
 * stays compatible with the existing `<Label>` (no auto-wired IDs).
 *
 * @see https://mantle.ngrok.com/components/field
 *
 * @example
 * ```tsx
 * <Field.Item>
 *   <Label htmlFor="username">Username</Label>
 *   <Input id="username" name="username" />
 *   <Field.ErrorList>
 *     <Field.Error>Username is required.</Field.Error>
 *   </Field.ErrorList>
 *   <Field.Description>Pick something memorable.</Field.Description>
 * </Field.Item>
 * ```
 */
const Item = ({ asChild, className, ...props }: ComponentProps<"div"> & WithAsChild) => {
	const Comp = asChild ? Slot : "div";

	return (
		<Comp
			data-slot="field-item"
			className={cx("flex w-full flex-col gap-1.5", className)}
			{...props}
		/>
	);
};
Item.displayName = "FieldItem";

/**
 * Helper / hint text. Renders a `<p>` in the muted body color so it reads
 * as secondary to the bolder content above it. Works in two positions:
 *
 * 1. **Inside `Field.Item`**, below the control — clarifies expected format
 *    or constraints for that single field.
 * 2. **Inside `Field.Set`, between `Field.Legend` and `Field.Group`** — describes
 *    the entire fieldset (e.g. "All transactions are secure and encrypted.").
 *
 * **Auto-tighten.** When this description sits directly after a
 * `Field.ErrorList` sibling, the parent's `gap-1.5` collapses via a matching
 * negative top margin so error list + helper read as one tight block. Pass
 * any margin utility (`mt-1`, `mt-0`, etc.) to override — the rule's
 * specificity is flattened to `(0,1,0)` so a single user class wins.
 *
 * @see https://mantle.ngrok.com/components/field
 *
 * @example
 * ```tsx
 * // Field-level helper (inside Field.Item)
 * <Field.Item>
 *   <Label htmlFor="username">Username</Label>
 *   <Input id="username" name="username" />
 *   <Field.ErrorList>
 *     <Field.Error>Username is required.</Field.Error>
 *   </Field.ErrorList>
 *   <Field.Description>Pick something memorable.</Field.Description>
 * </Field.Item>
 *
 * // Fieldset-level description (inside Field.Set, below Field.Legend)
 * <Field.Set>
 *   <Field.Legend>Payment method</Field.Legend>
 *   <Field.Description>All transactions are secure and encrypted.</Field.Description>
 *   <Field.Group>...</Field.Group>
 * </Field.Set>
 * ```
 */
const Description = ({ asChild, className, ...props }: ComponentProps<"p"> & WithAsChild) => {
	const Comp = asChild ? Slot : "p";

	return (
		<Comp
			data-slot="field-description"
			className={cx(
				"text-body text-sm leading-4",
				// When this description sits directly after a Field.ErrorList
				// sibling, collapse the parent's gap-1.5 with a matching negative
				// top margin so the list + helper read as one tight block.
				// Wrapping the matched selector in :where() flattens its specificity
				// to (0,1,0) so a user-supplied margin utility (mt-2, mt-0, etc.)
				// passed on Field.Description still overrides cleanly.
				"[:where([data-slot=field-error-list]+&)]:-mt-1.5",
				className,
			)}
			{...props}
		/>
	);
};
Description.displayName = "FieldDescription";

/**
 * A single error message for a field. Renders an `<li>` in `text-danger-600`
 * so it stands out from a sibling `Field.Description`. Must be rendered
 * inside a `Field.ErrorList` — single errors are just a list of one.
 *
 * @see https://mantle.ngrok.com/components/field
 *
 * @example
 * ```tsx
 * <Field.Item>
 *   <Label htmlFor="username">Username</Label>
 *   <Input id="username" name="username" />
 *   <Field.ErrorList>
 *     <Field.Error>Username is required.</Field.Error>
 *   </Field.ErrorList>
 *   <Field.Description>Pick something memorable.</Field.Description>
 * </Field.Item>
 * ```
 */
const FieldError = ({ asChild, className, ...props }: ComponentProps<"li"> & WithAsChild) => {
	const Comp = asChild ? Slot : "li";

	return (
		<Comp
			data-slot="field-error"
			className={cx("text-danger-600 text-sm leading-4", className)}
			{...props}
		/>
	);
};
FieldError.displayName = "FieldError";

/**
 * Wraps one or more `Field.Error` children in a semantic `<ul>` so a list of
 * validation errors is announced as a list by screen readers. Renders nothing
 * when no children are passed, so it can be left mounted unconditionally
 * while a validator produces a (possibly empty) array of messages.
 *
 * The list strips its default browser styling (`list-none`, `p-0`, `m-0`) and
 * stacks items as a flex column with no gap so consecutive errors read as a
 * single tight block.
 *
 * @see https://mantle.ngrok.com/components/field
 *
 * @example
 * ```tsx
 * <Field.Item>
 *   <Label htmlFor="username">Username</Label>
 *   <Input id="username" name="username" />
 *   <Field.ErrorList>
 *     {field.state.meta.errors.map((error, index) => (
 *       <Field.Error key={index}>{error?.message}</Field.Error>
 *     ))}
 *   </Field.ErrorList>
 *   <Field.Description>Pick something memorable.</Field.Description>
 * </Field.Item>
 * ```
 */
const FieldErrorList = ({
	asChild,
	children,
	className,
	...props
}: ComponentProps<"ul"> & WithAsChild) => {
	if (Children.count(children) === 0) {
		return null;
	}

	const Comp = asChild ? Slot : "ul";

	return (
		<Comp
			data-slot="field-error-list"
			className={cx("m-0 flex w-full flex-col list-none p-0", className)}
			{...props}
		>
			{children}
		</Comp>
	);
};
FieldErrorList.displayName = "FieldErrorList";

/**
 * Compound component for building a semantic, accessible form field. Pair
 * with the existing mantle `<Label>` for individual fields. Most forms only
 * need a `Field.Group` of `Field.Item`s — reach for `Field.Set` +
 * `Field.Legend` only when the grouping carries semantic weight (e.g. a
 * `RadioGroup` or related checkboxes).
 *
 * @see https://mantle.ngrok.com/components/field
 *
 * @example
 * Composition:
 * ```
 * Field.Group
 * └── Field.Item
 *     ├── Field.LabelRow
 *     │   ├── <Label>
 *     │   │   └── Field.Optional
 *     │   └── Field.Help
 *     │       ├── Field.HelpTrigger
 *     │       └── Field.HelpContent
 *     ├── (control)
 *     ├── Field.ErrorList
 *     │   └── Field.Error
 *     └── Field.Description
 *
 * // For radios / checkboxes — semantic grouping under a shared legend:
 * Field.Set
 * ├── Field.Legend
 * └── (RadioGroup / Checkbox group)
 * ```
 *
 * @example
 * ```tsx
 * <Field.Group>
 *   <Field.Item>
 *     <Label htmlFor="email">Email</Label>
 *     <Input id="email" name="email" type="email" />
 *     <Field.ErrorList>
 *       <Field.Error>Email is required.</Field.Error>
 *     </Field.ErrorList>
 *     <Field.Description>We'll never share your email.</Field.Description>
 *   </Field.Item>
 *   <Field.Item>
 *     <Label htmlFor="nickname" className="flex items-baseline gap-1">
 *       Nickname <Field.Optional />
 *     </Label>
 *     <Input id="nickname" name="nickname" />
 *     <Field.Description>Visible on your public profile.</Field.Description>
 *   </Field.Item>
 * </Field.Group>
 * ```
 */
const Field = {
	/**
	 * A single form field — `Label` + control + helper + error stacked
	 * vertically with `gap-1.5`. Renders a plain `<div>` (no implicit role).
	 *
	 * **When to use:** for every individual field in a form — text inputs,
	 * selects, single checkboxes, switches, etc. The `<label htmlFor>` ↔
	 * control association already provides the semantics.
	 *
	 * @see https://mantle.ngrok.com/components/field
	 *
	 * @example
	 * ```tsx
	 * <Field.Item>
	 *   <Label htmlFor="email">Email</Label>
	 *   <Input id="email" name="email" />
	 *   <Field.ErrorList>
	 *     <Field.Error>Email is required.</Field.Error>
	 *   </Field.ErrorList>
	 *   <Field.Description>We'll never share your email.</Field.Description>
	 * </Field.Item>
	 * ```
	 */
	Item,
	/**
	 * Layout container that stacks multiple `Field.Item`s vertically with
	 * `gap-4`. Renders a plain `<div>` — pure layout, no semantics.
	 *
	 * **When to use:** any time a form has more than one field. This is the
	 * default way to compose multiple `Field.Item`s. Reach for `Field.Set` +
	 * `Field.Legend` instead only when the grouping itself carries semantic
	 * weight (radios, related checkboxes).
	 *
	 * @see https://mantle.ngrok.com/components/field
	 *
	 * @example
	 * ```tsx
	 * <Field.Group>
	 *   <Field.Item>
	 *     <Label htmlFor="email">Email</Label>
	 *     <Input id="email" name="email" />
	 *   </Field.Item>
	 *   <Field.Item>
	 *     <Label htmlFor="password">Password</Label>
	 *     <Input id="password" name="password" type="password" />
	 *   </Field.Item>
	 * </Field.Group>
	 * ```
	 */
	Group,
	/**
	 * Renders a semantic `<fieldset>` with default browser styling reset.
	 * Pair with `Field.Legend` to give the group an accessible name.
	 *
	 * **When to use:** specifically when the grouping carries semantic
	 * weight — most commonly a `RadioGroup` (the legend names the question
	 * the radios answer) or a set of related checkboxes. Skip this for
	 * unrelated fields stacked together — `Field.Group` on its own is the
	 * right choice there.
	 *
	 * @see https://mantle.ngrok.com/components/field
	 *
	 * @example
	 * ```tsx
	 * <Field.Set>
	 *   <Field.Legend>Notification frequency</Field.Legend>
	 *   <RadioGroup.Root name="frequency" defaultValue="daily">
	 *     <RadioGroup.Item value="daily" id="freq-daily">…</RadioGroup.Item>
	 *     <RadioGroup.Item value="weekly" id="freq-weekly">…</RadioGroup.Item>
	 *   </RadioGroup.Root>
	 * </Field.Set>
	 * ```
	 */
	Set: FieldSet,
	/**
	 * Caption for a `Field.Set`. Renders a `<legend>` styled to match the
	 * mantle `Label` typography.
	 *
	 * **When to use:** always alongside `Field.Set` — the legend is what
	 * gives the surrounding fieldset an accessible name. A `Field.Set`
	 * without a `Field.Legend` is rarely correct.
	 *
	 * @see https://mantle.ngrok.com/components/field
	 *
	 * @example
	 * ```tsx
	 * <Field.Set>
	 *   <Field.Legend>Notification frequency</Field.Legend>
	 *   <RadioGroup.Root name="frequency" defaultValue="daily">…</RadioGroup.Root>
	 * </Field.Set>
	 * ```
	 */
	Legend,
	/**
	 * Horizontal layout container for the label area of a field. Aligns a
	 * `<Label>` (which may contain `Field.Optional`) with adjacent affordances
	 * like a help-icon `Popover.Trigger` on a shared center line with `gap-1`.
	 *
	 * @see https://mantle.ngrok.com/components/field
	 *
	 * @example
	 * ```tsx
	 * <Field.Item>
	 *   <Field.LabelRow>
	 *     <Label htmlFor="api-key">
	 *       API key <Field.Optional />
	 *     </Label>
	 *     <Popover.Root>
	 *       <Popover.Trigger asChild>
	 *         <button type="button" aria-label="More info">
	 *           <QuestionIcon />
	 *         </button>
	 *       </Popover.Trigger>
	 *       <Popover.Content>Copy this from the dashboard.</Popover.Content>
	 *     </Popover.Root>
	 *   </Field.LabelRow>
	 *   <Input id="api-key" name="apiKey" />
	 * </Field.Item>
	 * ```
	 */
	LabelRow,
	/**
	 * `Popover.Root` wrapper for the help-affordance pattern. Pair with
	 * `Field.HelpTrigger` and `Field.HelpContent` to drop a `?` button next to
	 * a label without manually composing Popover + IconButton + QuestionIcon.
	 *
	 * @see https://mantle.ngrok.com/components/field
	 *
	 * @example
	 * ```tsx
	 * <Field.LabelRow>
	 *   <Label htmlFor="api-key">API key</Label>
	 *   <Field.Help>
	 *     <Field.HelpTrigger />
	 *     <Field.HelpContent>Copy this from the dashboard.</Field.HelpContent>
	 *   </Field.Help>
	 * </Field.LabelRow>
	 * ```
	 */
	Help,
	/**
	 * Trigger for a `Field.Help` popover — a ghost `IconButton` with a default
	 * `QuestionIcon`. Pass `icon` to swap the glyph; pass any other
	 * `IconButton` prop (`label`, `size`, `appearance`, etc.) to customize.
	 *
	 * @see https://mantle.ngrok.com/components/field
	 *
	 * @example
	 * ```tsx
	 * <Field.Help>
	 *   <Field.HelpTrigger />
	 *   <Field.HelpContent>Copy this from the dashboard.</Field.HelpContent>
	 * </Field.Help>
	 * ```
	 */
	HelpTrigger,
	/**
	 * Body of a `Field.Help` popover. Forwards all `Popover.Content` props.
	 *
	 * @see https://mantle.ngrok.com/components/field
	 *
	 * @example
	 * ```tsx
	 * <Field.Help>
	 *   <Field.HelpTrigger />
	 *   <Field.HelpContent>Copy this from the dashboard.</Field.HelpContent>
	 * </Field.Help>
	 * ```
	 */
	HelpContent,
	/**
	 * Inline "(Optional)" suffix to mark a field as optional. Default content
	 * is `(Optional)`; pass children to translate or replace it. Place inside
	 * the `<Label>` so screen readers announce it as part of the accessible
	 * name.
	 *
	 * @see https://mantle.ngrok.com/components/field
	 *
	 * @example
	 * ```tsx
	 * <Field.Item>
	 *   <Label htmlFor="nickname" className="flex items-baseline gap-1">
	 *     Nickname <Field.Optional />
	 *   </Label>
	 *   <Input id="nickname" name="nickname" />
	 *   <Field.Description>Visible on your public profile.</Field.Description>
	 * </Field.Item>
	 * ```
	 */
	Optional,
	/**
	 * Helper / hint text rendered below the control in the muted body color.
	 *
	 * @see https://mantle.ngrok.com/components/field
	 *
	 * @example
	 * ```tsx
	 * <Field.Item>
	 *   <Label htmlFor="username">Username</Label>
	 *   <Input id="username" name="username" />
	 *   <Field.ErrorList>
	 *     <Field.Error>Username is required.</Field.Error>
	 *   </Field.ErrorList>
	 *   <Field.Description>Pick something memorable.</Field.Description>
	 * </Field.Item>
	 * ```
	 */
	Description,
	/**
	 * A single error message for a field. Renders an `<li>` in
	 * `text-danger-600` and must be nested inside a `Field.ErrorList`.
	 *
	 * @see https://mantle.ngrok.com/components/field
	 *
	 * @example
	 * ```tsx
	 * <Field.ErrorList>
	 *   <Field.Error>Username is required.</Field.Error>
	 * </Field.ErrorList>
	 * ```
	 */
	Error: FieldError,
	/**
	 * Wraps one or more `Field.Error` children in a semantic `<ul>`. Renders
	 * nothing when given no children, so it can be left mounted while a
	 * validator produces a (possibly empty) error array.
	 *
	 * @see https://mantle.ngrok.com/components/field
	 *
	 * @example
	 * ```tsx
	 * <Field.Item>
	 *   <Label htmlFor="username">Username</Label>
	 *   <Input id="username" name="username" />
	 *   <Field.ErrorList>
	 *     {field.state.meta.errors.map((error, index) => (
	 *       <Field.Error key={index}>{error?.message}</Field.Error>
	 *     ))}
	 *   </Field.ErrorList>
	 *   <Field.Description>Pick something memorable.</Field.Description>
	 * </Field.Item>
	 * ```
	 */
	ErrorList: FieldErrorList,
} as const;

export {
	//,
	Field,
};
