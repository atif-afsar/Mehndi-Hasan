import React, { useState } from 'react';

const GalleryGrid = () => {
    const [activeFilter, setActiveFilter] = useState('ALL WORK');

    const filters = ['ALL WORK', 'HIGH FASHION', 'AVANT-GARDE', 'MINIMALIST', 'VINTAGE'];

    const images = [
        { id: 1, src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop", style: "HIGH FASHION" },
        { id: 2, src: "https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&w=1974&auto=format&fit=crop", style: "MINIMALIST" },
        { id: 3, src: "https://images.unsplash.com/photo-1549439602-43ebca2327af?q=80&w=2070&auto=format&fit=crop", style: "AVANT-GARDE" },
        { id: 4, src: "https://images.unsplash.com/photo-1485230405346-71acb9518d9c?q=80&w=2097&auto=format&fit=crop", style: "VINTAGE" },
        { id: 5, src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop", style: "HIGH FASHION" },
        { id: 6, src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop", style: "MINIMALIST" },
    ];

  return (
    <section className="bg-[#0f110f] w-full px-6 md:px-14 py-12">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Filters & Sorting */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white/10 pb-6">
           
           {/* Filters */}
           <div className="flex flex-wrap gap-2 md:gap-4">
              {filters.map(filter => (
                  <button 
                    key={filter} 
                    onClick={() => setActiveFilter(filter)}
                    className={`font-['Raleway'] text-[9.5px] tracking-[0.2em] px-4 py-2 uppercase border transition-colors duration-300
                    ${activeFilter === filter 
                        ? 'text-[#0f110f] bg-[#b8965a] border-[#b8965a]' 
                        : 'text-[#b8965a] border-[#b8965a]/40 hover:border-[#b8965a] bg-transparent'
                    }`}
                  >
                      {filter} {filter !== 'ALL WORK' && '▾'}
                  </button>
              ))}
           </div>

           {/* Sorting Dropdown Mock */}
           <div className="flex items-center gap-4 text-[#b8965a]">
               <span className="font-['Raleway'] text-[9px] tracking-[0.2em] uppercase opacity-60">SORT BY</span>
               <button className="font-['Raleway'] text-[10px] tracking-[0.1em] uppercase font-semibold flex items-center gap-2">
                   LATEST <span className="text-[14px]">▾</span>
               </button>
           </div>
        </div>

        {/* 3 Col Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img) => (
                <div key={img.id} className="aspect-square relative group overflow-hidden bg-[#1a1d1a] border border-white/5">
                    <img 
                        src={img.src} 
                        alt="Editorial photography" 
                        className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                    />
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default GalleryGrid;
