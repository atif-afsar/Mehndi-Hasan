import React from 'react'
import JournalsHero from '../Components/Journals/JournalsHero'
import JournalGrid from '../Components/Journals/JournalGrid'
import Footer from '../Components/Common/Footer'

const Journals = () => {
  return (
    <main className="bg-[#0a1310] overflow-x-hidden">
      <JournalsHero />
      <JournalGrid />
      <Footer />
    </main>
  )
}

export default Journals
