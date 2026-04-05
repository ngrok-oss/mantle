import { useRef, type ComponentRef } from "react";
import { Link, Outlet, useRouteLoaderData } from "react-router";
import { DocsNavigation } from "~/components/docs-navigation";
import { Header } from "~/components/header";
import { TOC_PORTAL_ID } from "~/components/table-of-contents";
import type { loader as rootLoader } from "../root";

/** Layout route for all documentation pages. Renders the shared header, docs sidebar, and table of contents aside. */
export default function DocsLayout() {
	const rootData = useRouteLoaderData<typeof rootLoader>("root");
	const mainRef = useRef<ComponentRef<"main">>(null);

	return (
		<div className="flex min-h-full flex-col">
			<Link
				className="sr-only"
				onClick={() => {
					mainRef.current?.focus({ preventScroll: true });
				}}
				to={{
					hash: "#main",
				}}
			>
				Skip to main content
			</Link>
			<Header
				currentVersion={rootData?.currentVersion}
				mobileNavigation={
					<DocsNavigation className="scrollbar h-full overflow-auto px-1 overscroll-contain" />
				}
			/>
			<div className="mx-auto w-full max-w-7xl flex-1 px-4 pb-16 pt-20">
				<div className="flex gap-4">
					<div className="hidden w-44 md:block">
						<div className="scrollbar sticky top-15 max-h-[calc(100vh-3.75rem)] w-44 overflow-y-auto px-1 py-4">
							<DocsNavigation />
						</div>
					</div>
					<main
						className="w-0 flex-1 px-4 pb-4 md:px-9 md:pb-9 focus:outline-hidden"
						tabIndex={-1}
						ref={mainRef}
						id="main"
					>
						<Outlet />
					</main>
					<aside id={TOC_PORTAL_ID} className="hidden w-40 xl:block" />
				</div>
			</div>
		</div>
	);
}
