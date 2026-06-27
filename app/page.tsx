import Link from 'next/link';
import { ArrowRight, BookOpenCheck, CheckCircle2, DatabaseZap, GraduationCap, LockKeyhole, SearchCheck, ShieldCheck } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { Footer } from '@/components/footer';
import { UseCaseExplorer } from '@/components/use-case-explorer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const domains = [
  { title: 'Teaching and education', body: 'Synthetic cases, guideline teaching, patient education, simulations, and faculty development.', icon: GraduationCap },
  { title: 'Clinical care', body: 'Chart summarization, ambient documentation, treatment option support, and preventive outreach under formal governance.', icon: ShieldCheck },
  { title: 'Research', body: 'Literature synthesis, hypothesis generation, synthetic datasets, omics workflows, and grant support.', icon: SearchCheck },
  { title: 'Administration and operations', body: 'Claims support, coding review, resource forecasting, population planning, and outreach workflows.', icon: DatabaseZap }
];

const roadmap = [
  ['Phase 1', 'Non-PHI content site', 'Launch polished guide, cards, filters, source library, and prompt templates.'],
  ['Phase 2', 'Search and prototypes', 'Add structured search, non-PHI demos, analytics, and update workflows.'],
  ['Phase 3', 'Governed pilots', 'Pilot chart summarization or ambient documentation in approved environments.'],
  ['Phase 4', 'Expansion', 'Scale into population health, research computing, claims support, and advanced translational use cases.']
];

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[1.1fr_0.9fr] md:px-6 md:py-24">
          <div>
            <Badge className="mb-5 bg-white text-primary">For LSU, LSUHSC, and university health audiences</Badge>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Generative AI healthcare use cases, organized for faculty and staff action.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
              A professional, source-linked, interactive guide that translates the healthcare AI market into practical university workflows across teaching, clinical care, research, and administration.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg"><Link href="#use-cases">Explore use cases <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
              <Button asChild size="lg" variant="outline"><Link href="/how-to-use">How to use this guide</Link></Button>
            </div>
            <div className="mt-8 grid gap-3 text-sm text-muted-foreground md:grid-cols-3">
              <p className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Role-based navigation</p>
              <p className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> PHI risk labels</p>
              <p className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Source-linked evidence</p>
            </div>
          </div>
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>Recommended launch posture</CardTitle>
              <CardDescription>
                Start with high-value, low-regret educational and research use cases. Move clinical and operational workflows into controlled pilots only after governance and technical controls are in place.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {roadmap.map(([phase, title, body]) => (
                <div key={phase} className="rounded-lg border bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{phase}</p>
                  <h3 className="mt-1 font-semibold">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{body}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        <section className="border-y bg-white/70 py-12">
          <div className="mx-auto grid max-w-7xl gap-4 px-4 md:grid-cols-4 md:px-6">
            {domains.map((domain) => {
              const Icon = domain.icon;
              return (
                <Card key={domain.title}>
                  <CardHeader>
                    <Icon className="mb-2 h-7 w-7 text-primary" aria-hidden="true" />
                    <CardTitle className="text-lg">{domain.title}</CardTitle>
                    <CardDescription>{domain.body}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </section>

        <UseCaseExplorer />

        <section className="mx-auto max-w-7xl px-4 pb-16 md:px-6">
          <Card className="bg-primary text-primary-foreground shadow-soft">
            <CardContent className="grid gap-6 p-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] opacity-80">Implementation principle</p>
                <h2 className="mt-2 text-3xl font-bold">Two-zone architecture</h2>
                <p className="mt-3 max-w-3xl leading-7 opacity-90">
                  Zone one is a broadly accessible informational site with non-PHI content. Zone two is a protected pilot layer for approved workflows that need identity, logging, permissions, FHIR, DICOM, or BAA-covered services.
                </p>
              </div>
              <Button asChild variant="secondary"><Link href="/governance">View governance model <LockKeyhole className="ml-2 h-4 w-4" /></Link></Button>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </>
  );
}
