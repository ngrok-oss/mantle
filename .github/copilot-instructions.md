# Copilot review rules (repo-wide)

- Reviews must **not** comment on formatting or placeholders already enforced by tools (Prettier, ESLint, Biome, etc).
- Treat the following as intentional sentinels; do **not** suggest edits on lines matching them:
  - A line that is exactly `//,`
  - Any line containing `copilot:ignore`
- Only leave comments for correctness, security, performance, or test gaps. Use `[issue]` or `[suggestion]`; never `[nitpick]` on the patterns above.
