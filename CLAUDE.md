# brutal-astro — Style & Architecture Guide for Agents

This file is the authoritative reference for any agent making changes to this repository. All constraints here are mandatory and take precedence over audit suggestions or inferred conventions.

---

## UnoCSS Setup

This project uses **`presetMini`** — not `presetWind` (Tailwind-compatible). Many Tailwind utility classes do not exist here.

**Safe utility classes (confirmed working with presetMini):**
- Layout: `flex`, `grid`, `block`, `inline`, `hidden`
- Flex: `flex-col`, `flex-row`, `items-center`, `items-start`, `justify-between`, `justify-center`, `justify-end`
- Spacing: `gap-*`, `p-*`, `px-*`, `py-*`, `pt-*`, `pb-*`, `m-*`, `mx-*`, `my-*`, `mt-*`, `mb-*`
- Sizing: `w-*`, `h-*`, `min-w-*`, `max-w-*`
- Typography: `font-bold`, `font-semibold`, `text-xl`, `text-2xl`, `text-sm`, `text-lg`, `underline`, `text-center`
- Colors: `bg-black`, `bg-white`, `text-black`, `text-white`, `border-black`, `border-white`
- Borders: `border`, `border-b-*`, `border-t-*`, `border-l-*`, `border-r-*`, `border-4`, `border-2`
- Hover: `hover:underline`, `hover:bg-black`, `hover:text-white`
- Custom (defined in `src/styles/global.css`): `card-shadow`, `bg-pink`, `bg-green`, `bg-purple`, `bg-blue`

**Unsupported — do not use:**
- `space-x-*` / `space-y-*` — use `gap-*` instead
- `transition-colors`, `transition-all`, `duration-*`, `ease-*` — no transition utilities in presetMini
- `hover:text-gray-*` — gray color scale not in presetMini palette; use `hover:underline` for link hover states
- `text-gray-*`, `bg-gray-*` — gray scale unavailable; use black/white or the custom color classes above
- `shadow-*` — use the custom `card-shadow` class instead
- `rounded-*` — not in presetMini; use inline styles if border-radius is needed

---

## Existing Pages

The following routes exist in `src/pages/`. **Only link to routes on this list.** Do not create links to pages that are not here, and do not create new pages unless explicitly asked.

| Route | File |
|-------|------|
| `/` | `src/pages/index.astro` |
| `/blog/` | `src/pages/blog/index.astro` |
| `/blog/[slug]/` | `src/pages/blog/[slug].astro` (dynamic — one per blog post) |
| `/blog/tags/[tag]/` | `src/pages/blog/tags/[tag].astro` (dynamic — one per tag) |
| `/404` | `src/pages/404.astro` |
| `/feed.xml` | `src/pages/feed.xml.js` |
| `/sitemap-index.xml` | `src/pages/sitemap-index.xml.ts` |
| `/sitemap-0.xml` | `src/pages/sitemap-0.xml.ts` |

**There is no `/contact/`, `/about/`, `/work/`, or `/services/` page.**

---

## Layout & Component Conventions

- **`<BaseNavigation>`** contains only the site name link and top-level nav links. Do not add page titles, `<h2>` tags, or descriptive text inside the nav header.
- **`<BaseHead>`** is the correct place for all `<meta>`, `<title>`, JSON-LD schema, and OG tag changes.
- **`<BaseFooter>`** is minimal; do not add navigation or page content there.
- Page-level headings (`<h1>`) belong in the page body, not in layout components.
- Do not add new component props or modify `Props` interfaces unless the task explicitly requires a new prop.

---

## Design System

This is a **neobrutalist** theme. The visual language is:
- Black borders (`border-black`, `border-b-4 border-black`, etc.)
- White or pastel backgrounds (white, `bg-pink`, `bg-green`, `bg-purple`, `bg-blue`)
- Bold black typography
- Hard drop shadows via `card-shadow` (not CSS box-shadow)
- No rounded corners
- No smooth color transitions

When adding interactive states (hover, focus), use stark changes: `hover:underline`, or swap `bg-black text-white` — not subtle color fades.

---

## File Structure

```
src/
├── components/
│   ├── layout/          # BaseNavigation, BaseFooter, BaseHead
│   ├── blog/            # BlogList, BlogContent, BlogSideBar, BlogSummaryCard
│   ├── home/            # Homepage-specific components
│   └── generic/         # Reusable components (SummaryCard, RecentBlogPosts, etc.)
├── content/
│   └── blog/
│       ├── drafts/      # Unpublished draft .md files (written by content pipeline)
│       └── *.md         # Published blog posts (numbered, e.g. 7-seo-vs-aeo.md)
├── layouts/
│   ├── Default.astro    # Main layout (wraps all pages)
│   └── BlogPost.astro   # Blog post layout
├── pages/               # Astro file-based routing (see Existing Pages above)
├── styles/
│   └── global.css       # Custom CSS classes and CSS variables
└── assets/              # Static image assets
```
