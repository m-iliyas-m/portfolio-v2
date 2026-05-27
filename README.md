# Data Portfolio — Built with Astro.js

Personal portfolio for a Data Engineer / GenAI Engineer — deployed free on GitHub Pages.

## Stack
| Layer | Tool | Cost |
|---|---|---|
| Framework | Astro.js | Free |
| Hosting | GitHub Pages | Free |
| Forms | Formspree | Free (50/mo) |
| Analytics | Umami Cloud | Free |
| Comments | Giscus | Free |
| SSL + CDN | GitHub auto | Free |

## Getting started locally
```bash
npm install
npm run dev       # → localhost:4321
```

## Deploy
```bash
git add .
git commit -m "update"
git push origin main
# GitHub Actions auto-builds and deploys in ~2 min
```

## Add content (no code needed)
| What | Where |
|---|---|
| New blog post | `src/content/blog/your-post.mdx` |
| New project | `src/content/projects.json` |
| New interview Q | `src/content/interview/questions.json` |
| New resource | `src/content/resources/links.json` |

## Customize
- Your name/bio → `src/components/sections/Hero.astro`
- Colors/fonts → `src/styles/global.css` (CSS variables at top)
- Your domain → `astro.config.mjs` → `site` field
- Formspree ID → `src/components/sections/Contact.astro`
