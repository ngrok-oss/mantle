import { Anchor } from "@ngrok/mantle/anchor";
import { Code } from "@ngrok/mantle/code";
import { href } from "react-router";
import { HashLinkHeading } from "~/components/hash-link-heading";
import { Link } from "~/components/link";
import { PageHeader } from "~/components/page-header";
import type { Route } from "./+types/philosophy";

export const meta: Route.MetaFunction = () => {
	return [
		{ title: "Philosophy - @ngrok/mantle" },
		{
			name: "description",
			content:
				"The design principles and architectural philosophy behind mantle, ngrok's UI library and design system",
		},
	];
};

export default function PhilosophyPage() {
	return (
		<div>
			<PageHeader id="philosophy">Philosophy</PageHeader>
			<p className="font-body text-body mt-4 text-xl">
				The design principles and architectural decisions that guide Mantle's development, ensuring
				a consistent, accessible, and maintainable design system.
			</p>

			<div className="mt-8 space-y-8">
				<section>
					<HashLinkHeading id="why-philosophy" className="text-3xl font-medium">
						<h2>Why Philosophy Matters</h2>
					</HashLinkHeading>
					<p className="font-body text-body mt-3">
						A clear philosophy guides every decision in Mantle's design and implementation. It
						ensures consistency across components, helps developers understand the "why" behind
						design choices, and provides a foundation for making decisions about new features and
						improvements.
					</p>
					<p className="font-body text-body mt-3">
						From choosing to build on semantic HTML foundations to selecting primitive libraries
						that prioritize accessibility, every architectural decision in Mantle reflects our
						commitment to creating a design system that works for everyone, everywhere.
					</p>
				</section>

				<section>
					<HashLinkHeading id="composition-over-configuration" className="text-3xl font-medium">
						<h2>Composition Over Configuration</h2>
					</HashLinkHeading>
					<p className="font-body text-body mt-3">
						Mantle embraces the power of composition by building on proven primitives rather than
						reinventing the wheel. We compose around established, unstyled primitive component
						libraries like <Anchor href="https://www.radix-ui.com">Radix UI</Anchor>,{" "}
						<Anchor href="https://ariakit.org">Ariakit</Anchor>, and{" "}
						<Anchor href="https://headlessui.com">Headless UI</Anchor>.
					</p>
					<p className="font-body text-body mt-3">
						This approach gives us the best of both worlds: robust, accessible functionality from
						battle-tested libraries, combined with ngrok's unique visual design language. Components
						can be composed together naturally, and the <Code>asChild</Code> pattern allows for deep
						composition when needed.
					</p>
				</section>

				<section>
					<HashLinkHeading id="semantic-markup-first" className="text-3xl font-medium">
						<h2>Semantic Markup First</h2>
					</HashLinkHeading>
					<p className="font-body text-body mt-3">
						Mantle starts with semantic HTML as the foundation for every component. We believe that
						the right HTML element for the job should always be the starting point, not an
						afterthought. This means using <Code>&lt;button&gt;</Code> elements for buttons,{" "}
						<Code>&lt;input&gt;</Code> elements for form controls, and proper heading hierarchy for
						content structure.
					</p>
					<p className="font-body text-body mt-3">
						Semantic markup provides a solid foundation that works across all devices, assistive
						technologies, and contexts—even when CSS fails to load or JavaScript is disabled. It
						ensures that our components are meaningful to screen readers, search engines, and other
						tools that parse HTML structure.
					</p>
					<p className="font-body text-body mt-3">
						By starting with the right semantic elements, we get keyboard navigation, focus
						management, and screen reader compatibility for free. This approach reduces the amount
						of custom accessibility code needed and ensures that our components behave predictably
						across different environments.
					</p>
				</section>

				<section>
					<HashLinkHeading id="progressive-enhancement" className="text-3xl font-medium">
						<h2>Progressive Enhancement</h2>
					</HashLinkHeading>
					<p className="font-body text-body mt-3">
						Mantle progressively enhances standard DOM elements, improving usability and
						accessibility while filling functional gaps. Rather than creating entirely new
						paradigms, we build upon familiar HTML patterns that developers already understand.
					</p>
					<p className="font-body text-body mt-3">
						This means our components work as you'd expect them to, with additional features layered
						on top. A <Link to={href("/components/button")}>Button</Link> is still a button, but
						with enhanced styling, loading states, and accessibility features.
					</p>
				</section>

				<section>
					<HashLinkHeading id="developer-experience" className="text-3xl font-medium">
						<h2>Developer Experience is Key</h2>
					</HashLinkHeading>
					<p className="font-body text-body mt-3">
						Mantle prioritizes developer ergonomics through strong TypeScript typing, clear APIs,
						and comprehensive documentation. We believe that good developer experience leads to
						better user experiences.
					</p>
					<p className="font-body text-body mt-3">
						Every component is built with TypeScript from the ground up, providing rich
						IntelliSense, compile-time safety, and clear contracts. Variant props are strongly
						typed, and the component APIs are designed to be intuitive and consistent across the
						entire library.
					</p>
				</section>

				<section>
					<HashLinkHeading id="accessibility-first" className="text-3xl font-medium">
						<h2>Accessibility First</h2>
					</HashLinkHeading>
					<p className="font-body text-body mt-3">
						Accessibility isn't an afterthought in Mantle—it's built into the foundation. By
						starting with semantic HTML and leveraging primitives that already implement WAI-ARIA
						patterns correctly, we ensure that every component works well with screen readers,
						keyboard navigation, and other assistive technologies.
					</p>
					<p className="font-body text-body mt-3">
						Our commitment to semantic markup means that components are inherently accessible. A
						properly structured <Link to={href("/components/button")}>Button</Link> component works
						with screen readers because it's built on a real <Code>&lt;button&gt;</Code> element,
						not a styled <Code>&lt;div&gt;</Code> with click handlers.
					</p>
					<p className="font-body text-body mt-3">
						This approach means that ngrok's applications are usable by everyone, regardless of
						their abilities or how they interact with the web. It also ensures compliance with web
						standards and accessibility guidelines without requiring extensive additional work.
					</p>
				</section>

				<section>
					<HashLinkHeading id="tailwind-as-design-language" className="text-3xl font-medium">
						<h2>Tailwind as Design Language</h2>
					</HashLinkHeading>
					<p className="font-body text-body mt-3">
						Mantle uses <Anchor href="https://tailwindcss.com">Tailwind CSS</Anchor> as both a
						styling solution and a design language. Our custom{" "}
						<Link to={href("/base/tailwind-variants")}>Tailwind preset</Link> defines ngrok's design
						tokens—colors, spacing, typography, and more—in a way that's both consistent and
						flexible.
					</p>
					<p className="font-body text-body mt-3">
						This approach allows developers to extend components naturally using familiar utility
						classes, while ensuring that custom styling still adheres to the design system. The
						design tokens are semantic, meaning they adapt to different themes and contexts
						automatically.
					</p>
				</section>

				<section>
					<HashLinkHeading id="type-safety-without-complexity" className="text-3xl font-medium">
						<h2>Type Safety Without Complexity</h2>
					</HashLinkHeading>
					<p className="font-body text-body mt-3">
						While Mantle is built with TypeScript, we avoid forcing developers to wrestle with
						complex generics or internal types. Instead, we leverage TypeScript's type inference to
						provide excellent development experience with minimal cognitive overhead.
					</p>
					<p className="font-body text-body mt-3">
						Component variants are typed using <Code>class-variance-authority</Code>, providing
						autocomplete and validation for styling options without requiring explicit type
						annotations. This gives you the benefits of strong typing while keeping the API
						approachable.
					</p>
				</section>

				<section>
					<HashLinkHeading id="modular-architecture" className="text-3xl font-medium">
						<h2>Modular Architecture</h2>
					</HashLinkHeading>
					<p className="font-body text-body mt-3">
						Mantle is designed with modularity in mind. Each component can be imported individually,
						reducing bundle size and allowing teams to adopt the design system incrementally. The
						modular export pattern means you only pay for what you use.
					</p>
					<p className="font-body text-body mt-3">
						This architecture also makes it easy to extend or customize components for specific use
						cases without affecting the rest of the system. Teams can build their own abstractions
						on top of Mantle's primitives while maintaining consistency with the broader design
						system.
					</p>
				</section>

				<section>
					<HashLinkHeading id="performance-by-default" className="text-3xl font-medium">
						<h2>Performance by Default</h2>
					</HashLinkHeading>
					<p className="font-body text-body mt-3">
						Mantle components are optimized for performance out of the box. By using efficient
						styling approaches, minimizing re-renders, and leveraging React's built-in
						optimizations, we ensure that using Mantle doesn't compromise your application's
						performance.
					</p>
					<p className="font-body text-body mt-3">
						The component library is tree-shakable, TypeScript compilation is optimized, and runtime
						performance is a key consideration in every architectural decision. We believe that good
						performance is a feature, not an optimization.
					</p>
				</section>

				<section>
					<HashLinkHeading id="evolution-not-revolution" className="text-3xl font-medium">
						<h2>Evolution, Not Revolution</h2>
					</HashLinkHeading>
					<p className="font-body text-body mt-3">
						Mantle is designed to evolve with ngrok's needs and the broader web platform. We prefer
						evolutionary improvements over revolutionary changes, ensuring that existing code
						continues to work as the design system grows.
					</p>
					<p className="font-body text-body mt-3">
						This philosophy extends to our approach to web standards, framework compatibility, and
						API design. We build on stable foundations and evolve thoughtfully, prioritizing
						long-term maintainability over short-term convenience.
					</p>
				</section>

				<section>
					<HashLinkHeading id="consistent-mental-models" className="text-3xl font-medium">
						<h2>Consistent Mental Models</h2>
					</HashLinkHeading>
					<p className="font-body text-body mt-3">
						Across all of Mantle's components, we maintain consistent mental models and naming
						conventions. If you understand how one component works, you can reasonably predict how
						others will behave.
					</p>
					<p className="font-body text-body mt-3">
						This consistency extends to prop names, variant patterns, event handling, and
						composition patterns. Learning Mantle once means understanding the entire system,
						reducing the cognitive load on developers and making the codebase more maintainable.
					</p>
				</section>
			</div>
		</div>
	);
}
