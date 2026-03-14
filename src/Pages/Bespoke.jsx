import React from 'react'
import BespokeHero from '../Components/Bespoke/BespokeHero'
import BespokeProcess from '../Components/Bespoke/BespokeProcess'
import FabricLibrary from '../Components/Bespoke/FabricLibrary'
import MasterTailoring from '../Components/Collections/MasterTailoring'
import Footer from '../Components/Common/Footer'

const Bespoke = () => {
  return (
    <main className="bg-[#0a1310]">
      <BespokeHero />
      <BespokeProcess />
      <FabricLibrary />
      <MasterTailoring />
      <Footer />
    </main>
  )
}

export default Bespoke
