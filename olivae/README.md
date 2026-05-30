# Olivae

A premium single-page landing for a fictional Mediterranean restaurant in Dubai.
Built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion. Static export — deployable anywhere.

## Develop

    npm install
    npm run dev      # http://localhost:3000

## Test

    npm test         # form validation unit tests (Vitest)

## Build (static export)

    npm run build    # outputs static site to ./out

Deploy the contents of `out/` to any static host (Vercel, Netlify, GitHub Pages, S3, …).

## Project structure

- `app/` — root layout (fonts, metadata) and the assembled page
- `components/` — section components + `ui/` primitives + `reserve/`
- `data/` — editable content (menu, gallery, hours, copy)
