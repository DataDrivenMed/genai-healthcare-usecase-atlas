# Content Guide

## Editorial voice

Professional, calm, institutional, and practical. Avoid hype. Use source-linked claims and clear readiness labels.

## Use-case card schema

Each card should include:

- Title
- Domain
- Readiness
- Data risk
- Effort
- Target audience
- Summary
- Why it matters
- How to use
- Data inputs
- Tools
- Sample prompt
- Governance note
- Metrics
- Source IDs

The data lives in:

```text
data/useCases.ts
```

The source library lives in:

```text
data/sources.ts
```

## Readiness labels

### Education-ready

Suitable for non-PHI teaching, faculty development, case writing, and learning design with human review.

### Research-ready

Suitable for literature work, idea generation, and non-PHI research planning with source verification.

### Controlled pilot

Requires governance, data controls, and a defined pilot owner.

### Advanced pilot

Requires validation, legal or compliance review, and domain-specific oversight before operational use.

## Data risk labels

### Non-PHI

No patient-identifiable information, employee-sensitive data, learner-sensitive data, or restricted research data.

### De-identified only

May use data derived from health or research records after documented de-identification.

### HIPAA-relevant

May involve PHI or clinical workflows. Requires approved systems, access controls, logging, and formal review.

## Update cycle

Recommended source review cycle:

- High-risk clinical sources: monthly or before each pilot
- Governance and legal sources: quarterly
- Tool documentation: quarterly
- Teaching examples: each course cycle
- Research tools: each grant or project cycle
