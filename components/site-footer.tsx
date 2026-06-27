export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 py-8 text-sm text-mutedink md:grid-cols-3">
        <div>
          <div className="font-bold text-ink">LSUHSC Generative AI Use-Case Atlas</div>
          <p className="mt-2">For education, planning, research development, governance support, and partner-governed pilot design.</p>
        </div>
        <div>
          <div className="font-bold text-ink">Important boundary</div>
          <p className="mt-2">This guide does not authorize clinical AI deployment or use of protected health information in unapproved systems.</p>
        </div>
        <div>
          <div className="font-bold text-ink">Last reviewed</div>
          <p className="mt-2">June 2026. Model availability, vendor terms, and institutional policies should be rechecked before implementation.</p>
        </div>
      </div>
    </footer>
  );
}
