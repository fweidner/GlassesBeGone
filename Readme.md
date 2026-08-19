# SmartglassesBanned

A map and archive of real venues, businesses, events, and jurisdictions that have banned or
restricted smart glasses (e.g. Meta Ray-Ban), sourced from news coverage.

Static site built with [Astro](https://astro.build), [Leaflet](https://leafletjs.com), and
OpenStreetMap tiles. No database, no backend, no user-submission flow — entries live as
Markdown files in this repo and are deployed to GitHub Pages on every push to `main`.

## Testing locally

Install dependencies once, then use whichever of these fits what you're checking:

```sh
npm install
```

**Dev server** — live-reloads as you edit files:

```sh
npm run dev
```

Open the URL it prints, e.g. `http://localhost:4321/SmartglassesBanned` (the
`/SmartglassesBanned` suffix comes from `base` in `astro.config.mjs` — it's there so links
behave the same locally as they will on GitHub Pages).

**Type/content check** — catches content-schema errors (e.g. a malformed entry) and
TypeScript issues without a full build:

```sh
npm run check
```

**Production build + preview** — builds the actual static output to `./dist` and serves it,
closer to what GitHub Pages will serve than the dev server:

```sh
npm run build
npm run preview
```

Run `npm run check` and `npm run build` before pushing — the GitHub Actions workflow runs
`npm run build` too, so anything that fails locally will fail the deploy.

## Adding an entry

Add a new Markdown file to `src/content/bans/`, following the format of the existing entries:

```markdown
---
name: Venue or jurisdiction name
category: business # business | authority | education | event | region
lat: 51.5074
lng: -0.1278
address: "Optional human-readable location"
banDate: 2026-08-10 # optional
sourceUrl: https://example.com/the-article
sourceName: Publication Name
---

Short summary of the ban and why it happened.
```

Commit, push (or open a PR), and the site rebuilds automatically.

## Deploying

See [DEPLOYING.md](./DEPLOYING.md) for the full step-by-step guide to bringing the site live
on GitHub Pages (repo setup, config, custom domain).
