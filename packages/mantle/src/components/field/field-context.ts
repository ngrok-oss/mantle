import { createContext, type ComponentProps } from "react";
import { mergeIdRefs } from "./field-helpers.js";
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
 * the error list) so consumers don't manage ARIA wiring themselves. Children
 * call the matching `register*` callback on mount and `Field.Control` reads
 * `has*` to decide whether each IDREF is worth emitting.
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
	 * `true` while at least one `Field.Description` is mounted under this
	 * `Field.Item`. Gates whether `Field.Control` emits `aria-describedby` for
	 * the description slot.
	 */
	hasDescription: boolean;
	/**
	 * `true` while at least one non-empty `Field.Errors` / `Field.ErrorList` is
	 * mounted under this `Field.Item`. Gates `aria-errormessage` / `aria-invalid`
	 * inference on `Field.Control`.
	 */
	hasErrors: boolean;
	/**
	 * Marks a `Field.Description` as mounted. Returns its cleanup callback.
	 */
	registerDescription: () => () => void;
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
type ResolveFieldControlAriaPropsOptions = FieldControlAriaProps & {
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
 * focusable child from explicit props plus the surrounding `Field.Item` state.
 */
const resolveFieldControlAriaProps = ({
	"aria-describedby": ariaDescribedBy,
	"aria-errormessage": ariaErrorMessage,
	"aria-invalid": ariaInvalid,
	context,
	validation,
}: ResolveFieldControlAriaPropsOptions) => {
	const parsedValidation = parseValidation({
		"aria-invalid": ariaInvalid,
		defaultAriaInvalid: false,
		validation: validation ?? context?.validation,
	});
	const describedByIds: string[] = [];
	if (context?.hasDescription) {
		describedByIds.push(context.descriptionId);
	}
	if (parsedValidation.isInvalid && context?.hasErrors) {
		describedByIds.push(context.errorId);
	}

	return {
		ariaProps: {
			"aria-describedby": mergeIdRefs(ariaDescribedBy, describedByIds),
			"aria-errormessage":
				parsedValidation.isInvalid && context?.hasErrors
					? mergeIdRefs(ariaErrorMessage, [context.errorId])
					: ariaErrorMessage,
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
