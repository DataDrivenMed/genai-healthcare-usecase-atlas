'use client';

import { useMemo, useState } from 'react';
import { Search, ShieldCheck, GraduationCap, Microscope, Stethoscope, Building2, ArrowRight, ClipboardList } from 'lucide-react';
import { useCases, type DataRisk, type Domain, type Effort, type Readiness } from '@/data/useCases';
import { sources } from '@/data/sources';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

const domains: Array<'All' | Domain> = ['All', 'Teaching and education', 'Clinical care', 'Research', 'Administration and operations'];
const readinessOptions: Array<'All' | Readiness> = ['All', 'Education-ready', 'Research-ready', 'Controlled pilot', 'Advanced pilot'];
const riskOptions: Array<'All' | DataRisk> = ['All', 'Non-PHI', 'De-identified only', 'HIPAA-relevant'];
const effortOptions: Array<'All' | Effort> = ['All', 'Low', 'Medium', 'High'];

function domainIcon(domain: Domain) {
  if (domain === 'Teaching and education') return <GraduationCap className="h-5 w-5" aria-hidden="true" />;
  if (domain === 'Clinical care') return <Stethoscope className="h-5 w-5" aria-hidden="true" />;
  if (domain === 'Research') return <Microscope className="h-5 w-5" aria-hidden="true" />;
  return <Building2 className="h-5 w-5" aria-hidden="true" />;
}

function sourceTitles(ids: string[]) {
  return ids.map((id) => sources.find((source) => source.id === id)).filter(Boolean);
}

