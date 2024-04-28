import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useEffect, useRef, useState } from "react";
import type { ElementRef } from "react";
import { act } from "react-dom/test-utils";
import { describe, expect, test } from "vitest";
import { Input, InputCapture } from "./input";

describe("Input", () => {
	test('without children or invalid, renders an input with aria-invalid="false" and placeholder="Testy McTestface"', () => {
		render(<Input placeholder="Testy McTestface" />);
		expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "false");
		expect(screen.getByRole("textbox")).toHaveAttribute("placeholder", "Testy McTestface");
	});

	test('without children, with invalid, renders an input with aria-invalid="true"', () => {
		render(<Input invalid />);
		expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
	});

	test('with children, without invalid, renders an input with aria-invalid="false" and placeholder="Testy McTestface"', () => {
		render(
			<Input placeholder="Testy McTestface">
				<InputCapture />
			</Input>,
		);
		expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "false");
		expect(screen.getByRole("textbox")).toHaveAttribute("placeholder", "Testy McTestface");
	});

	test('with children, with invalid on <Input>, renders an input with aria-invalid="true"', () => {
		render(
			<Input invalid>
				<InputCapture />
			</Input>,
		);
		expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
	});

	test('with children, with invalid on <InputCapture>, renders an input with aria-invalid="true"', () => {
		render(
			<Input>
				<InputCapture invalid placeholder="Testy McTestface" />
			</Input>,
		);
		expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
		expect(screen.getByRole("textbox")).toHaveAttribute("placeholder", "Testy McTestface");
	});

	test("without children, passes ref through and allows focus on mount", async () => {
		const Subject = () => {
			const inputRef = useRef<ElementRef<"input">>(null);

			useEffect(() => {
				inputRef.current?.focus();
			}, []);

			return <Input ref={inputRef} placeholder="Testy McTestface" />;
		};

		await act(() => render(<Subject />));

		expect(screen.getByRole("textbox")).toHaveAttribute("placeholder", "Testy McTestface");
		expect(document.activeElement).toBe(screen.getByRole("textbox"));
	});

	test("with children, passes ref through from Input and allows focus on mount", async () => {
		const Subject = () => {
			const inputRef = useRef<ElementRef<"input">>(null);

			useEffect(() => {
				inputRef.current?.focus();
			}, []);

			return (
				<Input ref={inputRef} placeholder="Testy McTestface">
					<InputCapture />
				</Input>
			);
		};

		await act(() => render(<Subject />));

		expect(screen.getByRole("textbox")).toHaveAttribute("placeholder", "Testy McTestface");
		expect(document.activeElement).toBe(screen.getByRole("textbox"));
	});

	test("with children, passes ref through from InputCapture and allows focus on mount", async () => {
		const Subject = () => {
			const inputRef = useRef<ElementRef<"input">>(null);

			useEffect(() => {
				inputRef.current?.focus();
			}, []);

			return (
				<Input placeholder="Testy McTestface">
					<InputCapture ref={inputRef} />
				</Input>
			);
		};

		await act(() => render(<Subject />));

		expect(screen.getByRole("textbox")).toHaveAttribute("placeholder", "Testy McTestface");
		expect(document.activeElement).toBe(screen.getByRole("textbox"));
	});

	test("without children, works as a controlled input", async () => {
		const Subject = () => {
			const [value, setValue] = useState("");

			return (
				<Input
					placeholder="Testy McTestface"
					value={value}
					onChange={(event) => {
						setValue(event.target.value);
					}}
				/>
			);
		};

		render(<Subject />);

		await act(() => userEvent.type(screen.getByRole("textbox"), "ello govna"));

		expect(screen.getByRole("textbox")).toHaveValue("ello govna");
	});

	test("with children, works as a controlled input (props on Input)", async () => {
		const Subject = () => {
			const [value, setValue] = useState("");

			return (
				<Input
					placeholder="Testy McTestface"
					value={value}
					onChange={(event) => {
						setValue(event.target.value);
					}}
				>
					<InputCapture />
				</Input>
			);
		};

		render(<Subject />);

		await act(() => userEvent.type(screen.getByRole("textbox"), "ello govna"));

		expect(screen.getByRole("textbox")).toHaveValue("ello govna");
	});

	test("with children, works as a controlled input (props on InputCapture)", async () => {
		const Subject = () => {
			const [value, setValue] = useState("");

			return (
				<Input>
					<InputCapture
						placeholder="Testy McTestface"
						value={value}
						onChange={(event) => {
							setValue(event.target.value);
						}}
					/>
				</Input>
			);
		};

		render(<Subject />);

		await act(() => userEvent.type(screen.getByRole("textbox"), "ello govna"));

		expect(screen.getByRole("textbox")).toHaveValue("ello govna");
	});
});
