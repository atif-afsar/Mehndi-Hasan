import React from 'react';

const GalleryIntro = () => {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-20">
      {/* Background Image Setup - assuming image will be provided or we use a placeholder styling matching the dark aesthetic for now */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=2080&auto=format&fit=crop')`, // Placeholder resembling a tailor/craftsman
        }}
      >
        <div className="absolute inset-0 bg-[#0a1310]/80"></div>
        {/* Gradient overlay to blend into the next dark section */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a1310] to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        <span className="font-['Raleway'] font-light text-[10px] tracking-[0.3em] uppercase text-[#b8965a] mb-6">
          The Art of the Handmade
        </span>
        
        <h2 className="font-['Cormorant_Garamond'] text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1] text-white font-light tracking-wide mb-8">
          A Journey Through <br/>
          <span className="font-medium italic">Excellence</span>
        </h2>
        
        <p className="font-['Raleway'] font-light text-white/70 text-[13px] tracking-wide leading-relaxed max-w-xl">
          Discover the meticulous process behind every stitch, where centuries-old traditions meet modern precision to create timeless masterpieces.
        </p>
      </div>
    </section>
  );
};

export default GalleryIntro;
