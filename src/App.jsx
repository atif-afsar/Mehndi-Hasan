import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Heritage from './Pages/Heritage'
import Collections from './Pages/Collections'
import Bespoke from './Pages/Bespoke'
import Contact from './Pages/Contact'
import Gallery from './Pages/Gallery'
import Navbar from './Components/Common/Navbar'
import ScrollToTop from './Components/Common/ScrollToTop'
import Loader from './Components/Common/Loader'

const App = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Loader will show on every page refresh/mount
    // It will auto-dismiss after its animation completes
  }, []);

  const handleLoaderComplete = () => {
    setShowLoader(false);
  };

  return (
    <div className="bg-black">
      {showLoader && <Loader onComplete={handleLoaderComplete} />}
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/heritage" element={<Heritage />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/bespoke" element={<Bespoke />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  )
}

export default App
