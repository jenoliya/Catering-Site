import { process } from '../data/content'
import { Reveal, SectionHeading } from './ui'

export function Process() {
  return (
    <section id="process" className="mx-auto max-w-6xl px-5 py-20">
      <Reveal>
        <SectionHeading eyebrow="How it works" title="From first call to first plate" />
      </Reveal>
      <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {process.map((p, i) => (
          <li key={p.step}>
            <Reveal delay={i * 120}>
              <div className="relative h-full rounded-2xl bg-white p-6 pt-10 shadow-sm ring-1 ring-forest-100">
                <span className="absolute -top-5 left-6 flex h-11 w-11 items-center justify-center rounded-full bg-saffron-500 font-display text-lg font-bold text-forest-900 shadow">
                  {p.step}
                </span>
                <h3 className="text-lg font-semibold text-forest-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/75">{p.text}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  )
}
