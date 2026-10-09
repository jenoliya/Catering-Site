import { useState } from 'react'
import { services } from '../data/content'
import { ServiceIllustration } from './Illustrations'
import { Reveal, SectionHeading } from './ui'

export function Services() {
  const [active, setActive] = useState(0)
  const current = services[active]

  return (
    <section id="services" className="bg-forest-50 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeading
            eyebrow="What we serve"
            title="A kitchen for every kind of crowd"
            intro="Pick a segment to see how we run it."
          />
        </Reveal>

        <div role="tablist" aria-label="Services" className="mt-10 flex flex-wrap justify-center gap-2">
          {services.map((s, i) => (
            <button
              key={s.id}
              role="tab"
              type="button"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                i === active
                  ? 'bg-forest-700 text-white shadow'
                  : 'bg-white text-forest-700 ring-1 ring-forest-100 hover:bg-forest-100'
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>

        <div
          key={current.id}
          role="tabpanel"
          className="mt-8 grid overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-forest-100 md:grid-cols-2"
        >
          <div className="h-64 md:h-auto">
            <ServiceIllustration id={current.id} />
          </div>
          <div className="p-8 sm:p-10">
            <span className="inline-block h-1.5 w-12 rounded-full" style={{ background: current.accent }} />
            <h3 className="mt-4 font-display text-2xl font-bold text-forest-900">{current.title}</h3>
            <p className="mt-3 leading-relaxed text-ink/75">{current.summary}</p>
            <ul className="mt-6 space-y-2.5">
              {current.points.map((p) => (
                <li key={p} className="flex gap-3 text-ink/85">
                  <span
                    className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full text-xs font-bold text-white"
                    style={{ background: current.accent }}
                  >
                    ✓
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="mt-8 inline-block rounded-full bg-saffron-500 px-6 py-2.5 font-semibold text-forest-900 transition hover:bg-saffron-400"
            >
              Ask about this service
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
