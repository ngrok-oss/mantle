import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { SvgOnly } from "./svg-only.js";

describe("SvgOnly", () => {
	test("without any classNames, only applies the base class", () => {
		const { container } = render(<SvgOnly svg={<svg />} />);
		expect(container.firstChild).toHaveClass("shrink-0");
	});

	test("when className is only specified on svg, applies the base class and svg className", () => {
		const { container } = render(<SvgOnly svg={<svg className="size-12 sm:size-16" />} />);
		expect(container.firstChild).toHaveClass("shrink-0 size-12 sm:size-16");
	});

	test("when className is only specified on SvgOnly, applies the base class and SvgOnly className", () => {
		const { container } = render(<SvgOnly className="size-20 sm:size-28" svg={<svg />} />);
		expect(container.firstChild).toHaveClass("shrink-0 size-20 sm:size-28");
	});

	test("when conflicting classes are specified on both svg and SvgOnly, applies the base class and svg className", () => {
		const { container } = render(
			<SvgOnly className="size-20 sm:size-28" svg={<svg className="size-12 sm:size-16" />} />,
		);
		expect(container.firstChild).toHaveClass("shrink-0 size-12 sm:size-16");
	});

	test("given 'shrink' on the svg, only has 'shrink' on the output", () => {
		const { container } = render(<SvgOnly svg={<svg className="shrink" />} />);
		expect(container.firstChild).toHaveClass("shrink");
	});
});
