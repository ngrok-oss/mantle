import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Field } from "../field/field.js";
import { Choice } from "./choice.js";

describe("Choice", () => {
	test("Indicator injects an id onto its control child", () => {
		render(
			<Choice.Root>
				<Choice.Indicator>
					<input type="checkbox" aria-label="control" />
				</Choice.Indicator>
				<Choice.Content>
					<Choice.Label>Email</Choice.Label>
				</Choice.Content>
			</Choice.Root>,
		);
		expect(screen.getByRole("checkbox")).toHaveAttribute("id", expect.stringMatching(/.+/));
	});

	test("Label renders a <label> whose htmlFor targets the injected control id", () => {
		render(
			<Choice.Root>
				<Choice.Indicator>
					<input type="checkbox" aria-label="control" />
				</Choice.Indicator>
				<Choice.Content>
					<Choice.Label>Email</Choice.Label>
				</Choice.Content>
			</Choice.Root>,
		);
		const control = screen.getByRole("checkbox");
		const label = screen.getByText("Email");
		expect(label.tagName).toBe("LABEL");
		expect(label).toHaveAttribute("for", control.id);
	});

	test("Title renders label-less text (a <p>, not a <label>)", () => {
		render(
			<Choice.Root>
				<Choice.Indicator>
					<input type="checkbox" aria-label="control" />
				</Choice.Indicator>
				<Choice.Content>
					<Choice.Title>Onboarding Key</Choice.Title>
				</Choice.Content>
			</Choice.Root>,
		);
		const title = screen.getByText("Onboarding Key");
		expect(title.tagName).toBe("P");
		expect(title).not.toHaveAttribute("for");
	});

	test("Description is associated to the control via aria-describedby", () => {
		render(
			<Choice.Root>
				<Choice.Indicator>
					<input type="checkbox" aria-label="control" />
				</Choice.Indicator>
				<Choice.Content>
					<Choice.Label>Email</Choice.Label>
					<Choice.Description>Get notified by email.</Choice.Description>
				</Choice.Content>
			</Choice.Root>,
		);
		const control = screen.getByRole("checkbox");
		const description = screen.getByText("Get notified by email.");
		expect(description.id).toMatch(/.+/);
		expect(control.getAttribute("aria-describedby")?.split(" ")).toContain(description.id);
	});

	test("disabled disables the control and dims the text", () => {
		render(
			<Choice.Root disabled>
				<Choice.Indicator>
					<input type="checkbox" aria-label="control" />
				</Choice.Indicator>
				<Choice.Content>
					<Choice.Label>Email</Choice.Label>
				</Choice.Content>
			</Choice.Root>,
		);
		expect(screen.getByRole("checkbox")).toBeDisabled();
		expect(screen.getByText("Email")).toHaveClass("opacity-50");
	});

	test("name lands on the control", () => {
		render(
			<Choice.Root name="notify">
				<Choice.Indicator>
					<input type="checkbox" aria-label="control" />
				</Choice.Indicator>
				<Choice.Content>
					<Choice.Label>Email</Choice.Label>
				</Choice.Content>
			</Choice.Root>,
		);
		expect(screen.getByRole("checkbox")).toHaveAttribute("name", "notify");
	});

	test("does not clobber disabled / name set on the control itself", () => {
		render(
			<Choice.Root>
				<Choice.Indicator>
					<input type="checkbox" aria-label="control" name="custom" disabled />
				</Choice.Indicator>
				<Choice.Content>
					<Choice.Label>Email</Choice.Label>
				</Choice.Content>
			</Choice.Root>,
		);
		const control = screen.getByRole("checkbox");
		expect(control).toBeDisabled();
		expect(control).toHaveAttribute("name", "custom");
	});

	test("a part rendered outside Root throws", () => {
		expect(() => render(<Choice.Label>orphan</Choice.Label>)).toThrow(
			/Choice\.Label must be rendered inside Choice\.Root/,
		);
	});
});

describe("Choice + Field interop", () => {
	test("Field.Label and Choice.Label both target the control id (merged, clickable labels)", () => {
		render(
			<Field.Item name="notify">
				<Field.Label>Notifications</Field.Label>
				<Field.Control>
					<Choice.Root>
						<Choice.Indicator>
							<input type="checkbox" aria-label="control" />
						</Choice.Indicator>
						<Choice.Content>
							<Choice.Label>Email</Choice.Label>
						</Choice.Content>
					</Choice.Root>
				</Field.Control>
			</Field.Item>,
		);
		const control = screen.getByRole("checkbox");
		expect(screen.getByText("Notifications")).toHaveAttribute("for", control.id);
		// The rich title is a real <label> for the same control, so clicking it toggles.
		const choiceLabel = screen.getByText("Email");
		expect(choiceLabel.tagName).toBe("LABEL");
		expect(choiceLabel).toHaveAttribute("for", control.id);
		expect(control).toHaveAttribute("name", "notify");
	});

	test("aria-describedby merges the field's description with the choice's own", () => {
		render(
			<Field.Item name="notify">
				<Field.Label>Notifications</Field.Label>
				<Field.Control>
					<Choice.Root>
						<Choice.Indicator>
							<input type="checkbox" aria-label="control" />
						</Choice.Indicator>
						<Choice.Content>
							<Choice.Title>Email</Choice.Title>
							<Choice.Description>Sent to your primary address.</Choice.Description>
						</Choice.Content>
					</Choice.Root>
				</Field.Control>
				<Field.Description>How we reach you.</Field.Description>
			</Field.Item>,
		);
		const control = screen.getByRole("checkbox");
		const describedBy = control.getAttribute("aria-describedby")?.split(" ") ?? [];
		expect(describedBy).toContain(screen.getByText("Sent to your primary address.").id);
		expect(describedBy).toContain(screen.getByText("How we reach you.").id);
		// No id is listed twice.
		expect(new Set(describedBy).size).toBe(describedBy.length);
	});
});
