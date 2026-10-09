import { useEffect, useState } from 'react'
import { brand, navLinks } from '../data/content'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'bg-cream/95 shadow-md backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#top" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src="./favicon.svg" alt="" className="h-9 w-9" />
          <span className="font-display text-xl font-bold text-forest-700">{brand.name}</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-forest-900 transition hover:text-saffron-600">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-forest-700 px-5 py-2 text-sm font-semibold text-white transition hover:bg-forest-600"
          >
            Get a quote
          </a>
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-forest-700 lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-forest-100 bg-cream px-5 pb-5 lg:hidden" aria-label="Mobile">
          <ul className="flex flex-col">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-forest-100 py-3 font-medium text-forest-900"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-full bg-forest-700 py-3 text-center font-semibold text-white"
          >
            Get a quote
          </a>
        </nav>
      )}
    </header>
  )
}
