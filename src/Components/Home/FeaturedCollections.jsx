import React from "react";

const FeaturedCollections = () => {
  const collections = [
    { title: "The Royal Sherwani", desc: "Velvet & Silk masterpieces", image: "https://images.unsplash.com/photo-1594938384824-0227160503ba?auto=format&fit=crop&q=80&w=800" },
    { title: "Classic Kurta", desc: "Heritage weaving techniques", image: "https://images.unsplash.com/photo-1595180182604-e0b23021f10d?auto=format&fit=crop&q=80&w=800" },
    { title: "Bespoke Suiting", desc: "Precision in every stitch", image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <section className="bg-[#0a1310] py-24 md:py-40 px-6 md:px-12 text-white border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        
        <header className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl">
            <p className="text-[9px] md:text-[10px] tracking-[0.5em] text-[#c5a059] uppercase mb-4 font-bold">
              Signature Series
            </p>
            <h2 className="text-4xl md:text-7xl font-serif font-medium tracking-tight leading-tight">
              Curated <span className="italic text-[#c5a059]">Collections</span>
            </h2>
          </div>
          <p className="text-[#c5a059] text-[10px] tracking-[0.3em] uppercase cursor-pointer hover:text-white transition-all duration-300 border-b border-[#c5a059]/20 hover:border-white pb-1 font-bold">
            View All Series
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          {collections.map((item, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="overflow-hidden aspect-[3/4] mb-8 relative border border-white/5 bg-[#0d1815]">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1.5s] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <p className="text-[9px] tracking-[0.4em] text-[#c5a059] uppercase mb-3 font-bold opacity-60">
                Series 0{idx + 1}
              </p>
              <h3 className="text-xl md:text-2xl font-serif font-medium tracking-wide mb-3 text-white group-hover:text-[#c5a059] transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 font-light tracking-wide leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedCollections;
