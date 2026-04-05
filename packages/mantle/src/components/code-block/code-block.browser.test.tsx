"use client";

import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { describe, expect, test } from "vitest";
import { CodeBlock } from "./code-block.js";
import { createMantleCodeBlockValue } from "./mantle-code.js";

function makeValue(code: string, preHtml?: string) {
	return createMantleCodeBlockValue({
		language: "typescript",
		code,
		preHtml: preHtml ?? `<span>${code}</span>`,
	});
}

describe("CodeBlock (browser)", () => {
	describe("CopyButton clipboard integration", () => {
		test("clicking CopyButton writes the code text to the clipboard", async () => {
			const user = userEvent.setup();
			const code = 'const greeting = "hello";';

			render(
				<CodeBlock.Root>
					<CodeBlock.Body>
						<CodeBlock.CopyButton />
						<CodeBlock.Code value={makeValue(code)} />
					</CodeBlock.Body>
				</CodeBlock.Root>,
			);

			const button = screen.getByRole("button", { name: /copy code/i });
			await user.click(button);

			const clipboardText = await navigator.clipboard.readText();
			expect(clipboardText).toBe(code);
		});

		test("CopyButton copies plain text when value has template val substitutions", async () => {
			const user = userEvent.setup();
			const codeWithPlaceholder = 'const x = "SHIKI_VAL_0";';
			const expectedPlainText = 'const x = "world";';

			const value = createMantleCodeBlockValue({
				language: "typescript",
				code: codeWithPlaceholder,
				preHtml: "<span>const x = &quot;SHIKI_VAL_0&quot;;</span>",
				preVals: ["world"],
			});

			render(
				<CodeBlock.Root>
					<CodeBlock.Body>
						<CodeBlock.CopyButton />
						<CodeBlock.Code value={value} />
					</CodeBlock.Body>
				</CodeBlock.Root>,
			);

			const button = screen.getByRole("button", { name: /copy code/i });
			await user.click(button);

			const clipboardText = await navigator.clipboard.readText();
			expect(clipboardText).toBe(expectedPlainText);
		});

		test("CopyButton swaps to check icon after clicking", async () => {
			const user = userEvent.setup();

			render(
				<CodeBlock.Root>
					<CodeBlock.Body>
						<CodeBlock.CopyButton />
						<CodeBlock.Code value={makeValue("code")} />
					</CodeBlock.Body>
				</CodeBlock.Root>,
			);

			const button = screen.getByRole("button", { name: /copy code/i });
			const iconBefore = button.querySelector("svg")?.innerHTML;
			await user.click(button);
			const iconAfter = button.querySelector("svg")?.innerHTML;

			expect(iconAfter).not.toBe(iconBefore);
		});
	});
});
