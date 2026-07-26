# Divyam Singh — Portfolio

Premium portfolio website for **Divyam Singh**, Senior AI & Full-Stack Software Engineer.

Built with Next.js, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, and Resend.

## Features

- Dark / light theme with premium glass UI
- Conversion-focused landing page (hero → contact)
- Project case studies, MDX blog, FAQ, testimonials
- Contact form with Zod validation + Resend email delivery
- SEO: metadata, Open Graph, JSON-LD, sitemap, robots
- Vercel Analytics ready

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Required | Description |
|---|---|---|
| `RESEND_API_KEY` | For live form | Resend API key |
| `CONTACT_TO_EMAIL` | No (defaults) | Inbox for inquiries (`singhdivyam952@gmail.com`) |
| `CONTACT_FROM_EMAIL` | No | Verified Resend from address |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Canonical site URL for SEO |

Without `RESEND_API_KEY`, the contact API returns a friendly 503 and asks visitors to email directly.

## Content & assets

- Site copy / data: `src/content/`
- Blog posts (MDX): `content/blog/`
- Placeholders: `public/` (profile, projects, avatars, logos, `resume.pdf`)

Swap placeholder SVGs and `public/resume.pdf` with your real assets when ready.

## Scripts

```bash
npm run dev      # development
npm run build    # production build
npm run start    # start production server
npm run lint     # eslint
```

## Deploy on Vercel

1. Push this repo to GitHub
2. Import the project in Vercel
3. Add env vars from `.env.example`
4. Deploy

Update `NEXT_PUBLIC_SITE_URL` to your production domain after DNS is live.

## Stack

- Next.js 16 (App Router) + React 19
- TypeScript
- Tailwind CSS v4 + shadcn/ui
- Framer Motion
- React Hook Form + Zod
- next-mdx-remote
- Resend
- Vercel Analytics
