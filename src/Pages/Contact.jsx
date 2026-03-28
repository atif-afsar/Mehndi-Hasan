import React, { lazy, Suspense } from 'react'
import ContactHero from '../Components/Contact/ContactHero'
import Footer from '../Components/Common/Footer'
import SectionLoader from '../Components/Common/SectionLoader'
import SEO from '../Components/Common/SEO'

// Lazy load below-the-fold sections
const ContactForm = lazy(() => import('../Components/Contact/ContactForm'))

const Contact = () => {
  return (
    <main className="bg-[#0a1310]">
      <SEO 
        title="Contact Us - Book Your Bespoke Consultation | Mehdi Hasan Tailor"
        description="Visit our flagship studio in Aligarh or book a consultation. Experience personalized service and expert craftsmanship for your special occasion attire."
        keywords="tailor consultation, bespoke appointment, Aligarh tailor contact, wedding attire consultation, custom tailoring service"
        ogImage="/Home/hero.webp"
      />
      <ContactHero />
      <Suspense fallback={<SectionLoader bgColor="bg-[#0a1310]" />}>
        <ContactForm />
      </Suspense>
      <Footer />
    </main>
  )
}

export default Contact
