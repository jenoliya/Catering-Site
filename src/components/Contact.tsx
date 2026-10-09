import { useState, type FormEvent } from 'react'
import { brand, services } from '../data/content'
import { Reveal, SectionHeading } from './ui'

interface FormState {
  name: string
  phone: string
  service: string
  guests: string
  message: string
}

const initial: FormState = { name: '', phone: '', service: services[0].title, guests: '', message: '' }

export function Contact() {
  const [form, setForm] = useState<FormState>(initial)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})

  const set = (k: keyof FormState) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value }))

  const buildText = () =>
    [
      `Hello ${brand.name}, I would like a quote.`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Service: ${form.service}`,
      form.guests && `Approx. meals per day: ${form.guests}`,
      form.message && `Notes: ${form.message}`,
    ]
      .filter(Boolean)
      .join('\n')

  const validate = () => {
    const e: typeof errors = {}
    if (form.name.trim().length < 2) e.name = 'Please enter your name.'
    if (!/^[+\d][\d\s-]{7,}$/.test(form.phone.trim())) e.phone = 'Enter a valid phone number.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  // No backend: the form hands the enquiry to WhatsApp or the visitor's mail app.
  const send = (via: 'whatsapp' | 'email') => (ev: FormEvent) => {
    ev.preventDefault()
    if (!validate()) return
    const text = buildText()
    if (via === 'whatsapp') {
      window.open(`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener')
    } else {
      window.location.href = `mailto:${brand.email}?subject=${encodeURIComponent('Catering enquiry')}&body=${encodeURIComponent(text)}`
    }
  }

  const field =
    'mt-1 w-full rounded-xl border border-forest-100 bg-white px-4 py-3 text-ink outline-none transition focus:border-forest-500 focus:ring-2 focus:ring-forest-500/30'

  return (
    <section id="contact" className="bg-forest-900 py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Reveal>
            <SectionHeading
              light
              center={false}
              eyebrow="Get in touch"
              title="Tell us what you need"
              intro="Share a few details and we will reply with a menu and a quote."
            />
            <dl className="mt-8 space-y-5 text-forest-100">
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-saffron-300">Call</dt>
                <dd><a className="hover:text-white" href={brand.phoneHref}>{brand.phone}</a></dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-saffron-300">Email</dt>
                <dd><a className="hover:text-white" href={`mailto:${brand.email}`}>{brand.email}</a></dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-saffron-300">Visit</dt>
                <dd>{brand.address.map((l) => <span key={l} className="block">{l}</span>)}</dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal className="lg:col-span-3">
          <form noValidate className="rounded-3xl bg-cream p-6 shadow-xl sm:p-8" onSubmit={send('whatsapp')}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-medium text-forest-900">
                Name
                <input className={field} value={form.name} onChange={set('name')} autoComplete="name" />
                {errors.name && <span className="text-xs text-red-600">{errors.name}</span>}
              </label>
              <label className="block text-sm font-medium text-forest-900">
                Phone
                <input className={field} value={form.phone} onChange={set('phone')} inputMode="tel" autoComplete="tel" />
                {errors.phone && <span className="text-xs text-red-600">{errors.phone}</span>}
              </label>
              <label className="block text-sm font-medium text-forest-900">
                Service
                <select className={field} value={form.service} onChange={set('service')}>
                  {services.map((s) => <option key={s.id}>{s.title}</option>)}
                </select>
              </label>
              <label className="block text-sm font-medium text-forest-900">
                Meals per day (approx.)
                <input className={field} value={form.guests} onChange={set('guests')} inputMode="numeric" />
              </label>
            </div>
            <label className="mt-4 block text-sm font-medium text-forest-900">
              Anything else?
              <textarea className={field} rows={4} value={form.message} onChange={set('message')} />
            </label>
            <div className="mt-6 flex flex-wrap gap-3">
              <button type="submit" className="rounded-full bg-forest-700 px-6 py-3 font-semibold text-white transition hover:bg-forest-600">
                Send on WhatsApp
              </button>
              <button
                type="button"
                onClick={send('email')}
                className="rounded-full border border-forest-700 px-6 py-3 font-semibold text-forest-700 transition hover:bg-forest-50"
              >
                Send by email
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
