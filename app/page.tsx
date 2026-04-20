import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ProblemSection from '@/components/ProblemSection'
import WhatWeDoSection from '@/components/WhatWeDoSection'
import ServicesSection from '@/components/ServicesSection'
import ComplementarySection from '@/components/ComplementarySection'
import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <WhatWeDoSection />
        <ServicesSection />
        <ComplementarySection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
