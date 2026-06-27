import Link from "next/link";
import { ArrowRight, BookOpen, Microscope, Hospital, BriefcaseBusiness, ShieldCheck, Network } from "lucide-react";
import { useCases } from "@/data/useCases";

const domainCards = [
  { title: "Teaching & Education", href: "/use-cases?domain=Teaching", icon: BookOpen, text: "Synthetic cases, OSCEs, AI literacy, assessment, simulation, and faculty development." },
  { title: "Clinical Care", href: "/use-cases", icon: Hospital, text: "Partner-governed chart review, documentation, care gaps, tumor board, and trial matching." },
  { title: "Research & NCI Readiness", href: "/use-cases", icon: Microscope, text: "Cancer research programs, trials, shared resources, omics, imaging, grants, and catchment analytics." },
  { title: "Administration & Operations", href: "/use-cases", icon: BriefcaseBusiness, text: "Accreditation, GME, policy search, contracts, workforce, vendor review, and decision support." }
];

const counts = [
  ["Use cases", useCases.length],
  ["Teaching", useCases.filter((u) => u.domain === "Teaching & Education").length],
  ["Clinical", useCases.filter((u) => u.domain === "Clinical Care").length],
  ["Research", useCases.filter((u) => u.domain === "Research & NCI Readiness").length],
  ["Operations", useCases.filter((u) => u.domain === "Administration & Operations").length]
];

export default function HomePage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-lsupurple via-purple-900 to-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="max-w-4xl">
            <div className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-lsugold">Academic health sciences AI implementation guide</div>
            <h1 className="text-4xl font-black tracking-tight md:text-6xl">Generative AI Use-Case Atlas for LSUHSC Faculty and Staff</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-purple-50">A practical, partner-aware guide for teaching, clinical care, research, NCI readiness, administration, operations, models, prompts, and governance in an academic health sciences center.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/use-cases" className="focus-ring inline-flex items-center gap-2 rounded-full bg-lsugold px-5 py-3 font-bold text-ink hover:bg-yellow-300">Explore use cases <ArrowRight className="h-4 w-4" /></Link>
              <Link href="/governance" className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 font-bold text-white hover:bg-white/10">Start with governance</Link>
              <Link href="/models" className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 font-bold text-white hover:bg-white/10">View models</Link>
            </div>
          </div>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {counts.map(([label, count]) => <div key={label} className="rounded-2xl border border-white/15 bg-white/10 p-4"><div className="text-3xl font-black text-lsugold">{count}</div><div className="text-sm font-semibold text-purple-50">{label}</div></div>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {domainCards.map((card) => {
            const Icon = card.icon;
            return (
              <Link key={card.title} href={card.href} className="focus-ring rounded-3xl border border-slate-200 bg-white p-5 shadow-soft hover:-translate-y-1 hover:border-lsupurple hover:transition">
                <Icon className="h-8 w-8 text-lsupurple" />
                <h2 className="mt-4 text-xl font-bold text-ink">{card.title}</h2>
                <p className="mt-2 text-sm leading-6 text-mutedink">{card.text}</p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-12 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <div className="flex items-center gap-3"><ShieldCheck className="h-8 w-8 text-lsupurple" /><h2 className="text-2xl font-bold text-ink">The key governance distinction</h2></div>
          <p className="mt-4 leading-7 text-mutedink">LSUHSC can lead education, research development, faculty support, accreditation, and non-PHI workflows directly. Clinical, EHR-connected, patient-facing, documentation, revenue-cycle, outreach, and partner operational workflows require appropriate approval from the partner health system that owns the clinical workflow and data environment.</p>
          <Link href="/partner-pilots" className="focus-ring mt-5 inline-flex items-center gap-2 rounded-full bg-lsupurple px-4 py-2 text-sm font-bold text-white hover:bg-purple-900">See partner pilot model <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <div className="flex items-center gap-3"><Network className="h-8 w-8 text-lsupurple" /><h2 className="text-2xl font-bold text-ink">Cancer Center and Biomedical Research Accelerator</h2></div>
          <p className="mt-4 leading-7 text-mutedink">The research section is built around discovery science, clinical trials, population science, shared resources, community outreach, and translational research. It is designed to support NCI readiness conversations without claiming designation or approval.</p>
          <Link href="/use-cases" className="focus-ring mt-5 inline-flex items-center gap-2 rounded-full bg-lsupurple px-4 py-2 text-sm font-bold text-white hover:bg-purple-900">View research use cases <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-bold text-ink">Start here by role</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {[
              "Faculty: teaching cases, assessments, feedback, AI literacy",
              "Researchers: grants, literature, NCI readiness, datasets, omics",
              "Clinicians: partner-governed documentation and clinical support pilots",
              "Program directors: GME evidence, remediation, handoffs, site docs",
              "Administrators: policy search, decision memos, workforce, accreditation",
              "Compliance and IT: PHI decision tree, vendors, model risk, partner pilots"
            ].map((text) => <div key={text} className="rounded-2xl bg-slate-50 p-4 text-sm font-semibold leading-6 text-slate-700">{text}</div>)}
          </div>
        </div>
      </section>
    </div>
  );
}
