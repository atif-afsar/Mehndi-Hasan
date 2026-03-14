import React from 'react'
import Hero from '../Components/Home/Hero'
import FeaturedCollections from '../Components/Home/FeaturedCollections'
import Footer from '../Components/Common/Footer'
import Heritage from '../Components/Home/OurHeritage'
import BespokeExperience from '../Components/Home/BespokeExperience'
import HeritageCTA from '../Components/Home/Cta'

const Home = () => {
  return (
    <div className="bg-black">
      <Hero />
      <Heritage />
      <FeaturedCollections />
      <BespokeExperience />
      <HeritageCTA />
      <Footer />
    </div>
  )
}

export default Home
