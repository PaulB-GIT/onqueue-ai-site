# ON-QUEUE AI — Marketing Website

A fast, three-page static website (plus a footer-linked Privacy Policy page) for **ON-QUEUE AI**, built with [Astro](https://astro.build) and TypeScript.

| Page | Address | File |
|---|---|---|
| Services (homepage) | `/` | `src/pages/index.astro` |
| How It Works | `/how-it-works/` | `src/pages/how-it-works.astro` |
| Pricing | `/pricing/` | `src/pages/pricing.astro` |

**BOOK A DEMO** is a button, not a page. Every one of them goes to the demo section at the bottom of the homepage (`/#book-a-demo`), which opens an email to **contact@onqueueva.com** with the subject **"ON-QUEUE AI Demo Request"**.

The site has no database, no login, no forms, no tracking, and no live calling. It is plain HTML and CSS with two tiny scripts (the mobile menu and the copy-email button). Everything still reads correctly with JavaScript turned off.

---

## Where to edit things

| You want to change… | Edit this file |
|---|---|
| Email, subject line, brand names, Client Portal link (`portalUrl`), Privacy/Terms links, search-engine setting | `src/config/site.ts` |
| Privacy Policy text | `src/data/privacyPolicy.ts` |
| The logo | `public/brand/` + the `logo` section in `src/config/site.ts` |
| Homepage text | `src/data/home.ts` |
| How It Works text and FAQ | `src/data/howItWorks.ts` |
| Pricing text, plan prices, minutes, comparison table and pricing FAQ | `src/data/pricing.ts` |
| Colors, fonts, spacing | `src/styles/tokens.css` |
| Browser-tab icon (favicon) | `public/favicon.ico` and the other icon files in `public/`. They are the square icon from the logo. |
| Sample call recordings (audio player + transcript) | `public/audio/` and `recording` in the `showcase` section of `src/data/home.ts`. Step-by-step: `ADDING-RECORDINGS.md` |
| Social-share image (shown when the link is shared) | `public/og-image.jpg` (1200 × 630). Its source is `scripts/og.html`. |

You never need to touch the page layout files to change wording.

### The logo

The official logo is in place. The files Paul supplied are kept unchanged in `brand-originals/`:

- `ON-QUEUE AI Logo on White.png` (2172 × 724) — the original artwork.
- `ON-QUEUE AI Logo on White - trimmed.png` (2110 × 514) — the same file with only the empty white margin removed (approved by Paul). **The site uses this one.**
- `ON-QUEUE AI voice agents logo (transparent).png` — not used. Its navy lettering would disappear on the dark header, and the cut-out edges show slight halos.

The files in `public/brand/` are high-quality downsized copies of the trimmed file (88 px and 132 px tall) so the header loads quickly. Nothing is redrawn or recolored, and proportions are exact.

Because the artwork is navy on white, the site shows it on a clean white panel in the dark header and footer. A version designed for dark backgrounds (light lettering) would let it sit directly on the navy.

To change the logo later, put the new files in `public/brand/`, then update the `logo` section in `src/config/site.ts` (file paths and the original pixel size). If you add a dark-background version as `srcOnDark`, the white panel is dropped automatically.

### Privacy Policy

`/privacy-policy/` holds the Privacy Policy from `brand-originals/ON-QUEUE_AI_Privacy_Policy.docx`, word for word. It is linked from the footer only, not the main menu. Edit it in `src/data/privacyPolicy.ts`.

The "Last updated" date is November 22, 2026. Section 5's international-processing paragraph and its placeholder were removed at Paul's request, so the page has no open placeholders and no draft banner.

---

## Part 1 — Run the site on your computer

### One-time setup

1. Install **Node.js 22** (the "LTS" version) from <https://nodejs.org>. The project needs version 22.23.4 or newer. To check, open a terminal and type:
   ```bash
   node -v
   ```
   - On Mac, the terminal is the **Terminal** app.
   - On Windows, use **PowerShell**.
2. Open the terminal in the project folder (the folder that contains `package.json`):
   ```bash
   cd path/to/onqueue-ai-site
   ```
3. Install the project's building blocks. This reads `package-lock.json` so you get exactly the tested versions:
   ```bash
   npm ci
   ```

### Everyday commands

| Command | What it does |
|---|---|
| `npm run dev` | Starts a live preview at <http://localhost:4321>. Changes appear as you save. Press `Ctrl + C` to stop. |
| `npm run build` | Builds the final website into the `dist` folder. |
| `npm run preview` | Shows the built `dist` folder at <http://localhost:4321>, exactly as it will be online. |
| `npm run check` | Checks the code for type errors. |

## Part 2 — Review all three pages

With `npm run dev` (or `npm run build` then `npm run preview`) running, open:

- <http://localhost:4321/> — Services
- <http://localhost:4321/how-it-works/> — How It Works
- <http://localhost:4321/pricing/> — Pricing

A quick review checklist:

- [ ] Click every **BOOK A DEMO** button. Each should land on "See how it could work for your business."
- [ ] Click **EMAIL TO ARRANGE A DEMO**. Your email app should open with the subject "ON-QUEUE AI Demo Request". Nothing on the page claims the email was sent.
- [ ] Click **Copy email** and paste somewhere to confirm.
- [ ] Make the browser window narrow (or use your phone on the same Wi-Fi after running `npm run dev -- --host`). Open and close the menu.
- [ ] Open and close a few FAQ questions on How It Works.
- [ ] Press `Tab` repeatedly on a page. A gold outline should show where you are, and the first `Tab` shows "Skip to content".
- [ ] Read all the wording once more for accuracy.

## Part 3 — Store the project on GitHub

GitHub keeps a safe copy of your code, and Render builds the site from it.

1. Create a free account at <https://github.com> if you don't have one.
2. Click **New repository**. Name it, for example, `onqueue-ai-site`. Choose **Private**. Do **not** tick "Add a README" (you already have one). Click **Create repository**.
3. Install Git from <https://git-scm.com> if `git --version` doesn't work in your terminal.
4. In the project folder, run these one at a time (replace `YOUR-USERNAME`):
   ```bash
   git init
   git add .
   git commit -m "ON-QUEUE AI website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/onqueue-ai-site.git
   git push -u origin main
   ```
   Git will ask you to sign in through your browser. Never paste your password or tokens into a chat.

The `.gitignore` file already keeps `node_modules`, `dist` and any `.env` file out of GitHub. `package-lock.json` **is** included on purpose so Render installs the same versions you tested.

## Part 4 — Put it on Render (only after you approve the preview)

> **Important: a Render address is public.** As soon as Render finishes the first deploy, anyone with the `…onrender.com` link can open the site. The site tells search engines not to list it (a "noindex" tag), but **noindex is not a password**. It only asks search engines not to show the page in results. Don't deploy until you're comfortable with the content being viewable.

These steps follow Render's official docs at <https://render.com/docs/static-sites> (checked November 2026). Render's screens change from time to time, so the labels may differ slightly.

1. Sign in at <https://dashboard.render.com>. Sign in with GitHub when asked, and allow Render to see the `onqueue-ai-site` repository.
2. Click **New** → **Static Site**.
3. Choose the `onqueue-ai-site` repository.
4. Fill in the settings:

   | Setting | Value |
   |---|---|
   | Name | `onqueue-ai-site` (this becomes part of the onrender.com address) |
   | Branch | `main` |
   | Root directory | leave empty |
   | Build command | `npm ci && npm run build` |
   | Publish directory | `dist` |

5. Under **Environment variables**, add `NODE_VERSION` = `22.23.5` so Render builds with the same Node.js version you tested. (Render's own default is currently Node 24.)
6. Click **Create Static Site**. Render installs, builds and publishes. When it says **Live**, click the `…onrender.com` link.
7. In the site's settings, open **Headers** and add these (path `/*` for each). They match `render.yaml`:
   - `X-Robots-Tag` = `noindex, nofollow` (keeps the preview out of search; **remove at launch**)
   - `X-Content-Type-Options` = `nosniff`
   - `X-Frame-Options` = `DENY`
   - `Referrer-Policy` = `strict-origin-when-cross-origin`

   Optionally add `Cache-Control` = `public, max-age=31536000, immutable` for the path `/_astro/*`.

**Alternative: Blueprint.** Instead of steps 2–7 you can click **New** → **Blueprint** and choose the repository. Render reads `render.yaml` and applies all the settings and headers above automatically.

After setup, every time you push a change to the `main` branch on GitHub, Render rebuilds the site automatically.

### Review the deployment

Open the onrender.com address and repeat the Part 2 checklist, on a phone too. If a build fails, open the deploy's **Logs** in Render. The error is usually near the bottom.

## Part 5 — Connect a subdomain later (for example `ai.onqueueva.com`)

Only do this after final approval. This **does not** change your existing onqueueva.com website or your email, as long as you only add the one record Render gives you.

1. In Render, open the static site → **Settings** → **Custom Domains** → **+ Add Custom Domain**. Enter `ai.onqueueva.com` and save.
2. Render shows the exact DNS record to add. For a subdomain this is normally a **CNAME** record named `ai` that points to your site's `…onrender.com` address. **Copy the value Render shows. Don't guess it.**
3. Sign in wherever onqueueva.com's DNS is managed (often your domain registrar or Cloudflare). Add **only** that record.
   - Do **not** change or delete the existing records for `onqueueva.com` or `www`.
   - Do **not** touch **MX** records (those deliver your email).
   - Render asks you not to have an **AAAA** record for the subdomain.
4. Back in Render, click **Verify**. DNS can take a few minutes up to a few hours. Render then issues the HTTPS certificate automatically.

### Launch switch (when the site is final and on its real domain)

The site address `https://ai.onqueueva.com` is already set in `astro.config.mjs`, so canonical URLs, share links and the sitemap (`/sitemap-index.xml`) already point there.

1. In `src/config/site.ts`, set `allowIndexing: true`. This removes the noindex tag and adds the sitemap to robots.txt.
2. Remove the `X-Robots-Tag` header in Render (and from `render.yaml` if you used the Blueprint).
3. Push to GitHub. Render rebuilds automatically.

---

## Project structure

```
onqueue-ai-site/
├── astro.config.mjs        Site settings (static output, site address, sitemap)
├── brand-originals/        Original logo files and Privacy Policy document (not published)
├── render.yaml             Optional Render Blueprint
├── package.json            Scripts and dependencies
├── package-lock.json       Exact tested versions (commit this)
├── .node-version           Node.js version used for testing
├── public/
│   ├── brand/              Web-sized copies of the official logo
│   ├── favicon.ico, favicon-16x16.png, favicon-32x32.png   Browser-tab icons
│   ├── apple-touch-icon.png, android-chrome-*.png, site.webmanifest   Phone home-screen icons
│   └── og-image.jpg        Share image (1200×630)
├── scripts/og.html         Source for the share image
└── src/
    ├── config/site.ts      ← business details, logo, links, search setting
    ├── data/               ← all page wording
    ├── styles/             tokens.css (brand design tokens) + global.css
    ├── layouts/BaseLayout.astro   Page shell: SEO tags, header, footer
    ├── components/         Header, Footer, Button, Logo, Icon, ServiceCard,
    │                       SectionHeading, PageHero, FAQ, DemoRequest,
    │                       VoiceInterface, Conversation, CtaBand
    └── pages/              index, how-it-works, pricing, privacy-policy, 404, robots.txt
```

## Design notes

- **Colors:** brand navy `#071B33` for depth, brand blue `#0A4889` for links and accents on light backgrounds, gold `#EDBF0C` only for buttons, highlights and thin accents (never body text on light backgrounds), warm white `#FAF9F6` for reading areas. Measured contrast: navy on gold 9.9:1, gold on navy 9.9:1, body text on warm white 8.9:1, blue on warm white 8.7:1.
- **Type:** Manrope (headings) and Inter (body). Both are self-hosted from the project, so no Google Fonts requests are made, with system fonts as a fallback.
- **AI visuals:** a hand-built SVG waveform, faint grid and circuit lines, and an "Illustrative workflow" interface. Animations are slow, limited to the waveform and a small signal dot, and switch off entirely for visitors who prefer reduced motion.
- **Honesty:** examples are labelled "Illustrative workflow", "Example conversation — not a live call" and "Example application". There are no testimonials, statistics, certifications or "live" indicators. Plan prices, minutes and rates appear only on the Pricing page and come from `src/data/pricing.ts`.

## Security and privacy

- No API keys or secrets are in this project. Never add them to any file in `src/` or `public/`, because everything there is public.
- No analytics, cookies, pixels, chat widgets, or microphone access.
- The site does not collect any visitor data. The email button opens the visitor's own email app.
