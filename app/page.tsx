import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import HowItWorks from '@/components/HowItWorks'
import Features from '@/components/Features'
import Honesty from '@/components/Honesty'
import Integrations from '@/components/Integrations'
import Pricing from '@/components/Pricing'
import CtaBand from '@/components/CtaBand'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
      <Honesty />
      <Integrations />
      <Pricing />
      <CtaBand />
      <Footer />
    </main>
  )
}
