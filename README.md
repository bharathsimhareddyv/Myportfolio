# Bharath Simha Reddy V — Personal Portfolio

Premium dual-career portfolio for **Full Stack MERN Developer** and **Corporate Technical Trainer**.

## Stack

- React + Vite
- Tailwind CSS v4
- Framer Motion
- GSAP
- React Icons
- EmailJS (optional)
- React Helmet Async (SEO)

## Getting started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Updating content

All portfolio copy lives in `src/data/`:

| File | Purpose |
|------|---------|
| `profile.js` | Identity, contact, education, stats |
| `skills.js` | Skill categories + tech grid |
| `experience.js` | Developer & trainer timelines |
| `companies.js` | Partner / institution lists |
| `projects.js` | Developer & trainer projects |
| `certifications.js` | Certificates |
| `testimonials.js` | Quotes |
| `gallery.js` | Photo gallery |
| `achievements.js` | Impact metrics |
| `navigation.js` | Nav + EmailJS config |

Logos: `public/logos/` · Brand: `public/brand/` · Resumes: `public/*.pdf`

## EmailJS

Copy `.env.example` → `.env` and add your EmailJS keys. Without keys, the form opens the default mail client.

## Notes on data fidelity

Content was extracted from the attached resumes and logos only. Missing items (certificates, gallery photos, developer project case studies, testimonials, batch sizes) are left as explicit placeholders.
