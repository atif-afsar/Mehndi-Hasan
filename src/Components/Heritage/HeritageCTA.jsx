import React from "react";

const HeritageCTA = () => {
  return (
    <section className="bg-gradient-to-b from-[#0a1310] to-[#040807] py-40 px-10 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-medium mb-6 text-white leading-tight">
          Become Part of <br /> Our History
        </h2>
        <p className="text-gray-500 text-sm tracking-[0.2em] uppercase font-light mb-12">
          Experience the ultimate in bespoke tailoring. Book your consultation with our master tailors today.
        </p>
        
        <button className="px-12 py-5 bg-[#c5a059] text-black text-[11px] tracking-[0.3em] font-bold hover:bg-white transition-all duration-500 uppercase">
          Book a Consultation
        </button>
      </div>
    </section>
  );
};

export default HeritageCTA;
