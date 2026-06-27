# Generative AI Healthcare Use-Case Atlas

Interactive use-case guide for university faculty and staff. Built for a professional academic health audience with source-linked cards, governance notes, sample prompts, and a two-zone implementation model.

## What this artifact includes

- Next.js app using the App Router
- React use-case explorer with filters
- Tailwind CSS styling
- shadcn/ui-style local UI components
- Lucide icons
- Static source library
- Governance and how-to-use pages
- Static export configuration for broad hosting
- Vercel-ready deployment

## Recommended GitHub repo name

`genai-healthcare-usecase-atlas`

Suggested GitHub location:

`https://github.com/DataDrivenMed/genai-healthcare-usecase-atlas`

## Local setup

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Build

```bash
npm run build
```

Because `next.config.mjs` includes `output: 'export'`, the build produces static output in the `out` folder.

Official Next.js reference:

https://nextjs.org/docs/app/guides/static-exports

## Deploy to Vercel from GitHub

1. Create a new GitHub repository under `DataDrivenMed`.
2. Upload or push these files to the repository.
3. In Vercel, choose **Add New Project**.
4. Import the GitHub repository.
5. Keep the framework preset as **Next.js**.
6. Use the default build command:

```bash
npm run build
```

7. Deploy.
8. Each future push to the connected GitHub repository should trigger a new Vercel deployment.

Official Vercel reference:

https://vercel.com/docs/git

## Suggested first edits before public sharing

- Replace generic footer language with your preferred authorship line.
- Add LSUHSC-specific internal review contacts only if approved for public display.
- Add institution-approved AI, privacy, IRB, IT security, and educational technology policy links.
- Add a short About page with your portfolio framing.
- Decide whether this should be public or shared as a preview deployment first.

## Suggested faculty and staff message

> I built this interactive guide to help faculty and staff understand practical generative AI healthcare use cases across teaching, clinical care, research, and administration. It is designed as an educational planning resource, not a clinical tool. The guide separates low-risk educational use cases from workflows that would require formal governance, privacy, security, and operational review.

## Important disclaimer

This artifact is educational and planning-oriented. It is not medical advice, not clinical decision support, and not a substitute for LSU, LSUHSC, IRB, privacy, security, compliance, or legal guidance.
