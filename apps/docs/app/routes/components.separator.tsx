import { CodeBlock, CodeBlockBody, CodeBlockCode, CodeBlockCopyButton, fmtCode } from "@ngrok/mantle/code-block";
import { InlineCode } from "@ngrok/mantle/inline-code";
import { HorizontalSeparatorGroup, Separator } from "@ngrok/mantle/separator";
import type { HeadersFunction, MetaFunction } from "@remix-run/node";
import { Example } from "~/components/example";

export const meta: MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Separator" },
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
		<div className="space-y-16">
			<section className="space-y-4">
				<h1 className="text-5xl font-medium">Separator</h1>
				<p className="font-body text-body text-xl">Visually or semantically separates content.</p>
				<div>
					<Example>
						<div className="space-y-4">
							<div className="space-y-1">
								<h4 className="text-sm font-medium leading-none">mantle</h4>
								<p className="text-muted-foreground text-sm">An open-source UI component library.</p>
							</div>
							<Separator className="my-4" />
							<Separator className="my-4" decorative={false} />
							<div className="flex h-5 items-center gap-4 text-sm">
								<div>Blog</div>
								<Separator orientation="vertical" />
								<div>Docs</div>
								<Separator orientation="vertical" />
								<div>Source</div>
							</div>
							<HorizontalSeparatorGroup>
								<Separator />
								<h3>ngrok mantle</h3>
								<Separator />
							</HorizontalSeparatorGroup>
							<HorizontalSeparatorGroup>
								<h3>ngrok mantle</h3>
								<Separator />
							</HorizontalSeparatorGroup>
							<HorizontalSeparatorGroup>
								<Separator />
								<h3>ngrok mantle</h3>
							</HorizontalSeparatorGroup>
						</div>
					</Example>
					<CodeBlock className="rounded-b-lg rounded-t-none">
						<CodeBlockBody>
							<CodeBlockCopyButton />
							<CodeBlockCode
								language="tsx"
								value={fmtCode`
							import { HorizontalSeparatorGroup, Separator } from "@ngrok/mantle/separator";

							<div>
								<div className="space-y-1">
									<h4 className="text-sm font-medium leading-none">mantle</h4>
									<p className="text-muted-foreground text-sm">An open-source UI component library.</p>
								</div>
								<Separator className="my-4" />
								<div className="flex h-5 items-center space-x-4 text-sm">
									<div>Blog</div>
									<Separator orientation="vertical" />
									<div>Docs</div>
									<Separator orientation="vertical" />
									<div>Source</div>
								</div>
								<HorizontalSeparatorGroup>
									<Separator />
									<h3>ngrok mantle</h3>
									<Separator />
								</HorizontalSeparatorGroup>
								<HorizontalSeparatorGroup>
									<h3>ngrok mantle</h3>
									<Separator />
								</HorizontalSeparatorGroup>
								<HorizontalSeparatorGroup>
									<Separator />
									<h3>ngrok mantle</h3>
								</HorizontalSeparatorGroup>
							</div>
						`}
							/>
						</CodeBlockBody>
					</CodeBlock>
				</div>
			</section>

			<section className="space-y-4">
				<h2 id="composition" className="text-3xl font-medium">
					Composition
				</h2>
				<p className="font-body text-body text-xl">
					When you want to render <span className="italic">something else</span> as a{" "}
					<InlineCode>HorizontalSeparatorGroup</InlineCode> or <InlineCode>Separator</InlineCode>, you can use the{" "}
					<InlineCode>asChild</InlineCode> prop to compose.
				</p>
				<div>
					<Example>
						<div className="flex flex-col space-y-16">
							<form className="w-96">
								<fieldset className="space-y-4">
									<HorizontalSeparatorGroup className="w-full" asChild>
										<legend>
											Choose your favorite fruit!
											<Separator asChild>
												<span />
											</Separator>
										</legend>
									</HorizontalSeparatorGroup>

									<div className="space-y-2">
										<div className="space-x-2">
											<input type="radio" id="apple" name="monster" value="apple" />
											<label htmlFor="apple">Apple</label>
										</div>

										<div className="space-x-2">
											<input type="radio" id="mango" name="monster" value="mango" />
											<label htmlFor="mango">Mango</label>
										</div>

										<div className="space-x-2">
											<input type="radio" id="pear" name="monster" value="pear" />
											<label htmlFor="pear">Pear</label>
										</div>
									</div>
								</fieldset>
							</form>

							<div className="flex h-5 items-center space-x-4 text-sm">
								<div>Blog</div>
								<Separator orientation="vertical" asChild>
									<span />
								</Separator>
								<div>Docs</div>
								<Separator orientation="vertical" asChild>
									<span />
								</Separator>
								<div>Source</div>
							</div>
						</div>
					</Example>
					<CodeBlock className="rounded-b-lg rounded-t-none">
						<CodeBlockBody>
							<CodeBlockCopyButton />
							<CodeBlockCode
								language="tsx"
								value={fmtCode`
									import { HorizontalSeparatorGroup, Separator } from "@ngrok/mantle/separator";

									<form>
										<fieldset className="space-y-4">
											<HorizontalSeparatorGroup className="w-full" asChild>
												<legend>
													Choose your favorite fruit!
													<Separator asChild>
														<span />
													</Separator>
												</legend>
											</HorizontalSeparatorGroup>

											<div className="space-y-2">
												<div className="space-x-2">
													<input type="radio" id="apple" name="monster" value="apple" />
													<label htmlFor="apple">Apple</label>
												</div>

												<div className="space-x-2">
													<input type="radio" id="mango" name="monster" value="mango" />
													<label htmlFor="mango">Mango</label>
												</div>

												<div className="space-x-2">
													<input type="radio" id="pear" name="monster" value="pear" />
													<label htmlFor="pear">Pear</label>
												</div>
											</div>
										</fieldset>
									</form>

									<div className="flex h-5 items-center space-x-4 text-sm">
										<div>Blog</div>
										<Separator orientation="vertical" asChild>
											<span />
										</Separator>
										<div>Docs</div>
										<Separator orientation="vertical" asChild>
											<span />
										</Separator>
										<div>Source</div>
									</div>
								`}
							/>
						</CodeBlockBody>
					</CodeBlock>
				</div>
			</section>
		</div>
	);
}
