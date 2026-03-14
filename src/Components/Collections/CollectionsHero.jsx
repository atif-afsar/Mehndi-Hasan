import React from "react";

const CollectionsHero = () => {
  return (
    <section className="relative h-[80vh] w-full flex items-center justify-center text-white overflow-hidden bg-[#0A120F]">
      {/* Green fabric background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000')" }}
      />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>
      
      <div className="relative text-center z-10 px-6 max-w-4xl pt-20">
        <p className="text-[10px] tracking-[0.5em] text-[#c5a059] uppercase font-bold mb-6">
          The 2024 Archive
        </p>
        <h1 className="text-6xl md:text-8xl font-serif font-medium tracking-tight mb-6">
          Signature Collections
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-lg font-light leading-relaxed tracking-wide">
          A curated selection of the finest handcrafted garments, blending <br className="hidden md:block" /> 
          centuries-old artistry with modern silhouettes.
        </p>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-[#c5a059] to-transparent opacity-50"></div>
    </section>
  );
};

export default CollectionsHero;
