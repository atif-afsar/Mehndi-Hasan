import React, { lazy, Suspense } from 'react';
import GalleryHero from '../Components/Gallery/GalleryHero';
import Footer from '../Components/Common/Footer';
import SectionLoader from '../Components/Common/SectionLoader';
import SEO from '../Components/Common/SEO';

// Lazy load below-the-fold sections
const GalleryGrid = lazy(() => import('../Components/Gallery/GalleryGrid'));
const FeaturedEditorial = lazy(() => import('../Components/Gallery/FeaturedEditorial'));
const Newsletter = lazy(() => import('../Components/Gallery/Newsletter'));

const Gallery = () => {
  return (
    <main className="bg-[#0f110f]">
      <SEO 
        title="Gallery - Showcasing Our Finest Creations | Mehdi Hasan Tailor"
        description="Browse our gallery of exquisite sherwanis, kurtas, and bespoke attire. Witness the artistry and craftsmanship that defines Mehdi Hasan Tailor."
        keywords="sherwani gallery, wedding attire photos, bespoke tailoring showcase, luxury menswear gallery, designer kurta images"
        ogImage="/Sherwanis/image1.webp"
      />
      <GalleryHero />
      <Suspense fallback={<SectionLoader bgColor="bg-[#0f110f]" />}>
        <GalleryGrid />
      </Suspense>
      <Suspense fallback={<SectionLoader bgColor="bg-[#0f110f]" />}>
        <FeaturedEditorial />
      </Suspense>
      <Suspense fallback={<SectionLoader bgColor="bg-[#0f110f]" />}>
        <Newsletter />
      </Suspense>
      <Footer />
    </main>
  );
};

export default Gallery;
