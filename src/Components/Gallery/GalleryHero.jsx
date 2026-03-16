import React from 'react';

const GalleryHero = () => {
  return (
    <section className="bg-[#0f110f] w-full px-6 md:px-14 py-24 pb-12 ">
      <div className="max-w-7xl mx-auto relative h-[60vh] min-h-[500px] flex items-center border border-[#b8965a]/20">
        
        {/* Background Split */}
        <div className="absolute inset-0 grid grid-cols-2">
          <div className="bg-[#242922]"></div> {/* Darker muted green */}
          <div className="bg-[#1a1e19]"></div> {/* Even darker background */}
        </div>

        {/* Center Image Container */}
        <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-[85%] md:w-[70%] h-full relative">
                 <img 
                    src="https://images.unsplash.com/photo-1594938298596-eb5fd3f50cb2?q=80&w=2114&auto=format&fit=crop" 
                    alt="Fashion Editorial" 
                    className="w-full h-full object-cover opacity-80"
                />
                
                {/* Gradient Masks for blending into background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#242922] via-transparent to-[#1a1e19]"></div>
            </div>
        </div>

        {/* Text Content overlay */}
        <div className="relative z-10 p-10 md:p-16 w-full md:w-2/3 lg:w-1/2">
          <h4 className="font-['Raleway'] text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-[#b8965a] mb-4">
            VOLUME XIV — AUTUMN
          </h4>
          <h1 className="font-['Cormorant_Garamond'] italic font-medium text-[3.5rem] md:text-[5rem] lg:text-[6rem] text-white leading-[0.9] mb-6 drop-shadow-lg">
            The Emerald <br/> Gallery
          </h1>
          <p className="font-['Raleway'] font-light text-[12px] md:text-[14px] text-white/80 leading-[1.8] max-w-sm">
            A curated study of texture, silhouette, and the profound depth of forest hues in contemporary avant-garde fashion.
          </p>
        </div>

        {/* Top/Bottom Border Accents matching the gold lines */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#b8965a]/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#b8965a]/50 to-transparent"></div>
      </div>
    </section>
  );
};

export default GalleryHero;
