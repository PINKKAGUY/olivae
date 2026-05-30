# Architecture

A concise overview of how the project is built and why.

## Stack

- **Next.js 16 (App Router)** with **React 19** and **TypeScript**
- **Tailwind CSS** for styling, with design tokens defined in `tailwind.config.ts`
- **Framer Motion** for scroll reveals, parallax, and state transitions
- **next/font** to self-host Cormorant Garamond and Jost (no runtime font requests)
- **Vitest** for unit-testing the form-validation logic

## Static export

The site ships as a fully static build (`output: 'export'` in `next.config.mjs`),
producing plain HTML/CSS/JS in `olivae/out`. There is no server runtime, which keeps
hosting simple and free across most static platforms.

Because the export has no image-optimization server, `next/image` runs with
`unoptimized: true`, and the Unsplash host is allow-listed via `images.remotePatterns`.

## Project layout

```
olivae/
├── app/
│   ├── layout.tsx        # fonts, metadata, root HTML
│   ├── page.tsx          # composes the sections in order
│   └── globals.css       # Tailwind layers + small utilities
├── components/
│   ├── ui/               # reusable primitives
│   │   ├── Reveal.tsx    # scroll-triggered fade/rise wrapper
│   │   ├── Section.tsx   # section shell + anchor + container
│   │   ├── Eyebrow.tsx   # gold small-caps label
│   │   └── GoldButton.tsx# link/button CTA
│   ├── Nav.tsx           # scroll-aware header + mobile menu
│   ├── Hero.tsx          # full-screen hero with parallax
│   ├── Story.tsx
│   ├── Menu.tsx          # tabbed categories
│   ├── Gallery.tsx       # masonry grid + lightbox
│   ├── Footer.tsx
│   └── reserve/
│       ├── Reserve.tsx   # form UI + animated success state
│       ├── validate.ts   # pure validation logic
│       └── validate.test.ts
└── data/                 # site copy, menu, gallery, info
```

## Design decisions

**Content as data.** All copy — menu items, gallery images, hours, hero and story
text — lives in `data/`. Sections render from these modules, so updating the site is
a matter of editing data rather than markup.

**Focused components.** Each section is a single component with one responsibility.
Shared behavior (scroll reveals, section shells, labels, buttons) is factored into
`components/ui/` primitives and reused throughout.

**Server vs. client.** Presentational sections render on the server. Only the
interactive pieces — the nav, hero parallax, tabbed menu, gallery lightbox, and
reservation form — opt into the client.

**Testable validation.** The reservation form's validation is a pure function
separated from the component, which keeps it simple to unit-test while the UI stays
declarative.

## Running locally

```bash
cd olivae
npm install
npm run dev      # development server
npm test         # validation tests
npm run build    # static export to olivae/out
```
