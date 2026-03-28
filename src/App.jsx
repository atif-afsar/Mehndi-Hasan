import React, { useState, useEffect, lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './Components/Common/Navbar'
import ScrollToTop from './Components/Common/ScrollToTop'
import Loader from './Components/Common/Loader'
import WhatsApp from './Components/Common/WhatsApp'

// Lazy load all pages
const Home = lazy(() => import('./Pages/Home'))
const Heritage = lazy(() => import('./Pages/Heritage'))
const Collections = lazy(() => import('./Pages/Collections'))
const Contact = lazy(() => import('./Pages/Contact'))
const Journals = lazy(() => import('./Pages/Journals'))
const JournalDetail = lazy(() => import('./Components/Journals/JournalDetail'))
const ProductDetail = lazy(() => import('./Components/Collections/ProductDetail'))
const Gallery = lazy(() => import('./Pages/Gallery'))
const Privacy = lazy(() => import('./Components/Common/Privacy'))
const Terms = lazy(() => import('./Components/Common/Terms'))
const Measurements = lazy(() => import('./Pages/Measurements'))
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
    <HelmetProvider>
      <div className="bg-black">
        {showLoader && <Loader onComplete={handleLoaderComplete} />}
        <ScrollToTop />
        <Navbar />
        <WhatsApp />
        <Suspense fallback={
          <div className="min-h-screen bg-black flex items-center justify-center">
            <div className="text-[#c5a059] text-sm tracking-widest animate-pulse">Loading...</div>
          </div>
        }>
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
        </Suspense>
      </div>
    </HelmetProvider>
  )
}

export default App
