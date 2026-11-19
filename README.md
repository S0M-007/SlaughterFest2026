# Slaughter Fest 2026

Website for Slaughter Fest 2026: Saturday 5 December 2026, The Humming Tree, Bangalore. Produced by Surgeculture.

A small static site built with [Astro](https://astro.build). No server, no database, no client framework. Fonts are self-hosted (open-licence) and there are no third-party requests.

## Run it

```
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs the site to dist/
npm run preview  # serve the built dist/ locally
```

Requires Node 18+ (developed on Node 22). Deploy the `dist/` folder to any static host (Cloudflare Pages, Netlify, Vercel, GitHub Pages, plain S3).

## Where to change things

Everything that changes between now and the event lives in three JSON files. Edit, save, rebuild.

| File | What it holds |
|---|---|
| `src/data/site.json` | Date, venue, producer, **ticket URL**, doors, age policy, prices, getting there. A value of `null` shows `[TBA]` on the page. |
| `src/data/bands.json` | The lineup, in billing order (top to bottom). Add, remove or reorder bands here. |
| `src/data/partners.json` | Partner strip. Set `url` to make a logo a link. |

Common jobs:

- **Ticket link is ready:** set `"ticketUrl"` in `site.json`. Every "Book tickets" button then opens it in a new tab and the "link coming soon" text disappears.
- **Confirm doors, age policy, prices:** replace `null` with text in `site.json`.
- **Fill in a band's details:** set `city`, `descriptor` and `fact` in `bands.json`. `null` renders as `[TBA]`.
- **Add a band:** copy an entry in `bands.json`, add its files under `public/assets/bands/` and `public/assets/photos/`. A band without a `logo` is set as text. `"card": true` on a photo is for studio shots on a white background (printed-card look).
- **Production URL known:** uncomment `site` in `astro.config.mjs` to turn on canonical and social-share URLs.

## Structure

```
src/
  data/         site.json, bands.json, partners.json   <- edit these
  components/   Header, Hero, Marquee, Lineup, Facts, Tickets, Partners, Footer
  layouts/      Base.astro (head, fonts, small script)
  styles/       global.css (palette tokens at the top)
  pages/        index.astro
public/assets/  logos, band logos, photos, partner logos, og.jpg
design/         research, design directions, palette, early prototypes (not part of the build)
```

## Design

Palette and mood come from the client's 2026 poster; see `design/PALETTE.md`. The festival logo is used as supplied and never re-drawn. Blackletter (UnifrakturMaguntia) is for large headings only, with plain faces for all facts.

## Client files

The raw partner and artist folders (`Partner Logos-*`, `Slaughterfest 2026 - Artists-*`) are git-ignored. They are large and include tech riders and contact details, which must not be published. Only resized web copies are in `public/assets/`.

## Before launch

- Real ticket URL, doors, age policy, prices.
- Confirm billing order and the details for Fallen Letters, Backrooms and Haiku Like Imagination.
- A logo file for Astrit, and a clean venue logo if wanted.
- Confirm permission to show the partner logos, and add partner links.
- Add `site` URL, then check the social preview image (`public/assets/og.jpg`).
- Convert photos to WebP/AVIF if page weight matters (currently about 4 MB total).
