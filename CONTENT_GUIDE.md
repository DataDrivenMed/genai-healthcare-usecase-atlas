# Content Guide

## Add a use case

Edit `data/useCases.ts` and add a new object following the existing schema.

Required fields include:

- `domain`
- `priority`
- `dataSensitivity`
- `authority`
- `partnerInvolvement`
- `readiness`
- `nciRelevance`
- `modelIds`
- `howToUse`
- `samplePrompt`
- `governanceNote`
- `metrics`
- `sourceIds`

## Add a model or platform

Edit `data/models.ts`. Every model entry should include an official URL and a governance note.

## Add a source

Edit `data/sources.ts`. Prefer official sources, guidance, model pages, vendor documentation, and research data resources.

## Style guidance

- Keep all use cases concise but operational.
- Separate model capability from institutional approval.
- Use the partner-governed label for EHR, PHI, clinical operations, documentation, outreach, revenue cycle, and patient-facing workflows.
- Use LSUHSC-led for education, research development, accreditation, faculty support, and non-PHI workflows.
- Use IRB / Research-governed for research datasets, imaging, omics, model development, and retrospective studies.
