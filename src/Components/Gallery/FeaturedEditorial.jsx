import React from 'react';

const FeaturedEditorial = () => {
  return (
    <section className="bg-[#0f110f] w-full px-6 md:px-14 py-24 border-t border-white/5 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
            <span className="font-['Raleway'] text-[9px] tracking-[0.3em] uppercase text-[#b8965a] mb-4">
                MASTERPIECE COLLECTION
            </span>
            <h2 className="font-['Cormorant_Garamond'] text-[2.5rem] md:text-[3.5rem] text-white font-medium mb-4">
                Featured Editorial Series
            </h2>
            <div className="w-16 h-[1px] bg-[#b8965a]"></div>
        </div>

        {/* 3 Col Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            
            {/* Card 1 */}
            <div className="flex flex-col group">
                <div className="w-full aspect-[3/4] bg-[#1a251e] relative mb-6 overflow-hidden flex items-center justify-center">
                    {/* Abstract content for placeholder mimicking design */}
                    <div className="text-center text-white/40 font-['Raleway'] text-[8px] uppercase tracking-[0.3em]">
                        <p className="mb-2">OBSCURED X</p>
                        <p className="font-bold">VELVET UNDERWORLD</p>
                    </div>
                </div>
                <h3 className="font-['Cormorant_Garamond'] text-[1.2rem] text-[#b8965a] mb-3 uppercase tracking-wide">
                    VELVET UNDERWORLD
                </h3>
                <p className="font-['Raleway'] font-light text-[11px] text-white/70 leading-[1.6]">
                    Exploration of 19th-century silhouettes reimagined through modern ecological consciousness.
                </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col group">
                <div className="w-full aspect-[3/4] bg-[#5a7f80] relative mb-6 overflow-hidden flex items-center justify-center p-8">
                     <div className="text-center text-[#9db2b3] font-['Raleway'] uppercase font-light">
                        <p className="text-[6rem] leading-none mb-2">3</p>
                         <p className="text-[8px] tracking-[0.4em] mb-4">SERIES 2</p>
                         <p className="text-[1.5rem] tracking-[0.2em] opacity-50">NATURAL<br/>STATE</p>
                     </div>
                </div>
                <h3 className="font-['Cormorant_Garamond'] text-[1.2rem] text-[#b8965a] mb-3 uppercase tracking-wide">
                    EMERALD SYNTHESIS
                </h3>
                <p className="font-['Raleway'] font-light text-[11px] text-white/70 leading-[1.6]">
                    Where the organic world meets synthetic craftsmanship. A study in texture contrast.
                </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col group">
                <div className="w-full aspect-[3/4] bg-[#ebdccd] relative mb-6 overflow-hidden flex flex-col items-center justify-center gap-4 py-12 px-8">
                     {/* Mock UI rectangles */}
                     <div className="w-full h-24 bg-white shadow-xl rounded-sm flex flex-col">
                         <div className="h-6 bg-[#3b3a36] w-full text-[6px] text-white flex items-center px-4 font-['Raleway'] tracking-[0.2em]">SERIES 1</div>
                         <div className="flex-1 p-3">
                             <div className="h-1 bg-gray-200 w-3/4 mb-2"></div>
                             <div className="h-1 bg-gray-200 w-1/2 mb-2"></div>
                             <div className="h-1 bg-gray-200 w-5/6 mb-4"></div>
                         </div>
                     </div>
                     <div className="w-full h-24 bg-white shadow-xl rounded-sm flex flex-col translate-x-4">
                         <div className="h-6 bg-[#3b3a36] w-full text-[6px] text-white flex items-center px-4 font-['Raleway'] tracking-[0.2em]">SERIES 2</div>
                         <div className="flex-1 p-3">
                             <div className="h-1 bg-gray-200 w-full mb-2"></div>
                             <div className="h-1 bg-gray-200 w-2/3 mb-2"></div>
                             <div className="h-1 bg-gray-200 w-4/5 mb-4"></div>
                         </div>
                     </div>
                </div>
                <h3 className="font-['Cormorant_Garamond'] text-[1.2rem] text-[#b8965a] mb-3 uppercase tracking-wide">
                    GILDED ROOTS
                </h3>
                <p className="font-['Raleway'] font-light text-[11px] text-white/70 leading-[1.6]">
                    Highlighting the luxury of sustainable fabrics and the artisans behind the weave.
                </p>
            </div>

        </div>

      </div>
    </section>
  );
};

export default FeaturedEditorial;
