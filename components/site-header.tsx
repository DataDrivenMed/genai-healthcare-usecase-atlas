import Link from 'next/link';
import { BrainCircuit } from 'lucide-react';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between md:px-6">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <BrainCircuit className="h-5 w-5" aria-hidden="true" />
          </span>
          <span>
            <span className="block text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">University AI guide</span>
            <span className="block text-lg font-bold">Generative AI Healthcare Use-Case Atlas</span>
          </span>
        </Link>
        <nav aria-label="Primary navigation" className="flex flex-wrap gap-2 text-sm font-medium">
          <Link className="rounded-full px-3 py-2 hover:bg-secondary" href="/#use-cases">Use cases</Link>
          <Link className="rounded-full px-3 py-2 hover:bg-secondary" href="/how-to-use">How to use</Link>
          <Link className="rounded-full px-3 py-2 hover:bg-secondary" href="/governance">Governance</Link>
          <Link className="rounded-full px-3 py-2 hover:bg-secondary" href="/sources">Sources</Link>
        </nav>
      </div>
    </header>
  );
}
