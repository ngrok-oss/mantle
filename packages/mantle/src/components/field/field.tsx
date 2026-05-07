import { QuestionIcon } from "@phosphor-icons/react/Question";
import type { ComponentProps, ReactNode } from "react";
import type { WithAsChild } from "../../types/as-child.js";
import { cx } from "../../utils/cx/cx.js";
import { IconButton, type IconButtonProps } from "../button/icon-button.js";
import { Popover } from "../popover/index.js";
import { Slot } from "../slot/index.js";

/**
 * Renders a semantic `<fieldset>` for grouping related fields together.
 * Resets the default browser fieldset chrome (border, padding, `min-width`
 * quirk) so it composes cleanly with `Field.Legend` and `Field.Group`.
 *
 * @see https://mantle.ngrok.com/components/field
 *
 * @example
 * ```tsx
 * <Field.Set>
 *   <Field.Legend>Address</Field.Legend>
 *   <Field.Group>
 *     <Field.Root>
 *       <Label htmlFor="street">Street</Label>
 *       <Input id="street" name="street" />
 *     </Field.Root>
 *     <Field.Root>
 *       <Label htmlFor="city">City</Label>
 *       <Input id="city" name="city" />
 *     </Field.Root>
 *   </Field.Group>
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
 * match the `Label` component so a fieldset reads like a section header.
 *
 * @see https://mantle.ngrok.com/components/field
 *
 * @example
 * ```tsx
 * <Field.Set>
 *   <Field.Legend>Address</Field.Legend>
 *   <Field.Group>
 *     <Field.Root>
 *       <Label htmlFor="street">Street</Label>
 *       <Input id="street" name="street" />
 *     </Field.Root>
 *   </Field.Group>
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
 * <Field.Root>
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
 * </Field.Root>
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
 * <Field.Root>
 *   <Label htmlFor="email" className="flex items-baseline gap-1">
 *     Email <Field.Optional />
 *   </Label>
 *   <Input id="email" name="email" type="email" />
 * </Field.Root>
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
 * Layout container that stacks multiple `Field.Root`s vertically with `gap-4`
 * between them. Use inside a `Field.Set` (with `Field.Legend`) for semantic
 * grouping, or standalone when you only need consistent spacing between
 * fields without a legend.
 *
 * @see https://mantle.ngrok.com/components/field
 *
 * @example
 * ```tsx
 * <Field.Group>
 *   <Field.Root>
 *     <Label htmlFor="email">Email</Label>
 *     <Input id="email" name="email" type="email" />
 *   </Field.Root>
 *   <Field.Root>
 *     <Label htmlFor="password">Password</Label>
 *     <Input id="password" name="password" type="password" />
 *   </Field.Root>
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
 * The root container for a single form field. Stacks a `Label`, a control
 * (`Input`, `Select`, `Checkbox`, etc.), and any `Field.Description` /
 * `Field.Error` / `Field.ErrorList` siblings vertically with a consistent
 * `gap-1.5` so help and error messaging sit tightly under the input.
 *
 * Renders as a `<div role="group">` so screen readers announce the parts as
 * a related set. When you need explicit ARIA wiring between the control and
 * its description / error, set `aria-describedby` and `aria-errormessage` on
 * the control yourself — `Field.Root` is layout-only, by design, so it stays
 * compatible with the existing `<Label>` (no auto-wired IDs).
 *
 * @see https://mantle.ngrok.com/components/field
 *
 * @example
 * ```tsx
 * <Field.Root>
 *   <Label htmlFor="username">Username</Label>
 *   <Input id="username" name="username" />
 *   <Field.Error>Username is required.</Field.Error>
 *   <Field.Description>Pick something memorable.</Field.Description>
 * </Field.Root>
 * ```
 */
const Root = ({
	asChild,
	className,
	role = "group",
	...props
}: ComponentProps<"div"> & WithAsChild) => {
	const Comp = asChild ? Slot : "div";

	return (
		<Comp
			data-slot="field"
			role={role}
			className={cx("flex w-full flex-col gap-1.5", className)}
			{...props}
		/>
	);
};
Root.displayName = "Field";

