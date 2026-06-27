const dos = [
  ["Use AI with synthetic cases, public guidelines, and faculty-authored content", "Paste identifiable patient information into unapproved tools"],
  ["Use AI to summarize public literature and draft teaching materials", "Treat AI output as clinical authority"],
  ["Use approved platforms for sensitive institutional data", "Use personal accounts for PHI, clinical notes, audio, images, or EHR data"],
  ["Require human review for clinical, research, and policy outputs", "Let AI invent citations, results, recommendations, or approvals"],
  ["Document model, data source, reviewer, and intended use", "Assume a strong model is an approved deployment"]
];

const phiQuestions = [
  "Does the workflow involve a real patient, learner, employee, or research participant?",
  "Does it include names, dates, MRNs, faces, voice, images, notes, location, or clinical context?",
  "Is the tool approved by LSUHSC or the relevant partner health system for this data type?",
  "Is there a BAA or equivalent data-protection agreement where required?",
  "Are access controls, logging, retention rules, and human review defined?",
  "Is the use case education, research, QI, operations, or clinical care?",
  "Who owns the final decision and who reviews the output?"
];

export default function GovernancePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <section className="mb-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
        <p className="text-sm font-bold uppercase tracking-[.18em] text-lsupurple">Safe use first</p>
        <h1 className="mt-2 text-4xl font-black text-ink">Governance</h1>
        <p className="mt-3 max-w-4xl leading-7 text-mutedink">A practical decision layer for faculty and staff. The goal is not to slow down responsible use. The goal is to make risk, data sensitivity, review, and implementation authority visible before pilots begin.</p>
      </section>

      <section className="mb-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
        <h2 className="text-2xl font-bold text-ink">Do and do not</h2>
        <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-slate-100 text-ink"><tr><th className="p-3">Do</th><th className="p-3">Do not</th></tr></thead>
            <tbody>
              {dos.map(([d, n]) => <tr key={d} className="border-t border-slate-200"><td className="p-3 text-mutedink">{d}</td><td className="p-3 text-mutedink">{n}</td></tr>)}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-bold text-ink">PHI decision tree</h2>
          <ol className="mt-5 list-decimal space-y-3 pl-5 text-sm leading-6 text-mutedink">
            {phiQuestions.map((q) => <li key={q}>{q}</li>)}
          </ol>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-bold text-ink">Model is not deployment</h2>
          <p className="mt-4 leading-7 text-mutedink">A powerful model is not the same as an approved institutional deployment. GPT, Claude, Gemini, MedGemma, Llama, Mistral, Phi, Nemotron, and similar tools are model candidates. Use in education, research, clinical care, or operations depends on institutional contracts, data protections, validation, governance, accessibility, auditability, and human review.</p>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
        <h2 className="text-2xl font-bold text-ink">Use-case maturity badges</h2>
        <div className="mt-5 flex flex-wrap gap-2">
          {[
            "Ready for faculty use",
            "Ready for research support",
            "Needs pilot",
            "Needs partner approval",
            "Clinical Assistive Only",
            "Advanced research only",
            "Do not use with PHI unless approved"
          ].map((b) => <span key={b} className="badge">{b}</span>)}
        </div>
      </section>
    </div>
  );
}
