// All site copy lives here, so you can rebrand without touching components.
// Everything below is original placeholder content: replace with your own.

export const brand = {
  name: 'Hearth & Ladle',
  tagline: 'Catering that feeds a crowd like family',
  phone: '+91 90000 00000',
  phoneHref: 'tel:+919000000000',
  whatsapp: '919000000000',
  email: 'hello@example.com',
  address: ['12, Sample Street', 'Your City - 600 000', 'India'],
}

export type ServiceId = 'industrial' | 'institutional' | 'corporate' | 'healthcare' | 'events'

export interface Service {
  id: ServiceId
  title: string
  summary: string
  points: string[]
  accent: string
}

export const services: Service[] = [
  {
    id: 'industrial',
    title: 'Factory & Plant Canteens',
    summary:
      'Shift-friendly meals for large crews, cooked in bulk and served hot and on schedule, every single day.',
    points: ['Breakfast, lunch, dinner and tea breaks', 'Rotating weekly menus', 'Peak-hour serving lines', 'Dedicated on-site supervisor'],
    accent: '#f2a900',
  },
  {
    id: 'institutional',
    title: 'Schools & Colleges',
    summary:
      'Balanced menus for growing students, with hostel mess management, festival lunches and allergy-aware plates.',
    points: ['Hostel and day-scholar plans', 'Millet and low-GI options', 'Sports-diet add-ons', 'Festival special menus'],
    accent: '#2f7a57',
  },
  {
    id: 'corporate',
    title: 'Office & Corporate',
    summary:
      'From daily tiffin and pantry service to boardroom lunches and team celebrations that people actually talk about.',
    points: ['Daily lunch subscriptions', 'Live counters for events', 'Pantry and snack refills', 'Multi-cuisine buffets'],
    accent: '#d1573a',
  },
  {
    id: 'healthcare',
    title: 'Hospital Nutrition',
    summary:
      'Diet-plan driven meals for in-patients, attendants and staff, prepared with clinical guidance and strict hygiene.',
    points: ['Diabetic, renal and soft diets', 'Dietitian-reviewed menus', 'Tray-level labelling', 'Sealed, temperature-held delivery'],
    accent: '#3a7ca5',
  },
  {
    id: 'events',
    title: 'Weddings & Events',
    summary:
      'Banquets and festive feasts, planned from starters to dessert, with trained serving crews and tidy clean-up.',
    points: ['Traditional and modern menus', 'Banana-leaf and plated service', 'Live dosa and chaat stations', 'Tasting sessions before booking'],
    accent: '#8a4fa0',
  },
]

export const stats = [
  { label: 'Years cooking', value: 15, suffix: '+' },
  { label: 'Team members', value: 250, suffix: '+' },
  { label: 'Meals every day', value: 12000, suffix: '' },
  { label: 'Menus in rotation', value: 80, suffix: '+' },
]

export const safety = [
  { title: 'Personal hygiene', text: 'Uniforms, hair covers, gloves and daily health checks for every kitchen team member.' },
  { title: 'Clean and sanitised', text: 'Scheduled deep cleans, colour-coded tools and sanitised work surfaces between tasks.' },
  { title: 'Temperature control', text: 'Hot food held hot, cold food held cold, with logged probe checks at each stage.' },
  { title: 'Pest management', text: 'Sealed storage, routine inspections and licensed pest-control visits.' },
  { title: 'Safe storage', text: 'First-in, first-out stock rotation, dated labels and separate raw and cooked zones.' },
  { title: 'Allergen care', text: 'Clear ingredient tracking and separate prep for guests with declared allergies.' },
]

export const process = [
  { step: '01', title: 'Tell us about your people', text: 'Headcount, shifts, diets, budget and the kitchen space you have.' },
  { step: '02', title: 'Taste the menu', text: 'We cook a sample round so you can pick favourites before signing anything.' },
  { step: '03', title: 'Set up and train', text: 'Our team installs equipment, trains the crew and agrees service timings.' },
  { step: '04', title: 'Serve, listen, improve', text: 'Weekly feedback loops tune the menu and keep quality steady.' },
]

export const testimonials = [
  {
    quote:
      'Our hostel students and staff now look forward to mealtimes. The team handles special diets without any fuss.',
    name: 'A. Ramesh',
    role: 'Principal, sample school',
  },
  {
    quote:
      'Lunch arrives on time, hot, and the menu changes enough that nobody gets bored. Complaints have dropped a lot.',
    name: 'S. Meena',
    role: 'HR lead, sample manufacturing unit',
  },
  {
    quote:
      'Dietitian-reviewed trays and clear labels gave our nursing staff one less thing to worry about every shift.',
    name: 'Dr. K. Anand',
    role: 'Administrator, sample hospital',
  },
]

export const faqs = [
  {
    q: 'What is the minimum number of meals you cater for?',
    a: 'We handle anything from a 30-person office pantry to canteens serving thousands. Share your headcount and we will propose a fitting plan.',
  },
  {
    q: 'Can you work with a kitchen we already have?',
    a: 'Yes. We can run your existing kitchen, upgrade it with new equipment, or cook from our central kitchen and deliver.',
  },
  {
    q: 'How do you handle diabetic or allergy-specific meals?',
    a: 'Special diets are logged at onboarding, prepared separately and labelled at tray or plate level.',
  },
  {
    q: 'Do you offer trial runs?',
    a: 'We cook a tasting round for decision makers before any contract is signed.',
  },
]

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#safety', label: 'Food safety' },
  { href: '#process', label: 'How it works' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]