/**
 * Helper / hint text. Renders a `<p>` in the muted body color so it reads
 * as secondary to the bolder content above it. Works in two positions:
 *
 * 1. **Inside `Field.Root`**, below the control — clarifies expected format
 *    or constraints for that single field.
 * 2. **Inside `Field.Set`, between `Field.Legend` and `Field.Group`** — describes
 *    the entire fieldset (e.g. "All transactions are secure and encrypted.").
 *
 * **Auto-tighten.** Two sibling selectors collapse the parent's gap when
 * messages should read as a single block:
 * - After a `Field.Error` (including the last one rendered by
 *   `Field.ErrorList`) inside `Field.Root` → collapses `gap-1.5` to 0.
 * - After a `Field.Legend` inside `Field.Set` → collapses `gap-4` down to a
 *   `gap-1.5` visual feel so the description hugs the legend.
 *
 * Pass any margin utility (`mt-1`, `mt-0`, etc.) to override — the rules'
 * specificity is flattened to `(0,1,0)` so a single user class wins.
 *
 * @see https://mantle.ngrok.com/components/field
 *
 * @example
 * ```tsx
 * // Field-level helper (inside Field.Root)
 * <Field.Root>
 *   <Label htmlFor="username">Username</Label>
 *   <Input id="username" name="username" />
 *   <Field.Error>Username is required.</Field.Error>
 *   <Field.Description>Pick something memorable.</Field.Description>
 * </Field.Root>
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
				// When this description sits directly after a Field.Error sibling
				// (e.g. a single Field.Error or the last item rendered by
				// Field.ErrorList), collapse the parent's gap-1.5 with a matching
				// negative top margin so error + helper read as one tight block.
				// Wrapping the matched selector in :where() flattens its specificity
				// to (0,1,0) so a user-supplied margin utility (mt-2, mt-0, etc.)
				// passed on Field.Description still overrides cleanly.
				"[:where([data-slot=field-error]+&)]:-mt-1.5",
				className,
			)}
			{...props}
		/>
	);
};
Description.displayName = "FieldDescription";

/**
 * A single error message for a field. Renders a `<p>` in `text-danger-600`
 * so it stands out from a sibling `Field.Description`. Conditionally render
 * this when validation fails, or use `Field.ErrorList` to render multiple
 * messages at once (one `Field.Error` per entry).
 *
 * **Auto-tighten after errors.** When a `Field.Error` is rendered immediately
 * after another `Field.Error` sibling, it automatically collapses the parent's
 * `gap-1.5` so consecutive error messages read as a single block. The rule's
 * specificity is flattened to `(0,1,0)` — pass any margin utility on
 * `Field.Error` to override.
 *
 * @see https://mantle.ngrok.com/components/field
 *
 * @example
 * ```tsx
 * <Field.Root>
 *   <Label htmlFor="username">Username</Label>
 *   <Input id="username" name="username" />
 *   <Field.Error>Username is required.</Field.Error>
 *   <Field.Description>Pick something memorable.</Field.Description>
 * </Field.Root>
 * ```
 */
const FieldError = ({ asChild, className, ...props }: ComponentProps<"p"> & WithAsChild) => {
	const Comp = asChild ? Slot : "p";

	return (
		<Comp
			data-slot="field-error"
			className={cx(
				"text-danger-600 text-sm leading-4",
				// When this error sits directly after another Field.Error sibling
				// (a manually-stacked pair OR consecutive items rendered by
				// Field.ErrorList), collapse the parent's gap-1.5 so the messages
				// read as a single block. Wrapped in :where() so the rule's
				// specificity stays at (0,1,0) — a user-supplied margin utility on
				// Field.Error still overrides cleanly.
				"[:where([data-slot=field-error]+&)]:-mt-1.5",
				className,
			)}
			{...props}
		/>
	);
};
FieldError.displayName = "FieldError";

