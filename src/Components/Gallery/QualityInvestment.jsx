import React from 'react';
import { Link } from 'react-router-dom';

const QualityInvestment = () => {
  return (
    <section className="bg-[#0a1310] py-32 px-6 flex flex-col items-center justify-center text-center">
      
      {/* Decorative Core Element */}
      <div className="relative mb-16 w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
        {/* Background Split Colors */}
        <div className="absolute inset-0 grid grid-cols-2 shadow-2xl opacity-80">
          <div className="bg-[#606e57]"></div> {/* Muted green */}
          <div className="bg-[#b38e50]"></div> {/* Muted gold */}
        </div>
        
        {/* Center Circular Icon Area */}
        <div className="relative z-10 w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/70 backdrop-blur-md flex items-center justify-center shadow-lg">
          {/* Simple Leaf/Plant SVG representation */}
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2c3e2e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22v-7l-2-2"></path>
            <path d="M12 15l2-2"></path>
            <path d="M8 12c-1.5 0-3 1.5-3 3 0 1.5 1.5 3 3 3 1.5 0 3-1.5 3-3 0-1.5-1.5-3-3-3z"></path>
            <path d="M16 12c1.5 0 3 1.5 3 3 0 1.5-1.5 3-3 3-1.5 0-3-1.5-3-3 0-1.5 1.5-3 3-3z"></path>
            <path d="M12 4c-2 0-4 2-4 4 0 2 2 4 4 4 2 0 4-2 4-4 0-2-2-4-4-4z"></path>
          </svg>
        </div>
      </div>

      {/* Text Content */}
      <h3 className="font-['Cormorant_Garamond'] text-[2rem] md:text-[2.5rem] text-white leading-tight font-light mb-4 text-center max-w-xl">
        Quality is an <span className="text-[#b8965a] font-medium">Investment</span>
      </h3>
      
      <p className="font-['Cormorant_Garamond'] italic text-[1.1rem] md:text-[1.3rem] text-[#b8965a] mb-12 max-w-2xl px-4">
        "True luxury is not about being noticed; it's about being remembered."
      </p>

      {/* CTA Button */}
      <Link 
        to="/collections"
        className="relative overflow-hidden inline-flex items-center justify-center px-10 py-4 border border-[#b8965a]/40 group"
      >
        <div className="absolute inset-0 bg-[#b8965a] translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0"></div>
        <span className="relative z-10 font-['Raleway'] text-[10px] uppercase tracking-[0.25em] text-[#b8965a] group-hover:text-[#0a1310] transition-colors duration-500 delay-100">
          VIEW THE COLLECTION
        </span>
      </Link>

    </section>
  );
};

export default QualityInvestment;
