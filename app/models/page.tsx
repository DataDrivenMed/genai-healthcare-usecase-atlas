import { ModelDirectory } from "@/components/model-directory";

export default function ModelsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
        <p className="text-sm font-bold uppercase tracking-[.18em] text-lsupurple">Model is not deployment</p>
        <h1 className="mt-2 text-4xl font-black text-ink">Models & Tools Directory</h1>
        <p className="mt-3 max-w-4xl leading-7 text-mutedink">This directory separates frontier models, healthcare models, open-weight candidates, clinical platforms, infrastructure, and research data resources. Chinese-origin model families are intentionally excluded. Inclusion here means candidate for evaluation, not institutional approval.</p>
      </div>
      <ModelDirectory />
    </div>
  );
}
