"use client";

import { useMemo, useState } from "react";
import { Search, ShieldCheck, ExternalLink, SlidersHorizontal, Users, Building2 } from "lucide-react";
import { useCases, type UseCase } from "@/data/useCases";
import { modelDirectory } from "@/data/models";
import { sources } from "@/data/sources";

const domains = ["All", "Teaching & Education", "Clinical Care", "Research & NCI Readiness", "Administration & Operations"];
const priorities = ["All", "Start Now", "Pilot Next", "Future / Advanced"];
const sensitivities = ["All", "No PHI", "De-identified Data", "Limited Dataset", "PHI / Clinical Data", "Operational Confidential"];
const authorities = ["All", "LSUHSC-led", "Partner-governed", "Joint LSUHSC + Partner Pilot", "IRB / Research-governed"];
const partners = ["All", "None Required", "Optional", "Required"];
const nciTags = ["All", "Cancer Research Program", "Clinical Trials", "Shared Resources", "Community Outreach", "Training & Education", "Population Science", "Translational Research", "Not Cancer-specific"];

function SelectFilter({ label, value, onChange, options }: { label: string; value: string; onChange: (value: string) => void; options: string[] }) {
  return (
    <label className="block text-sm font-semibold text-ink">
      <span>{label}</span>
      <select value={value} onChange={(e) => onChange(e.target.value)} className="focus-ring mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm">
        {options.map((option) => <option key={option}>{option}</option>)}
      </select>
    </label>
  );
}

function ModelLinks({ ids }: { ids: string[] }) {
  const entries = ids.map((id) => modelDirectory.find((m) => m.id === id)).filter(Boolean) as typeof modelDirectory;
  return (
    <div className="flex flex-wrap gap-2">
      {entries.map((m) => (
        <a key={m.id} href={m.url} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-lsupurple hover:border-lsupurple">
          {m.name}<ExternalLink className="h-3 w-3" />
        </a>
      ))}
    </div>
  );
}

