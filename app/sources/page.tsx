import { SourceLibrary } from "@/components/source-library";

export default function SourcesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
        <p className="text-sm font-bold uppercase tracking-[.18em] text-lsupurple">Evidence base</p>
        <h1 className="mt-2 text-4xl font-black text-ink">Source Library</h1>
        <p className="mt-3 max-w-4xl leading-7 text-mutedink">Official sources, guidance, model pages, vendor documentation, research data resources, and institutional context used to structure this guide.</p>
      </div>
      <SourceLibrary />
    </div>
  );
}
