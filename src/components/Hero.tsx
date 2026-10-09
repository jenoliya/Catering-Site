import { brand } from '../data/content'
import { HeroIllustration } from './Illustrations'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-br from-forest-700 via-forest-700 to-forest-900 pt-28 text-white">
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-saffron-500/20 blur-3xl" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-20 lg:grid-cols-2 lg:pb-28">
        <div>
          <p className="inline-block rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-saffron-300">
            Fresh. Hygienic. On time.
          </p>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {brand.tagline}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-forest-100">
            Daily meals for factories, schools, offices and hospitals, plus festive feasts for the moments that matter.
            One kitchen team, one standard of care.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-full bg-saffron-500 px-7 py-3 font-semibold text-forest-900 transition hover:bg-saffron-400"
            >
              Request a tasting
            </a>
            <a
              href="#services"
              className="rounded-full border border-white/40 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Explore services
            </a>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-2 text-sm text-forest-100">
            <li>✓ Food-safety audited kitchens</li>
            <li>✓ Custom menus</li>
            <li>✓ Dietitian support</li>
          </ul>
        </div>
        <div className="mx-auto w-full max-w-md lg:max-w-none">
          <HeroIllustration />
        </div>
      </div>
      <svg viewBox="0 0 1440 80" className="block w-full" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 40c240 60 480 60 720 20s480-40 720 10v10H0z" fill="#fbf7ef" />
      </svg>
    </section>
  )
}