export function UseCaseExplorer() {
  const [query, setQuery] = useState('');
  const [domain, setDomain] = useState<'All' | Domain>('All');
  const [readiness, setReadiness] = useState<'All' | Readiness>('All');
  const [risk, setRisk] = useState<'All' | DataRisk>('All');
  const [effort, setEffort] = useState<'All' | Effort>('All');
  const [activeSlug, setActiveSlug] = useState(useCases[0].slug);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return useCases.filter((item) => {
      const matchesQuery = !needle || [item.title, item.summary, item.domain, item.readiness, item.governance, ...item.tools, ...item.audience].join(' ').toLowerCase().includes(needle);
      return matchesQuery &&
        (domain === 'All' || item.domain === domain) &&
        (readiness === 'All' || item.readiness === readiness) &&
        (risk === 'All' || item.dataRisk === risk) &&
        (effort === 'All' || item.effort === effort);
    });
  }, [query, domain, readiness, risk, effort]);

  const active = useCases.find((item) => item.slug === activeSlug) ?? filtered[0] ?? useCases[0];

  return (
    <section id="use-cases" className="mx-auto max-w-7xl px-4 py-12 md:px-6" aria-labelledby="use-cases-title">
      <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Interactive catalogue</p>
          <h2 id="use-cases-title" className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">Use-case cards for faculty and staff</h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Filter by domain, readiness, data sensitivity, and implementation effort. Each card includes a practical workflow, sample prompt, governance note, metrics, and source links.
          </p>
        </div>
        <Badge className="w-fit bg-white text-foreground">{filtered.length} visible cards</Badge>
      </div>

      <Card className="mb-8 shadow-soft">
        <CardContent className="grid gap-4 p-5 md:grid-cols-5">
          <label className="md:col-span-2">
            <span className="mb-2 block text-sm font-medium">Search</span>
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" aria-hidden="true" />
              <Input className="pl-9" placeholder="Find tool, role, use case, or risk" value={query} onChange={(event) => setQuery(event.target.value)} />
            </div>
          </label>
          <label>
            <span className="mb-2 block text-sm font-medium">Domain</span>
            <Select value={domain} onChange={(event) => setDomain(event.target.value as 'All' | Domain)}>{domains.map((option) => <option key={option}>{option}</option>)}</Select>
          </label>
          <label>
            <span className="mb-2 block text-sm font-medium">Readiness</span>
            <Select value={readiness} onChange={(event) => setReadiness(event.target.value as 'All' | Readiness)}>{readinessOptions.map((option) => <option key={option}>{option}</option>)}</Select>
          </label>
          <label>
            <span className="mb-2 block text-sm font-medium">Data risk</span>
            <Select value={risk} onChange={(event) => setRisk(event.target.value as 'All' | DataRisk)}>{riskOptions.map((option) => <option key={option}>{option}</option>)}</Select>
          </label>
          <label>
            <span className="mb-2 block text-sm font-medium">Effort</span>
            <Select value={effort} onChange={(event) => setEffort(event.target.value as 'All' | Effort)}>{effortOptions.map((option) => <option key={option}>{option}</option>)}</Select>
          </label>
        </CardContent>
      </Card>

      <div className="grid gap-8 lg:grid-cols-[1fr_420px]">
        <div className="grid gap-4 md:grid-cols-2">
          {filtered.map((item) => (
            <button key={item.slug} onClick={() => setActiveSlug(item.slug)} className="text-left">
              <Card className={`h-full transition hover:-translate-y-1 hover:shadow-soft ${active.slug === item.slug ? 'ring-2 ring-primary' : ''}`}>
                <CardHeader>
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary">{domainIcon(item.domain)}</span>
                    <ShieldCheck className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                  </div>
                  <CardTitle className="leading-tight">{item.title}</CardTitle>
                  <CardDescription>{item.summary}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <Badge>{item.domain}</Badge>
                    <Badge className="bg-secondary">{item.readiness}</Badge>
                    <Badge className="bg-white">{item.dataRisk}</Badge>
                    <Badge className="bg-white">{item.effort}</Badge>
                  </div>
                  <p className="flex items-center gap-2 text-sm font-medium text-primary">View implementation detail <ArrowRight className="h-4 w-4" aria-hidden="true" /></p>
                </CardContent>
              </Card>
            </button>
          ))}
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start" aria-label="Selected use-case details">
          <Card className="shadow-soft">
            <CardHeader>
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                <ClipboardList className="h-4 w-4" aria-hidden="true" /> Selected card
              </div>
              <CardTitle className="text-2xl leading-tight">{active.title}</CardTitle>
              <CardDescription>{active.why}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <Badge>{active.readiness}</Badge>
                <Badge>{active.dataRisk}</Badge>
                <Badge>{active.effort} effort</Badge>
              </div>
              <DetailList title="How to use" items={active.howToUse} ordered />
              <DetailList title="Required inputs" items={active.dataInputs} />
              <DetailList title="Tools to evaluate" items={active.tools} />
              <div>
                <h4 className="mb-2 font-semibold">Sample prompt</h4>
                <pre className="whitespace-pre-wrap rounded-lg bg-slate-950 p-4 text-sm text-slate-50">{active.samplePrompt}</pre>
              </div>
              <div>
                <h4 className="mb-2 font-semibold">Governance note</h4>
                <p className="text-sm leading-6 text-muted-foreground">{active.governance}</p>
              </div>
              <DetailList title="Metrics" items={active.metrics} />
              <div>
                <h4 className="mb-2 font-semibold">Source links</h4>
                <ul className="space-y-2 text-sm">
                  {sourceTitles(active.sources).map((source) => source && (
                    <li key={source.id}>
                      <a className="font-medium text-primary underline" href={source.url} target="_blank" rel="noreferrer">{source.title}</a>
                      <span className="block text-muted-foreground">{source.organization}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>
    </section>
  );
}

function DetailList({ title, items, ordered = false }: { title: string; items: string[]; ordered?: boolean }) {
  const ListTag = ordered ? 'ol' : 'ul';
  return (
    <div>
      <h4 className="mb-2 font-semibold">{title}</h4>
      <ListTag className={`${ordered ? 'list-decimal' : 'list-disc'} space-y-1 pl-5 text-sm leading-6 text-muted-foreground`}>
        {items.map((item) => <li key={item}>{item}</li>)}
      </ListTag>
    </div>
  );
}
