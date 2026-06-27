import { ExternalLink } from "lucide-react";
import { modelDirectory } from "@/data/models";

const order = ["Frontier closed", "Healthcare / biomedical", "Open-weight", "Clinical platform", "Infrastructure", "Research data resource"];

export function ModelDirectory() {
  return (
    <div className="grid gap-6">
      {order.map((category) => {
        const entries = modelDirectory.filter((m) => m.category === category);
        if (!entries.length) return null;
        return (
          <section key={category} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
            <h2 className="text-2xl font-bold text-ink">{category}</h2>
            <p className="mt-2 text-sm text-mutedink">Model candidates, platforms, or infrastructure. Inclusion is not an institutional approval.</p>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {entries.map((m) => (
                <article key={m.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-bold text-ink">{m.name}</h3>
                      <p className="text-sm font-semibold text-lsupurple">{m.organization}</p>
                    </div>
                    <span className="badge">{m.openStatus}</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-mutedink">{m.bestFor}</p>
                  <p className="mt-3 text-sm leading-6 text-mutedink"><strong className="text-ink">Governance:</strong> {m.governanceNote}</p>
                  <a href={m.url} target="_blank" rel="noreferrer" className="focus-ring mt-4 inline-flex items-center gap-2 rounded-full bg-lsupurple px-3 py-2 text-sm font-bold text-white hover:bg-purple-900">
                    Open official page <ExternalLink className="h-4 w-4" />
                  </a>
                </article>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
