# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

A personal portfolio built on the **Magic Portfolio** template (Next.js 16 App Router + React 19 + [Once UI](https://docs.once-ui.com)). Content is mostly config-driven (`src/resources/`) plus MDX files for work projects and blog posts. Requires Node.js 18.17+.

## Commands

```bash
npm install
npm run dev          # dev server
npm run build        # production build (also the main type/route check — there is no test suite)
npm run start        # serve the production build
npm run biome-write  # format the whole repo with Biome
npx @biomejs/biome check --write <files>   # lint + fix specific files (what lint-staged runs)
```

- Formatting/linting is Biome (`biome.json`: 2-space indent, 100-char lines, double quotes). `.lintstagedrc.js` runs `biome check --write` + `biome format --write` on staged JS/TS and JSON.
- `npm run lint` runs `biome check .`.
- There are no tests; verify changes with `npm run build` and by running the dev server.

## Architecture

### Configuration & content (`src/resources/`)
The site is live at https://sagargaud.vercel.app (`baseURL`). Almost all site behaviour is driven from two files, re-exported through `src/resources/index.ts` (import from `@/resources`):
- `once-ui.config.ts` — `baseURL` (used for SEO/schema/OG), `routes` (enable/disable `/`, `/about`, `/work`, `/blog`, `/gallery`), `protectedRoutes`, `display`, fonts, theme `style`/`effects`/`dataStyle`, schema, mailchimp, social sharing.
- `content.tsx` — `person`, `social`, `home`, `about` (work experience, studies, skills, sections toggled via `display` flags), `blog`, `work`, `gallery`, `newsletter`. (The README calls it `content.js`; it is `content.tsx`.)
- Types for both live in `src/types/` (`config.types.ts`, `content.types.ts`).

Pages read from these objects and render sections conditionally, so adding/removing content is usually a config edit rather than a component change.

### MDX posts and projects
- Work projects: `src/app/work/projects/*.mdx`; blog posts: `src/app/blog/posts/*.mdx`. The filename is the URL slug.
- `src/utils/utils.ts#getPosts(pathSegments)` reads a directory with `fs` + `gray-matter` and returns `{ metadata, slug, content }`. Frontmatter fields: `title`, `subtitle`, `publishedAt`, `summary`, `image`, `images[]`, `tag`, `team[]` (`name`, `role`, `avatar`, `linkedIn`), `link`.
- `[slug]/page.tsx` routes use `generateStaticParams` over `getPosts`, then render the body via `CustomMDX` (`src/components/mdx.tsx`), which wraps `next-mdx-remote/rsc` with Once UI components (headings with anchor links, code blocks, media, tables, etc.). To make a new component available in MDX, add it to the `components` map in `mdx.tsx`.
- Images referenced in frontmatter/MDX live under `public/images/` (3D renders in `public/images/projects/3d/`). A project with `images: []` renders without a carousel.
- `src/app/blog/posts/` is currently empty and `/blog` is disabled; `getMDXFiles` returns `[]` for a missing folder, and the sitemap/RSS skip disabled routes.
- `HeroVideo` (`src/components/HeroVideo.tsx`, configured by `home.heroVideo`) is the full-bleed ocean video behind the home intro, served from `public/video/`. It plays once and holds the last frame, measures its own position in JS to span the page (100vw would add a horizontal scrollbar), loads the 720p file under 1024px, and shows the end-frame still for reduced motion or blocked autoplay. The intro column sets `data-theme="dark"` so its text stays light over the video in both themes.
- `gallery.series` groups renders of one scene (two side by side; three or more with the first large and the rest stacked), above the masonry grid or below it with `placement: "bottom"`; the layout is a CSS grid in `src/components/gallery/GalleryView.module.scss`, since Once UI breakpoint styles weren't applied to it.
- `YouTubeEmbed` (`src/components/YouTubeEmbed.tsx`) is registered in the MDX component map and drives the home-page showreel (`home.showreel`).

### Routing guard and password protection
- `src/app/layout.tsx` wraps every page in `Providers` (Once UI theme/data-style from config) and `RouteGuard`.
- `RouteGuard` (client component) shows the 404 page if a route is disabled in `routes` (`/blog/*` and `/work/*` inherit from their parent), and prompts for a password on routes listed in `protectedRoutes`.
- Password flow: `POST /api/authenticate` compares against `PAGE_ACCESS_PASSWORD` (see `.env.example`) and sets an httpOnly `authToken` cookie; `GET /api/check-auth` verifies it. The cookie value is the constant `"authenticated"`, so anyone can forge it — it's only a soft gate, and the checks run client-side. `protectedRoutes` is currently empty.

### Other API routes
- `/api/og/generate` — dynamic OG image via `next/og`, used as the `image` for every page including home. The favicon is the avatar, set via `<link>` tags in `src/app/layout.tsx`.
- The template's `/api/og/fetch` and `/api/og/proxy` routes were removed (open proxies; only needed by Once UI's `OgCard`, which isn't used).
- `/api/rss` — RSS feed of blog posts. `sitemap.ts` and `robots.ts` are generated from `routes` and posts.

### Metadata
Pages use Once UI's `Meta.generate` and `<Schema>` with `baseURL` and `person` from `@/resources` for SEO/structured data.

## UI conventions (from `.agents`)

The `.agents` file holds the Once UI rules to follow when writing UI. Key points:
- Use Once UI primitives, not raw `<div>`s: `<Column>` (vertical), `<Row>` (horizontal), `<Grid>`; text via `<Heading>`/`<Text>` with `variant` (e.g. `"display-strong-s"`, `"body-default-m"`).
- Style with props and tokens, never hex codes: `gap`/`padding`/`margin` (spacing tokens like `"16"` or numbers = rem), `fillWidth`/`fillHeight`/`fill`, `maxWidth="xs".."xl"`, `background`/`onBackground` and `solid`/`onSolid` pairs for dark-mode-safe color, `border="neutral-alpha-medium"`.
- `horizontal`/`vertical`/`center` control flex alignment; `align` sets **text-align** only (don't use it to center layout children).
- Responsive overrides via `s`/`m`/`l` breakpoint objects; `hide`, `dark`, `light` props for visibility.
- Use inline styles sparingly; fall back to an SCSS module (as existing components do) for selectors/states. No Tailwind or new styling libraries.
- New product-specific components go in `src/components/` built from Once UI primitives and exported via the barrel `src/components/index.ts`; spread Flex props onto the wrapper so callers can override layout.
- Default `<Button>`/`<IconButton>` size is `m`; give icon-only buttons a `tooltip`.
