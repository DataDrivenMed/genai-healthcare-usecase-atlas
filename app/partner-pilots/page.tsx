const rows = [
  ["Education-only, no PHI", "Lead", "Optional reviewer", "Synthetic cases, OSCEs, faculty development"],
  ["Research using de-identified data", "Lead with IRB and research governance", "Data provider or collaborator", "Imaging AI, omics, retrospective studies"],
  ["EHR-connected clinical workflow", "Academic partner, evaluator, educator", "Operational owner", "Chart summary, patient messages, ambient notes"],
  ["Patient outreach", "Research or population health partner", "Operational owner", "Screening outreach, care gaps, reminders"],
  ["Revenue cycle", "Advisory or analytic partner", "Operational owner", "Denials, claims, coding support"],
  ["Cancer clinical trials", "Academic and clinical co-lead", "Operational and clinical data owner", "Trial matching, feasibility, accrual analytics"]
];

const checklist = [
  "Partner owner identified",
  "LSUHSC sponsor identified",
  "Use case and success metric defined",
  "Data source and PHI status confirmed",
  "BAA, contract, or security review completed if needed",
  "IRB, QI, or operational determination completed if needed",
  "Human review workflow defined",
  "Access control, logging, and retention rules defined",
  "Pilot stop criteria and go-live criteria documented",
  "Faculty, trainee, patient, and staff communication plan created"
];

export default function PartnerPilotsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <section className="mb-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
        <p className="text-sm font-bold uppercase tracking-[.18em] text-lsupurple">LSUHSC partner-aware model</p>
        <h1 className="mt-2 text-4xl font-black text-ink">Partner-Governed Clinical AI Pilots</h1>
        <p className="mt-3 max-w-4xl leading-7 text-mutedink">LSUHSC educates, researches, evaluates, and partners across health systems. It does not own the hospital EHR or many clinical operations. Clinical AI must therefore distinguish LSUHSC-led work from partner-governed deployment.</p>
      </section>

      <section className="mb-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
        <table className="w-full border-collapse text-left text-sm">
          <thead className="bg-slate-100 text-ink"><tr><th className="p-4">Use-case type</th><th className="p-4">LSUHSC role</th><th className="p-4">Partner role</th><th className="p-4">Examples</th></tr></thead>
          <tbody>
            {rows.map((r) => <tr key={r[0]} className="border-t border-slate-200"><td className="p-4 font-bold text-ink">{r[0]}</td><td className="p-4 text-mutedink">{r[1]}</td><td className="p-4 text-mutedink">{r[2]}</td><td className="p-4 text-mutedink">{r[3]}</td></tr>)}
          </tbody>
        </table>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
        <h2 className="text-2xl font-bold text-ink">Partner pilot checklist</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {checklist.map((item) => <div key={item} className="rounded-2xl bg-slate-50 p-4 text-sm font-semibold text-slate-700">{item}</div>)}
        </div>
      </section>
    </div>
  );
}
