import { createContext, useContext, useId, type ComponentProps } from "react";
import { useIsomorphicLayoutEffect } from "../../hooks/use-isomorphic-layout-effect.js";
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
 */
type FieldItemContextValue = {
	/**
	 * Ordered IDs registered by rendered `Field.Description` instances.
	 */
	descriptionIds: string[];
	/**
	 * Ordered IDs registered by rendered `Field.Errors` / `Field.ErrorList` instances.
	 */
	errorIds: string[];
	/**
	 * Registers a description ID and returns its cleanup callback.
	 */
	registerDescriptionId: (id: string) => () => void;
	/**
	 * Registers an error ID and returns its cleanup callback.
	 */
	registerErrorId: (id: string) => () => void;
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
 * Resolves a message element ID and registers it with the nearest `Field.Item`
 * while the corresponding message component is rendered.
 */
const useFieldMessageId = (
	idProp: string | undefined,
	type: "description" | "error",
	enabled = true,
) => {
	const context = useContext(FieldItemContext);
	const generatedId = useId();
	const id = idProp ?? (context ? generatedId : undefined);
	const register =
		type === "description" ? context?.registerDescriptionId : context?.registerErrorId;

	useIsomorphicLayoutEffect(() => {
		if (!enabled || id == null || register == null) {
			return;
		}

		return register(id);
	}, [enabled, id, register]);

	return id;
};

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
	const errorIds = context?.errorIds ?? [];
	const descriptionIds = context?.descriptionIds ?? [];
	const describedByIds = parsedValidation.isInvalid
		? [...descriptionIds, ...errorIds]
		: descriptionIds;

	return {
		ariaProps: {
			"aria-describedby": mergeIdRefs(ariaDescribedBy, describedByIds),
			"aria-errormessage": parsedValidation.isInvalid
				? mergeIdRefs(ariaErrorMessage, errorIds)
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
	useFieldMessageId,
};
export type {
	//,
	FieldControlAriaProps,
	FieldItemContextValue,
};
