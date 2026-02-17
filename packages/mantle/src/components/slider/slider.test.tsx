import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Slider } from "./slider.js";

describe("Slider", () => {
	test("renders a single thumb when given a single number defaultValue", () => {
		render(<Slider defaultValue={50} />);
		expect(screen.getAllByRole("slider")).toHaveLength(1);
	});

	test("renders a single thumb when given a single-element array defaultValue", () => {
		render(<Slider defaultValue={[50]} />);
		expect(screen.getAllByRole("slider")).toHaveLength(1);
	});

	test("renders two thumbs for a range defaultValue", () => {
		render(<Slider defaultValue={[25, 75]} />);
		expect(screen.getAllByRole("slider")).toHaveLength(2);
	});

	test("renders multiple thumbs for a multi-value defaultValue", () => {
		render(<Slider defaultValue={[10, 20, 70]} />);
		expect(screen.getAllByRole("slider")).toHaveLength(3);
	});

	test("renders a single thumb when no defaultValue or value is provided", () => {
		render(<Slider />);
		expect(screen.getAllByRole("slider")).toHaveLength(1);
	});

	test("renders as disabled when disabled prop is true", () => {
		render(<Slider defaultValue={50} disabled />);
		const slider = screen.getByRole("slider");
		expect(slider).toHaveAttribute("data-disabled", "");
	});
});
