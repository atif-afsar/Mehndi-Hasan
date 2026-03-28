import React from "react";

const ContactHero = () => {
  return (
    <section className="relative h-[50vh] w-full flex items-center justify-center text-white overflow-hidden bg-[#0A120F]">
      <img
        src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80&w=2000"
        alt="Contact Background"
        width="2000"
        height="1333"
        className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale"
        loading="lazy"
      />
      
      <div className="relative text-center z-10 px-6 max-w-4xl pt-20">
        <p className="text-[10px] tracking-[0.8em] text-[#c5a059] uppercase font-bold mb-6">
          Connect
        </p>
        <h1 className="text-5xl md:text-7xl font-serif font-medium tracking-tight mb-4 leading-tight">
          Contact <span className="italic text-[#c5a059]">Us</span>
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto text-sm tracking-widest font-light leading-relaxed">
          Begin your journey towards sartorial excellence. 
          Our master tailors are at your service for consultations worldwide.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
