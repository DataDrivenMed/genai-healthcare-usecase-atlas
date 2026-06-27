export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft prose-lite">
        <p className="text-sm font-bold uppercase tracking-[.18em] text-lsupurple">Purpose and scope</p>
        <h1 className="mt-2 text-4xl font-black text-ink">About this Atlas</h1>
        <p className="mt-4 leading-7 text-mutedink">This artifact is designed for LSUHSC faculty and staff as a practical guide to generative AI use cases in an academic health sciences environment. It is intentionally structured around domains, roles, data sensitivity, partner involvement, and NCI relevance.</p>
        <p className="leading-7 text-mutedink">It is not a procurement recommendation, clinical approval pathway, or institutional policy. It is a planning and education artifact that can help faculty, staff, departments, and leaders understand where AI can be useful, where risk is higher, and where partner governance is required.</p>
        <h2 className="mt-8 text-2xl font-bold text-ink">Design principles</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-mutedink">
          <li>Separate models from platforms and deployment authority.</li>
          <li>Make PHI, partner approval, and human review visible.</li>
          <li>Favor official sources and source links.</li>
          <li>Support LSUHSC-led education and research while respecting partner health-system ownership of clinical operations.</li>
          <li>Frame NCI readiness through research programs, shared resources, trials, community outreach, and translational science.</li>
        </ul>
      </section>
    </div>
  );
}
