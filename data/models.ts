export type ModelCategory =
  | "Frontier closed"
  | "Healthcare / biomedical"
  | "Open-weight"
  | "Clinical platform"
  | "Infrastructure"
  | "Research data resource";

export type ModelEntry = {
  id: string;
  name: string;
  organization: string;
  category: ModelCategory;
  openStatus: "Closed" | "Open-weight" | "Open-source" | "Platform" | "Data resource";
  bestFor: string;
  url: string;
  governanceNote: string;
};

export const modelDirectory: ModelEntry[] = [
  {
    id: "gpt-55",
    name: "GPT-5.5 / GPT-5.5 Thinking / GPT-5.5 Pro",
    organization: "OpenAI",
    category: "Frontier closed",
    openStatus: "Closed",
    bestFor: "Complex professional work, research synthesis, coding, document-heavy analysis, grant support, data interpretation, and executive briefs.",
    url: "https://openai.com/index/introducing-gpt-5-5/",
    governanceNote: "Use through approved institutional or enterprise pathways for sensitive workflows. A strong model is not automatically an approved PHI deployment."
  },
  {
    id: "claude-sonnet-46",
    name: "Claude Sonnet 4.6 / Claude Opus family",
    organization: "Anthropic",
    category: "Frontier closed",
    openStatus: "Closed",
    bestFor: "Long-context reasoning, policy review, scholarly writing, coding, agent planning, and careful knowledge work.",
    url: "https://www.anthropic.com/news/claude-sonnet-4-6",
    governanceNote: "Excellent for writing and reasoning. PHI use depends on institutional contract, security terms, and configuration."
  },
  {
    id: "gemini-pro-flash",
    name: "Gemini Pro / Gemini Flash family",
    organization: "Google DeepMind / Google AI",
    category: "Frontier closed",
    openStatus: "Closed",
    bestFor: "Multimodal understanding, long-context review, document analysis, audio/image/video-aware teaching and research workflows, and high-volume production tasks.",
    url: "https://ai.google.dev/gemini-api/docs/models",
    governanceNote: "Good for multimodal prototypes. Sensitive use requires approved Google Cloud or institutional data protections."
  },
  {
    id: "cohere-command",
    name: "Cohere Command family",
    organization: "Cohere",
    category: "Frontier closed",
    openStatus: "Closed",
    bestFor: "Enterprise retrieval, private knowledge search, internal agentic workflows, and grounded institutional content.",
    url: "https://cohere.com/command",
    governanceNote: "Evaluate for enterprise retrieval, data residency, and privacy controls."
  },
  {
    id: "medgemma",
    name: "MedGemma",
    organization: "Google Health / Google DeepMind",
    category: "Healthcare / biomedical",
    openStatus: "Open-weight",
    bestFor: "Medical text and image comprehension prototypes, medical education, imaging demos, and healthcare AI development.",
    url: "https://developers.google.com/health-ai-developer-foundations/medgemma",
    governanceNote: "Starting point for development, not an unsupervised clinical tool. Validate for each use case."
  },
  {
    id: "ai-co-scientist",
    name: "AI Co-Scientist",
    organization: "Google Research",
    category: "Healthcare / biomedical",
    openStatus: "Platform",
    bestFor: "Hypothesis generation, scientific ideation, research plan generation, and biomedical discovery support.",
    url: "https://research.google/blog/accelerating-scientific-breakthroughs-with-an-ai-co-scientist/",
    governanceNote: "Use as ideation support. Human scientific validation remains necessary."
  },
  {
    id: "llama-4",
    name: "Llama 4 Scout / Maverick",
    organization: "Meta",
    category: "Open-weight",
    openStatus: "Open-weight",
    bestFor: "Open-weight multimodal experimentation, local evaluation, model comparison, and research reproducibility.",
    url: "https://ai.meta.com/blog/llama-4-multimodal-intelligence/",
    governanceNote: "Review license, hosting, security, and validation before institutional use. Chinese-origin models intentionally excluded from this directory."
  },
  {
    id: "mistral-open",
    name: "Mistral Open models",
    organization: "Mistral AI",
    category: "Open-weight",
    openStatus: "Open-weight",
    bestFor: "Open-weight general-purpose and multimodal workflows, European AI alternatives, local evaluation, and controlled pilots.",
    url: "https://docs.mistral.ai/models/overview/",
    governanceNote: "Good open-weight option for institutional evaluation. Must still be tested and governed."
  },
  {
    id: "phi-4",
    name: "Phi-4 / Phi-4 Reasoning / Phi-4 Multimodal",
    organization: "Microsoft",
    category: "Open-weight",
    openStatus: "Open-weight",
    bestFor: "Smaller reasoning demonstrations, teaching apps, lower-latency prototypes, and constrained deployments.",
    url: "https://ai.azure.com/catalog/models/Phi-4-reasoning-plus",
    governanceNote: "Useful for lightweight pilots. Do not assume healthcare readiness without task-level evaluation."
  },
  {
    id: "nemotron",
    name: "NVIDIA Nemotron",
    organization: "NVIDIA",
    category: "Open-weight",
    openStatus: "Open-weight",
    bestFor: "Specialized AI agents, science and math reasoning, visual understanding, and locally governed enterprise deployments.",
    url: "https://developer.nvidia.com/topics/ai/nemotron",
    governanceNote: "Strong candidate for transparent model evaluation and infrastructure-controlled deployment."
  },
  {
    id: "dragon-copilot",
    name: "Dragon Copilot",
    organization: "Microsoft / Nuance",
    category: "Clinical platform",
    openStatus: "Platform",
    bestFor: "Ambient documentation, clinical workflow support, and EHR-adjacent note drafting.",
    url: "https://www.microsoft.com/en-us/industry/health/microsoft-dragon-copilot",
    governanceNote: "Partner-governed clinical platform. Requires contracts, privacy review, and clinician review."
  },
  {
    id: "abridge",
    name: "Abridge",
    organization: "Abridge",
    category: "Clinical platform",
    openStatus: "Platform",
    bestFor: "Ambient clinical documentation, encounter summarization, and note drafting.",
    url: "https://www.abridge.com/",
    governanceNote: "Clinical documentation platform. Requires partner health-system review and implementation governance."
  },
  {
    id: "epic-ai",
    name: "Epic AI",
    organization: "Epic",
    category: "Clinical platform",
    openStatus: "Platform",
    bestFor: "EHR-embedded chart review, patient message drafting, operational AI, and clinical workflow augmentation.",
    url: "https://www.epic.com/ai/",
    governanceNote: "Best evaluated with the partner health system that owns the EHR workflow and operational deployment."
  },
  {
    id: "aws-healthscribe",
    name: "AWS HealthScribe",
    organization: "Amazon Web Services",
    category: "Clinical platform",
    openStatus: "Platform",
    bestFor: "Clinical conversation transcription and documentation workflow pilots.",
    url: "https://aws.amazon.com/healthscribe/",
    governanceNote: "Assistive clinical documentation workflow. Use only under appropriate BAA, logging, and review controls."
  },
  {
    id: "aws-healthomics",
    name: "AWS HealthOmics",
    organization: "Amazon Web Services",
    category: "Healthcare / biomedical",
    openStatus: "Platform",
    bestFor: "Genomics, transcriptomics, bioinformatics pipelines, and large-scale omics workflows.",
    url: "https://aws.amazon.com/healthomics/",
    governanceNote: "Research infrastructure candidate. Requires data governance and cloud cost controls."
  },
  {
    id: "monai",
    name: "MONAI / MAISI",
    organization: "MONAI Project",
    category: "Healthcare / biomedical",
    openStatus: "Open-source",
    bestFor: "Medical imaging AI, synthetic imaging, segmentation, annotation, and imaging research pipelines.",
    url: "https://monai.io/",
    governanceNote: "Research and education toolset. Use de-identified imaging and proper validation."
  },
  {
    id: "haystack",
    name: "Haystack",
    organization: "deepset",
    category: "Infrastructure",
    openStatus: "Open-source",
    bestFor: "Retrieval-augmented generation, guideline search, source-grounded Q&A, and institutional knowledge apps.",
    url: "https://haystack.deepset.ai/",
    governanceNote: "Infrastructure, not a model. Pair with approved models and curated source libraries."
  },
  {
    id: "pgvector",
    name: "pgvector",
    organization: "PostgreSQL extension",
    category: "Infrastructure",
    openStatus: "Open-source",
    bestFor: "Vector search inside PostgreSQL-backed apps and local retrieval prototypes.",
    url: "https://github.com/pgvector/pgvector",
    governanceNote: "Useful for self-hosted retrieval. Requires access-control design and database security."
  },
  {
    id: "fastapi",
    name: "FastAPI",
    organization: "Open-source Python framework",
    category: "Infrastructure",
    openStatus: "Open-source",
    bestFor: "APIs for search, retrieval, prompt orchestration, analytics, and model service wrappers.",
    url: "https://fastapi.tiangolo.com/",
    governanceNote: "Application framework only. Secure it like any institutional API."
  },
  {
    id: "nci-crdc",
    name: "NCI Cancer Research Data Commons",
    organization: "National Cancer Institute",
    category: "Research data resource",
    openStatus: "Data resource",
    bestFor: "Cancer research datasets, cloud analysis, imaging/genomic data access, and AI-ready research workflows.",
    url: "https://datacommons.cancer.gov/",
    governanceNote: "Research resource. Follow data-use terms and institutional research policies."
  },
  {
    id: "nci-gdc",
    name: "NCI Genomic Data Commons",
    organization: "National Cancer Institute",
    category: "Research data resource",
    openStatus: "Data resource",
    bestFor: "Cancer genomics, clinical, biospecimen, and whole-slide image data for AI research.",
    url: "https://gdc.cancer.gov/",
    governanceNote: "Research only. Verify dataset permissions and limitations."
  },
  {
    id: "nci-idc",
    name: "NCI Imaging Data Commons",
    organization: "National Cancer Institute",
    category: "Research data resource",
    openStatus: "Data resource",
    bestFor: "Cancer imaging datasets, radiomics, annotation workflows, and imaging AI reproducibility.",
    url: "https://datacommons.cancer.gov/repository/imaging-data-commons",
    governanceNote: "Research-only imaging data resource. Validate before local clinical use."
  },
  {
    id: "nih-reporter",
    name: "NIH RePORTER",
    organization: "National Institutes of Health",
    category: "Research data resource",
    openStatus: "Data resource",
    bestFor: "Grant intelligence, funding landscape analysis, collaborator discovery, and portfolio benchmarking.",
    url: "https://reporter.nih.gov/",
    governanceNote: "Use as official federal funding data source, but verify current announcements separately."
  }
];
