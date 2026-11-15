# sushilkhatri.com

Personal site of Sushil Khatri, built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Preview locally

Requires Node 20 or newer.

```sh
npm install
npm run dev      # live preview at http://localhost:4321
npm run build    # production build into dist/
npm run preview  # serve the production build
```

## Editing content

All text lives in `src/data/`. Pages render from these files, so a change shows up everywhere it is used.

| To change | Edit |
|---|---|
| Name, links, tagline, About, interests, headline facts | `src/data/profile.ts` |
| Education, experience, skills, honors, workshops, certifications | `src/data/cv.ts` |
| Publications and BibTeX | `src/data/publications.ts` |
| Projects | `src/data/projects.ts` |

- **LinkedIn**: set `linkedin` in `profile.ts`. The link is hidden while it is empty.
- **CV PDF**: save it as `public/cv/SushilKhatri_CV.pdf`. The download buttons appear once the file exists.
- **Projects**: add an entry to `projects.ts`. A Projects section then appears on the home page and the CV.

## Layout

```
src/
  data/        content
  layouts/     Base.astro: <head>, SEO tags, header, footer
  components/  header, footer, theme toggle, entry and publication lists
  pages/       index, cv, publications, 404
  styles/      global.css: colour tokens (light and dark) and all styles
public/        files copied as-is: CNAME, favicon, robots.txt, CV PDF,
               and redirect stubs for the old .html addresses
```

## Deployment

Pushing to `master` runs `.github/workflows/deploy.yml`, which builds the site and publishes it.

This requires the repository's **Settings → Pages → Build and deployment → Source** to be set to **GitHub Actions**. The custom domain is kept by `public/CNAME`.
