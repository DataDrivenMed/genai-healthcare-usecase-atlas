export type Source = {
  id: string;
  title: string;
  organization: string;
  url: string;
  category: 'Platform docs' | 'Governance' | 'Healthcare AI' | 'Open source' | 'Accessibility' | 'Interoperability';
  note: string;
};

export const sources: Source[] = [
  {
    id: 'next-static-export',
    title: 'Next.js Static Exports',
    organization: 'Vercel / Next.js',
    url: 'https://nextjs.org/docs/app/guides/static-exports',
    category: 'Platform docs',
    note: 'Official guidance that a Next.js static export can be hosted by any server that serves HTML, CSS, and JavaScript assets.'
  },
  {
    id: 'vercel-git',
    title: 'Deploying Git Repositories with Vercel',
    organization: 'Vercel',
    url: 'https://vercel.com/docs/git',
    category: 'Platform docs',
    note: 'Official Vercel documentation for automatic deployments from connected Git repositories.'
  },
  {
    id: 'shadcn',
    title: 'shadcn/ui Documentation',
    organization: 'shadcn/ui',
    url: 'https://ui.shadcn.com/docs',
    category: 'Platform docs',
    note: 'Accessible, open-code component patterns for React and Next.js projects.'
  },
  {
    id: 'lucide',
    title: 'Lucide React Guide',
    organization: 'Lucide',
    url: 'https://lucide.dev/guide/react',
    category: 'Platform docs',
    note: 'React icon library used for the domain and readiness icons in this artifact.'
  },
  {
    id: 'wcag22',
    title: 'Web Content Accessibility Guidelines 2.2',
    organization: 'W3C',
    url: 'https://www.w3.org/TR/WCAG22/',
    category: 'Accessibility',
    note: 'Accessibility reference for semantic structure, focus states, contrast, and keyboard use.'
  },
  {
    id: 'hipaa-security',
    title: 'HIPAA Security Rule',
    organization: 'HHS OCR',
    url: 'https://www.hhs.gov/hipaa/for-professionals/security/index.html',
    category: 'Governance',
    note: 'Baseline reference for safeguards around electronic protected health information.'
  },
  {
    id: 'hipaa-deid',
    title: 'Guidance Regarding Methods for De-identification of PHI',
    organization: 'HHS OCR',
    url: 'https://www.hhs.gov/hipaa/for-professionals/privacy/special-topics/de-identification/index.html',
    category: 'Governance',
    note: 'Baseline reference for de-identification methods and limits.'
  },
  {
    id: 'nist-ai-rmf',
    title: 'AI Risk Management Framework',
    organization: 'NIST',
    url: 'https://www.nist.gov/itl/ai-risk-management-framework',
    category: 'Governance',
    note: 'AI governance reference for mapping, measuring, managing, and governing AI risks.'
  },
  {
    id: 'onc-hti1',
    title: 'HTI-1 Final Rule',
    organization: 'ONC',
    url: 'https://www.healthit.gov/topic/laws-regulation-and-policy/health-data-technology-and-interoperability-certification-program',
    category: 'Governance',
    note: 'Reference for transparency expectations in certified health IT and decision support contexts.'
  },
  {
    id: 'fda-ai-ml',
    title: 'Artificial Intelligence and Machine Learning in Software as a Medical Device',
    organization: 'FDA',
    url: 'https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-and-machine-learning-software-medical-device',
    category: 'Governance',
    note: 'Reference for when AI functionality can move into regulated software territory.'
  },
  {
    id: 'fhir',
    title: 'HL7 FHIR Overview',
    organization: 'HL7',
    url: 'https://hl7.org/fhir/overview.html',
    category: 'Interoperability',
    note: 'Core interoperability standard for structured health data exchange.'
  },
  {
    id: 'smart-on-fhir',
    title: 'SMART App Launch Framework',
    organization: 'HL7 SMART',
    url: 'https://hl7.org/fhir/smart-app-launch/',
    category: 'Interoperability',
    note: 'Reference for secure app launch patterns around FHIR-based workflows.'
  },
  {
    id: 'dicom',
    title: 'DICOM Standard',
    organization: 'DICOM',
    url: 'https://www.dicomstandard.org/',
    category: 'Interoperability',
    note: 'Core standard for medical imaging data and metadata.'
  },
  {
    id: 'chatgpt-edu',
    title: 'ChatGPT Edu',
    organization: 'OpenAI',
    url: 'https://openai.com/chatgpt/education/',
    category: 'Healthcare AI',
    note: 'Education-focused AI workspace option for universities.'
  },
  {
    id: 'medgemma',
    title: 'MedGemma',
    organization: 'Google Health / Google DeepMind',
    url: 'https://developers.google.com/health-ai-developer-foundations/medgemma',
    category: 'Healthcare AI',
    note: 'Medical text and image model family intended as a developer foundation that requires validation for specific use cases.'
  },
  {
    id: 'monai',
    title: 'MONAI',
    organization: 'MONAI Project',
    url: 'https://monai.io/',
    category: 'Open source',
    note: 'Open-source framework for medical imaging AI research and development.'
  },
  {
    id: 'maisi',
    title: 'MAISI',
    organization: 'MONAI / NVIDIA',
    url: 'https://github.com/Project-MONAI/MONAI/tree/dev/generative/maisi',
    category: 'Open source',
    note: 'Synthetic medical imaging research resource for controlled teaching and research prototypes.'
  },
  {
    id: 'aws-healthscribe',
    title: 'AWS HealthScribe',
    organization: 'AWS',
    url: 'https://aws.amazon.com/healthscribe/',
    category: 'Healthcare AI',
    note: 'Clinical documentation service positioned for assistive documentation workflows.'
  },
  {
    id: 'aws-bedrock-hipaa',
    title: 'HIPAA Eligibility and AWS Bedrock',
    organization: 'AWS',
    url: 'https://aws.amazon.com/bedrock/faqs/',
    category: 'Healthcare AI',
    note: 'Reference to confirm HIPAA eligibility and data-use statements before clinical pilots.'
  },
  {
    id: 'azure-health-data',
    title: 'Azure Health Data Services',
    organization: 'Microsoft Azure',
    url: 'https://azure.microsoft.com/en-us/products/health-data-services',
    category: 'Healthcare AI',
    note: 'Managed services for FHIR, DICOM, and health data workflows.'
  },
  {
    id: 'dragon-copilot',
    title: 'Dragon Copilot',
    organization: 'Microsoft',
    url: 'https://www.microsoft.com/en-us/industry/health/microsoft-dragon-copilot',
    category: 'Healthcare AI',
    note: 'Commercial ambient and clinical workflow AI product for documentation support.'
  },
  {
    id: 'abridge',
    title: 'Abridge',
    organization: 'Abridge',
    url: 'https://www.abridge.com/',
    category: 'Healthcare AI',
    note: 'Commercial clinical conversation and documentation platform.'
  },
  {
    id: 'haystack',
    title: 'Haystack',
    organization: 'deepset',
    url: 'https://haystack.deepset.ai/',
    category: 'Open source',
    note: 'Open-source framework for retrieval-augmented generation and search pipelines.'
  },
  {
    id: 'pgvector',
    title: 'pgvector',
    organization: 'pgvector',
    url: 'https://github.com/pgvector/pgvector',
    category: 'Open source',
    note: 'PostgreSQL vector extension for self-hosted retrieval and semantic search.'
  },
  {
    id: 'fastapi',
    title: 'FastAPI',
    organization: 'FastAPI',
    url: 'https://fastapi.tiangolo.com/',
    category: 'Open source',
    note: 'Python API framework with automatic OpenAPI documentation.'
  }
];