type FieldErrorListProps = {
	/**
	 * The list of error messages to render. Falsy entries (`null`, `undefined`,
	 * `false`, empty string) are filtered out, so the component renders nothing
	 * when the resulting list is empty — safe to leave mounted whether or not
	 * the field currently has errors.
	 *
	 * Pairs naturally with TanStack Form's `field.state.meta.errors` after
	 * mapping the validator's error shape down to a message:
	 *
	 * ```tsx
	 * <Field.ErrorList errors={field.state.meta.errors.map((error) => error?.message)} />
	 * ```
	 */
	errors?: readonly ReactNode[];
};

/**
 * Renders a list of validation errors, one `Field.Error` per truthy entry.
 * Returns `null` when the resulting list is empty so it can be left mounted
 * unconditionally.
 *
 * Most fields show a single error at a time — reach for this when a validator
 * can produce several messages (e.g. minLength + pattern + custom rule) and
 * all of them should be visible to the user simultaneously. For a single
 * static error, use `<Field.Error>` directly.
 *
 * @see https://mantle.ngrok.com/components/field
 *
 * @example
 * ```tsx
 * <Field.Root>
 *   <Label htmlFor="username">Username</Label>
 *   <Input id="username" name="username" />
 *   <Field.ErrorList errors={field.state.meta.errors.map((error) => error?.message)} />
 *   <Field.Description>Pick something memorable.</Field.Description>
 * </Field.Root>
 * ```
 */
const FieldErrorList = ({ errors }: FieldErrorListProps) => {
	const filtered = (errors ?? []).filter(
		(entry) => entry != null && entry !== "" && entry !== false,
	);

	if (filtered.length === 0) {
		return null;
	}

	return (
		<>
			{filtered.map((error, index) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: errors are ReactNode and may not be uniquely keyable
				<FieldError key={index}>{error}</FieldError>
			))}
		</>
	);
};
FieldErrorList.displayName = "FieldErrorList";

/**
 * Compound component for building a semantic, accessible form field. Pair
 * with the existing mantle `<Label>` for individual fields, or `Field.Legend`
 * inside a `Field.Set` to caption a group of related fields.
 *
 * @see https://mantle.ngrok.com/components/field
 *
 * @example
 * Composition:
 * ```
 * Field.Set
 * ├── Field.Legend
 * └── Field.Group
 *     └── Field.Root
 *         ├── Field.LabelRow
 *         │   ├── <Label>
 *         │   │   └── Field.Optional
 *         │   └── Field.Help
 *         │       ├── Field.HelpTrigger
 *         │       └── Field.HelpContent
 *         ├── (control)
 *         ├── Field.Error
 *         ├── Field.ErrorList
 *         └── Field.Description
 * ```
 *
 * @example
 * ```tsx
 * <Field.Set>
 *   <Field.Legend>Account</Field.Legend>
 *   <Field.Group>
 *     <Field.Root>
 *       <Label htmlFor="email">Email</Label>
 *       <Input id="email" name="email" type="email" />
 *       <Field.Error>Email is required.</Field.Error>
 *       <Field.Description>We'll never share your email.</Field.Description>
 *     </Field.Root>
 *     <Field.Root>
 *       <Label htmlFor="nickname" className="flex items-baseline gap-1">
 *         Nickname <Field.Optional />
 *       </Label>
 *       <Input id="nickname" name="nickname" />
 *       <Field.Description>Visible on your public profile.</Field.Description>
 *     </Field.Root>
 *   </Field.Group>
 * </Field.Set>
 * ```
 */
