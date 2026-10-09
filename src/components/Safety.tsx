import { safety } from '../data/content'
import { SafetyIcon } from './Illustrations'
import { Reveal, SectionHeading } from './ui'

export function Safety() {
  return (
    <section id="safety" className="bg-forest-700 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeading
            light
            eyebrow="Food safety"
            title="Safe kitchens, every shift"
            intro="Our kitchens follow hazard-analysis principles: we look for physical, chemical and biological risks before they reach a plate."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {safety.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 100}>
              <div className="h-full rounded-2xl bg-white/5 p-6 ring-1 ring-white/15 transition hover:bg-white/10">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-saffron-500 text-forest-900">
                  <SafetyIcon index={i} />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-forest-100">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
