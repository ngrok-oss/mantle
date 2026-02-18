import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Slider } from "./slider.js";

describe("Slider", () => {
	describe("showTicks", () => {
		test("does not render ticks by default", () => {
			render(<Slider defaultValue={50} max={100} step={10} />);
			expect(screen.queryByRole("slider")).toBeInTheDocument();
			expect(document.querySelector("[data-slot='slider-ticks']")).not.toBeInTheDocument();
		});

		test("renders ticks when showTicks is true", () => {
			render(<Slider defaultValue={50} max={100} step={10} showTicks />);
			expect(document.querySelector("[data-slot='slider-ticks']")).toBeInTheDocument();
		});

		test("renders the correct number of ticks for step=10, min=0, max=100", () => {
			render(<Slider defaultValue={50} max={100} step={10} showTicks />);
			const ticks = document.querySelectorAll("[data-slot='slider-tick']");
			expect(ticks).toHaveLength(11);
		});

		test("renders the correct number of ticks for step=25, min=0, max=100", () => {
			render(<Slider defaultValue={50} max={100} step={25} showTicks />);
			const ticks = document.querySelectorAll("[data-slot='slider-tick']");
			expect(ticks).toHaveLength(5);
		});

		test("renders the correct number of ticks with custom min", () => {
			render(<Slider defaultValue={50} min={20} max={100} step={20} showTicks />);
			const ticks = document.querySelectorAll("[data-slot='slider-tick']");
			expect(ticks).toHaveLength(5);
		});

		test("does not render ticks when showTicks is false", () => {
			render(<Slider defaultValue={50} max={100} step={10} showTicks={false} />);
			expect(document.querySelector("[data-slot='slider-ticks']")).not.toBeInTheDocument();
		});

		test("ticks container has aria-hidden", () => {
			render(<Slider defaultValue={50} max={100} step={10} showTicks />);
			expect(document.querySelector("[data-slot='slider-ticks']")).toHaveAttribute(
				"aria-hidden",
				"true",
			);
		});
	});

	describe("color", () => {
		test("applies the default accent color to the range", () => {
			render(<Slider defaultValue={50} max={100} step={1} />);
			const range = document.querySelector("[data-slot='slider-range']");
			expect(range).toHaveClass("bg-accent-500");
		});

		test("applies a custom color to the range", () => {
			render(<Slider defaultValue={50} max={100} step={1} color="bg-blue-500" />);
			const range = document.querySelector("[data-slot='slider-range']");
			expect(range).toHaveClass("bg-blue-500");
		});
	});
});
