import React from 'react'
import Hero from '../Components/Home/Hero'
import FeaturedCollections from '../Components/Home/FeaturedCollections'
import Craftsmanship from '../Components/Home/Craftsmanship'
import Footer from '../Components/Common/Footer'

const Home = () => {
  return (
    <div className="bg-black">
      <Hero />
      <FeaturedCollections />
      <Craftsmanship />
      <Footer />
    </div>
  )
}

export default Home
