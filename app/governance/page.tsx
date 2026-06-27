import { SiteHeader } from '@/components/site-header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const principles = [
  ['Non-PHI first', 'Launch the public or internal guide with non-PHI content, faculty prompts, tool comparisons, and source links.'],
  ['Human review always', 'Generated content should be reviewed by faculty, clinicians, researchers, or operational owners before use.'],
  ['Source traceability', 'Every factual or policy-relevant claim should connect to a source, approval owner, or institutional document.'],
  ['Separate pilot zone', 'Clinical or operational pilots need identity, role-based permissions, audit logs, and covered services where PHI is involved.'],
  ['Accessibility by design', 'Use semantic HTML, keyboard navigation, visible focus states, readable contrast, and reduced-motion support.']
];

export default function GovernancePage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <Badge className="mb-4 bg-white text-primary">Governance model</Badge>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Safe rollout model for university health AI</h1>
        <p className="mt-5 max-w-4xl text-lg leading-8 text-muted-foreground">
          The artifact uses a two-zone model. Zone one is an educational knowledge site. Zone two is a protected pilot environment for approved workflows that require clinical, research, or operational data integration.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <Card className="shadow-soft">
            <CardHeader><CardTitle>Zone one: informational site</CardTitle></CardHeader>
            <CardContent className="prose-lite text-muted-foreground">
              <ul>
                <li>Use-case cards and role pathways</li>
                <li>Prompt templates using non-PHI examples</li>
                <li>Source library and citations</li>
                <li>Tool comparison matrix</li>
                <li>Faculty development and staff education</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="shadow-soft">
            <CardHeader><CardTitle>Zone two: protected pilots</CardTitle></CardHeader>
            <CardContent className="prose-lite text-muted-foreground">
              <ul>
                <li>SSO and role-based permissions</li>
                <li>Audit logging and usage analytics</li>
                <li>FHIR, SMART on FHIR, or DICOM integrations</li>
                <li>BAA-covered services where PHI is involved</li>
                <li>Formal privacy, security, and operational review</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="mt-10 grid gap-4">
          {principles.map(([title, body]) => (
            <Card key={title}>
              <CardHeader><CardTitle>{title}</CardTitle></CardHeader>
              <CardContent><p className="leading-7 text-muted-foreground">{body}</p></CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
