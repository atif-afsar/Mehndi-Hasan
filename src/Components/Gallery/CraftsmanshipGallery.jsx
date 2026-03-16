import React from 'react';
import GalleryIntro from './GalleryIntro';
import FabricSelection from './FabricSelection';
import PrecisionCut from './PrecisionCut';
import HandStitching from './HandStitching';
import QualityInvestment from './QualityInvestment';

const CraftsmanshipGallery = () => {
  return (
    <div className="bg-[#0a1310] w-full flex flex-col gap-0 border-t border-[#b8965a]/10">
      <GalleryIntro />
      <FabricSelection />
      <PrecisionCut />
      <HandStitching />
      <QualityInvestment />
    </div>
  );
};

export default CraftsmanshipGallery;
