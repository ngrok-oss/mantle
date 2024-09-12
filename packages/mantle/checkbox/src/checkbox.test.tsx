import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Checkbox } from "./checkbox";

describe("Checkbox", () => {
	test('given validation={false}, renders a checkbox with aria-invalid="false" and not have data-validation', () => {
		render(<Checkbox validation={false} />);
		expect(screen.getByRole("checkbox")).toHaveAttribute("aria-invalid", "false");
		expect(screen.getByRole("checkbox")).not.toHaveAttribute("data-validation");
	});

	test('given validation="success", renders a checkbox with aria-invalid="false" and data-validation="success"', () => {
		render(<Checkbox validation="success" />);
		expect(screen.getByRole("checkbox")).toHaveAttribute("aria-invalid", "false");
		expect(screen.getByRole("checkbox")).toHaveAttribute("data-validation", "success");
	});

	test('given validation="warning", renders a checkbox with aria-invalid="false" and data-validation="warning"', () => {
		render(<Checkbox validation="warning" />);
		expect(screen.getByRole("checkbox")).toHaveAttribute("aria-invalid", "false");
		expect(screen.getByRole("checkbox")).toHaveAttribute("data-validation", "warning");
	});

	test('given validation="error", renders a checkbox with aria-invalid="true" and data-validation="error"', () => {
		render(<Checkbox validation="error" />);
		expect(screen.getByRole("checkbox")).toHaveAttribute("aria-invalid", "true");
		expect(screen.getByRole("checkbox")).toHaveAttribute("data-validation", "error");
	});

	test('given aria-invalid="true" and validation="success", renders a checkbox with aria-invalid="true" and data-validation="error"', () => {
		render(<Checkbox aria-invalid="true" validation="success" />);
		expect(screen.getByRole("checkbox")).toHaveAttribute("aria-invalid", "true");
		expect(screen.getByRole("checkbox")).toHaveAttribute("data-validation", "error");
	});

	test('given aria-invalid="true" and validation="warning", renders a checkbox with aria-invalid="true" and data-validation="error"', () => {
		render(<Checkbox aria-invalid="true" validation="warning" />);
		expect(screen.getByRole("checkbox")).toHaveAttribute("aria-invalid", "true");
		expect(screen.getByRole("checkbox")).toHaveAttribute("data-validation", "error");
	});

	test('given aria-invalid="true" and validation="error", renders a checkbox with aria-invalid="true" and data-validation="error"', () => {
		render(<Checkbox aria-invalid="true" validation="error" />);
		expect(screen.getByRole("checkbox")).toHaveAttribute("aria-invalid", "true");
		expect(screen.getByRole("checkbox")).toHaveAttribute("data-validation", "error");
	});
});
