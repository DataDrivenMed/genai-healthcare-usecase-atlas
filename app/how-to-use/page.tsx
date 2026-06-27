import { SiteHeader } from '@/components/site-header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const steps = [
  ['1', 'Start by role', 'Faculty should begin with teaching, case design, literature synthesis, and plain-language education. Clinical teams should begin with approved pilot candidates only. Administrative staff should begin with document-heavy, review-based workflows.'],
  ['2', 'Check data sensitivity', 'Non-PHI use cases can usually move faster. De-identified data needs documentation. HIPAA-relevant workflows require formal privacy, security, contracting, and operational review.'],
  ['3', 'Choose readiness level', 'Education-ready and research-ready cards are first-wave candidates. Controlled pilots need protected environments. Advanced pilots need validation, governance, and domain-specific oversight.'],
  ['4', 'Use the sample prompt', 'Prompts are templates for faculty and staff education. They should be adapted to approved local source material and reviewed by subject-matter experts.'],
  ['5', 'Measure impact', 'Each card includes practical metrics such as authoring time saved, citation accuracy, adoption, chart review time, or care-gap closure.']
];

export default function HowToUsePage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="mx-auto max-w-5xl px-4 py-14 md:px-6">
        <Badge className="mb-4 bg-white text-primary">Operating guide</Badge>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">How to use this artifact</h1>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">
          This site is designed as a practical front door for university faculty and staff who want to understand where generative AI can help, where it needs governance, and how to move from idea to safe implementation.
        </p>
        <div className="mt-10 grid gap-5">
          {steps.map(([number, title, body]) => (
            <Card key={number}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm">{number}</span>{title}</CardTitle>
              </CardHeader>
              <CardContent><p className="leading-7 text-muted-foreground">{body}</p></CardContent>
            </Card>
          ))}
        </div>
        <Card className="mt-10 bg-white/80">
          <CardHeader><CardTitle>Suggested LSUHSC rollout language</CardTitle></CardHeader>
          <CardContent className="prose-lite text-muted-foreground">
            <p>
              Use this guide as an educational and planning resource for faculty and staff. It is not a clinical tool, not a substitute for institutional policy, and not a pathway for entering PHI into public AI systems. Any workflow involving patient data, learner data, employee data, protected research data, or operationally sensitive information should follow existing LSUHSC review channels.
            </p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  );
}
