import { code, CodeBlock, CodeBlockBody, CodeBlockCode, CodeBlockCopyButton } from "@/code-block";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectSeparator,
	SelectTrigger,
	SelectValue,
} from "@/select";
import type { HeadersFunction, MetaFunction } from "@remix-run/node";
import { Example } from "~/components/example";

export const meta: MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Select" },
		{ name: "description", content: "mantle is ngrok's UI library and design system" },
	];
};

export const headers: HeadersFunction = () => {
	return {
		"Cache-Control": "max-age=300, stale-while-revalidate=604800",
	};
};

export default function Page() {
	return (
		<div>
			<h1 className="text-5xl font-medium">Select</h1>
			<p className="mt-4 text-xl text-default">
				Displays a list of options for the user to pick from—triggered by a button.
			</p>

			<Example className="mt-4 flex-col gap-4">
				<form
					onSubmit={(event) => {
						event.preventDefault();
						const formData = new FormData(event.currentTarget);
						const formValues = Object.fromEntries(formData.entries());
						console.log("form submitted, formValues: ", formValues);
					}}
				>
					<Select name="number">
						<SelectTrigger className="max-w-64">
							<SelectValue placeholder="Select a fruit" />
						</SelectTrigger>
						<SelectContent width="trigger">
							<SelectGroup>
								<SelectLabel>Fruits</SelectLabel>
								<SelectItem value="apple">Apple</SelectItem>
								<SelectItem value="banana">Banana</SelectItem>
								<SelectItem value="blueberry">Blueberry</SelectItem>
								<SelectItem value="grapes">Grapes</SelectItem>
								<SelectItem value="pineapple">Pineapple</SelectItem>
							</SelectGroup>
							<SelectSeparator />
							<SelectGroup>
								<SelectLabel>Vegetables</SelectLabel>
								<SelectItem value="carrot">Carrot</SelectItem>
								<SelectItem value="cucumber">Cucumber</SelectItem>
								<SelectItem value="lettuce">Lettuce</SelectItem>
								<SelectItem value="tomato">Tomato</SelectItem>
								<SelectItem value="zucchini">
									<p>Zucchini</p>
									<p>Ex sit voluptate incididunt pariatur velit consequat reprehenderit.</p>
								</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
					<button type="submit">Submit</button>
				</form>
				<Select aria-invalid>
					<SelectTrigger className="max-w-64">
						<SelectValue placeholder="Select a fruit" />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectLabel>Fruits</SelectLabel>
							<SelectItem value="apple">Apple</SelectItem>
							<SelectItem value="banana">Banana</SelectItem>
							<SelectItem value="blueberry">Blueberry</SelectItem>
							<SelectItem value="grapes">Grapes</SelectItem>
							<SelectItem value="pineapple">Pineapple</SelectItem>
						</SelectGroup>
						<SelectSeparator />
						<SelectGroup>
							<SelectLabel>Vegetables</SelectLabel>
							<SelectItem value="carrot">Carrot</SelectItem>
							<SelectItem value="cucumber">Cucumber</SelectItem>
							<SelectItem value="lettuce">Lettuce</SelectItem>
							<SelectItem value="tomato">Tomato</SelectItem>
							<SelectItem value="zucchini">
								<p>Zucchini</p>
								<p>Ex sit voluptate incididunt pariatur velit consequat reprehenderit.</p>
							</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
			</Example>
			<CodeBlock className="rounded-b-lg rounded-t-none">
				<CodeBlockBody>
					<CodeBlockCopyButton />
					<CodeBlockCode language="tsx">
						{code`
							import {
								Select,
								SelectContent,
								SelectGroup,
								SelectItem,
								SelectLabel,
								SelectSeparator,
								SelectTrigger,
								SelectValue,
							} from "@ngrok/mantle";

							<Select>
								<SelectTrigger className="w-[180px]">
									<SelectValue placeholder="Select a fruit" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>Fruits</SelectLabel>
										<SelectItem value="apple">Apple</SelectItem>
										<SelectItem value="banana">Banana</SelectItem>
										<SelectItem value="blueberry">Blueberry</SelectItem>
										<SelectItem value="grapes">Grapes</SelectItem>
										<SelectItem value="pineapple">Pineapple</SelectItem>
									</SelectGroup>
									<SelectSeparator />
									<SelectGroup>
										<SelectLabel>Vegetables</SelectLabel>
										<SelectItem value="carrot">Carrot</SelectItem>
										<SelectItem value="cucumber">Cucumber</SelectItem>
										<SelectItem value="lettuce">Lettuce</SelectItem>
										<SelectItem value="tomato">Tomato</SelectItem>
										<SelectItem value="zucchini">
											<p>Zucchini</p>
											<p>Ex sit voluptate incididunt pariatur velit consequat reprehenderit.</p>
										</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
						`}
					</CodeBlockCode>
				</CodeBlockBody>
			</CodeBlock>
		</div>
	);
}
