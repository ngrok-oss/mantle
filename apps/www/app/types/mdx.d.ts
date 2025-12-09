declare module "*.mdx" {
	import type { FunctionComponent } from "react";

	// MDX files export a function component by default
	// The component accepts props including a special 'components' prop
	const Component: FunctionComponent<{
		components?: Record<string, FunctionComponent<any>>;
		[key: string]: any;
	}>;

	export default Component;
}
