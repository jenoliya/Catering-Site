import { useState } from 'react'
import { faqs } from '../data/content'
import { Reveal, SectionHeading } from './ui'

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-20">
      <Reveal>
        <SectionHeading eyebrow="FAQ" title="Questions we hear a lot" />
      </Reveal>
      <div className="mt-10 space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i
          return (
            <div key={f.q} className="overflow-hidden rounded-2xl bg-white ring-1 ring-forest-100">
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left font-semibold text-forest-900"
                >
                  {f.q}
                  <span className={`text-2xl text-saffron-600 transition-transform ${isOpen ? 'rotate-45' : ''}`}>+</span>
                </button>
              </h3>
              <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 leading-relaxed text-ink/75">{f.a}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