const Field = {
	/**
	 * The root container for a single form field — `Label` + control + helper
	 * + error stacked vertically with `gap-1.5`. Renders `<div role="group">`.
	 *
	 * @see https://mantle.ngrok.com/components/field
	 *
	 * @example
	 * ```tsx
	 * <Field.Set>
	 *   <Field.Legend>Account</Field.Legend>
	 *   <Field.Group>
	 *     <Field.Root>
	 *       <Label htmlFor="email">Email</Label>
	 *       <Input id="email" name="email" />
	 *       <Field.Error>Email is required.</Field.Error>
	 *       <Field.Description>We'll never share your email.</Field.Description>
	 *     </Field.Root>
	 *   </Field.Group>
	 * </Field.Set>
	 * ```
	 */
	Root,
	/**
	 * Layout container that stacks multiple `Field.Root`s vertically with
	 * `gap-4`. Use inside `Field.Set` for semantic grouping, or standalone
	 * when you only need spacing.
	 *
	 * @see https://mantle.ngrok.com/components/field
	 *
	 * @example
	 * ```tsx
	 * <Field.Set>
	 *   <Field.Legend>Account</Field.Legend>
	 *   <Field.Group>
	 *     <Field.Root>
	 *       <Label htmlFor="email">Email</Label>
	 *       <Input id="email" name="email" />
	 *     </Field.Root>
	 *     <Field.Root>
	 *       <Label htmlFor="password">Password</Label>
	 *       <Input id="password" name="password" type="password" />
	 *     </Field.Root>
	 *   </Field.Group>
	 * </Field.Set>
	 * ```
	 */
	Group,
	/**
	 * Renders a semantic `<fieldset>` with default browser styling reset.
	 * Compose with `Field.Legend` and `Field.Group` for grouped fields.
	 *
	 * @see https://mantle.ngrok.com/components/field
	 *
	 * @example
	 * ```tsx
	 * <Field.Set>
	 *   <Field.Legend>Account</Field.Legend>
	 *   <Field.Group>
	 *     <Field.Root>
	 *       <Label htmlFor="email">Email</Label>
	 *       <Input id="email" name="email" />
	 *     </Field.Root>
	 *   </Field.Group>
	 * </Field.Set>
	 * ```
	 */
	Set: FieldSet,
	/**
	 * Caption for a `Field.Set`. Renders a `<legend>` with mantle label
	 * typography.
	 *
	 * @see https://mantle.ngrok.com/components/field
	 *
	 * @example
	 * ```tsx
	 * <Field.Set>
	 *   <Field.Legend>Account</Field.Legend>
	 *   <Field.Group>
	 *     <Field.Root>
	 *       <Label htmlFor="email">Email</Label>
	 *       <Input id="email" name="email" />
	 *     </Field.Root>
	 *   </Field.Group>
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
	 * <Field.Root>
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
	 * </Field.Root>
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
	 * <Field.Root>
	 *   <Label htmlFor="nickname" className="flex items-baseline gap-1">
	 *     Nickname <Field.Optional />
	 *   </Label>
	 *   <Input id="nickname" name="nickname" />
	 *   <Field.Description>Visible on your public profile.</Field.Description>
	 * </Field.Root>
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
	 * <Field.Root>
	 *   <Label htmlFor="username">Username</Label>
	 *   <Input id="username" name="username" />
	 *   <Field.Error>Username is required.</Field.Error>
	 *   <Field.Description>Pick something memorable.</Field.Description>
	 * </Field.Root>
	 * ```
	 */
	Description,
	/**
	 * A single error message for a field, in `text-danger-600`. Use
	 * `Field.ErrorList` to render multiple errors at once.
	 *
	 * @see https://mantle.ngrok.com/components/field
	 *
	 * @example
	 * ```tsx
	 * <Field.Root>
	 *   <Label htmlFor="username">Username</Label>
	 *   <Input id="username" name="username" />
	 *   <Field.Error>Username is required.</Field.Error>
	 *   <Field.Description>Pick something memorable.</Field.Description>
	 * </Field.Root>
	 * ```
	 */
	Error: FieldError,
	/**
	 * Renders a list of validation errors, one `Field.Error` per truthy entry.
	 * Returns `null` when the list is empty.
	 *
	 * @see https://mantle.ngrok.com/components/field
	 *
	 * @example
	 * ```tsx
	 * <Field.Root>
	 *   <Label htmlFor="username">Username</Label>
	 *   <Input id="username" name="username" />
	 *   <Field.ErrorList errors={field.state.meta.errors.map((error) => error?.message)} />
	 *   <Field.Description>Pick something memorable.</Field.Description>
	 * </Field.Root>
	 * ```
	 */
	ErrorList: FieldErrorList,
} as const;

export {
	//,
	Field,
};
