import { createContext, type ComponentProps } from "react";
import { parseValidation, type ValidationProp, type ValidationState } from "./validation.js";

/**
 * ARIA props that `Field.Control` applies to the field's focusable control.
 */
type FieldControlAriaProps = {
	/**
	 * IDREFs for helper or error text that describe the focusable control.
	 */
	"aria-describedby"?: string;
	/**
	 * IDREFs for error text that represent the control's current error state.
	 */
	"aria-errormessage"?: string;
	/**
	 * The resolved ARIA invalid state for the focusable control.
	 */
	"aria-invalid"?: ComponentProps<"input">["aria-invalid"];
};

/**
 * Context value owned by `Field.Item` and consumed by message/control parts.
 *
 * `Field.Item` owns the two stable slot IDs (one for the description, one for
 * the error list) so consumers don't manage ARIA wiring themselves. The IDs
 * are emitted unconditionally; ARIA treats unresolved IDREFs as no-ops, so
 * dangling IDs (when no description or error list is rendered) are harmless.
 */
type FieldItemContextValue = {
	/**
	 * Stable ID for the rendered `Field.Description` slot, generated once per
	 * `Field.Item`.
	 */
	descriptionId: string;
	/**
	 * Stable ID for the rendered `Field.Errors` / `Field.ErrorList` slot,
	 * generated once per `Field.Item`.
	 */
	errorId: string;
	/**
	 * `true` while a non-empty `Field.Errors` / `Field.ErrorList` is mounted
	 * under this `Field.Item`. Used by `Field.Item` to infer an `"error"`
	 * validation state when no explicit `validation` prop is supplied.
	 */
	hasErrors: boolean;
	/**
	 * Marks a non-empty `Field.Errors` / `Field.ErrorList` as mounted. Returns
	 * its cleanup callback.
	 */
	registerError: () => () => void;
	/**
	 * Validation state inferred or supplied by the surrounding `Field.Item`.
	 */
	validation?: ValidationState;
};

/**
 * Options for resolving the ARIA props that `Field.Control` applies.
 */
type ResolveFieldControlAriaPropsOptions = {
	/**
	 * Explicit `aria-invalid` value lifted off the control's child element.
	 * A non-false value forces the resolved validation state to `"error"`.
	 */
	"aria-invalid"?: ComponentProps<"input">["aria-invalid"];
	/**
	 * The nearest `Field.Item` context, when the control is rendered inside one.
	 */
	context: FieldItemContextValue | null;
	/**
	 * Explicit validation override supplied to `Field.Control`.
	 */
	validation?: ValidationProp;
};

/**
 * Context shared by the parts of a single `Field.Item`.
 */
const FieldItemContext = createContext<FieldItemContextValue | null>(null);

/**
 * Resolves the ARIA and validation props that `Field.Control` applies to its
 * focusable child. Field owns the `aria-describedby` / `aria-errormessage`
 * contract — the resolver emits the surrounding `Field.Item`'s description and
 * error slot IDs directly, without merging anything from the control element.
 */
const resolveFieldControlAriaProps = ({
	"aria-invalid": ariaInvalid,
	context,
	validation,
}: ResolveFieldControlAriaPropsOptions) => {
	const parsedValidation = parseValidation({
		"aria-invalid": ariaInvalid,
		defaultAriaInvalid: false,
		validation: validation ?? context?.validation,
	});
	// Always emit both slot IDs in aria-describedby when inside a Field.Item.
	// Per WAI-ARIA, unresolved IDREFs are ignored by assistive tech, so the
	// dangling ID is harmless when the corresponding slot isn't rendered and
	// lets us skip mount-time bookkeeping. aria-errormessage is additionally
	// spec-gated on aria-invalid="true", so it stays inert until the field is
	// actually invalid.
	const ariaDescribedBy = context ? `${context.descriptionId} ${context.errorId}` : undefined;
	const ariaErrorMessage = parsedValidation.isInvalid && context ? context.errorId : undefined;

	return {
		ariaProps: {
			"aria-describedby": ariaDescribedBy,
			"aria-errormessage": ariaErrorMessage,
			"aria-invalid": parsedValidation.ariaInvalid,
		} satisfies FieldControlAriaProps,
		validation: parsedValidation.validation,
	};
};

export {
	//,
	FieldItemContext,
	resolveFieldControlAriaProps,
};
export type {
	//,
	FieldControlAriaProps,
	FieldItemContextValue,
};
