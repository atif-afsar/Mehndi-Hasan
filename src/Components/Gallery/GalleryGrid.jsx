import React, { useState } from 'react';
import LazyImage from '../Common/LazyImage';

const GalleryGrid = () => {
    const [activeFilter, setActiveFilter] = useState('ALL WORK');

    const filters = ['ALL WORK', 'AWARDS', 'CELEBS'];

    // Generate Awards images
    const awardsImages = Array.from({ length: 10 }, (_, i) => ({
        id: `awards-${i + 1}`,
        src: `/Awards/awards${i + 1}.webp`,
        style: "AWARDS",
        title: `Award ${i + 1}`
    }));

    // Generate Celebs images
    const celebsImages = Array.from({ length: 9 }, (_, i) => ({
        id: `celeb-${i + 1}`,
        src: `/Celebs/celeb${i + 1}.webp`,
        style: "CELEBS",
        title: `Celebrity ${i + 1}`
    }));

    const images = [...awardsImages, ...celebsImages];

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
            {images
                .filter(img => activeFilter === 'ALL WORK' || img.style === activeFilter)
                .map((img) => (
                <div key={img.id} className="relative group overflow-hidden bg-[#1a1d1a] border border-white/5 cursor-pointer rounded-sm">
                    <LazyImage 
                        src={img.src} 
                        alt={img.title} 
                        className="w-full h-full object-contain transition-all duration-500 group-hover:scale-105"
                        onError={(e) => { e.target.style.display = 'none'; }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
                        <p className="text-white text-sm font-light tracking-wider uppercase">{img.title}</p>
                        <p className="text-[#b8965a] text-xs tracking-widest uppercase mt-1">{img.style}</p>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default GalleryGrid;
