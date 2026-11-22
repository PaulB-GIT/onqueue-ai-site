# Deploying the ON-QUEUE AI website to Render

A step-by-step guide. It takes about 15–20 minutes and doesn't need any coding.
Render's settings were checked against Render's official documentation on 22 November 2026:
<https://render.com/docs/static-sites>, <https://render.com/docs/node-version> and <https://render.com/docs/custom-domains>.

**Before you start, know this:** as soon as Render finishes, the site is live at a public
`…onrender.com` address. Anyone who has the link can open it. Search engines are asked not to list
it yet (the "noindex" setting), but that is not a password.

You will need:
- The project zip: `onqueue-ai-site.zip`. Unzip it. You'll get a folder called `onqueue-ai-site`.
- A free GitHub account: <https://github.com>
- A free Render account: <https://render.com>

Never paste passwords or API keys into a chat. You sign in to GitHub and Render yourself, in your browser.

---

## Part A — Put the project on GitHub

### Option 1: No command line (easiest)

1. Sign in at <https://github.com>.
2. Click the **+** at the top right, then **New repository**.
3. **Repository name:** `onqueue-ai-site`. Choose **Private**. Leave "Add a README" **unticked**. Click **Create repository**.
4. On the next page, click the link **"uploading an existing file"**.
5. Open the unzipped `onqueue-ai-site` folder on your computer. Select **everything inside it**, not the folder itself, and drag it into the GitHub page.
   - It's about 46 files. There is **no** `node_modules` folder in the zip, and you shouldn't upload one if you ever create it.
   - On a Mac, Finder hides files that start with a dot (`.gitignore`, `.node-version`). Press **Cmd + Shift + .** in Finder to show them, then include them in the selection. If they get missed, the site still works because of the Node version setting in step B6.
6. Wait for the files to finish uploading. Then click the green **Commit changes** button at the bottom.
7. Check the repository's main page. You should see `package.json`, `src`, `public`, `README.md` and the other files at the top level, not inside an extra `onqueue-ai-site` folder.

### Option 2: Command line (alternative)

In Terminal, inside the unzipped `onqueue-ai-site` folder:
```bash
git init
git add .
git commit -m "ON-QUEUE AI website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/onqueue-ai-site.git
git push -u origin main
```
The included `.gitignore` already keeps `node_modules` and `dist` out.

---

## Part B — Create the site on Render

1. Sign in at <https://dashboard.render.com>. Using **"Sign in with GitHub"** is simplest.
2. Click **New** (top right), then **Static Site**.
3. Connect GitHub if asked. When GitHub asks which repositories Render may see, choose **Only select repositories** and pick `onqueue-ai-site`.
4. Select the `onqueue-ai-site` repository.
5. Fill in the form:

   | Field | Enter |
   |---|---|
   | Name | `onqueue-ai-site` (this becomes part of the web address) |
   | Branch | `main` |
   | Root Directory | leave empty |
   | Build Command | `npm ci && npm run build` |
   | Publish Directory | `dist` |

6. Open **Environment Variables** (it may be under "Advanced") and add:
   - **Key:** `NODE_VERSION`  **Value:** `22.23.5`

   Render's own default is currently Node 24. This keeps it on the version the site was tested with.
7. Click **Create Static Site**. Render downloads the project, builds it and publishes it. This usually takes 1–3 minutes. You can watch the log.
8. When the status shows **Live**, click the `https://onqueue-ai-site.onrender.com` link at the top. Your address may differ slightly if that name was taken.

### Add the response headers (recommended, 2 minutes)

In your static site on Render, open **Settings**, then **Headers**, and add these. Use **Path** `/*` for each:

| Name | Value |
|---|---|
| `X-Robots-Tag` | `noindex, nofollow` |
| `X-Content-Type-Options` | `nosniff` |
| `X-Frame-Options` | `DENY` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |

Optionally, add `Cache-Control` = `public, max-age=31536000, immutable` with Path `/_astro/*`.

These keep the site out of search results for now, add basic browser protections, and speed up repeat visits.

---

## Part C — Review the live site

On the onrender.com address, check:
- [ ] Services, How It Works, Pricing and Privacy Policy (footer) all open.
- [ ] Every **BOOK A DEMO** goes to the demo section on the Services page.
- [ ] **EMAIL TO ARRANGE A DEMO** opens your email app with the subject "ON-QUEUE AI Demo Request".
- [ ] The wave in the hero is moving.
- [ ] Everything looks right on your phone.

If the build fails, open the deploy in Render and look at the **Logs**. The error is usually near the bottom. Send it to Claude.

From now on, any change saved to the `main` branch on GitHub makes Render rebuild the site automatically.

---

## Later — Connect ai.onqueueva.com (do NOT do this yet)

Do this only when you're ready for the site to be on your own address.

1. In Render, open the static site, then **Settings**, then **Custom Domains**, then **+ Add Custom Domain**. Enter `ai.onqueueva.com` and save.
2. Render shows the DNS record to add. For a subdomain it is a **CNAME** record named `ai` that points to your site's `…onrender.com` address. **Copy the exact value Render shows.**
3. Sign in wherever onqueueva.com's DNS is managed (your domain registrar or Cloudflare). Add **only that one record**.
   - Don't change or delete any existing records for `onqueueva.com` or `www`.
   - Don't touch **MX** records, because those deliver your email.
   - Render asks that there be no **AAAA** record for `ai`.
4. Back in Render, click **Verify**. It can take from a few minutes to a few hours. Render then adds the HTTPS certificate automatically.

### When you're ready to appear in Google

1. In `src/config/site.ts`, change `allowIndexing: false` to `allowIndexing: true`.
2. In Render, go to **Settings** then **Headers**, and delete the `X-Robots-Tag` header.
3. Save the change to GitHub. Render rebuilds automatically.
