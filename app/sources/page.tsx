import { SiteHeader } from '@/components/site-header';
import { Footer } from '@/components/footer';
import { sources } from '@/data/sources';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function SourcesPage() {
  const groups = Array.from(new Set(sources.map((source) => source.category)));
  return (
    <>
      <SiteHeader />
      <main id="main" className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <Badge className="mb-4 bg-white text-primary">Evidence library</Badge>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Source library</h1>
        <p className="mt-5 max-w-4xl text-lg leading-8 text-muted-foreground">
          This page collects official documentation and stable references used by the guide. Add local LSUHSC policies, contracts, IRB guidance, privacy office instructions, and approved teaching resources as separate internal sources.
        </p>
        <div className="mt-10 space-y-8">
          {groups.map((group) => (
            <section key={group} aria-labelledby={`${group}-title`}>
              <h2 id={`${group}-title`} className="mb-4 text-2xl font-bold">{group}</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {sources.filter((source) => source.category === group).map((source) => (
                  <Card key={source.id}>
                    <CardHeader>
                      <CardTitle className="text-lg"><a className="text-primary underline" href={source.url} target="_blank" rel="noreferrer">{source.title}</a></CardTitle>
                      <CardDescription>{source.organization}</CardDescription>
                    </CardHeader>
                    <CardContent><p className="text-sm leading-6 text-muted-foreground">{source.note}</p></CardContent>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
