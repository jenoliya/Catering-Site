import { brand, navLinks } from '../data/content'

export function Footer() {
  return (
    <footer className="bg-forest-900 pb-8 pt-2 text-forest-100">
      <div className="mx-auto max-w-6xl border-t border-white/10 px-5 pt-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-display text-lg font-bold text-white">{brand.name}</p>
          <ul className="flex flex-wrap justify-center gap-5 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-white">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-6 text-center text-xs text-forest-100/70">
          © {new Date().getFullYear()} {brand.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export function FloatingActions() {
  return (
    <a
      href={`https://wa.me/${brand.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25a244] text-white shadow-lg transition hover:scale-110"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 12a8 8 0 0 1-11.9 7L3 21l2-5.2A8 8 0 1 1 21 12z" />
        <path d="M9 10h6M9 14h4" />
      </svg>
    </a>
  )
}
