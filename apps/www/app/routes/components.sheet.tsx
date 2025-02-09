import { Button, IconButton } from "@ngrok/mantle/button";
import {
	CodeBlock,
	CodeBlockBody,
	CodeBlockCode,
	CodeBlockCopyButton,
	fmtCode,
} from "@ngrok/mantle/code-block";
import { Separator } from "@ngrok/mantle/separator";
import {
	Sheet,
	SheetActions,
	SheetBody,
	SheetClose,
	SheetCloseIconButton,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTitleGroup,
	SheetTrigger,
} from "@ngrok/mantle/sheet";
import { ListMagnifyingGlass } from "@phosphor-icons/react/ListMagnifyingGlass";
import { TerminalWindow } from "@phosphor-icons/react/TerminalWindow";
import { TrashSimple } from "@phosphor-icons/react/TrashSimple";
import type { HeadersFunction, MetaFunction } from "@remix-run/node";
import { Example } from "~/components/example";
import { PageHeader } from "~/components/page-header";

export const meta: MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Sheet" },
		{
			name: "description",
			content: "mantle is ngrok's UI library and design system",
		},
	];
};

export const headers: HeadersFunction = () => {
	return {
		"Cache-Control": "max-age=300, stale-while-revalidate=604800",
	};
};

export default function Page() {
	return (
		<div className="space-y-4">
			<PageHeader id="sheet">Sheet</PageHeader>
			<p className="font-body text-body text-xl">
				A container that overlays the current view from the edge of the screen.
				It is a lightweight way of allowing users to complete a task without
				losing contextual information of the view beneath it.
			</p>

			<div>
				<Example>
					<Sheet>
						<SheetTrigger asChild>
							<Button type="button" appearance="filled">
								Open Sheet
							</Button>
						</SheetTrigger>
						<SheetContent>
							<SheetHeader>
								<SheetTitleGroup>
									<SheetTitle>Are you absolutely sure?</SheetTitle>
									<SheetActions>
										<IconButton
											appearance="ghost"
											type="button"
											icon={<TerminalWindow />}
											label="Start a Tunnel"
										/>
										<IconButton
											appearance="ghost"
											type="button"
											icon={<ListMagnifyingGlass />}
											label="See Traffic"
										/>
										<IconButton
											appearance="ghost"
											type="button"
											icon={<TrashSimple />}
											label="Delete"
										/>
										<Separator orientation="vertical" className="h-[80%]" />
										<SheetCloseIconButton appearance="ghost" />
									</SheetActions>
								</SheetTitleGroup>
								<SheetDescription>
									This action cannot be undone. This will permanently delete
									your account and remove your data from our servers.
								</SheetDescription>
							</SheetHeader>
							<SheetBody className="space-y-4">
								<p>
									Consequat do voluptate culpa fugiat consequat nostrud duis
									aliqua minim. Tempor voluptate cillum elit velit. Voluptate
									aliqua ipsum aliqua dolore in nisi ea fugiat aliqua velit
									proident amet.
								</p>
								<p>
									Et aliquip fugiat laborum id enim velit exercitation tempor
									irure pariatur commodo dolor tempor eu. Consectetur sunt est
									occaecat quis eiusmod ea cillum sunt sunt labore consequat
									aute. Aute ad anim do et enim nisi adipisicing sunt culpa
									magna reprehenderit. Reprehenderit dolor elit cupidatat veniam
									dolore. Consectetur occaecat ea est elit ipsum.
								</p>
								<p>
									Est pariatur exercitation commodo in veniam enim dolor. Labore
									consequat cupidatat ipsum enim deserunt exercitation ipsum
									Lorem. Ea dolor adipisicing et labore Lorem.
								</p>
								<p>
									Incididunt culpa proident qui in. Nulla do quis pariatur
									veniam est reprehenderit dolore. Occaecat consectetur
									incididunt incididunt commodo cillum amet aliqua id pariatur
									sunt. Laborum amet magna id sunt. Nulla nisi minim et eu
									incididunt irure fugiat laboris labore nostrud eiusmod irure
									adipisicing. Exercitation pariatur voluptate occaecat anim
									irure ad tempor est. Do culpa culpa occaecat ut pariatur elit
									do exercitation consectetur sint aliqua voluptate.
								</p>
								<p>
									Culpa Lorem fugiat mollit est velit enim fugiat reprehenderit
									consequat eu. Commodo eiusmod irure anim culpa consequat in
									commodo ad nostrud amet pariatur. Eiusmod velit qui
									reprehenderit consequat proident esse amet consequat.
									Exercitation nostrud laborum labore anim nulla consequat elit
									quis ullamco nisi minim. Voluptate aliqua magna eu proident
									qui ipsum officia laboris. Ad veniam eiusmod mollit laborum
									sit pariatur do eu nostrud quis. Adipisicing ea labore duis
									laboris ex aute ea ut magna sit nisi dolor.
								</p>
								<p>
									Amet adipisicing quis fugiat cillum do commodo culpa deserunt
									minim. Fugiat enim veniam ex ullamco minim laboris labore
									culpa occaecat ut exercitation occaecat culpa quis. Veniam
									quis velit enim id veniam nisi non consequat laboris.
									Reprehenderit fugiat nostrud voluptate esse et nulla mollit
									eiusmod veniam sunt adipisicing. Aute quis mollit non quis
									ullamco consectetur labore quis do occaecat. Veniam id laboris
									adipisicing fugiat.
								</p>
							</SheetBody>
							<SheetFooter>
								<SheetClose asChild>
									<Button type="button">Close</Button>
								</SheetClose>
								<Button type="button" appearance="filled">
									Save
								</Button>
							</SheetFooter>
						</SheetContent>
					</Sheet>
				</Example>
				<CodeBlock className="rounded-b-lg rounded-t-none">
					<CodeBlockBody>
						<CodeBlockCopyButton />
						<CodeBlockCode
							language="tsx"
							value={fmtCode`
								import { Button, IconButton } from "@ngrok/mantle/button";
								import { Separator } from "@ngrok/mantle/separator";
								import {
									Sheet,
									SheetActions,
									SheetBody,
									SheetClose,
									SheetCloseIconButton,
									SheetContent,
									SheetDescription,
									SheetFooter,
									SheetHeader,
									SheetTitle,
									SheetTitleGroup,
									SheetTrigger,
								} from "@ngrok/mantle/sheet";
								import { ListMagnifyingGlass } from "@phosphor-icons/react/ListMagnifyingGlass";
								import { TerminalWindow } from "@phosphor-icons/react/TerminalWindow";
								import { TrashSimple } from "@phosphor-icons/react/TrashSimple";

								<Sheet>
									<SheetTrigger asChild>
										<Button type="button" appearance="filled">Open Sheet</Button>
									</SheetTrigger>
									<SheetContent>
										<SheetHeader>
											<SheetTitleGroup>
												<SheetTitle>Are you absolutely sure?</SheetTitle>
												<SheetActions>
													<IconButton appearance="ghost" type="button" icon={<TerminalWindow />} label="Start a Tunnel" />
													<IconButton appearance="ghost" type="button" icon={<ListMagnifyingGlass />} label="See Traffic" />
													<IconButton appearance="ghost" type="button" icon={<TrashSimple />} label="Delete" />
													<Separator orientation="vertical" className="h-[80%]" />
													<SheetCloseIconButton appearance="ghost" />
												</SheetActions>
											</SheetTitleGroup>
											<SheetDescription>
												This action cannot be undone. This will permanently delete your account and remove your data from our
												servers.
											</SheetDescription>
										</SheetHeader>
										<SheetBody className="space-y-4">
											<p>
												Lorem ipsum
											</p>
										</SheetBody>
										<SheetFooter>
											<SheetClose asChild>
												<Button type="button">Close</Button>
											</SheetClose>
										</SheetFooter>
									</SheetContent>
								</Sheet>
							`}
						/>
					</CodeBlockBody>
				</CodeBlock>
			</div>
		</div>
	);
}
