# vnagpal25.github.io

Personal site, built with [Astro](https://astro.build) and deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Editing content

- **Bio**: `src/pages/index.astro`
- **Experience, education, awards, links**: `src/data/site.ts`
- **Projects**: one Markdown file per project in `src/content/projects/`. Frontmatter fields are defined in `src/content.config.ts`; leave out `end` for ongoing work. Projects are sorted newest first by `start`.
- **Headshot**: `src/assets/headshot.jpg`
- **Colors and type**: `src/styles/global.css`
