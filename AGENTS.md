<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Stack

Next.js 16.4.6 (App Router, Turbopack by default) + React 19.3.1 + TypeScript, Tailwind CSS v4, shadcn/ui (`base-nova` style), better-auth + MongoDB. No test runner, no CI config, and no `opencode.json` in this repo.

## Commands (npm)

- `npm run dev` / `npm run build` / `npm run start` — wrap `next dev` / `next build` / `next start`.
- `npm run lint` — ESLint CLI directly. `next lint` was removed in Next 16, and `next build` no longer lints; do not invoke either for linting.
- `npm run typecheck` — `tsc --noEmit`.
- `npm run format` — Prettier `--write "**/*.{ts,tsx}"` only (CSS/JSON/MD are not formatted by it).
- There is no `test` script. Verify with `npm run lint` and `npm run typecheck`; add `npm run build` for routing/build changes.

## Conventions

- Prettier: no semicolons, double quotes, 2-space indent, 80-col width, `trailingComma: es5`. Match this rather than hand-formatting; run `npm run format`.
- `@/*` maps to the repo root (tsconfig). shadcn aliases: `@/components`, `@/components/ui`, `@/lib/utils`, `@/hooks`.
- `lib/utils.ts` re-exports `cn` from the `cn` npm package — do not replace it with a local `clsx`/`tailwind-merge` implementation.
- Tailwind v4 is CSS-first: there is no `tailwind.config.*`; the theme is in `app/globals.css` (`@import "tailwindcss"`, `@theme inline`, `@custom-variant dark`). Use v4 utility names, e.g. `bg-linear-to-*` rather than `bg-gradient-to-*`.

## App structure and auth wiring

- Route groups `(auth)` and `(root)` under `app/` do not appear in URLs (`/`, `/signin`, `/signup`). `app/(root)/layout.tsx` renders the Navbar; the top-level `app/layout.tsx` wraps everything in `ThemeProvider` (class-based dark mode; pressing bare `d` outside an input toggles it).
- Auth is better-auth: server config in `lib/auth.ts`, client in `lib/auth-client.ts`, catch-all handler in `app/api/auth/[...all]/route.ts`. Email/password and GitHub OAuth are enabled.

## Local setup / env

- `.env*` is gitignored. `.env` must define `BETTER_AUTH_SECRET`, `BETTER_AUTH_URL`, `GITHUB_CLIENT_ID`, and `GITHUB_CLIENT_SECRET`.
- `lib/auth.ts` hardcodes MongoDB at `mongodb://localhost:27017/database` using db `mentorlagbe` — a local MongoDB must be running for auth to work.
- Add shadcn components with `npx shadcn@latest add <name>`; they land in `components/ui/` and are imported as `@/components/ui/<name>`.
