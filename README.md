# Darshan Portfolio (3-page)

A simple, recruiter-friendly portfolio with a role toggle (**AI/ML** vs **SDE**) and clean, fast pages.

## Pages
- **Home**: hero + about + skills + featured projects + contact
- **Projects**: role-filtered project list with tag filter
- **Resume**: role-filtered download links + summary

## Tech
- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Customize
Edit `lib/content.ts` to update:
- headline/summary per track
- skills
- experience
- projects

## Resume PDFs
Place your PDFs in `public/`:
- `public/resume-sde.pdf`
- `public/resume-aiml.pdf`

## Deploy
Deploy to Vercel. Make sure the PDFs are included in `public/`.
