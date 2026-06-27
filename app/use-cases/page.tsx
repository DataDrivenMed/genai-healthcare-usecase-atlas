import { UseCaseExplorer } from "@/components/use-case-explorer";

export default function UseCasesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
        <p className="text-sm font-bold uppercase tracking-[.18em] text-lsupurple">Interactive catalogue</p>
        <h1 className="mt-2 text-4xl font-black text-ink">Use Cases</h1>
        <p className="mt-3 max-w-4xl leading-7 text-mutedink">Filter by domain, risk, implementation authority, partner involvement, and NCI relevance. Use cases are candidates for planning, faculty development, and governed pilots, not automatic approvals.</p>
      </div>
      <UseCaseExplorer />
    </div>
  );
}
