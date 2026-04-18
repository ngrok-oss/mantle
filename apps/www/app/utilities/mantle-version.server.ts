import { z } from "zod";
import type { MantleVersion } from "../components/mantle-version-provider";

/**
 * Zod schema that validates a `major.minor.patch` version string and narrows
 * it to the {@link MantleVersion} template-literal type. Prerelease and build
 * metadata suffixes (`-beta.1`, `+sha.abc`) are intentionally rejected since
 * the UI only renders stable releases.
 */
export const mantleVersionSchema = z
	.string()
	.regex(/^\d+\.\d+\.\d+$/, "expected a `major.minor.patch` version string")
	.transform((value): MantleVersion => value as MantleVersion);

/**
 * Parses an unknown value (typically `packageJson.version`) into a validated
 * {@link MantleVersion}. Throws a `ZodError` when the input does not match
 * `major.minor.patch`, surfacing misconfigured deployments immediately in the
 * root loader rather than letting a malformed string leak into the UI.
 *
 * Server-only: intended to be called from React Router loaders, where the
 * `@ngrok/mantle` `package.json` is resolved at build/SSR time.
 */
export function parseMantleVersion(input: unknown): MantleVersion {
	return mantleVersionSchema.parse(input);
}
