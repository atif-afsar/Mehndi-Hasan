import React, { useEffect } from 'react';
import MeasurementsHero from '../Components/Measurements/MeasurementsHero';
import MeasurementsForm from '../Components/Measurements/MeasurementsForm';
import Footer from '../Components/Common/Footer';
import MeasurementSection from '../Components/Measurements/MeasurementSection';

const Measurements = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-x-hidden selection:bg-[#b8965a] selection:text-black">
      {/* Page Content */}
      <main className="relative">
        <MeasurementsHero />
        <MeasurementSection />
        <MeasurementsForm />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Measurements;
