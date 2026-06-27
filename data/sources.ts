export type SourceType = "Official source" | "Vendor documentation" | "Open-source repository" | "Research data resource" | "Guidance / regulation" | "Institutional context";

export type SourceEntry = {
  id: string;
  title: string;
  organization: string;
  type: SourceType;
  url: string;
  note: string;
  lastReviewed: string;
};

export const sources: SourceEntry[] = [
  {
    id: "openai-gpt55",
    title: "Introducing GPT-5.5",
    organization: "OpenAI",
    type: "Official source",
    url: "https://openai.com/index/introducing-gpt-5-5/",
    note: "Official OpenAI release page describing GPT-5.5, GPT-5.5 Thinking, and GPT-5.5 Pro capabilities.",
    lastReviewed: "June 2026"
  },
  {
    id: "anthropic-sonnet46",
    title: "Introducing Claude Sonnet 4.6",
    organization: "Anthropic",
    type: "Official source",
    url: "https://www.anthropic.com/news/claude-sonnet-4-6",
    note: "Official Anthropic model announcement covering long-context reasoning, coding, agents, and knowledge work.",
    lastReviewed: "June 2026"
  },
  {
    id: "google-gemini-models",
    title: "Gemini API Models",
    organization: "Google AI for Developers",
    type: "Official source",
    url: "https://ai.google.dev/gemini-api/docs/models",
    note: "Official Gemini model directory for Gemini Pro, Flash, Live, and related model families.",
    lastReviewed: "June 2026"
  },
  {
    id: "medgemma",
    title: "MedGemma",
    organization: "Google Health AI Developer Foundations",
    type: "Official source",
    url: "https://developers.google.com/health-ai-developer-foundations/medgemma",
    note: "Official MedGemma page describing open medical text and image models and validation expectations.",
    lastReviewed: "June 2026"
  },
  {
    id: "llama4",
    title: "The Llama 4 Herd",
    organization: "Meta AI",
    type: "Official source",
    url: "https://ai.meta.com/blog/llama-4-multimodal-intelligence/",
    note: "Official Meta announcement of Llama 4 Scout and Maverick open-weight multimodal models.",
    lastReviewed: "June 2026"
  },
  {
    id: "mistral-models",
    title: "Mistral Models Overview",
    organization: "Mistral AI",
    type: "Official source",
    url: "https://docs.mistral.ai/models/overview/",
    note: "Official Mistral model overview, including open and commercial model families.",
    lastReviewed: "June 2026"
  },
  {
    id: "phi4",
    title: "Phi-4 Reasoning Plus",
    organization: "Microsoft Azure AI Foundry",
    type: "Official source",
    url: "https://ai.azure.com/catalog/models/Phi-4-reasoning-plus",
    note: "Official Microsoft model catalog page for Phi-4 reasoning open-weight model.",
    lastReviewed: "June 2026"
  },
  {
    id: "nemotron",
    title: "NVIDIA Nemotron AI Models",
    organization: "NVIDIA",
    type: "Official source",
    url: "https://developer.nvidia.com/topics/ai/nemotron",
    note: "Official NVIDIA page for Nemotron open models with weights, data, and recipes.",
    lastReviewed: "June 2026"
  },
  {
    id: "nci-centers",
    title: "NCI-Designated Cancer Centers",
    organization: "National Cancer Institute",
    type: "Official source",
    url: "https://www.cancer.gov/research/infrastructure/cancer-centers",
    note: "NCI overview of designated cancer centers, research infrastructure, and multidisciplinary programs.",
    lastReviewed: "June 2026"
  },
  {
    id: "nci-ccsg",
    title: "Cancer Center Support Grants for NCI-designated Cancer Centers",
    organization: "National Cancer Institute / NIH",
    type: "Official source",
    url: "https://files.simpler.grants.gov/opportunities/45ab10e1-1758-4a2f-ad07-e93d95c5bedc/attachments/03c4caa9-3d31-4786-bbfd-cc42762e4ca6/PAR-25-444-Full-Announcement.html",
    note: "Official CCSG NOFO describing center organization, research programs, shared resources, training, community outreach, and clinical trial infrastructure.",
    lastReviewed: "June 2026"
  },
  {
    id: "nci-coe",
    title: "Supporting Community Outreach and Engagement",
    organization: "NCI Division of Cancer Control and Population Sciences",
    type: "Official source",
    url: "https://cancercontrol.cancer.gov/research-emphasis/supplement/coe",
    note: "NCI guidance on catchment-area needs, community engagement, in-reach, and high-impact community-informed science.",
    lastReviewed: "June 2026"
  },
  {
    id: "nci-crdc",
    title: "Cancer Research Data Commons",
    organization: "National Cancer Institute",
    type: "Research data resource",
    url: "https://datacommons.cancer.gov/",
    note: "NCI cloud-based data science infrastructure for secure cancer research data access and analysis.",
    lastReviewed: "June 2026"
  },
  {
    id: "nci-gdc-ai",
    title: "GDC and Artificial Intelligence",
    organization: "NCI Genomic Data Commons",
    type: "Research data resource",
    url: "https://gdc.cancer.gov/content/gdc-and-artificial-intelligence-ai",
    note: "GDC page describing harmonized genomic, clinical, biospecimen, and whole-slide image data for AI research.",
    lastReviewed: "June 2026"
  },
  {
    id: "nci-idc",
    title: "Imaging Data Commons",
    organization: "National Cancer Institute",
    type: "Research data resource",
    url: "https://datacommons.cancer.gov/repository/imaging-data-commons",
    note: "NCI cloud-based cancer imaging repository with analysis and exploration tools.",
    lastReviewed: "June 2026"
  },
  {
    id: "nci-aidr",
    title: "NCI CRDC Artificial Intelligence Data-Readiness Challenge",
    organization: "National Cancer Institute",
    type: "Research data resource",
    url: "https://datacommons.cancer.gov/news/nci-crdc-artificial-intelligence-data-readiness-aidr-challenge",
    note: "NCI challenge focused on AI-readiness, data standardization, curation, and downstream AI compatibility.",
    lastReviewed: "June 2026"
  },
  {
    id: "nih-datascience",
    title: "NIH Strategic Plan for Data Science 2025-2030",
    organization: "NIH Office of Data Science Strategy",
    type: "Official source",
    url: "https://datascience.nih.gov/nih-strategic-plan-data-science",
    note: "NIH strategy for biomedical data science, AI, data infrastructure, and responsible data sharing.",
    lastReviewed: "June 2026"
  },
  {
    id: "nih-ai-policy",
    title: "Artificial Intelligence at NIH",
    organization: "NIH Office of Science Policy",
    type: "Guidance / regulation",
    url: "https://osp.od.nih.gov/policies/artificial-intelligence/",
    note: "NIH policy page on responsible AI, AI-ready datasets, transparency, privacy, and equity in biomedical research.",
    lastReviewed: "June 2026"
  },
  {
    id: "fda-ai-drug",
    title: "AI to Support Regulatory Decision-Making for Drug and Biological Products",
    organization: "FDA",
    type: "Guidance / regulation",
    url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/considerations-use-artificial-intelligence-support-regulatory-decision-making-drug-and-biological",
    note: "FDA guidance describing a risk-based credibility assessment framework for AI models in drug and biological product regulatory decision-making.",
    lastReviewed: "June 2026"
  },
  {
    id: "fda-ai-samd",
    title: "Artificial Intelligence in Software as a Medical Device",
    organization: "FDA",
    type: "Guidance / regulation",
    url: "https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-software-medical-device",
    note: "FDA resource on AI-enabled software as a medical device and total product lifecycle risk management.",
    lastReviewed: "June 2026"
  },
  {
    id: "hhs-hipaa-security",
    title: "HIPAA Security Rule Guidance Material",
    organization: "HHS Office for Civil Rights",
    type: "Guidance / regulation",
    url: "https://www.hhs.gov/hipaa/for-professionals/security/guidance/index.html",
    note: "HHS guidance for security safeguards relevant to electronic protected health information.",
    lastReviewed: "June 2026"
  },
  {
    id: "w3c-wcag22",
    title: "Web Content Accessibility Guidelines 2.2",
    organization: "W3C",
    type: "Guidance / regulation",
    url: "https://www.w3.org/TR/WCAG22/",
    note: "Accessibility standard used for the artifact's web design and navigation expectations.",
    lastReviewed: "June 2026"
  },
  {
    id: "lsuhsc-som",
    title: "LSU Health New Orleans School of Medicine",
    organization: "LSU Health Sciences Center New Orleans",
    type: "Institutional context",
    url: "https://www.medschool.lsuhsc.edu/",
    note: "Institutional context for medical education, biomedical research, and clinical training mission.",
    lastReviewed: "June 2026"
  },
  {
    id: "umcno-partners",
    title: "University Medical Center New Orleans Academic Medical Center Partners",
    organization: "LCMC Health",
    type: "Institutional context",
    url: "https://www.lcmchealth.org/university-medical-center-new-orleans/academic-medical-center/our-partners/",
    note: "Public partner context showing LSU Health New Orleans academic affiliation with UMCNO.",
    lastReviewed: "June 2026"
  }
];
