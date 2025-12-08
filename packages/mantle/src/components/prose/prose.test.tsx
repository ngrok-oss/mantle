import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Prose } from "./prose.js";

describe("Prose", () => {
	it("renders successfully", () => {
		const { container } = render(<Prose>Hello World</Prose>);
		expect(container).toBeInTheDocument();
	});

	it("applies prose classes", () => {
		const { container } = render(<Prose>Content</Prose>);
		const proseElement = container.querySelector(".prose");
		expect(proseElement).toBeInTheDocument();
		expect(proseElement).toHaveClass("prose-mantle");
		expect(proseElement).toHaveClass("prose-a:no-underline");
	});

	it("forwards ref", () => {
		const ref = { current: null };
		render(<Prose ref={ref}>Content</Prose>);
		expect(ref.current).toBeInstanceOf(HTMLDivElement);
	});

	it("merges custom className with prose classes", () => {
		const { container } = render(
			<Prose className="custom-class">Content</Prose>,
		);
		const proseElement = container.querySelector(".prose");
		expect(proseElement).toHaveClass("prose");
		expect(proseElement).toHaveClass("prose-mantle");
		expect(proseElement).toHaveClass("custom-class");
	});

	it("passes through additional props", () => {
		const { container } = render(
			<Prose data-testid="prose-test" id="prose-id">
				Content
			</Prose>,
		);
		const proseElement = container.querySelector("#prose-id");
		expect(proseElement).toBeInTheDocument();
		expect(proseElement).toHaveAttribute("data-testid", "prose-test");
	});
});
