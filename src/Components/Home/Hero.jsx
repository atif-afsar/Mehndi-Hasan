import React from "react";

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden bg-[#0a1310]">
      
      {/* Background with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] hover:scale-110 opacity-60"
        style={{ backgroundImage: "url('/hero.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1310]/80 via-transparent to-[#0a1310]/95"></div>

      {/* Decorative Border */}
      <div className="absolute inset-4 md:inset-10 border border-[#c5a059]/10 pointer-events-none z-20"></div>

      {/* Content */}
      <div className="relative text-center z-10 px-6 max-w-5xl pt-20">
        
        <div className="inline-block mb-6 md:mb-8 transform transition-all duration-1000">
          <p className="text-[9px] md:text-[10px] tracking-[0.6em] text-[#c5a059] uppercase font-bold">
            Established 1972
          </p>
          <div className="h-[1px] w-12 md:w-24 bg-[#c5a059] mx-auto mt-3 opacity-50"></div>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-serif font-medium leading-[1.1] tracking-tight mb-8 md:mb-12">
          Crafting <br />
          <span className="italic text-[#c5a059]">Royal</span> Sherwanis
        </h1>

        <p className="max-w-xl mx-auto text-xs md:text-base text-gray-400 font-light leading-relaxed tracking-widest mb-12 md:mb-20 opacity-80">
          Experience the pinnacle of sartorial excellence. Each garment is a masterpiece, 
          handcrafted for the modern gentleman who demands nothing less than perfection.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8">
          <button className="w-full sm:w-auto px-12 py-5 bg-[#c5a059] text-black text-[10px] tracking-[0.3em] font-bold uppercase transition-all duration-500 hover:bg-white hover:tracking-[0.4em]">
            Discover Collections
          </button>
          <button className="w-full sm:w-auto px-12 py-5 border border-white/20 text-white text-[10px] tracking-[0.3em] font-bold uppercase transition-all duration-500 hover:border-[#c5a059] hover:text-[#c5a059]">
            Our Heritage
          </button>
        </div>

      </div>

    
    </section>
  );
};

export default Hero;