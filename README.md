# LSUHSC Generative AI Use-Case Atlas

A professional Next.js static artifact for LSUHSC faculty and staff. It covers teaching, clinical care, research and NCI readiness, administration and operations, models, tools, partner-governed pilot logic, governance, prompts, and sources.

## Key features

- 60+ use-case cards
- Filters by domain, priority, data sensitivity, implementation authority, partner involvement, and NCI relevance
- Model and tool directory with official hyperlinks
- Partner-governed clinical AI pilot page
- Governance page with do/do-not table and PHI decision questions
- Prompt library
- Source library with official links and last-reviewed date
- Static export compatible with Vercel or any static host

## Local setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The project uses `output: "export"` in `next.config.mjs`, so the production build exports static files to `out`.

## Vercel settings

- Framework Preset: Next.js
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: `out`

## Important scope language

This guide is for education, planning, research development, governance support, and partner-governed pilot design. It does not authorize clinical AI deployment or use of protected health information in unapproved systems.
