import { describe, expect, test } from "vitest";
import { normalizeIndentation } from "./normalize.js";

describe("normalizeIndentation", () => {
	test("given empty string, returns empty string", () => {
		expect(normalizeIndentation("")).toBe("");
	});

	test("given a single line string, returns the string", () => {
		expect(normalizeIndentation("SELECT * FROM users")).toBe(
			"SELECT * FROM users",
		);
	});

	test("given a multiline string with no indentation, returns the string", () => {
		const example = normalizeIndentation(`
const foo = {};
const bar = {};
foo.bar = bar;
`);

		expect(example).toMatchInlineSnapshot(`
			"const foo = {};
			const bar = {};
			foo.bar = bar;"
		`);
	});

	test("given a multiline string with indentation, returns the string with indentation removed", () => {
		const example = normalizeIndentation(`
	const foo = {};
	const bar = {};
	foo.bar = bar;
	`);

		expect(example).toMatchInlineSnapshot(`
			"const foo = {};
			  const bar = {};
			  foo.bar = bar;"
		`);
	});

	test("given a component code example with tabs, returns the string with tabs replaced with spaces", () => {
		const example = normalizeIndentation(`
<Alert priority="danger">
	<AlertIcon />
	<AlertContent>
		<AlertTitle>Danger</AlertTitle>
		<AlertDescription>This is a danger Alert.</AlertDescription>
	</AlertContent>
</Alert>
		`);
		expect(example).toMatchInlineSnapshot(`
			"<Alert priority="danger">
			  <AlertIcon />
			  <AlertContent>
			    <AlertTitle>Danger</AlertTitle>
			    <AlertDescription>This is a danger Alert.</AlertDescription>
			  </AlertContent>
			</Alert>"
		`);
	});
});
