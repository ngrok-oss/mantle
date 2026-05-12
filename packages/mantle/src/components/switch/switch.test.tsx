import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Field } from "../field/field.js";
import { Switch } from "./switch.js";

describe("Switch", () => {
	test('given validation={false}, renders a switch with aria-invalid="false" and no data-validation', () => {
		render(<Switch validation={false} />);
		expect(screen.getByRole("switch")).toHaveAttribute("aria-invalid", "false");
		expect(screen.getByRole("switch")).not.toHaveAttribute("data-validation");
	});

	test('given validation="success", renders a switch with aria-invalid="false" and data-validation="success"', () => {
		render(<Switch validation="success" />);
		expect(screen.getByRole("switch")).toHaveAttribute("aria-invalid", "false");
		expect(screen.getByRole("switch")).toHaveAttribute("data-validation", "success");
	});

	test('given validation="warning", renders a switch with aria-invalid="false" and data-validation="warning"', () => {
		render(<Switch validation="warning" />);
		expect(screen.getByRole("switch")).toHaveAttribute("aria-invalid", "false");
		expect(screen.getByRole("switch")).toHaveAttribute("data-validation", "warning");
	});

	test('given validation="error", renders a switch with aria-invalid="true" and data-validation="error"', () => {
		render(<Switch validation="error" />);
		expect(screen.getByRole("switch")).toHaveAttribute("aria-invalid", "true");
		expect(screen.getByRole("switch")).toHaveAttribute("data-validation", "error");
	});

	test('given aria-invalid="true" and validation="success", renders a switch with aria-invalid="true" and data-validation="error"', () => {
		render(<Switch aria-invalid="true" validation="success" />);
		expect(screen.getByRole("switch")).toHaveAttribute("aria-invalid", "true");
		expect(screen.getByRole("switch")).toHaveAttribute("data-validation", "error");
	});

	test("inherits validation from Field.Item without a direct validation prop", () => {
		render(
			<Field.Item validation="warning">
				<Switch />
			</Field.Item>,
		);

		expect(screen.getByRole("switch")).toHaveAttribute("aria-invalid", "false");
		expect(screen.getByRole("switch")).toHaveAttribute("data-validation", "warning");
	});

	test("inherits Field.Control validation over Field.Item validation", () => {
		render(
			<Field.Item validation="success">
				<Field.Control validation="error">
					<Switch />
				</Field.Control>
			</Field.Item>,
		);

		expect(screen.getByRole("switch")).toHaveAttribute("aria-invalid", "true");
		expect(screen.getByRole("switch")).toHaveAttribute("data-validation", "error");
	});
});
