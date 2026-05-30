# Olivae

A premium, single-page landing site for **Olivae** — a fictional high-end Mediterranean
restaurant set in Dubai. Built as a portfolio piece to showcase modern, agency-level
front-end craft: cinematic imagery, refined typography, and tasteful motion.

**🔗 Live demo: <https://pinkkaguy.github.io/olivae/>**

> Concept project. Olivae is not a real restaurant; all content is illustrative.

## Highlights

- **Full-screen cinematic hero** with parallax and a layered overlay for legibility
- **Scroll-aware navigation** — transparent over the hero, blurred dark on scroll, with a mobile overlay menu
- **Tabbed menu** with animated category transitions and signature-dish accents
- **Masonry gallery** with hover motion and a lightweight lightbox
- **Reservation form** with client-side validation and an animated confirmation state
- **Motion throughout** via scroll-triggered reveals (Framer Motion)
- **Fully responsive** and shipped as a **static export** — deployable to any host

## Tech stack

| Area | Choice |
|------|--------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS with a custom token palette |
| Motion | Framer Motion |
| Typography | Cormorant Garamond + Jost (`next/font`) |
| Testing | Vitest (form-validation logic) |
| Output | Static export (`output: 'export'`) |

## Getting started

```bash
cd olivae
npm install
npm run dev      # http://localhost:3000
```

## Quality checks

```bash
npm test         # validation unit tests
npm run lint     # ESLint
npm run build    # static export → olivae/out
```

## Deploy

The build produces a fully static site in `olivae/out`, hostable anywhere
(Netlify, Vercel, Cloudflare Pages, GitHub Pages, S3…).

- **Netlify:** base directory `olivae`, build command `npm run build`, publish directory `olivae/out`.
- **Drag & drop:** run `npm run build`, then drop `olivae/out` onto a static host.

## Project structure

```
.
├── docs/                 # design & architecture notes
└── olivae/               # the Next.js application
    ├── app/              # root layout (fonts, metadata) + assembled page
    ├── components/       # section components, ui/ primitives, reserve/
    └── data/             # editable content (menu, gallery, hours, copy)
```

See [`docs/DESIGN.md`](docs/DESIGN.md) for the design rationale and
[`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) for technical decisions.

## Credits

Photography via [Unsplash](https://unsplash.com). Design and build by the project author.
