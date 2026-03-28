import React from 'react';
import LazyImage from '../Common/LazyImage';

const FabricSelection = () => {
  return (
    <section className="bg-[#0a1310] py-24 px-6 md:px-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Image Area */}
        <div className="relative group">
          <div className="rounded-sm overflow-hidden aspect-[4/5] max-w-[400px] mx-auto w-full border border-white/5">
            <LazyImage 
              src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1972&auto=format&fit=crop" 
              alt="Folded luxury fabrics"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Right Content Area */}
        <div className="flex flex-col space-y-8 max-w-lg mx-auto lg:mx-0">
          
          {/* Section Number & Title */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="font-['Cormorant_Garamond'] text-[24px] italic text-[#b8965a]">01</span>
              <div className="h-[1px] w-12 bg-[#b8965a]"></div>
            </div>
            
            <h3 className="font-['Cormorant_Garamond'] text-[2.5rem] md:text-[3rem] text-white leading-tight font-light transition-all duration-700">
              The <span className="text-[#b8965a] font-medium">Fabric</span> Selection
            </h3>
          </div>

          <p className="font-['Raleway'] text-[13px] text-white/60 leading-[1.8] font-light tracking-wide">
            Every creation begins at the source. We curate only the finest raw materials—from Mongolian cashmere to Italian merino wool—selected for their unique character, drape, and longevity.
          </p>

          {/* Specs Grid */}
          <div className="grid grid-cols-2 gap-6 pt-6 mt-4 border-t border-[#b8965a]/20">
            <div className="border-l border-[#b8965a]/40 pl-4 py-1">
              <span className="block font-['Raleway'] text-[9px] uppercase tracking-[0.2em] text-[#b8965a] mb-2">
                Purity
              </span>
              <span className="block font-['Raleway'] text-[11px] text-white/80 font-light tracking-wide">
                100% natural fibers,<br/>sourced ethically.
              </span>
            </div>
            <div className="border-l border-[#b8965a]/40 pl-4 py-1">
              <span className="block font-['Raleway'] text-[9px] uppercase tracking-[0.2em] text-[#b8965a] mb-2">
                Weight
              </span>
              <span className="block font-['Raleway'] text-[11px] text-white/80 font-light tracking-wide">
                Balanced for seasonal<br/>versatility.
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FabricSelection;
