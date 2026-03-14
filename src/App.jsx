import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Heritage from './Pages/Heritage'
import Collections from './Pages/Collections'
import Bespoke from './Pages/Bespoke'
import Contact from './Pages/Contact'
import Navbar from './Components/Common/Navbar'

const App = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/heritage" element={<Heritage />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/bespoke" element={<Bespoke />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
