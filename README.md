# J&S Renovations LLC

Marketing site for **J&S Renovations LLC** — roofing, gutter work, insurance claims, and public adjusting.

Built as a single, fast, dependency-free static page following the **Heritage Craft** design system (see [`DESIGN.md`](DESIGN.md)).

## Structure

| File | Purpose |
| --- | --- |
| `index.html` | The entire site — semantic HTML, inline CSS, and a small vanilla-JS estimate stepper. No build step. |
| `DESIGN.md` | Design system: color tokens, typography, spacing, components. |
| `vercel.json` | Static hosting config + security headers. |
| `screen.png` | Original design mockup reference. |

## Local preview

Open `index.html` directly in a browser, or serve the folder:

```bash
npx serve .
```

## Deploy

Hosted on **Vercel** (project: `r-s-renovations-llc`). Pushing to the default branch triggers a production deploy.

> Note: the GitHub repo and Vercel project are named `R-S-Renovations-LLC` / `r-s-renovations-llc` for historical reasons. The business and all site content are **J&S Renovations LLC**.

```bash
vercel --prod
```

## Notes / next steps

- The estimate form currently shows a confirmation on submit (no backend). Wire it to an email service or form endpoint (e.g. Formspree, Vercel serverless function) to capture leads.
- Imagery is served from Unsplash CDN as placeholders — replace with real project photography when available.
- Update phone/email placeholders with the real business contact details.
