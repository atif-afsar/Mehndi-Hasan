import React from "react";

const BespokeHero = () => {
  return (
    <section className="relative h-[80vh] md:h-screen w-full flex items-center justify-center text-white overflow-hidden bg-[#0A120F]">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40 grayscale transition-transform duration-[20s] scale-110 hover:scale-100"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&q=80&w=2000')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1310] via-transparent to-[#0a1310]"></div>
      
      <div className="relative text-center z-10 px-6 max-w-5xl pt-20">
        <div className="flex flex-col items-center mb-10">
          <p className="text-[10px] tracking-[0.8em] text-[#c5a059] uppercase font-bold mb-6">
            The Atelier
          </p>
          <div className="w-px h-12 bg-[#c5a059]/20"></div>
        </div>
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-medium tracking-tight mb-8 leading-[1.1]">
          The Art of <br />
          <span className="italic text-[#c5a059]">Craftsmanship</span>
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-lg font-light leading-relaxed tracking-widest mb-12 opacity-80">
          Experience a world where time slows down, and every millimeter matters. 
          Our bespoke process is a symphony of tradition, precision, and soul.
        </p>
        <div className="flex justify-center flex-wrap gap-8 opacity-40">
           <span className="text-[9px] tracking-[0.3em] uppercase font-bold text-gray-400 italic">Cutting</span>
           <span className="text-[9px] tracking-[0.3em] uppercase font-bold text-gray-400 italic">Embroidery</span>
           <span className="text-[9px] tracking-[0.3em] uppercase font-bold text-gray-400 italic">Finishing</span>
        </div>
      </div>
    </section>
  );
};

export default BespokeHero;
