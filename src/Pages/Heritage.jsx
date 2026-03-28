import React, { lazy, Suspense } from 'react'
import HeritageHero from '../Components/Heritage/HeritageHero'
import Footer from '../Components/Common/Footer'
import SectionLoader from '../Components/Common/SectionLoader'
import SEO from '../Components/Common/SEO'

// Lazy load below-the-fold sections
const LegacyStory = lazy(() => import('../Components/Heritage/LegacyStory'))
const Timeline = lazy(() => import('../Components/Heritage/Timeline'))
const ValuesGrid = lazy(() => import('../Components/Heritage/ValuesGrid'))
const HeritageCTA = lazy(() => import('../Components/Heritage/HeritageCTA'))

const Heritage = () => {
  return (
    <main className="bg-[#0a1310]">
      <SEO 
        title="Our Heritage - Mehdi Hasan Tailor | Generations of Tailoring Excellence"
        description="Discover the rich legacy of Mehdi Hasan Tailor. A heritage of craftsmanship passed down through generations, creating timeless garments with unmatched attention to detail."
        keywords="tailoring heritage, traditional craftsmanship, Aligarh tailoring history, bespoke legacy, artisan tailor"
        ogImage="/heritage.webp"
      />
      <HeritageHero />
      <Suspense fallback={<SectionLoader bgColor="bg-[#0a1310]" />}>
        <LegacyStory />
      </Suspense>
      <Suspense fallback={<SectionLoader bgColor="bg-[#0a1310]" />}>
        <Timeline />
      </Suspense>
      <Suspense fallback={<SectionLoader bgColor="bg-[#0a1310]" />}>
        <ValuesGrid />
      </Suspense>
      <Suspense fallback={<SectionLoader bgColor="bg-[#0a1310]" />}>
        <HeritageCTA />
      </Suspense>
      <Footer />
    </main>
  )
}

export default Heritage
