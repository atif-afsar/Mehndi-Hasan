import React, { lazy, Suspense } from 'react'
import JournalsHero from '../Components/Journals/JournalsHero'
import Footer from '../Components/Common/Footer'
import SectionLoader from '../Components/Common/SectionLoader'
import SEO from '../Components/Common/SEO'

// Lazy load below-the-fold sections
const JournalGrid = lazy(() => import('../Components/Journals/JournalGrid'))

const Journals = () => {
  return (
    <main className="bg-[#0a1310] overflow-x-hidden">
      <SEO 
        title="Journals - Stories of Craftsmanship & Style | Mehdi Hasan Tailor"
        description="Explore our journal featuring style guides, craftsmanship insights, wedding fashion trends, and the art of bespoke tailoring."
        keywords="tailoring blog, wedding fashion guide, sherwani styling tips, bespoke fashion journal, menswear trends"
        ogImage="/Home/hero.webp"
      />
      <JournalsHero />
      <Suspense fallback={<SectionLoader bgColor="bg-[#0a1310]" />}>
        <JournalGrid />
      </Suspense>
      <Footer />
    </main>
  )
}

export default Journals
