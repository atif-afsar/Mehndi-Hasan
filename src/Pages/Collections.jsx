import React from 'react'
import CollectionsHero from '../Components/Collections/CollectionsHero'
import ProductGrid from '../Components/Collections/ProductGrid'
import MasterTailoring from '../Components/Collections/MasterTailoring'
import Footer from '../Components/Common/Footer'

const Collections = () => {
  return (
    <main className="bg-[#0a1310]">
      <CollectionsHero />
      <ProductGrid />
      <MasterTailoring />
      <Footer />
    </main>
  )
}

export default Collections
