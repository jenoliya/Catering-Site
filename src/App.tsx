import { About } from './components/About'
import { Contact } from './components/Contact'
import { Faq } from './components/Faq'
import { FloatingActions, Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Process } from './components/Process'
import { Safety } from './components/Safety'
import { Services } from './components/Services'
import { Gallery, Testimonials } from './components/Testimonials'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Safety />
        <Process />
        <Gallery />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
