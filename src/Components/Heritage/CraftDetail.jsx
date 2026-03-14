import React from "react";

const CraftDetail = () => {
  return (
    <section className="bg-black py-40 px-10 overflow-hidden relative">
      {/* Background Large Text Overlay */}
      <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-serif italic opacity-[0.02] text-white whitespace-nowrap pointer-events-none">
        Craftsmanship
      </h2>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-32">
          
          <div className="flex-1 order-2 lg:order-1 relative group">
             <div className="aspect-video bg-gray-900 border border-white/10 overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1595180182604-e0b23021f10d?auto=format&fit=crop&q=80&w=1200" 
                  alt="Process" 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                />
             </div>
             <div className="absolute -inset-4 border border-[#e0b329]/10 -z-10 translate-x-4 translate-y-4"></div>
          </div>

          <div className="flex-1 order-1 lg:order-2 text-white">
            <header className="mb-12">
              <p className="text-[10px] tracking-[0.6em] text-[#e0b329] uppercase mb-4 font-semibold">
                Under The Needle
              </p>
              <h2 className="text-4xl md:text-6xl font-light mb-8 leading-tight">
                Meticulous <br /><span className="italic font-serif">Process</span>
              </h2>
            </header>
            
            <div className="space-y-8 text-gray-400 font-light text-base leading-relaxed">
              <p>
                A Mehdi Hasan sherwani is not just made; it is engineered. The process 
                begins with the selection of the finest natural fibers, followed by 
                weeks of hand-drawing motifs that are unique to each client.
              </p>
              <p>
                Our signature Zardozi work uses genuine metallic threads to create 
                depth and texture that machines simply cannot replicate. It is this 
                commitment to the slow, manual process that defines our heritage.
              </p>
              
              <button className="flex items-center gap-4 text-[#e0b329] text-[10px] tracking-[0.4em] uppercase font-bold mt-12 hover:gap-6 transition-all group">
                Explore the Atelier
                <span className="h-[1px] w-12 bg-[#e0b329] group-hover:w-20 transition-all"></span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CraftDetail;
