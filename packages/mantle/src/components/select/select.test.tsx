import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Field } from "../field/field.js";
import { Select } from "./select.js";

describe("Select", () => {
	test('given validation={false}, renders a Select.Trigger with aria-invalid="false" and not have data-validation', () => {
		render(
			<Select.Root validation={false}>
				<Select.Trigger />
			</Select.Root>,
		);
		expect(screen.getByRole("combobox")).toHaveAttribute("aria-invalid", "false");
		expect(screen.getByRole("combobox")).not.toHaveAttribute("data-validation");
	});

	test('given validation="success", renders a Select.Trigger with aria-invalid="false" and data-validation="success"', () => {
		render(
			<Select.Root validation="success">
				<Select.Trigger />
			</Select.Root>,
		);
		expect(screen.getByRole("combobox")).toHaveAttribute("aria-invalid", "false");
		expect(screen.getByRole("combobox")).toHaveAttribute("data-validation", "success");
	});

	test('given validation="warning", renders a Select.Trigger with aria-invalid="false" and data-validation="warning"', () => {
		render(
			<Select.Root validation="warning">
				<Select.Trigger />
			</Select.Root>,
		);
		expect(screen.getByRole("combobox")).toHaveAttribute("aria-invalid", "false");
		expect(screen.getByRole("combobox")).toHaveAttribute("data-validation", "warning");
	});

	test('given validation="error", renders a Select.Trigger with aria-invalid="true" and data-validation="error"', () => {
		render(
			<Select.Root validation="error">
				<Select.Trigger />
			</Select.Root>,
		);
		expect(screen.getByRole("combobox")).toHaveAttribute("aria-invalid", "true");
		expect(screen.getByRole("combobox")).toHaveAttribute("data-validation", "error");
	});

	test('given aria-invalid="true" and validation="success", renders a Select.Trigger with aria-invalid="true" and data-validation="error"', () => {
		render(
			<Select.Root aria-invalid="true" validation="success">
				<Select.Trigger />
			</Select.Root>,
		);
		expect(screen.getByRole("combobox")).toHaveAttribute("aria-invalid", "true");
		expect(screen.getByRole("combobox")).toHaveAttribute("data-validation", "error");
	});

	test('given aria-invalid="true" and validation="warning", renders a Select.Trigger with aria-invalid="true" and data-validation="error"', () => {
		render(
			<Select.Root aria-invalid="true" validation="warning">
				<Select.Trigger />
			</Select.Root>,
		);
		expect(screen.getByRole("combobox")).toHaveAttribute("aria-invalid", "true");
		expect(screen.getByRole("combobox")).toHaveAttribute("data-validation", "error");
	});

	test('given aria-invalid="true" and validation="error", renders a Select.Trigger with aria-invalid="true" and data-validation="error"', () => {
		render(
			<Select.Root aria-invalid="true" validation="error">
				<Select.Trigger />
			</Select.Root>,
		);
		expect(screen.getByRole("combobox")).toHaveAttribute("aria-invalid", "true");
		expect(screen.getByRole("combobox")).toHaveAttribute("data-validation", "error");
	});

	test("lets Field.Control validation override Field.Item validation", () => {
		render(
			<Field.Item validation="error">
				<Select.Root>
					<Field.Control validation={false}>
						<Select.Trigger />
					</Field.Control>
				</Select.Root>
			</Field.Item>,
		);

		expect(screen.getByRole("combobox")).toHaveAttribute("aria-invalid", "false");
		expect(screen.getByRole("combobox")).not.toHaveAttribute("data-validation");
	});

	test("lets Select.Trigger validation override Field.Control validation", () => {
		render(
			<Field.Item validation="success">
				<Select.Root>
					<Field.Control validation={false}>
						<Select.Trigger validation="warning" />
					</Field.Control>
				</Select.Root>
			</Field.Item>,
		);

		expect(screen.getByRole("combobox")).toHaveAttribute("aria-invalid", "false");
		expect(screen.getByRole("combobox")).toHaveAttribute("data-validation", "warning");
	});

	test("keeps explicit Select.Root validation above Field.Control validation", () => {
		render(
			<Field.Item validation="success">
				<Select.Root validation="error">
					<Field.Control validation={false}>
						<Select.Trigger validation="warning" />
					</Field.Control>
				</Select.Root>
			</Field.Item>,
		);

		expect(screen.getByRole("combobox")).toHaveAttribute("aria-invalid", "true");
		expect(screen.getByRole("combobox")).toHaveAttribute("data-validation", "error");
	});

	test("rendered Field errors force the trigger into error state even when Select.Root says otherwise", () => {
		// Field.Control wires aria-invalid="true" onto the trigger when the
		// Field has rendered errors, and an explicit invalid aria value always
		// resolves to "error" in parseValidation — so a "warning" claim from
		// Select.Root is overridden in this case. Consumers who need the
		// non-error Select.Root state to win must suppress the inferred error
		// via `validation` on Field.Item or Field.Control.
		render(
			<Field.Item>
				<Select.Root validation="warning">
					<Field.Control>
						<Select.Trigger />
					</Field.Control>
				</Select.Root>
				<Field.Errors messages={["Pick a value."]} />
			</Field.Item>,
		);

		expect(screen.getByRole("combobox")).toHaveAttribute("aria-invalid", "true");
		expect(screen.getByRole("combobox")).toHaveAttribute("data-validation", "error");
	});
});
