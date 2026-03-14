import React from 'react'
import HeritageHero from '../Components/Heritage/HeritageHero'
import LegacyStory from '../Components/Heritage/LegacyStory'
import Timeline from '../Components/Heritage/Timeline'
import ValuesGrid from '../Components/Heritage/ValuesGrid'
import HeritageCTA from '../Components/Heritage/HeritageCTA'
import Footer from '../Components/Common/Footer'

const Heritage = () => {
  return (
    <main className="bg-[#0a1310]">
      <HeritageHero />
      <LegacyStory />
      <Timeline />
      <ValuesGrid />
      <HeritageCTA />
      <Footer />
    </main>
  )
}

export default Heritage
