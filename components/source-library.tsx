import { ExternalLink } from "lucide-react";
import { sources } from "@/data/sources";

export function SourceLibrary() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {sources.map((s) => (
        <article key={s.id} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
          <div className="flex flex-wrap gap-2">
            <span className="badge">{s.type}</span>
            <span className="badge badge-gold">Reviewed {s.lastReviewed}</span>
          </div>
          <h2 className="mt-3 text-xl font-bold text-ink">{s.title}</h2>
          <p className="mt-1 text-sm font-semibold text-lsupurple">{s.organization}</p>
          <p className="mt-3 text-sm leading-6 text-mutedink">{s.note}</p>
          <a href={s.url} target="_blank" rel="noreferrer" className="focus-ring mt-4 inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-sm font-bold text-slate-800 hover:bg-slate-200">
            Open source <ExternalLink className="h-4 w-4" />
          </a>
        </article>
      ))}
    </div>
  );
}
