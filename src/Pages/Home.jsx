import React, { lazy, Suspense } from 'react'
import Hero from '../Components/Home/Hero'
import Footer from '../Components/Common/Footer'
import SectionLoader from '../Components/Common/SectionLoader'
import SEO from '../Components/Common/SEO'

// Lazy load below-the-fold sections
const Heritage = lazy(() => import('../Components/Home/OurHeritage'))
const Marquee = lazy(() => import('../Components/Home/Marquee'))
const FeaturedCollections = lazy(() => import('../Components/Home/FeaturedCollections'))
const BespokeExperience = lazy(() => import('../Components/Home/BespokeExperience'))
const HeritageInMotion = lazy(() => import('../Components/Home/HeritageInMotion'))
const TestimonialSection = lazy(() => import('../Components/Home/Testimonials'))
const HeritageCTA = lazy(() => import('../Components/Home/Cta'))

const Home = () => {
  return (
    <div className="bg-black">
      <SEO 
        title="Mehdi Hasan Tailor - Bespoke Tailoring Excellence Since Generations"
        description="Experience the finest bespoke tailoring in Aligarh. Specializing in premium sherwanis, kurtas, and Indo-western attire. Crafting sartorial excellence for weddings and special occasions."
        keywords="bespoke tailoring Aligarh, sherwani tailor, wedding sherwani, custom kurta, Indo-western attire, luxury tailoring, Mehdi Hasan tailor"
        ogImage="/Home/hero.webp"
      />
      <Hero />
      <Suspense fallback={<SectionLoader bgColor="bg-black" />}>
        <Heritage />
      </Suspense>
      <Suspense fallback={<SectionLoader bgColor="bg-black" />}>
        <Marquee />
      </Suspense>
      <Suspense fallback={<SectionLoader bgColor="bg-black" />}>
        <FeaturedCollections />
      </Suspense>
      <Suspense fallback={<SectionLoader bgColor="bg-black" />}>
        <BespokeExperience />
      </Suspense>
      <Suspense fallback={<SectionLoader bgColor="bg-black" />}>
        <HeritageInMotion />
      </Suspense>
      <Suspense fallback={<SectionLoader bgColor="bg-black" />}>
        <TestimonialSection />
      </Suspense>
      <Suspense fallback={<SectionLoader bgColor="bg-black" />}>
        <HeritageCTA />
      </Suspense>
      <Footer />
    </div>
  )
}

export default Home
