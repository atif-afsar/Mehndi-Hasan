import React, { useEffect, lazy, Suspense } from 'react';
import MeasurementsHero from '../Components/Measurements/MeasurementsHero';
import Footer from '../Components/Common/Footer';
import SectionLoader from '../Components/Common/SectionLoader';
import SEO from '../Components/Common/SEO';

// Lazy load below-the-fold sections
const MeasurementSection = lazy(() => import('../Components/Measurements/MeasurementSection'));
const MeasurementsForm = lazy(() => import('../Components/Measurements/MeasurementsForm'));

const Measurements = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-x-hidden selection:bg-[#b8965a] selection:text-black">
      <SEO 
        title="Measurements Guide - Perfect Fit Guaranteed | Mehdi Hasan Tailor"
        description="Learn how to take accurate measurements for your bespoke garment. Our comprehensive guide ensures a perfect fit for your sherwani, kurta, or suit."
        keywords="tailoring measurements, how to measure for sherwani, bespoke fitting guide, custom suit measurements, perfect fit tailoring"
        ogImage="/measurement.webp"
      />
      {/* Page Content */}
      <main className="relative">
        <MeasurementsHero />
        <Suspense fallback={<SectionLoader />}>
          <MeasurementSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <MeasurementsForm />
        </Suspense>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Measurements;
