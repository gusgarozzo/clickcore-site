import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import BrandsSection from '@/components/BrandsSection'
import ProblemSection from '@/components/ProblemSection'
import WhatWeDoSection from '@/components/WhatWeDoSection'
import PaidMediaSection from '@/components/PaidMediaSection'
import ResultsSection from '@/components/ResultsSection'
import HowWeWorkSection from '@/components/HowWeWorkSection'
import ContentSection from '@/components/ContentSection'
import ComplementarySection from '@/components/ComplementarySection'
import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <BrandsSection />
        <ProblemSection />
        <WhatWeDoSection />
        <PaidMediaSection />
        <ResultsSection />
        <HowWeWorkSection />
        <ContentSection />
        <ComplementarySection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
