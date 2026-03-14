import React from "react";

const FabricLibrary = () => {
  return (
    <section className="bg-[#070d0b] py-40 px-6 border-y border-white/5 relative overflow-hidden">
      {/* Decorative texture background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none text-[30vw] font-serif italic text-white -rotate-12 select-none">
        Textiles
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <p className="text-[10px] tracking-[0.5em] text-[#c5a059] uppercase font-bold mb-4">The Selection</p>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">Curated Textile Library</h2>
          <div className="w-24 h-[1px] bg-[#c5a059] mx-auto opacity-30"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: "Super 150s Wool", origin: "Biella, Italy" },
            { name: "Raw Muga Silk", origin: "Assam, India" },
            { name: "Heritage Velvet", origin: "Lyon, France" },
            { name: "Pure Cashmere", origin: "Inner Mongolia" }
          ].map((item, i) => (
            <div key={i} className="group cursor-pointer">
               <div className="aspect-square bg-[#0d1815] border border-white/5 p-12 flex flex-col items-center justify-center text-center transition-all duration-500 hover:bg-[#c5a059]/5 hover:border-[#c5a059]/20">
                  <div className="w-12 h-12 border border-[#c5a059]/30 rounded-full mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-[#c5a059] text-sm">✦</span>
                  </div>
                  <h4 className="text-white text-lg font-medium mb-2">{item.name}</h4>
                  <p className="text-gray-600 text-[10px] tracking-widest uppercase">{item.origin}</p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FabricLibrary;
