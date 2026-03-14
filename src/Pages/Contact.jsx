import React from 'react'
import ContactHero from '../Components/Contact/ContactHero'
import ContactForm from '../Components/Contact/ContactForm'
import Footer from '../Components/Common/Footer'

const Contact = () => {
  return (
    <main className="bg-[#0a1310]">
      <ContactHero />
      <ContactForm />
      <Footer />
    </main>
  )
}

export default Contact
