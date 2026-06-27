import Link from "next/link";

const nav = [
  ["Use Cases", "/use-cases"],
  ["Models & Tools", "/models"],
  ["Partner Pilots", "/partner-pilots"],
  ["Governance", "/governance"],
  ["Prompts", "/prompts"],
  ["Sources", "/sources"],
  ["About", "/about"]
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/92 backdrop-blur">
      <a href="#main" className="focus-ring sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-md focus:bg-lsugold focus:px-3 focus:py-2 focus:text-ink">Skip to content</a>
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="focus-ring rounded-md">
          <div className="text-sm font-bold uppercase tracking-[.22em] text-lsupurple">LSUHSC AI Atlas</div>
          <div className="text-xs text-mutedink">Teaching, research, clinical partners, operations</div>
        </Link>
        <nav aria-label="Primary navigation" className="flex flex-wrap gap-2 text-sm font-semibold">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className="focus-ring rounded-full px-3 py-2 text-slate-700 hover:bg-slate-100 hover:text-lsupurple">
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
