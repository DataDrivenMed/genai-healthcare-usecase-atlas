export type Domain = 'Teaching and education' | 'Clinical care' | 'Research' | 'Administration and operations';
export type Readiness = 'Education-ready' | 'Research-ready' | 'Controlled pilot' | 'Advanced pilot';
export type DataRisk = 'Non-PHI' | 'De-identified only' | 'HIPAA-relevant';
export type Effort = 'Low' | 'Medium' | 'High';

export type UseCase = {
  slug: string;
  title: string;
  domain: Domain;
  readiness: Readiness;
  dataRisk: DataRisk;
  effort: Effort;
  audience: string[];
  summary: string;
  why: string;
  howToUse: string[];
  dataInputs: string[];
  tools: string[];
  samplePrompt: string;
  governance: string;
  metrics: string[];
  sources: string[];
};

export const useCases: UseCase[] = [
  {
    slug: 'synthetic-cases',
    title: 'Synthetic cases and medical image teaching libraries',
    domain: 'Teaching and education',
    readiness: 'Education-ready',
    dataRisk: 'De-identified only',
    effort: 'Medium',
    audience: ['Faculty', 'Simulation centers', 'Instructional designers', 'Program directors'],
    summary: 'Create faculty-reviewed synthetic cases, rare variants, image sets, and discussion prompts for teaching without exposing live patient charts.',
    why: 'Academic programs often lack enough diverse rare-case material for teaching. Synthetic and de-identified materials can expand learner exposure while preserving faculty control.',
    howToUse: [
      'Choose the course, learner level, and competency target.',
      'Start with de-identified examples or faculty-authored case stems.',
      'Generate variants, distractors, and structured discussion questions.',
      'Require faculty review before release to learners.',
      'Label every asset as synthetic educational material.'
    ],
    dataInputs: ['De-identified DICOM images', 'Case objectives', 'Anatomy labels', 'Faculty teaching notes', 'Competency tags'],
    tools: ['MONAI', 'MAISI', 'MedGemma developer resources', 'AWS HealthImaging for governed image storage'],
    samplePrompt: 'Create a synthetic teaching case for second-year medical students on interstitial lung disease. Include a short history, three distractor findings, five discussion questions, and a faculty answer key. Label the output as synthetic educational material.',
    governance: 'Do not present generated material as real patient data. If any source material began as PHI, document de-identification and faculty review.',
    metrics: ['Number of cases created', 'Faculty review completion', 'Learner satisfaction', 'Assessment performance', 'Rare conditions covered'],
    sources: ['monai', 'maisi', 'medgemma', 'dicom', 'hipaa-deid']
  },
  {
    slug: 'guideline-teaching',
    title: 'Guideline teaching and case-based coaching',
    domain: 'Teaching and education',
    readiness: 'Education-ready',
    dataRisk: 'Non-PHI',
    effort: 'Low',
    audience: ['Course directors', 'Clerkship directors', 'Residency faculty', 'Quality educators'],
    summary: 'Turn approved guidelines and local protocols into searchable teaching aids, quizzes, and case discussion scaffolds.',
    why: 'Faculty spend substantial time translating guidelines into teachable cases. A grounded content tool can improve consistency and reduce authoring time.',
    howToUse: [
      'Upload or curate approved guideline links and local policy documents.',
      'Tag sources by course, rotation, specialty, and update date.',
      'Generate small-group cases, quiz questions, and comparison tables.',
      'Show source passages for every recommendation.',
      'Review and approve before use in teaching.'
    ],
    dataInputs: ['Guidelines', 'Protocols', 'Syllabi', 'Competency frameworks', 'OSCE rubrics'],
    tools: ['ChatGPT Edu', 'Haystack', 'pgvector', 'Azure AI Search', 'Next.js content site'],
    samplePrompt: 'Using only the indexed heart failure guideline and our teaching notes, create a 20-minute small-group case for internal medicine residents. Cite every recommendation to a source passage and include three teaching pitfalls.',
    governance: 'Version drift is the main risk. Show source date, approval owner, and last-reviewed status on every card.',
    metrics: ['Authoring time saved', 'Search success rate', 'Citation accuracy', 'Faculty adoption', 'Learner trust'],
    sources: ['chatgpt-edu', 'haystack', 'pgvector', 'wcag22', 'nist-ai-rmf']
  },
  {
    slug: 'plain-language-education',
    title: 'Plain-language patient and community education authoring',
    domain: 'Teaching and education',
    readiness: 'Education-ready',
    dataRisk: 'Non-PHI',
    effort: 'Low',
    audience: ['Public health faculty', 'Student health', 'Communications teams', 'Nursing educators'],
    summary: 'Draft readable, multilingual, audience-specific health education materials from approved source content.',
    why: 'Universities serve students, employees, patients, and communities. AI can accelerate understandable and consistent content while preserving human approval.',
    howToUse: [
      'Start from an approved source, not from a blank prompt.',
      'Select the audience, reading level, language, and channel.',
      'Generate versions for student, staff, patient, or community use.',
      'Run readability, accessibility, and subject-matter review.',
      'Publish with approval date and owner.'
    ],
    dataInputs: ['Approved education content', 'Reading level target', 'Language target', 'Brand guidelines', 'Audience tags'],
    tools: ['ChatGPT Edu', 'MedGemma experiments for research only', 'Human translation review', 'WCAG 2.2 checks'],
    samplePrompt: 'Rewrite this vaccination information sheet for first-year college students at an eighth-grade reading level. Preserve all safety instructions, add campus context, and produce English and Spanish versions for human review.',
    governance: 'Do not personalize using PHI unless the workflow is inside an approved HIPAA-governed system.',
    metrics: ['Readability score', 'Time to publish', 'Multilingual coverage', 'Engagement rate', 'Staff rework reduction'],
    sources: ['chatgpt-edu', 'wcag22', 'hipaa-security', 'medgemma']
  },
  {
    slug: 'literature-synthesis',
    title: 'Literature synthesis and hypothesis generation',
    domain: 'Research',
    readiness: 'Research-ready',
    dataRisk: 'Non-PHI',
    effort: 'Low',
    audience: ['Faculty researchers', 'Postdocs', 'Graduate students', 'Librarians', 'Research offices'],
    summary: 'Summarize papers, identify gaps, generate hypotheses, and convert evidence into grant or manuscript planning artifacts.',
    why: 'This is one of the fastest, lowest-risk ways to improve faculty productivity when outputs remain source-linked and human-reviewed.',
    howToUse: [
      'Build a source set from papers, abstracts, and grant calls.',
      'Ask focused research questions rather than broad topic questions.',
      'Require citations for every claim.',
      'Export structured notes, tables, and candidate aims.',
      'Have the research team verify all claims and references.'
    ],
    dataInputs: ['PDFs', 'Abstracts', 'Grant announcements', 'Citation metadata', 'Lab notes only if permitted'],
    tools: ['ChatGPT Edu', 'Haystack', 'FastAPI', 'pgvector', 'Institutional repository search'],
    samplePrompt: 'From the indexed literature on antimicrobial resistance in hospital settings since 2022, identify three unresolved research questions and propose one feasible observational study for each. Include citations and limitations.',
    governance: 'Hallucinated citations and overconfident summaries are the core risks. Every output must retain source links and uncertainty cues.',
    metrics: ['Search-to-insight time', 'Citation accuracy', 'Proposal drafting time saved', 'Researcher satisfaction', 'Grant concept generation'],
    sources: ['chatgpt-edu', 'haystack', 'fastapi', 'pgvector', 'nist-ai-rmf']
  },
  {
    slug: 'chart-summarization',
    title: 'Chart summarization and longitudinal record review',
    domain: 'Clinical care',
    readiness: 'Controlled pilot',
    dataRisk: 'HIPAA-relevant',
    effort: 'High',
    audience: ['Clinicians', 'Care coordinators', 'Clinical informatics', 'Quality teams'],
    summary: 'Summarize long records, construct timelines, and produce problem-oriented views for clinician review.',
    why: 'Chart review consumes clinical time, but this use case requires strong grounding, access control, logging, and human sign-off.',
    howToUse: [
      'Start with de-identified records in a sandbox.',
      'Define the exact clinical question and time window.',
      'Pull structured data through FHIR where possible.',
      'Show citations to note dates, labs, medication records, and imaging reports.',
      'Require clinician verification before reuse in care.'
    ],
    dataInputs: ['FHIR resources', 'Note text', 'Labs', 'Medications', 'Problem lists', 'Imaging reports'],
    tools: ['Epic AI workflows', 'Azure Health Data Services', 'AWS Comprehend Medical', 'Haystack', 'MedGemma for research prototypes only'],
    samplePrompt: 'Summarize the last 90 days of this de-identified patient record by active problem. Cite every statement to the relevant note date, lab, medication, or FHIR resource. Flag missing or conflicting information.',
    governance: 'Treat as assistive only. Clinical summaries need identity-aware access, audit logs, source traceability, and explicit clinician review.',
    metrics: ['Chart review time saved', 'Citation click-through', 'Clinician acceptance rate', 'Omitted-detail incidents', 'Trust score'],
    sources: ['fhir', 'smart-on-fhir', 'azure-health-data', 'hipaa-security', 'onc-hti1']
  },
  {
    slug: 'ambient-documentation',
    title: 'Ambient documentation and clinical workflow support',
    domain: 'Clinical care',
    readiness: 'Controlled pilot',
    dataRisk: 'HIPAA-relevant',
    effort: 'Medium',
    audience: ['Physicians', 'APPs', 'Nurses', 'Clinic managers', 'CMIO offices'],
    summary: 'Capture encounter audio, draft notes, extract follow-up items, and route drafts to clinicians for review.',
    why: 'Ambient documentation is one of the most mature healthcare AI categories, but it must be consented, reviewed, and governed.',
    howToUse: [
      'Use a vendor or environment covered by institutional agreements.',
      'Document patient notification and consent procedures.',
      'Record, transcribe, and generate draft note sections.',
      'Keep uncertain or unsupported items in a review queue.',
      'Push only clinician-approved content into the chart.'
    ],
    dataInputs: ['Encounter audio', 'Transcript', 'Visit type', 'Specialty template', 'Prior context where approved'],
    tools: ['Dragon Copilot', 'Abridge', 'AWS HealthScribe', 'Epic documentation workflows'],
    samplePrompt: 'Draft a family medicine follow-up note from this transcript using our approved template. Keep uncertain items in a review queue and cite each section to transcript evidence.',
    governance: 'Obtain consent where required. The note is a draft until a licensed clinician reviews, edits, and signs it.',
    metrics: ['Minutes saved per encounter', 'After-hours charting reduction', 'Edit distance from draft to final', 'Note sign-off time', 'Patient experience'],
    sources: ['dragon-copilot', 'abridge', 'aws-healthscribe', 'hipaa-security']
  },
  {
    slug: 'treatment-planning',
    title: 'Guideline-grounded treatment option support',
    domain: 'Clinical care',
    readiness: 'Advanced pilot',
    dataRisk: 'HIPAA-relevant',
    effort: 'High',
    audience: ['Specialists', 'Tumor boards', 'Pharmacists', 'Clinical informaticists'],
    summary: 'Draft option sets, evidence summaries, and missing-data checklists for clinician review, not autonomous treatment decisions.',
    why: 'The upside is high, but clinical influence is direct. This should be one of the most carefully governed use cases.',
    howToUse: [
      'Begin with de-identified cases and retrospective validation.',
      'Ground outputs in approved guidelines and institutional pathways.',
      'Generate options, not final decisions.',
      'Highlight contraindications and missing data.',
      'Require documented clinician approval or override.'
    ],
    dataInputs: ['Structured history', 'Medication list', 'Labs', 'Guidelines', 'Institutional pathways', 'Genomics where applicable'],
    tools: ['Epic AI workflows', 'Azure OpenAI in governed environments', 'AWS Bedrock in HIPAA-eligible workflows', 'MedGemma for research prototypes'],
    samplePrompt: 'For this de-identified oncology case, produce a clinician-facing option list grounded in the indexed institutional pathway. Do not recommend a final treatment. Highlight missing data needed before decision-making.',
    governance: 'Depending on implementation and reliance, this may require medical device or decision-support review. Keep the tool assistive, traceable, and validated.',
    metrics: ['Evidence retrieval completeness', 'Missing-data detection', 'Override rate', 'Board preparation time', 'Safety review flags'],
    sources: ['fda-ai-ml', 'onc-hti1', 'fhir', 'medgemma', 'nist-ai-rmf']
  },
  {
    slug: 'preventive-outreach',
    title: 'Preventive outreach and risk-based segmentation',
    domain: 'Administration and operations',
    readiness: 'Controlled pilot',
    dataRisk: 'HIPAA-relevant',
    effort: 'Medium',
    audience: ['Population health', 'Student health', 'Public health teams', 'Care managers'],
    summary: 'Identify care gaps, segment populations, and draft targeted outreach for approved review and delivery.',
    why: 'Universities can use this for student health, employee health, community outreach, and academic medical center care-gap work.',
    howToUse: [
      'Define the population and care-gap criteria.',
      'Score or segment using approved data sources.',
      'Draft outreach content by audience group.',
      'Review for fairness, tone, and policy compliance.',
      'Track conversion and care-gap closure.'
    ],
    dataInputs: ['Claims', 'EHR data', 'Scheduling data', 'Care-gap definitions', 'Outreach templates', 'Preference data'],
    tools: ['Epic population health', 'Diagnostic Robotics', 'FHIR stores', 'Custom dashboards'],
    samplePrompt: 'Create three outreach variants for adults overdue for hypertension follow-up: one for students, one for staff, and one for community clinic patients. Keep the tone supportive and include scheduling options.',
    governance: 'Review for disparate impact, inappropriate targeting, and privacy issues before outreach is sent.',
    metrics: ['Outreach conversion', 'Care-gap closure', 'No-show reduction', 'Screening completion', 'Fairness checks'],
    sources: ['hipaa-security', 'nist-ai-rmf', 'fhir']
  },
  {
    slug: 'claims-coding',
    title: 'Claims, coding, denial, and audit support',
    domain: 'Administration and operations',
    readiness: 'Controlled pilot',
    dataRisk: 'HIPAA-relevant',
    effort: 'Medium',
    audience: ['Revenue cycle', 'Coders', 'Compliance', 'Finance', 'Internal audit'],
    summary: 'Parse payer rules, denial letters, policies, and chart extracts to draft review packets and appeal memos.',
    why: 'Revenue-cycle work is document-heavy and repeatable, but errors can scale quickly if automation is not reviewed.',
    howToUse: [
      'Index contracts, payer policies, and coding guidance.',
      'Upload a denial or audit scenario.',
      'Map the issue to policy and documentation evidence.',
      'Draft an appeal memo or review note.',
      'Route to a certified coder or compliance reviewer.'
    ],
    dataInputs: ['Payer contracts', 'CPT and ICD references', 'Claims', 'Denial letters', 'Chart extracts', 'Audit rules'],
    tools: ['AWS Comprehend Medical', 'Haystack', 'pgvector', 'Epic operations workflows'],
    samplePrompt: 'Analyze this denial letter, map it to the payer policy and contract language, and draft an evidence-backed appeal memo. Highlight missing documentation before final submission.',
    governance: 'Human review is mandatory. Track false positives, coding drift, and override patterns.',
    metrics: ['Denial overturn rate', 'Coder productivity', 'Turnaround time', 'Audit findings', 'False-positive flags'],
    sources: ['hipaa-security', 'haystack', 'pgvector', 'nist-ai-rmf']
  },
  {
    slug: 'synthetic-datasets',
    title: 'Synthetic multimodal data and dataset augmentation',
    domain: 'Research',
    readiness: 'Controlled pilot',
    dataRisk: 'De-identified only',
    effort: 'High',
    audience: ['AI labs', 'Imaging cores', 'Biostatistics', 'Translational science'],
    summary: 'Create synthetic or augmented datasets for method development, benchmarking, and teaching under research governance.',
    why: 'Small and imbalanced datasets slow academic AI work. Synthetic data can help, but re-identification and leakage risks remain.',
    howToUse: [
      'De-identify source data and document the method.',
      'Define the augmentation objective and downstream task.',
      'Generate synthetic variants with full provenance.',
      'Benchmark utility and bias against held-out data.',
      'Release only inside approved research boundaries.'
    ],
    dataInputs: ['De-identified images', 'Segmentation labels', 'Metadata schemas', 'Evaluation benchmarks', 'Task definitions'],
    tools: ['MONAI', 'MAISI', 'MedGemma', 'Weaviate', 'pgvector'],
    samplePrompt: 'Create a synthetic augmentation plan to improve rare-finding coverage for chest imaging research. Maintain class balance and document all generation parameters in a dataset card.',
    governance: 'De-identification reduces risk but does not eliminate it. Require data governance review and leakage testing.',
    metrics: ['Model performance lift', 'Dataset diversity', 'Leakage review', 'Time to dataset release', 'Projects supported'],
    sources: ['hipaa-deid', 'monai', 'maisi', 'medgemma', 'pgvector']
  },
  {
    slug: 'omics-drug-discovery',
    title: 'Drug discovery and omics support',
    domain: 'Research',
    readiness: 'Advanced pilot',
    dataRisk: 'De-identified only',
    effort: 'High',
    audience: ['Biomedical researchers', 'Computational biology', 'Core facilities', 'Translational institutes'],
    summary: 'Support target prioritization, sequence reasoning, omics interpretation, and candidate validation planning.',
    why: 'This is relevant for biomedical research universities, but it is a specialized research accelerator, not a clinical tool.',
    howToUse: [
      'Define the scientific task and validation endpoint.',
      'Ingest sequences, assay summaries, omics files, and literature.',
      'Rank targets or candidates with transparent scoring criteria.',
      'Route candidates to wet-lab validation.',
      'Document model, dataset, and licensing limits.'
    ],
    dataInputs: ['Protein sequences', 'Structures', 'Functional annotations', 'Omics files', 'Assay data', 'Literature'],
    tools: ['AWS HealthOmics', 'ESM models', 'Ginkgo protein model APIs', 'Institutional HPC'],
    samplePrompt: 'Given these candidate protein targets and assay summaries, rank follow-up targets by novelty, tractability, and translational relevance. Output a justification table and proposed validation sequence.',
    governance: 'Use as research support only. Check licensing, commercialization limits, and biological safety review requirements.',
    metrics: ['Hypothesis-to-experiment cycle time', 'Candidates prioritized', 'Wet-lab validation rate', 'Compute cost', 'Grant support'],
    sources: ['nist-ai-rmf']
  },
  {
    slug: 'forecasting-resource-allocation',
    title: 'Population forecasting and resource allocation',
    domain: 'Administration and operations',
    readiness: 'Controlled pilot',
    dataRisk: 'HIPAA-relevant',
    effort: 'Medium',
    audience: ['Department administrators', 'Population health', 'Student health', 'Community programs'],
    summary: 'Forecast demand, simulate staffing scenarios, and identify resource gaps across clinics, campus services, or outreach programs.',
    why: 'Faculty and staff leaders need better planning tools, but forecasts can reproduce existing inequities if not reviewed.',
    howToUse: [
      'Define the service, geography, and planning period.',
      'Connect scheduling, utilization, and population indicators.',
      'Create base, constrained, and targeted intervention scenarios.',
      'Review equity and sensitivity analyses.',
      'Track forecast versus actual performance.'
    ],
    dataInputs: ['Scheduling', 'Claims', 'EHR summaries', 'Community indicators', 'Staffing data', 'Campaign results'],
    tools: ['Epic population health', 'FHIR services', 'D3 or Recharts dashboards', 'Custom forecasting models'],
    samplePrompt: 'Forecast screening demand and nurse capacity for the next semester across main campus, satellite clinics, and community outreach events. Show base, constrained staffing, and targeted outreach scenarios.',
    governance: 'Add equity review, sensitivity analysis, and leadership review before operational decisions are made.',
    metrics: ['Forecast error', 'Staffing utilization', 'Wait time', 'Screening completion', 'Equity gap reduction'],
    sources: ['nist-ai-rmf', 'fhir', 'hipaa-security']
  }
];
