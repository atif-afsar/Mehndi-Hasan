import React, { lazy, Suspense } from 'react'
import CollectionsHero from '../Components/Collections/CollectionsHero'
import Footer from '../Components/Common/Footer'
import SectionLoader from '../Components/Common/SectionLoader'
import SEO from '../Components/Common/SEO'

// Lazy load below-the-fold sections
const ProductGrid = lazy(() => import('../Components/Collections/ProductGrid'))
const MasterTailoring = lazy(() => import('../Components/Collections/MasterTailoring'))

const Collections = () => {
  return (
    <main className="bg-[#0a1310]">
      <SEO 
        title="Collections - Premium Sherwanis, Kurtas & Indo-Western | Mehdi Hasan"
        description="Explore our exquisite collection of handcrafted sherwanis, kurtas, and Indo-western attire. Each piece is a masterpiece of traditional craftsmanship and contemporary design."
        keywords="sherwani collection, designer kurta, Indo-western collection, wedding attire, groom sherwani, luxury menswear"
        ogImage="/Sherwanis/image1.webp"
      />
      <CollectionsHero />
      <Suspense fallback={<SectionLoader bgColor="bg-[#0a1310]" />}>
        <ProductGrid />
      </Suspense>
      <Suspense fallback={<SectionLoader bgColor="bg-[#0a1310]" />}>
        <MasterTailoring />
      </Suspense>
      <Footer />
    </main>
  )
}

export default Collections
