# Bringing the site live

This site is a static Astro build deployed to GitHub Pages via the workflow at
`.github/workflows/deploy.yml`. Follow these steps once to get it live; after that,
every push to `main` deploys automatically.

## 1. Create the GitHub repository

If you haven't already:

```sh
git init          # if this folder isn't a git repo yet
git add .
git commit -m "Initial site"
```

Then create a repo on GitHub (e.g. via the "New repository" button, name it
`GlassesBeGone` to match the default config) and push:

```sh
git remote add origin https://github.com/<your-username>/GlassesBeGone.git
git branch -M main
git push -u origin main
```

## 2. Point the site config at your repo

Open `astro.config.mjs` and replace the placeholders:

```js
export default defineConfig({
  site: 'https://<your-username>.github.io',
  base: '/GlassesBeGone', // match your repo name exactly (case-sensitive)
});
```

- If you're using a **custom domain** instead of `<username>.github.io/GlassesBeGone`,
  set `base: '/'` and add a `public/CNAME` file containing your domain — see step 5.
- Commit and push this change.

## 3. Turn on GitHub Pages for this repo

In the GitHub repo: **Settings → Pages → Build and deployment → Source**, select
**GitHub Actions** (not "Deploy from a branch"). That's the only setting needed —
the workflow file already does the rest.

## 4. Let the workflow deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and
publishes it to Pages. Watch it run under the repo's **Actions** tab. Once it finishes
(green check), the site is live at:

```
https://<your-username>.github.io/GlassesBeGone/
```

You can also trigger a rebuild manually at any time from **Actions → Build and Deploy →
Run workflow** — useful after adding a new entry without any other code changes.

## 5. (Optional) Custom domain

1. Add a `public/CNAME` file containing just your domain, e.g. `GlassesBeGone.com`.
2. In your DNS provider, add a `CNAME` record pointing your subdomain at
   `<your-username>.github.io` (or `A`/`ALIAS` records for an apex domain — see
   [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)).
3. Set `base: '/'` in `astro.config.mjs` and update `site` to your custom domain.
4. In **Settings → Pages**, enter the custom domain and enable "Enforce HTTPS" once it's
   verified.

## Adding new entries after launch

Add a Markdown file to `src/content/bans/` (see the format described in `Readme.md`),
commit, and push to `main` — the site rebuilds and redeploys automatically. No extra
steps needed.
