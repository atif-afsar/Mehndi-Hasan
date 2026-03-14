import React from "react";

const Craftsmanship = () => {
  return (
    <section className="bg-[#0a1310] py-24 md:py-48 relative overflow-hidden">
      
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.01] -skew-x-12 translate-x-1/4 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-32">
          
          <div className="w-full lg:flex-1 order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4 md:gap-8 relative">
              <div className="aspect-[4/5] bg-gray-900 border border-white/5 overflow-hidden translate-y-8 md:translate-y-16 group">
                <img src="https://images.unsplash.com/photo-1598460350580-e41209325da2?auto=format&fit=crop&q=80&w=800" alt="Detail" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" />
              </div>
              <div className="aspect-[4/5] bg-gray-900 border border-white/5 overflow-hidden group">
                <img src="https://images.unsplash.com/photo-1593032465175-481ac7f40147?auto=format&fit=crop&q=80&w=800" alt="Craft" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" />
              </div>
              <div className="absolute -inset-4 md:-inset-6 border border-[#c5a059]/10 pointer-events-none translate-y-4 md:translate-y-8"></div>
            </div>
          </div>

          <div className="w-full lg:flex-1 order-1 lg:order-2 text-white">
            <p className="text-[9px] md:text-[10px] tracking-[0.6em] text-[#c5a059] uppercase mb-6 md:mb-10 font-bold">
              The Heritage
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif font-medium mb-10 md:mb-12 leading-tight tracking-tight">
              A Legacy in <br />
              <span className="italic text-[#c5a059]">Every Stitch</span>
            </h2>
            
            <div className="space-y-6 md:space-y-10 text-gray-400 font-light leading-relaxed tracking-widest text-sm md:text-base opacity-80">
              <p>
                For over five decades, Mehdi Hasan has been synonymous with the finest sherwanis in the region. 
                Our journey began with a simple vision: to preserve the royal heritage of bespoke tailoring while 
                infusing modern sophistication.
              </p>
              <p>
                Each creation is a labor of love, taking hundreds of man-hours to complete. Our master craftsmen 
                meticulously hand-embroider every pattern, ensuring that no two pieces are ever identical.
              </p>
            </div>

            <div className="mt-12 md:mt-20 pt-10 border-t border-white/5 flex flex-wrap items-center gap-10 md:gap-16">
              <div className="text-left">
                <p className="text-4xl md:text-5xl font-serif italic text-[#c5a059]">50+</p>
                <p className="text-[9px] tracking-[0.2em] uppercase mt-3 text-gray-600 font-bold">Years of Excellence</p>
              </div>
              <div className="text-left">
                <p className="text-4xl md:text-5xl font-serif italic text-[#c5a059]">10k+</p>
                <p className="text-[9px] tracking-[0.2em] uppercase mt-3 text-gray-600 font-bold">Bespoke Clients</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Craftsmanship;
