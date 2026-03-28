import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Heritage from './Pages/Heritage'
import Collections from './Pages/Collections'
import Contact from './Pages/Contact'
import Journals from './Pages/Journals'
import JournalDetail from './Components/Journals/JournalDetail'
import ProductDetail from './Components/Collections/ProductDetail'
import Gallery from './Pages/Gallery'
import Navbar from './Components/Common/Navbar'
import ScrollToTop from './Components/Common/ScrollToTop'
import Loader from './Components/Common/Loader'
import Privacy from './Components/Common/Privacy'
import Terms from './Components/Common/Terms'
import Measurements from './Pages/Measurements'
import WhatsApp from './Components/Common/WhatsApp'
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
      <WhatsApp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/heritage" element={<Heritage />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/collections/:id" element={<ProductDetail />} />
        <Route path="/journals" element={<Journals />} />
        <Route path="/journals/:id" element={<JournalDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/measurements" element={<Measurements />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </div>
  )
}

export default App
