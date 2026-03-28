import React from "react";

const HeritageHero = () => {
  return (
    <section className="relative h-[100vh] md:h-screen w-full flex items-center justify-center text-white overflow-hidden bg-[#0A120F]">
      {/* Background - Optimized for LCP */}
      <img
        src="/heritage.webp"
        alt="Heritage Background"
        width="1920"
        height="1080"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[20s] scale-110 hover:scale-100"
        fetchpriority="high"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1310]/80 via-black/50 to-[#0a1310]/90"></div>
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="relative text-center z-10 px-6 max-w-5xl pt-20">
        <div className="flex flex-col items-center mb-8">
            <p className="text-[10px] tracking-[0.8em] text-[#c5a059] uppercase font-bold mb-4">
              Our Legacy
            </p>
            <div className="w-px h-12 bg-[#c5a059]/30"></div>
        </div>
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-serif font-medium tracking-tight mb-8 leading-[1.1]">
          Heritage <span className="italic text-[#c5a059]">Since 1947</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-lg font-light leading-relaxed tracking-widest mb-12 opacity-80">
          A legacy of sartorial excellence passed through three generations of master tailors, 
          defining the wardrobe of discerning gentlemen for over seven decades.
        </p>
        <div className="flex justify-center gap-10">
            <span className="text-[9px] tracking-[0.4em] text-gray-500 uppercase font-bold">Aligarh</span>
            <span className="text-[9px] tracking-[0.4em] text-gray-500 uppercase font-bold">Delhi</span>
        </div>
      </div>
    </section>
  );
};

export default HeritageHero;
