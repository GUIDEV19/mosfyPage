import Hero from "@/components/hero"
import Clients from "@/components/clients"
import Services from "@/components/services"
import Portfolio from "@/components/portfolio"
import Process from "@/components/process"
import Testimonials from "@/components/testimonials"
import Pricing from "@/components/pricing"
import Faq from "@/components/faq"
import Cta from "@/components/cta"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#111827]">
      <Hero />
      <Clients />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <Pricing />
      <Faq />
      <Cta />
      <ContactForm />
      <Footer />
    </main>
  )
}
