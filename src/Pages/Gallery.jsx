import React from 'react';
import GalleryHero from '../Components/Gallery/GalleryHero';
import GalleryGrid from '../Components/Gallery/GalleryGrid';
import FeaturedEditorial from '../Components/Gallery/FeaturedEditorial';
import Newsletter from '../Components/Gallery/Newsletter';
import Footer from '../Components/Common/Footer';

const Gallery = () => {
  return (
    <main className="bg-[#0f110f]">
      <GalleryHero />
      <GalleryGrid />
      <FeaturedEditorial />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default Gallery;
