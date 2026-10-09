# Hearth & Ladle Catering: static React site

A fully static, responsive catering website built with **Vite + React 19 + TypeScript + Tailwind CSS v4**. No backend, no database, no API keys.

Everything is original: the name, copy, colours and every picture (hand-built SVG) were created from scratch. Contact details, testimonials and numbers are **placeholders** for you to replace with your own.

## 1. Prerequisites

- Node.js 20.19+ or 22+ (check with `node -v`)
- npm 10+ (comes with Node)

## 2. Run it

```bash
npm install        # install dependencies
npm run dev        # dev server at http://localhost:5173 with hot reload
npm run typecheck  # TypeScript check only
npm run build      # type-check + production build into ./dist
npm run preview    # serve ./dist locally to test the real build
```

## 3. Project layout

```
catering-site/
├── index.html              # page shell, title, meta description, favicon
├── vite.config.ts          # Vite config (React plugin + Tailwind plugin, base './')
├── tsconfig*.json          # TypeScript config (app code vs. vite.config.ts)
├── public/favicon.svg      # copied as-is to the build
└── src/
    ├── main.tsx            # React entry point
    ├── App.tsx             # page = list of sections
    ├── index.css           # Tailwind import + brand colours (@theme) + animations
    ├── data/content.ts     # ALL text, services, stats, FAQs, contact details
    └── components/         # Header, Hero, About, Services, Safety, Process,
                            # Testimonials+Gallery, Faq, Contact, Footer, SVG art
```

## 4. How the configuration works

**Tailwind v4 needs no `tailwind.config.js` or PostCSS file.** It is wired in two places only:

1. `vite.config.ts` registers the `@tailwindcss/vite` plugin.
2. `src/index.css` starts with `@import "tailwindcss";`, and the `@theme { ... }` block defines brand colours and fonts. A token like `--color-forest-700` automatically gives you `bg-forest-700`, `text-forest-700`, and so on.

**`base: './'` in `vite.config.ts`** makes the build use relative paths, so `dist/` works on any static host or in a sub-folder.

**TypeScript** uses the standard Vite split: `tsconfig.app.json` for `src/`, `tsconfig.node.json` for `vite.config.ts`, and `tsconfig.json` linking both. `npm run build` runs `tsc -b` first, so type errors stop a bad build.

## 5. Make it yours

| What | Where |
|---|---|
| Business name, phone, email, WhatsApp, address | `src/data/content.ts` → `brand` |
| Services, stats, FAQs, testimonials, steps | `src/data/content.ts` |
| Colours and fonts | `src/index.css` → `@theme` |
| Page title and description (SEO) | `index.html` |
| Favicon | `public/favicon.svg` |
| Section order | `src/App.tsx` |
| Real photos | put files in `src/assets/`, `import pic from '../assets/pic.webp'`, and use `<img src={pic} alt="..." />` instead of the SVG components |

**WhatsApp number format:** digits only, with country code, no `+` (for example `919876543210`).

## 6. How the contact form works without a backend

The form validates in the browser, then either opens WhatsApp with the message pre-filled (`wa.me` link) or opens the visitor's email app (`mailto:`). Nothing is stored on a server. If you later want submissions emailed silently, use a form service such as Formspree or Web3Forms and point the form's `fetch` to their endpoint.

## 7. Deploy (all free options)

Run `npm run build`, then upload the **`dist/`** folder:

- **Netlify / Cloudflare Pages / Vercel:** connect the repo, build command `npm run build`, output directory `dist`.
- **GitHub Pages:** push `dist/` to a `gh-pages` branch (or use an Actions workflow). The relative `base` already handles the repo sub-path.
- **Any hosting (cPanel, S3, Nginx):** upload the contents of `dist/`.

Because the site is one page with anchor links (`#services`, `#contact`), you do not need any server rewrite rules.

## 8. Keeping it original

- Do not copy text, logos, certificates or photos from other websites. Use your own photos and wording.
- Only show certifications (ISO, HACCP, FSSAI and so on) that your business actually holds.
- Replace the sample testimonials with real feedback you have permission to publish.
