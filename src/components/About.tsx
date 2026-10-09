import { stats } from '../data/content'
import { CountUp, Reveal, SectionHeading } from './ui'

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20">
      <Reveal>
        <SectionHeading
          eyebrow="Who we are"
          title="Good food is how we say thank you"
          intro="We are a team of cooks, dietitians and supervisors who treat every tray like it is going to our own family. Quality, health and taste come first, and the numbers follow."
        />
      </Reveal>
      <div className="mt-14 grid grid-cols-2 gap-5 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 100}>
            <div className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-forest-100">
              <p className="font-display text-4xl font-bold text-forest-700">
                <CountUp target={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm font-medium uppercase tracking-wide text-ink/60">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
