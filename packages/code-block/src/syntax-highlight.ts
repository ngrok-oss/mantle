import Prism from "prismjs";
import { supportedLanguages, type SupportedLanguage } from "./supported-languages";
import "prismjs/components/prism-bash.js";
import "prismjs/components/prism-bash.js";
import "prismjs/components/prism-csharp.js";
import "prismjs/components/prism-css.js";
import "prismjs/components/prism-go.js";
import "prismjs/components/prism-java.js";
import "prismjs/components/prism-javascript.js";
import "prismjs/components/prism-json.js";
import "prismjs/components/prism-jsx.js";
import "prismjs/components/prism-markup.js";
import "prismjs/components/prism-python.js";
import "prismjs/components/prism-ruby.js";
import "prismjs/components/prism-rust.js";
import "prismjs/components/prism-tsx.js";
import "prismjs/components/prism-typescript.js";
import "prismjs/components/prism-yaml.js";
import assert from "tiny-invariant";

function syntaxHighlight({ value, language }: { value: string; language: SupportedLanguage }) {
	const trimmedCode = value.trim();
	const grammar = Prism.languages[language];
	assert(
		grammar,
		`CodeBlock does not support the language "${language}". The syntax highlighter does not have a grammar for this language. The supported languages are: ${supportedLanguages.join(", ")}.`,
	);
	return Prism.highlight(trimmedCode, grammar, language);
}

export { syntaxHighlight };