function UseCaseCard({ item }: { item: UseCase }) {
  const sourceEntries = item.sourceIds.map((id) => sources.find((s) => s.id === id)).filter(Boolean) as typeof sources;
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[.18em] text-lsupurple">{item.domain}</p>
          <h3 className="text-xl font-bold leading-tight text-ink">{item.title}</h3>
        </div>
        <span className={item.dataSensitivity.includes("PHI") ? "badge badge-red" : item.dataSensitivity.includes("No") ? "badge badge-green" : "badge"}>{item.dataSensitivity}</span>
      </div>
      <p className="mt-3 text-sm leading-6 text-mutedink">{item.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="badge badge-gold">{item.priority}</span>
        <span className="badge">{item.authority}</span>
        <span className={item.partnerInvolvement === "Required" ? "badge badge-red" : "badge"}>Partner: {item.partnerInvolvement}</span>
        <span className="badge">Effort: {item.effort}</span>
      </div>
      <div className="mt-4 rounded-2xl bg-slate-50 p-4">
        <div className="mb-2 flex items-center gap-2 text-sm font-bold text-ink"><Users className="h-4 w-4" /> Best for</div>
        <p className="text-sm text-mutedink">{item.bestFor}</p>
      </div>
      <div className="mt-4">
        <div className="mb-2 text-sm font-bold text-ink">Models and platforms to evaluate</div>
        <ModelLinks ids={item.modelIds} />
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <section>
          <div className="mb-2 text-sm font-bold text-ink">How to use</div>
          <ol className="list-decimal space-y-1 pl-5 text-sm leading-6 text-mutedink">
            {item.howToUse.map((step) => <li key={step}>{step}</li>)}
          </ol>
        </section>
        <section>
          <div className="mb-2 flex items-center gap-2 text-sm font-bold text-ink"><ShieldCheck className="h-4 w-4" /> Governance note</div>
          <p className="text-sm leading-6 text-mutedink">{item.governanceNote}</p>
        </section>
      </div>
      <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4">
        <div className="mb-2 text-sm font-bold text-ink">Sample prompt</div>
        <p className="text-sm leading-6 text-mutedink">{item.samplePrompt}</p>
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <section>
          <div className="mb-2 text-sm font-bold text-ink">Metrics</div>
          <div className="flex flex-wrap gap-2">{item.metrics.map((m) => <span key={m} className="badge">{m}</span>)}</div>
        </section>
        <section>
          <div className="mb-2 text-sm font-bold text-ink">NCI relevance</div>
          <div className="flex flex-wrap gap-2">{item.nciRelevance.map((m) => <span key={m} className="badge badge-gold">{m}</span>)}</div>
        </section>
      </div>
      {sourceEntries.length > 0 && (
        <div className="mt-4 border-t border-slate-100 pt-4">
          <div className="mb-2 text-sm font-bold text-ink">Selected sources</div>
          <div className="flex flex-wrap gap-2">
            {sourceEntries.map((s) => (
              <a key={s.id} href={s.url} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-200">
                {s.organization}<ExternalLink className="h-3 w-3" />
              </a>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}

export function UseCaseExplorer() {
  const [query, setQuery] = useState("");
  const [domain, setDomain] = useState("All");
  const [priority, setPriority] = useState("All");
  const [sensitivity, setSensitivity] = useState("All");
  const [authority, setAuthority] = useState("All");
  const [partner, setPartner] = useState("All");
  const [nci, setNci] = useState("All");

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return useCases.filter((item) => {
      const text = [item.title, item.summary, item.bestFor, item.domain, item.authority, item.dataSensitivity, item.samplePrompt, ...item.roles, ...item.nciRelevance].join(" ").toLowerCase();
      return (!q || text.includes(q)) &&
        (domain === "All" || item.domain === domain) &&
        (priority === "All" || item.priority === priority) &&
        (sensitivity === "All" || item.dataSensitivity === sensitivity) &&
        (authority === "All" || item.authority === authority) &&
        (partner === "All" || item.partnerInvolvement === partner) &&
        (nci === "All" || item.nciRelevance.includes(nci as never));
    });
  }, [query, domain, priority, sensitivity, authority, partner, nci]);

  return (
    <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
      <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-5 shadow-soft lg:sticky lg:top-28">
        <div className="mb-4 flex items-center gap-2 text-lg font-bold text-ink"><SlidersHorizontal className="h-5 w-5 text-lsupurple" /> Find the right use case</div>
        <label className="block text-sm font-semibold text-ink">
          <span>Search</span>
          <div className="mt-1 flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm">
            <Search className="h-4 w-4 text-slate-400" />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="trial, OSCE, PHI, NCI..." className="w-full border-0 bg-transparent text-sm outline-none" />
          </div>
        </label>
        <div className="mt-4 grid gap-4">
          <SelectFilter label="Domain" value={domain} onChange={setDomain} options={domains} />
          <SelectFilter label="Priority" value={priority} onChange={setPriority} options={priorities} />
          <SelectFilter label="Data sensitivity" value={sensitivity} onChange={setSensitivity} options={sensitivities} />
          <SelectFilter label="Implementation authority" value={authority} onChange={setAuthority} options={authorities} />
          <SelectFilter label="Partner involvement" value={partner} onChange={setPartner} options={partners} />
          <SelectFilter label="NCI relevance" value={nci} onChange={setNci} options={nciTags} />
        </div>
      </aside>
      <section>
        <div className="mb-4 flex flex-col gap-3 rounded-3xl border border-slate-200 bg-white p-5 shadow-soft md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-2xl font-bold text-ink">{filtered.length} use cases</div>
            <p className="text-sm text-mutedink">Browse by domain, role, risk, partner approval, and NCI relevance.</p>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700"><Building2 className="h-4 w-4" /> LSUHSC + partner-aware</div>
        </div>
        <div className="grid gap-5">
          {filtered.map((item) => <UseCaseCard key={item.id} item={item} />)}
        </div>
      </section>
    </div>
  );
}
