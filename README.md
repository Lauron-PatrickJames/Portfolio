# Portfolio

Personal portfolio of Patrick James Lauron, built with React, TypeScript, and Vite.

## Run locally

```bash
npm install
npm run dev
```

## Updating content

All text, links, projects, experience, and certifications live in `src/data/content.ts`. Components in `src/components/` only handle layout, so most updates are a one-file edit.

Images go in `public/assets/` and are referenced as `/assets/<file>`.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — type-check and build to `dist/`
- `npm run lint` — run ESLint
- `npm run preview` — preview the production build

## Deploy

Netlify reads `netlify.toml`: build command `npm run build`, publish directory `dist`.
