"use client";

import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import axe from "axe-core";
import { describe, expect, test } from "vitest";
import { Checkbox } from "../checkbox/checkbox.js";
import { Field } from "../field/field.js";
import { Choice } from "./choice.js";

describe("Choice (browser)", () => {
	test("clicking Choice.Label toggles the checkbox (standalone)", async () => {
		const user = userEvent.setup();
		render(
			<Choice.Root name="terms">
				<Choice.Indicator>
					<Checkbox />
				</Choice.Indicator>
				<Choice.Content>
					<Choice.Label>I agree to the terms</Choice.Label>
					<Choice.Description>You can change this later.</Choice.Description>
				</Choice.Content>
			</Choice.Root>,
		);

		const checkbox = screen.getByRole("checkbox");
		expect(checkbox).not.toBeChecked();
		await user.click(screen.getByText("I agree to the terms"));
		expect(checkbox).toBeChecked();
	});

	test("clicking Choice.Label toggles the checkbox inside a Field", async () => {
		const user = userEvent.setup();
		render(
			<Field.Item name="notify">
				<Field.Label>Notifications</Field.Label>
				<Field.Control>
					<Choice.Root>
						<Choice.Indicator>
							<Checkbox />
						</Choice.Indicator>
						<Choice.Content>
							<Choice.Label>Email</Choice.Label>
							<Choice.Description>Sent to your primary address.</Choice.Description>
						</Choice.Content>
					</Choice.Root>
				</Field.Control>
			</Field.Item>,
		);

		const checkbox = screen.getByRole("checkbox");
		expect(checkbox).not.toBeChecked();
		// The title slot inside a Field is a real label for the field's control.
		await user.click(screen.getByText("Email"));
		expect(checkbox).toBeChecked();
	});

	test("has no axe accessibility violations", async () => {
		const { container } = render(
			<Choice.Root name="terms">
				<Choice.Indicator>
					<Checkbox />
				</Choice.Indicator>
				<Choice.Content>
					<Choice.Label>I agree to the terms</Choice.Label>
					<Choice.Description>You can change this later.</Choice.Description>
				</Choice.Content>
			</Choice.Root>,
		);

		const results = await axe.run(container, {
			// Colors aren't themed in the test DOM, so contrast results are noise here.
			rules: { "color-contrast": { enabled: false } },
		});
		expect(results.violations).toEqual([]);
	});
});
