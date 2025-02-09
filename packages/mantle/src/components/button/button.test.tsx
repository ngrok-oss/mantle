import { render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { act, useState } from "react";
import { Link, RouterProvider, createMemoryRouter } from "react-router-dom";
import { describe, expect, test } from "vitest";
import { Button } from "./button.js";

describe("Button", () => {
	test("renders a button, without `asChild`", () => {
		render(<Button type="button">click me</Button>);
		expect(screen.getByRole("button")).toHaveTextContent("click me");
	});

	test("renders a button, with `asChild`", () => {
		render(
			<Button asChild type="button">
				{/* biome-ignore lint/a11y/useButtonType: test */}
				<button>click me</button>
			</Button>,
		);
		expect(screen.getByRole("button")).toHaveTextContent("click me");
	});

	test("renders an anchor with `asChild`, doesn't pass `type` to anchor", () => {
		render(
			<Button type="button" asChild>
				<a href="#yolo">click me</a>
			</Button>,
		);
		expect(screen.getByRole("link")).toHaveTextContent("click me");

		// Ensure the `type` attribute is not passed to the anchor element
		expect(screen.getByRole("link")).not.toHaveAttribute("type");
	});

	test("renders a anchor (<Link />), with `asChild`", async () => {
		const Subject = () => (
			<Button asChild type="button">
				<Link to="/some/path">click me</Link>
			</Button>
		);

		const router = createMemoryRouter(
			[
				{
					path: "/",
					element: <Subject />,
				},
			],
			{
				initialEntries: ["/"],
			},
		);

		render(<RouterProvider router={router} />);
		await waitFor(() => screen.getByRole("link"));
		expect(screen.getByRole("link")).toHaveTextContent("click me");
	});

	test("when isLoading={false}, allows click and submit events to propagate", async () => {
		const Subject = () => {
			const [submitState, setSubmitState] = useState<"submitting" | "idle">(
				"idle",
			);
			const [clickState, setClickState] = useState<"clicked" | "idle">("idle");

			return (
				<div>
					<form
						onSubmit={(event) => {
							event.preventDefault();
							setSubmitState("submitting");
						}}
					>
						<Button
							isLoading={false}
							type="submit"
							onClick={() => {
								setClickState("clicked");
							}}
						>
							submit
						</Button>
					</form>
					<span data-testid="submit-state">{submitState}</span>
					<span data-testid="click-state">{clickState}</span>
				</div>
			);
		};

		render(<Subject />);
		await act(() => userEvent.click(screen.getByRole("button")));
		expect(screen.getByTestId("submit-state")).toHaveTextContent("submitting");
		expect(screen.getByTestId("click-state")).toHaveTextContent("clicked");
	});

	test(`when isLoading={true}, doesn't allow click or submit events to propagate`, async () => {
		const Subject = () => {
			const [submitState, setSubmitState] = useState<"submitting" | "idle">(
				"idle",
			);
			const [clickState, setClickState] = useState<"clicked" | "idle">("idle");

			return (
				<div>
					<form
						onSubmit={(event) => {
							event.preventDefault();
							setSubmitState("submitting");
						}}
					>
						<Button
							isLoading
							type="submit"
							onClick={() => {
								setClickState("clicked");
							}}
						>
							submit
						</Button>
					</form>
					<span data-testid="submit-state">{submitState}</span>
					<span data-testid="click-state">{clickState}</span>
				</div>
			);
		};

		render(<Subject />);
		await act(() => userEvent.click(screen.getByRole("button")));
		expect(screen.getByRole("button")).toHaveAttribute("data-loading", "true");
		expect(screen.getByTestId("submit-state")).toHaveTextContent("idle");
		expect(screen.getByTestId("click-state")).toHaveTextContent("idle");
	});
});
