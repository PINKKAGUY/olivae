# Design Rationale

Olivae is a concept landing site for a high-end Mediterranean restaurant in Dubai.
The goal is a single, immersive page that feels like a destination — unhurried,
warm, and unmistakably premium.

## Direction

**Dark luxe.** A near-black canvas lets food photography and gold accents carry the
page. The mood is candlelit and editorial rather than bright and casual.

### Palette

| Token | Value | Use |
|-------|-------|-----|
| Charcoal | `#0E0E0C` | Primary background |
| Night | `#16170F` | Alternating section background |
| Gold | `#C8A24B` | Accents, eyebrows, prices, CTAs |
| Gold light | `#E3C77A` | Hover states |
| Olive | `#6B7245` | Supporting accent |
| Ivory | `#F4EFE6` | Primary text |
| Warm gray | `#A9A498` | Secondary text |

### Typography

- **Cormorant Garamond** — a high-contrast serif for headings, the wordmark, and
  prices. It carries the fine-dining character.
- **Jost** — a clean geometric sans for body copy, labels, and navigation.
- Section labels use small-caps gold "eyebrows" with wide letter-spacing for rhythm.

## Page composition

A single long page, ordered to move a visitor from atmosphere to intent:

1. **Hero** — full-screen photography, the wordmark, and two calls to action
   (reserve, view menu). A layered gradient plus a center vignette keep the
   overlaid text legible regardless of the image beneath it.
2. **Story** — a split image/text section establishing provenance, with a few
   restrained key figures.
3. **Menu** — categories (Mezze, From the Sea, Mains, Desserts) as tabs, with
   signature dishes accented and prices in AED.
4. **Gallery** — a masonry grid mixing dishes, interior, and skyline, with a
   lightbox for closer viewing.
5. **Reserve** — a visual reservation form that validates input and confirms with
   an animated success state.
6. **Footer** — hours, location, and contact details.

## Motion

Motion is used to reward scrolling, never to distract:

- Sections fade and rise into view as they enter the viewport.
- The hero background moves with a subtle parallax.
- Menu categories and the gallery lightbox transition smoothly.
- The reservation form animates between its input and confirmation states.

## Accessibility & legibility

- Text over imagery always sits on a darkening overlay for contrast.
- Interactive elements have clear hover and focus states.
- Color choices keep body and accent text readable against the dark canvas.
