import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { PasswordInput } from "./password-input.js";

describe("Checkbox", () => {
	test('given validation={false}, renders an input with aria-invalid="false" and not have data-validation', () => {
		render(<PasswordInput placeholder="test" validation={false} />);
		expect(screen.getByPlaceholderText("test")).toHaveAttribute("aria-invalid", "false");
		expect(screen.getByPlaceholderText("test")).not.toHaveAttribute("data-validation");
	});

	test('given validation="success", renders an input with aria-invalid="false" and data-validation="success"', () => {
		render(<PasswordInput placeholder="test" validation="success" />);
		expect(screen.getByPlaceholderText("test")).toHaveAttribute("aria-invalid", "false");
		expect(screen.getByPlaceholderText("test")).toHaveAttribute("data-validation", "success");
	});

	test('given validation="warning", renders an input with aria-invalid="false" and data-validation="warning"', () => {
		render(<PasswordInput placeholder="test" validation="warning" />);
		expect(screen.getByPlaceholderText("test")).toHaveAttribute("aria-invalid", "false");
		expect(screen.getByPlaceholderText("test")).toHaveAttribute("data-validation", "warning");
	});

	test('given validation="error", renders an input with aria-invalid="true" and data-validation="error"', () => {
		render(<PasswordInput placeholder="test" validation="error" />);
		expect(screen.getByPlaceholderText("test")).toHaveAttribute("aria-invalid", "true");
		expect(screen.getByPlaceholderText("test")).toHaveAttribute("data-validation", "error");
	});

	test('given aria-invalid="true" and validation="success", renders an input with aria-invalid="true" and data-validation="error"', () => {
		render(<PasswordInput placeholder="test" aria-invalid="true" validation="success" />);
		expect(screen.getByPlaceholderText("test")).toHaveAttribute("aria-invalid", "true");
		expect(screen.getByPlaceholderText("test")).toHaveAttribute("data-validation", "error");
	});

	test('given aria-invalid="true" and validation="warning", renders an input with aria-invalid="true" and data-validation="error"', () => {
		render(<PasswordInput placeholder="test" aria-invalid="true" validation="warning" />);
		expect(screen.getByPlaceholderText("test")).toHaveAttribute("aria-invalid", "true");
		expect(screen.getByPlaceholderText("test")).toHaveAttribute("data-validation", "error");
	});

	test('given aria-invalid="true" and validation="error", renders an input with aria-invalid="true" and data-validation="error"', () => {
		render(<PasswordInput placeholder="test" aria-invalid="true" validation="error" />);
		expect(screen.getByPlaceholderText("test")).toHaveAttribute("aria-invalid", "true");
		expect(screen.getByPlaceholderText("test")).toHaveAttribute("data-validation", "error");
	});
});
