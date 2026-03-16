import React from 'react';

const HandStitching = () => {
  return (
    <section className="bg-[#0a1310] py-24 px-6 md:px-14 border-t border-b border-[#b8965a]/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Content Area */}
        <div className="flex flex-col space-y-8 max-w-lg mx-auto lg:mx-0 order-2 lg:order-1">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="font-['Cormorant_Garamond'] text-[24px] italic text-[#b8965a]">03</span>
              <div className="h-[1px] w-12 bg-[#b8965a]"></div>
            </div>
            
            <h3 className="font-['Cormorant_Garamond'] text-[2.5rem] md:text-[3rem] text-white leading-tight font-light">
              The Soul of <span className="text-[#b8965a] font-medium">Hand-<br/>Stitching</span>
            </h3>
          </div>

          <p className="font-['Raleway'] text-[13px] text-white/60 leading-[1.8] font-light tracking-wide">
            No machine can replicate the soul of a hand-stitched seam. Our artisans spend hundreds of hours on a single piece, using a needle and thread to imbue strength and flexibility where it is needed most.
          </p>

          {/* List items */}
          <ul className="space-y-4 pt-4">
            {[
              "Reinforced lapels for perfect curvature",
              "Functional cuff buttonholes stitched by hand",
              "Internal padding for comfort and shape retention"
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="mt-[4px] min-w-[12px] w-[12px] h-[12px] rounded-full border border-[#b8965a] flex items-center justify-center">
                  <div className="w-[4px] h-[4px] bg-[#b8965a] rounded-full"></div>
                </div>
                <span className="font-['Raleway'] text-[12px] text-white/80 font-light tracking-wide">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Images Area */}
        <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end gap-4 h-[350px] sm:h-[450px]">
          {/* Back Image (Higher) */}
          <div className="w-[45%] h-[80%] absolute left-[5%] top-0 z-10 overflow-hidden rounded-sm border border-white/10 group shadow-2xl">
             <img 
               src="https://images.unsplash.com/photo-1598532213005-52b31278ffc9?q=80&w=1887&auto=format&fit=crop" 
               alt="Suit details"
               className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
             />
             {/* Subdued overlay to match design */ }
             <div className="absolute inset-0 bg-black/10"></div>
          </div>
          
          {/* Front Image (Lower, overlaps) */}
          <div className="w-[45%] h-[80%] absolute right-[5%] bottom-0 z-20 overflow-hidden rounded-sm border border-[#b8965a]/30 group shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8)]">
             <img 
               src="https://images.unsplash.com/photo-1584288019184-c89b254a61bd?q=80&w=1964&auto=format&fit=crop" 
               alt="Close up hand stitching detail"
               className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
             />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HandStitching;
