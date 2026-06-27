const prompts = [
  ["Teaching", "Create a synthetic case for [learner level] on [topic]. Include staged data release, differential prompts, discussion questions, faculty teaching points, and common pitfalls. Mark as synthetic educational content."],
  ["Research", "Using the indexed literature on [topic], identify major findings, contradictions, methods gaps, and three feasible research questions for LSUHSC. Cite every claim to a source."],
  ["NCI readiness", "Analyze these cancer-related grants and publications. Identify possible program themes, faculty anchors, collaboration gaps, shared-resource needs, and NCI relevance."],
  ["Clinical partner pilot", "For this de-identified clinical workflow, define the data needed, partner approvals, human review steps, risk controls, success metrics, and go/no-go criteria."],
  ["Operations", "Create a one-page decision memo with background, options, pros and cons, risks, recommendation, decision needed, owner, and follow-up metrics."],
  ["Vendor review", "Evaluate this AI vendor description. List missing information about PHI, BAA, data retention, model identity, validation, audit logs, bias testing, accessibility, and integration requirements."]
];

export default function PromptsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <section className="mb-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
        <p className="text-sm font-bold uppercase tracking-[.18em] text-lsupurple">Reusable templates</p>
        <h1 className="mt-2 text-4xl font-black text-ink">Prompt Library</h1>
        <p className="mt-3 max-w-4xl leading-7 text-mutedink">Copy-ready prompts for non-PHI education, research support, planning, and governance. Do not paste protected health information or confidential records into unapproved tools.</p>
      </section>
      <div className="grid gap-5 md:grid-cols-2">
        {prompts.map(([title, prompt]) => (
          <article key={title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
            <h2 className="text-xl font-bold text-ink">{title}</h2>
            <div className="mt-4 rounded-2xl bg-slate-950 p-4 text-sm leading-6 text-slate-100">{prompt}</div>
          </article>
        ))}
      </div>
    </div>
  );
}
