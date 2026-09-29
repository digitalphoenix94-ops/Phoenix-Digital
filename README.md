# Phoenix Digital website

The Phoenix Digital website: Next.js (App Router), TypeScript and Tailwind CSS. It is built as plain static files, so it runs on Vercel, Netlify or any cPanel shared host.

**Pages:** `/` (home) · `/work` · `/work/[slug]` (one per case study) · `/activations` · `/talent` · `/the-common` · `/contact`

---

## 1. Run it on your computer

You need [Node.js](https://nodejs.org) 20.9 or newer.

```bash
npm install
cp .env.example .env.local   # then fill in the values (see section 4)
npm run dev                  # open http://localhost:3000
```

---

## 2. Edit content (no coding needed)

All the words, numbers and lists live in **`/content`**. Open the file, change the text between the quotes, save, then rebuild or redeploy.

| File | What's in it |
| --- | --- |
| `content/site.ts` | Company name, tagline, phone, WhatsApp, email, **social links**, header menu |
| `content/home.ts` | Hero text, the "What we do" tabs, About text, founder quote, headline stats |
| `content/services.ts` | The nine services |
| `content/activations.ts` | Activation steps, venues, formats, report metrics |
| `content/talent.ts` | Talent flow, brand/talent benefits, the three representation models |
| `content/packages.ts` | Ignite / Accelerate / Dominate packages and the "How we work" steps |
| `content/case-studies.ts` | Every case study, the Work filters and the client name row |
| `content/the-common.ts` | The Common: pillars, event details, programme, **prices**, vendor info, gallery |
| `content/forms.ts` | Form fields, service options and budget ranges (KES) |

Rules of thumb:

- Keep the quotes and commas. If the build fails after an edit, a missing quote or comma is almost always the reason.
- Only use numbers you can stand behind.
- Anything marked `PLACEHOLDER` or `REVIEW` in `/content` still needs real information. Search for those words to find them:
  - `site.ts`: Instagram, TikTok and LinkedIn URLs. Set a `url` to `""` to hide that network.
  - `talent.ts`: the three models' bullets and "best for" lines. Check them against the portfolio deck.
  - `the-common.ts`: ticket and vendor prices, and what a ticket includes.

### Show or hide The Common prices

In `content/the-common.ts`, set `amount` in KES (for example `amount: 3500`) and set `showPrices: true`. With `showPrices: false` no prices appear anywhere on the site.

### Add photos

1. Save the photo as `.webp` or `.jpg`, about 1600px wide, in `public/images/...`. For example: `public/images/work/lintons-beauty-world/billboard.webp`.
2. In the content file, find the gallery slot with the matching caption and set its `src`:
   `{ src: "/images/work/lintons-beauty-world/billboard.webp", alt: "…", caption: "…" }`

Slots with `src: null` show a labelled placeholder, so you can see which photo goes where. The founder portrait works the same way (`about.founder.photo` in `home.ts`).

### Replace a logo

Swap the file in `brand-src/`, keeping the same name, then run `npm run brand`. That rebuilds the transparent web logos, the favicons and the Open Graph share images.

---

## 3. Add a case study

1. Open `content/case-studies.ts`.
2. Copy an existing `{ ... }` block inside `caseStudies` and paste it where you want it in the list.
3. Change these fields:
   - `slug`: the page address, lowercase with hyphens, e.g. `"safaricom-launch"` → `/work/safaricom-launch/`. Every slug must be different.
   - `client`, `summary`, `disciplines`, `challenge`, `whatWeDid`
   - `categories`: any of `"activations"`, `"atl"`, `"influencer"`, `"digital"` (these drive the Work filters)
   - `results`: the result tiles, e.g. `{ value: "3x", label: "E-commerce uplift" }`. The first one is the big number on the card.
   - `gallery`: photo slots (see "Add photos")
4. Optionally add the client to the `clients` list at the bottom of the file.
5. Rebuild. The page, the Work grid card and the sitemap entry are all created automatically.

---

## 4. Settings (environment variables)

Set these in `.env.local` for local work, or in your host's dashboard (Vercel: *Project → Settings → Environment Variables*; Netlify: *Site configuration → Environment variables*). They are baked in at build time, so **redeploy after changing them**.

| Variable | What it does |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Your live domain, e.g. `https://www.phoenixdigital.co.ke`. Used for canonical links, the sitemap and share previews. |
| `NEXT_PUBLIC_GA4_ID` | Google Analytics 4 measurement ID (`G-XXXXXXX`). Leave empty to switch analytics off. |
| `NEXT_PUBLIC_FORM_ENDPOINT` | Where form submissions go. See below. |
| `NEXT_PUBLIC_COMMON_FORM_ENDPOINT` | Optional separate endpoint for The Common forms (tickets, vendors, venue ideas). If empty, `NEXT_PUBLIC_FORM_ENDPOINT` is used. |

### Forms

The easiest option is [Formspree](https://formspree.io) (free tier available):

1. Create a form in Formspree using `digitalphoenix94@gmail.com`.
2. Copy its endpoint, e.g. `https://formspree.io/f/abcdwxyz`, into `NEXT_PUBLIC_FORM_ENDPOINT`.
3. Redeploy and send a test from `/contact`.

Any endpoint that accepts a JSON `POST` works too, for example your own serverless function. Each submission includes a `form` field (`brief`, `the-common-ticket`, `the-common-vendor` or `the-common-venue`) and a `_subject`, so you can tell them apart.

If no endpoint is set, the forms open the visitor's email app with their details filled in, so no enquiry is lost.

### Analytics events

With GA4 on, the site sends page views plus `generate_lead` (form sent), `whatsapp_click` and `copy_contact`. To track more, call `trackEvent()` from `lib/analytics.ts`.

---

## 5. Deploy

`npm run build` writes the whole site to the **`out/`** folder. That folder is the website.

To check it locally first: `npm run build && npm start`, then open http://localhost:3000.

### Vercel

1. Push this repo to GitHub, then **Add New → Project** in Vercel and import it.
2. Vercel detects Next.js. Leave the defaults.
3. Add the environment variables, then click **Deploy**.

### Netlify

1. **Add new site → Import an existing project**, then pick the repo.
2. `netlify.toml` already sets the build command (`npm run build`) and the publish folder (`out`).
3. Add the environment variables and deploy.

### cPanel / shared hosting

1. On your computer, run `npm install`, then `npm run build` with the environment variables set in `.env.local`.
2. In cPanel **File Manager**, open `public_html`. Upload **the contents** of `out/` (not the folder itself). A quick way: zip the contents of `out/`, upload the zip, then use *Extract*.
3. Make sure the hidden `.htaccess` file was uploaded. It sets the 404 page and browser caching.
4. Each page is its own folder (`/work/index.html` and so on), so no server rewrites are needed.

To update the site, rebuild and upload `out/` again.

---

## 6. Project structure

```
app/            Pages (one folder per URL), layout, sitemap, robots, favicons
components/     Building blocks; home sections live in components/sections
content/        ← all editable copy and data
lib/            SEO, form submission and analytics helpers
public/         Static files: logos (public/brand), share images, photos
brand-src/      Original logo files. `npm run brand` generates web versions from these
scripts/        Logo processing script
```

Brand colours and fonts are defined once at the top of `app/globals.css`.

### Checks

```bash
npm run typecheck   # TypeScript
npm run build       # full static build; fails if anything is broken
```
