import { useEffect, useState } from 'react'
import { testimonials } from '../data/content'
import { GalleryTile } from './Illustrations'
import { Reveal, SectionHeading } from './ui'

export function Testimonials() {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const id = window.setInterval(() => setI((n) => (n + 1) % testimonials.length), 6000)
    return () => window.clearInterval(id)
  }, [paused])

  const t = testimonials[i]

  return (
    <section className="bg-saffron-300/30 py-20">
      <div className="mx-auto max-w-4xl px-5">
        <Reveal>
          <SectionHeading eyebrow="Kind words" title="What our clients say" />
        </Reveal>
        <figure
          className="mt-10 rounded-3xl bg-white p-8 text-center shadow-lg sm:p-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="text-saffron-500" aria-label="5 out of 5 stars">★★★★★</div>
          <blockquote key={i} className="mt-4 font-display text-xl leading-relaxed text-forest-900 sm:text-2xl">
            “{t.quote}”
          </blockquote>
          <figcaption className="mt-6">
            <p className="font-semibold text-forest-700">{t.name}</p>
            <p className="text-sm text-ink/60">{t.role}</p>
          </figcaption>
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, n) => (
              <button
                key={n}
                type="button"
                aria-label={`Show testimonial ${n + 1}`}
                onClick={() => setI(n)}
                className={`h-2.5 rounded-full transition-all ${n === i ? 'w-8 bg-forest-700' : 'w-2.5 bg-forest-100'}`}
              />
            ))}
          </div>
        </figure>
        <p className="mt-4 text-center text-xs text-ink/50">Sample testimonials: replace with your real client feedback.</p>
      </div>
    </section>
  )
}

export function Gallery() {
  const captions = ['Morning prep', 'Festive thali', 'Live counter', 'Tray line', 'Dessert table', 'Team huddle']
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <Reveal>
        <SectionHeading
          eyebrow="Gallery"
          title="Moments from our kitchens"
          intro="Placeholder tiles drawn in SVG: drop your own photos into src/assets and swap them in."
        />
      </Reveal>
      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
        {captions.map((c, n) => (
          <Reveal key={c} delay={(n % 3) * 90}>
            <figure className="group relative aspect-square overflow-hidden rounded-2xl">
              <div className="h-full w-full transition duration-500 group-hover:scale-110">
                <GalleryTile variant={n} />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-900/80 to-transparent p-4 text-sm font-semibold text-white">
                {c}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
