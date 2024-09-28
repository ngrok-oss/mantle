import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Select, SelectTrigger } from "./select.js";

describe("Select", () => {
	test('given validation={false}, renders a SelectTrigger with aria-invalid="false" and not have data-validation', () => {
		render(
			<Select validation={false}>
				<SelectTrigger />
			</Select>,
		);
		expect(screen.getByRole("combobox")).toHaveAttribute("aria-invalid", "false");
		expect(screen.getByRole("combobox")).not.toHaveAttribute("data-validation");
	});

	test('given validation="success", renders a SelectTrigger with aria-invalid="false" and data-validation="success"', () => {
		render(
			<Select validation="success">
				<SelectTrigger />
			</Select>,
		);
		expect(screen.getByRole("combobox")).toHaveAttribute("aria-invalid", "false");
		expect(screen.getByRole("combobox")).toHaveAttribute("data-validation", "success");
	});

	test('given validation="warning", renders a SelectTrigger with aria-invalid="false" and data-validation="warning"', () => {
		render(
			<Select validation="warning">
				<SelectTrigger />
			</Select>,
		);
		expect(screen.getByRole("combobox")).toHaveAttribute("aria-invalid", "false");
		expect(screen.getByRole("combobox")).toHaveAttribute("data-validation", "warning");
	});

	test('given validation="error", renders a SelectTrigger with aria-invalid="true" and data-validation="error"', () => {
		render(
			<Select validation="error">
				<SelectTrigger />
			</Select>,
		);
		expect(screen.getByRole("combobox")).toHaveAttribute("aria-invalid", "true");
		expect(screen.getByRole("combobox")).toHaveAttribute("data-validation", "error");
	});

	test('given aria-invalid="true" and validation="success", renders a SelectTrigger with aria-invalid="true" and data-validation="error"', () => {
		render(
			<Select aria-invalid="true" validation="success">
				<SelectTrigger />
			</Select>,
		);
		expect(screen.getByRole("combobox")).toHaveAttribute("aria-invalid", "true");
		expect(screen.getByRole("combobox")).toHaveAttribute("data-validation", "error");
	});

	test('given aria-invalid="true" and validation="warning", renders a SelectTrigger with aria-invalid="true" and data-validation="error"', () => {
		render(
			<Select aria-invalid="true" validation="warning">
				<SelectTrigger />
			</Select>,
		);
		expect(screen.getByRole("combobox")).toHaveAttribute("aria-invalid", "true");
		expect(screen.getByRole("combobox")).toHaveAttribute("data-validation", "error");
	});

	test('given aria-invalid="true" and validation="error", renders a SelectTrigger with aria-invalid="true" and data-validation="error"', () => {
		render(
			<Select aria-invalid="true" validation="error">
				<SelectTrigger />
			</Select>,
		);
		expect(screen.getByRole("combobox")).toHaveAttribute("aria-invalid", "true");
		expect(screen.getByRole("combobox")).toHaveAttribute("data-validation", "error");
	});
});
